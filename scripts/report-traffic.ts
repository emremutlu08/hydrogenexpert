export {};

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface TrafficRow {
  label: string;
  value: number;
  change?: number;
}

interface TrafficInput {
  generatedAt?: string;
  last7Days?: {
    sessions?: number;
    users?: number;
    topPages?: TrafficRow[];
    internalClicks?: TrafficRow[];
    outboundClicks?: TrafficRow[];
  };
  last30Days?: {
    sessions?: number;
    users?: number;
    topPages?: TrafficRow[];
    internalClicks?: TrafficRow[];
    outboundClicks?: TrafficRow[];
  };
  gscNotes?: string[];
}

const REPORT_DIR = join(process.cwd(), "content/internal/reports");
const INPUT_PATH = join(process.cwd(), "content/internal/traffic-snapshot.json");
const GOOGLE_TOKEN_PATH = "/Users/emremutlu/.hermes/google_token.json";
const SITE_URL = process.env.GSC_SITE_URL ?? "https://hydrogenexpert.co/";
const BASE_URL = process.env.SEO_BASE_URL ?? "https://hydrogenexpert.co";

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatRange(days: number, now: Date) {
  const start = new Date(now);
  start.setUTCDate(start.getUTCDate() - days + 1);

  return `${isoDate(start)} to ${isoDate(now)}`;
}

function readInput(): TrafficInput {
  if (!existsSync(INPUT_PATH)) return {};
  return JSON.parse(readFileSync(INPUT_PATH, "utf8")) as TrafficInput;
}

function formatNumber(value?: number) {
  return typeof value === "number" ? value.toLocaleString("en-US") : "manual";
}

function rowLine(row: TrafficRow) {
  const change = typeof row.change === "number" ? ` (${row.change >= 0 ? "+" : ""}${row.change}%)` : "";
  return `- ${row.label}: ${row.value.toLocaleString("en-US")}${change}`;
}

function sectionRows(rows?: TrafficRow[]) {
  if (!rows?.length) return "- Manual slot: paste GA4, Vercel Analytics, or Search Console export values here.";
  return rows.map(rowLine).join("\n");
}

function tokenScopes() {
  if (!existsSync(GOOGLE_TOKEN_PATH)) return [] as string[];
  const data = JSON.parse(readFileSync(GOOGLE_TOKEN_PATH, "utf8"));
  const raw = data.scopes ?? data.scope ?? [];
  if (typeof raw === "string") return raw.split(/\s+/).filter(Boolean);
  return Array.isArray(raw) ? raw : [];
}

async function googleAccessToken(requiredScope: string) {
  if (!existsSync(GOOGLE_TOKEN_PATH)) throw new Error("google_token.json missing");
  const data = JSON.parse(readFileSync(GOOGLE_TOKEN_PATH, "utf8"));
  if (!tokenScopes().includes(requiredScope)) throw new Error(`missing OAuth scope: ${requiredScope}`);
  const params = new URLSearchParams({
    client_id: data.client_id,
    client_secret: data.client_secret,
    refresh_token: data.refresh_token,
    grant_type: "refresh_token",
  });
  const response = await fetch(data.token_uri, { method: "POST", body: params });
  if (!response.ok) throw new Error(`token refresh failed: HTTP ${response.status}`);
  const body = await response.json() as { access_token?: string };
  if (!body.access_token) throw new Error("token refresh returned no access_token");
  return body.access_token;
}

async function fetchGscQuickWins() {
  const scope = "https://www.googleapis.com/auth/webmasters.readonly";
  const token = await googleAccessToken(scope);
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 2);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  const body = {
    startDate: isoDate(start),
    endDate: isoDate(end),
    dimensions: ["query", "page"],
    rowLimit: 250,
  };
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
  const response = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!response.ok) throw new Error(`GSC Search Analytics HTTP ${response.status}`);
  const data = await response.json() as { rows?: Array<{ keys?: string[]; clicks?: number; impressions?: number; ctr?: number; position?: number }> };
  return (data.rows ?? [])
    .filter(row => typeof row.position === "number" && row.position >= 5 && row.position <= 30 && (row.impressions ?? 0) >= 10)
    .slice(0, 20)
    .map(row => `- ${row.keys?.[0] ?? "(query)"} → ${row.keys?.[1] ?? "(page)"}: ${row.impressions ?? 0} impr, ${row.clicks ?? 0} clicks, pos ${row.position?.toFixed(1)}, CTR ${(((row.ctr ?? 0) * 100)).toFixed(1)}%`);
}

async function fetchPageSpeed(path = "/") {
  const target = new URL(path, BASE_URL).toString();
  const url = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  url.searchParams.set("url", target);
  url.searchParams.set("strategy", "mobile");
  for (const category of ["performance", "seo", "accessibility"]) url.searchParams.append("category", category);
  const key = process.env.GOOGLE_API_KEY ?? process.env.PAGESPEED_API_KEY;
  if (key) url.searchParams.set("key", key);
  const response = await fetch(url);
  if (response.status === 429 && !key) {
    // Unkeyed PageSpeed calls share a tiny public quota, so 429 here is a
    // missing-credential problem rather than a transient one worth retrying.
    throw new Error(
      "PageSpeed HTTP 429 with no API key set. Core Web Vitals have never been captured. Set GOOGLE_API_KEY or PAGESPEED_API_KEY.",
    );
  }
  if (!response.ok) throw new Error(`PageSpeed HTTP ${response.status}`);
  const data = await response.json() as {
    lighthouseResult?: {
      categories?: Record<string, { score?: number } | undefined>;
      audits?: Record<string, { displayValue?: string } | undefined>;
    };
  };
  const categories = data.lighthouseResult?.categories ?? {};
  const audits = data.lighthouseResult?.audits ?? {};
  return [
    `- ${target}: performance ${Math.round((categories.performance?.score ?? 0) * 100)}, SEO ${Math.round((categories.seo?.score ?? 0) * 100)}, accessibility ${Math.round((categories.accessibility?.score ?? 0) * 100)}`,
    `  - LCP ${audits["largest-contentful-paint"]?.displayValue ?? "n/a"}; TBT ${audits["total-blocking-time"]?.displayValue ?? "n/a"}; CLS ${audits["cumulative-layout-shift"]?.displayValue ?? "n/a"}`,
  ];
}

type SourceStatus = "ok" | "empty" | "blocked" | "not-configured";

interface SourceReport {
  name: string;
  status: SourceStatus;
  detail: string;
  fix?: string;
}

const sourceReports: SourceReport[] = [];

function recordSource(report: SourceReport) {
  sourceReports.push(report);
  return report;
}

/**
 * Three consecutive reports rendered "manual" and "Blocked:" without anything
 * downstream noticing, which reads as measurement while carrying no data. Every
 * section now reports its own status and the run says so on stderr.
 */
async function optionalSection(
  title: string,
  name: string,
  fn: () => Promise<string[]>,
  fix: string,
) {
  try {
    const rows = await fn();

    if (!rows.length) {
      recordSource({ name, status: "empty", detail: "query succeeded, returned no rows", fix });
      return `## ${title}\n\n- No rows returned.`;
    }

    recordSource({ name, status: "ok", detail: `${rows.length} rows` });
    return `## ${title}\n\n${rows.join("\n")}`;
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    recordSource({ name, status: "blocked", detail, fix });
    return `## ${title}\n\n- Blocked: ${detail}`;
  }
}

function recordOwnedAnalytics(input: TrafficInput) {
  const hasAny =
    typeof input.last7Days?.sessions === "number" || typeof input.last30Days?.sessions === "number";

  recordSource({
    name: "GA4 / Vercel Analytics (sessions, users, top pages)",
    status: hasAny ? "ok" : "not-configured",
    detail: hasAny
      ? "snapshot supplied"
      : `no ${INPUT_PATH.replace(process.cwd() + "/", "")}; every owned-analytics slot renders as "manual"`,
    fix: "Enable the Analytics Admin API for the OAuth project, or write content/internal/traffic-snapshot.json from a GA4 export.",
  });
}

function renderDataHealth() {
  const icon: Record<SourceStatus, string> = {
    ok: "ok",
    empty: "empty",
    blocked: "BLOCKED",
    "not-configured": "NOT CONFIGURED",
  };

  const rows = sourceReports.map((report) => {
    const fix = report.fix ? ` Fix: ${report.fix}` : "";
    const detail = report.detail.replace(/\.$/, "");
    return `- **${icon[report.status]}** ${report.name}: ${detail}.${fix}`;
  });

  const degraded = sourceReports.filter((report) => report.status !== "ok");
  const headline = degraded.length
    ? `${degraded.length} of ${sourceReports.length} data sources are not reporting. Treat the numbers below as partial.`
    : `All ${sourceReports.length} data sources reported.`;

  return `## Data Health\n\n${headline}\n\n${rows.join("\n")}`;
}

async function renderReport(input: TrafficInput, now: Date) {
  recordOwnedAnalytics(input);
  const gscSection = await optionalSection(
    "GSC Quick Wins (auto)",
    "Google Search Console",
    fetchGscQuickWins,
    "Grant the webmasters.readonly OAuth scope for the property.",
  );
  const psiSection = await optionalSection(
    "PageSpeed / Lighthouse Snapshot (auto)",
    "PageSpeed / Core Web Vitals",
    () => fetchPageSpeed("/"),
    "Set GOOGLE_API_KEY or PAGESPEED_API_KEY in .env.local.",
  );
  return `# Weekly Traffic Report

Generated: ${input.generatedAt ?? now.toISOString()}

${renderDataHealth()}

## Date Windows

- Last 7 days: ${formatRange(7, now)}
- Last 30 days: ${formatRange(30, now)}

## Last 7 Days

- Sessions: ${formatNumber(input.last7Days?.sessions)}
- Users: ${formatNumber(input.last7Days?.users)}

### Top Pages

${sectionRows(input.last7Days?.topPages)}

### Internal Clicks

${sectionRows(input.last7Days?.internalClicks)}

### Outbound Clicks

${sectionRows(input.last7Days?.outboundClicks)}

## Last 30 Days

- Sessions: ${formatNumber(input.last30Days?.sessions)}
- Users: ${formatNumber(input.last30Days?.users)}

### Top Pages

${sectionRows(input.last30Days?.topPages)}

### Internal Clicks

${sectionRows(input.last30Days?.internalClicks)}

### Outbound Clicks

${sectionRows(input.last30Days?.outboundClicks)}

${gscSection}

${psiSection}

## Manual Search Console Slot

${input.gscNotes?.length ? input.gscNotes.map(note => `- ${note}`).join("\n") : "- Optional manual notes. Auto GSC is used when `webmasters.readonly` OAuth scope is available."}

## Traffic Foundation Routes To Watch

- /resources
- /shopify-hydrogen-examples
- /shopify-hydrogen-issues
- /shopify-hydrogen-templates
- /udemy-shopify-hydrogen-course-resources
`;
}

async function main() {
  const strict = process.argv.includes("--strict");
  const input = readInput();
  const now = new Date();
  mkdirSync(REPORT_DIR, { recursive: true });
  const outputPath = join(REPORT_DIR, `traffic-${isoDate(now)}.md`);
  writeFileSync(outputPath, await renderReport(input, now));
  console.log(outputPath);

  const degraded = sourceReports.filter((report) => report.status !== "ok");

  if (degraded.length) {
    console.error(
      `\n${degraded.length} of ${sourceReports.length} data sources did not report:`,
    );
    for (const report of degraded) {
      console.error(`  - ${report.name}: ${report.detail}`);
      if (report.fix) console.error(`      fix: ${report.fix}`);
    }
    if (strict) {
      console.error("\n--strict set: failing because the report is not fully backed by data.");
      process.exit(1);
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
