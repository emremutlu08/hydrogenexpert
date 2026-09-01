export {};

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import {
  AGENCY_CANNIBALIZATION_GATE_DATE,
  evaluateAgencyCannibalizationGate,
} from "../features/search-intent/cannibalization-gate";

/**
 * Counts how many distinct URLs compete for each tracked query in Search
 * Console, and diffs that against a saved baseline.
 *
 * Clicks cannot answer whether a cannibalization fix worked. At an average
 * position near 19 the second-page CTR is zero, so clicks lag position by
 * weeks. The number of URLs Google rotates through for one query moves first,
 * which is why that is what this measures.
 *
 *   npm run seo:cannibalization                 compare against the baseline
 *   npm run seo:cannibalization -- --save       write the current run as the baseline
 *
 * Requires the webmasters.readonly OAuth scope in the local Google token.
 */

const GOOGLE_TOKEN_PATH =
  process.env.GOOGLE_TOKEN_PATH ?? join(process.env.HOME ?? "", ".hermes/google_token.json");
const SITE_URL = process.env.GSC_SITE_URL ?? "https://hydrogenexpert.co/";
const BASELINE_PATH = join(process.cwd(), "content/internal/cannibalization-baseline.json");
const WINDOW_DAYS = 90;

interface TrackedQuery {
  query: string;
  cluster: string;
  /** The page that should own this query. Absent means no single owner yet. */
  owner?: string;
}

const TRACKED_QUERIES: readonly TrackedQuery[] = [
  { query: "shopify hydrogen experts", cluster: "hiring", owner: "/shopify-hydrogen-experts" },
  { query: "hire shopify hydrogen developers", cluster: "hiring", owner: "/shopify-hydrogen-developer" },
  { query: "shopify hydrogen development experts", cluster: "hiring", owner: "/shopify-hydrogen-expert" },
  { query: "shopify hydrogen developers", cluster: "hiring", owner: "/shopify-hydrogen-developer" },
  { query: "shopify hydrogen agency", cluster: "agency", owner: "/shopify-hydrogen-agency" },
  { query: "hydrogen shopify agency", cluster: "agency", owner: "/shopify-hydrogen-agency" },
  { query: "shopify hydrogen agentur", cluster: "agency", owner: "/shopify-hydrogen-agency" },
  { query: "shopify hydrogen services company", cluster: "agency", owner: "/shopify-hydrogen-agency" },
  // The control. One URL, one intent, and the best commercial position on the
  // site. If this ever grows past one URL, something regressed.
  { query: "headless shopify agency", cluster: "control", owner: "/headless-shopify-agency" },
  { query: "hydrogen shopify", cluster: "definitional", owner: "/what-is-hydrogen" },
  { query: "what is shopify hydrogen", cluster: "definitional", owner: "/what-is-hydrogen" },
  { query: "shopify hydrogen vs liquid", cluster: "definitional", owner: "/shopify-hydrogen-vs-liquid" },
  // Healthy reference: position 5.9, one page owns it.
  { query: "shopify hydrogen pricing", cluster: "healthy", owner: "/shopify-hydrogen-cost" },
];

interface QueryResult {
  query: string;
  cluster: string;
  owner?: string;
  urlCount: number;
  impressions: number;
  clicks: number;
  position: number | null;
  leadingUrl: string | null;
  leadingPosition: number | null;
  ownerPresent: boolean;
  ownerPosition: number | null;
}

interface Snapshot {
  capturedAt: string;
  windowDays: number;
  siteUrl: string;
  results: QueryResult[];
}

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

async function googleAccessToken() {
  if (!existsSync(GOOGLE_TOKEN_PATH)) {
    throw new Error(
      `google_token.json not found at ${GOOGLE_TOKEN_PATH}. This script needs the local token; it cannot run in CI or a cloud session.`,
    );
  }

  const data = JSON.parse(readFileSync(GOOGLE_TOKEN_PATH, "utf8"));
  const rawScopes = data.scopes ?? data.scope ?? [];
  const scopes = typeof rawScopes === "string" ? rawScopes.split(/\s+/) : rawScopes;

  if (!scopes.includes("https://www.googleapis.com/auth/webmasters.readonly")) {
    throw new Error("token is missing the webmasters.readonly OAuth scope");
  }

  const response = await fetch(data.token_uri, {
    method: "POST",
    body: new URLSearchParams({
      client_id: data.client_id,
      client_secret: data.client_secret,
      refresh_token: data.refresh_token,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) throw new Error(`token refresh failed: HTTP ${response.status}`);

  const body = (await response.json()) as { access_token?: string };
  if (!body.access_token) throw new Error("token refresh returned no access_token");

  return body.access_token;
}

interface GscRow {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  position?: number;
}

async function searchAnalytics(token: string, body: Record<string, unknown>) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GSC Search Analytics HTTP ${response.status}: ${(await response.text()).slice(0, 200)}`);
  }

  return ((await response.json()) as { rows?: GscRow[] }).rows ?? [];
}

function toPath(url: string) {
  return url.replace(/^https?:\/\/[^/]+/, "") || "/";
}

async function measureQuery(token: string, tracked: TrackedQuery, window: { startDate: string; endDate: string }) {
  const filter = {
    dimensionFilterGroups: [
      { filters: [{ dimension: "query", operator: "equals", expression: tracked.query }] },
    ],
  };

  const [pages, totals] = await Promise.all([
    searchAnalytics(token, { ...window, ...filter, dimensions: ["page"], rowLimit: 100 }),
    searchAnalytics(token, { ...window, ...filter, dimensions: [] }),
  ]);

  const sorted = [...pages].sort((a, b) => (b.impressions ?? 0) - (a.impressions ?? 0));
  const best = [...pages].sort((a, b) => (a.position ?? 999) - (b.position ?? 999))[0];
  const ownerRow = tracked.owner
    ? pages.find((row) => toPath(row.keys?.[0] ?? "") === tracked.owner)
    : undefined;
  const total = totals[0] ?? {};

  return {
    query: tracked.query,
    cluster: tracked.cluster,
    owner: tracked.owner,
    urlCount: pages.length,
    impressions: total.impressions ?? 0,
    clicks: total.clicks ?? 0,
    position: total.position ?? null,
    leadingUrl: sorted[0]?.keys?.[0] ? toPath(sorted[0].keys[0]) : null,
    leadingPosition: best?.position ?? null,
    ownerPresent: Boolean(ownerRow),
    ownerPosition: ownerRow?.position ?? null,
  } satisfies QueryResult;
}

function readBaseline(): Snapshot | null {
  if (!existsSync(BASELINE_PATH)) return null;
  return JSON.parse(readFileSync(BASELINE_PATH, "utf8")) as Snapshot;
}

function formatDelta(current: number, previous: number | undefined) {
  if (previous === undefined) return `${current} (new)`;
  const delta = current - previous;
  if (delta === 0) return `${current} (=)`;
  return `${current} (${delta > 0 ? "+" : ""}${delta})`;
}

function render(snapshot: Snapshot, baseline: Snapshot | null, asOfDate: string) {
  const lines: string[] = [];
  lines.push(`Cannibalization, ${snapshot.windowDays}-day window ending ${snapshot.capturedAt}`);
  lines.push(`Property ${snapshot.siteUrl}`);

  if (baseline) {
    lines.push(`Baseline captured ${baseline.capturedAt}. Lower URL counts are the improvement.`);
  } else {
    lines.push(`No baseline saved yet. Re-run with --save to record this as the reference.`);
  }

  lines.push("");
  lines.push(
    ["cluster", "query", "URLs", "impr", "pos", "owner ranks?", "leading URL"]
      .map((header, index) => header.padEnd([13, 38, 11, 6, 6, 13, 0][index]))
      .join(""),
  );

  for (const result of snapshot.results) {
    const previous = baseline?.results.find((row) => row.query === result.query);
    const ownerCell = !result.owner
      ? "n/a"
      : result.ownerPresent
        ? `yes ${result.ownerPosition?.toFixed(1) ?? "?"}`
        : "NO";

    lines.push(
      [
        result.cluster.padEnd(13),
        result.query.slice(0, 36).padEnd(38),
        formatDelta(result.urlCount, previous?.urlCount).padEnd(11),
        String(result.impressions).padEnd(6),
        (result.position?.toFixed(1) ?? "-").padEnd(6),
        ownerCell.padEnd(13),
        result.leadingUrl ?? "-",
      ].join(""),
    );
  }

  const orphaned = snapshot.results.filter((result) => result.owner && !result.ownerPresent);
  if (orphaned.length) {
    lines.push("");
    lines.push(`${orphaned.length} query/queries where the intended owner does not rank at all:`);
    for (const result of orphaned) {
      lines.push(`  "${result.query}" should be ${result.owner}, but ${result.leadingUrl ?? "nothing"} leads instead`);
    }
  }

  const agencyResult = snapshot.results.find(
    (result) => result.query === "shopify hydrogen agency",
  );
  const agencyBaseline = baseline?.results.find(
    (result) => result.query === "shopify hydrogen agency",
  );

  if (agencyResult && agencyBaseline) {
    const gate = evaluateAgencyCannibalizationGate({
      asOfDate,
      baselineUrlCount: agencyBaseline.urlCount,
      currentUrlCount: agencyResult.urlCount,
      ownerPresent: agencyResult.ownerPresent,
    });
    const urlCountDirection = gate.reductionRatio >= 0 ? "reduction" : "increase";
    lines.push("");
    lines.push(`Agency gate (${AGENCY_CANNIBALIZATION_GATE_DATE}): ${gate.decision.toUpperCase()}`);
    lines.push(
      `URL-count change: ${(Math.abs(gate.reductionRatio) * 100).toFixed(1)}% ${urlCountDirection} (${agencyBaseline.urlCount} -> ${agencyResult.urlCount}).`,
    );
    lines.push(gate.rationale);
  }

  return lines.join("\n");
}

async function main() {
  const save = process.argv.includes("--save");
  const token = await googleAccessToken();

  // Search Console lags about two days, so end the window there rather than today.
  const endDate = new Date();
  endDate.setUTCDate(endDate.getUTCDate() - 2);
  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - (WINDOW_DAYS - 1));
  const window = { startDate: isoDate(startDate), endDate: isoDate(endDate) };

  const results: QueryResult[] = [];
  for (const tracked of TRACKED_QUERIES) {
    results.push(await measureQuery(token, tracked, window));
  }

  const snapshot: Snapshot = {
    capturedAt: window.endDate,
    windowDays: WINDOW_DAYS,
    siteUrl: SITE_URL,
    results,
  };

  console.log(render(snapshot, readBaseline(), isoDate(new Date())));

  if (save) {
    mkdirSync(dirname(BASELINE_PATH), { recursive: true });
    writeFileSync(BASELINE_PATH, `${JSON.stringify(snapshot, null, 2)}\n`);
    console.log(`\nBaseline written to ${BASELINE_PATH.replace(`${process.cwd()}/`, "")}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
