import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

import {
  detectTrafficAnomalies,
  formatChange,
  formatSearchPositionChange,
  normalizeCruxClsPercentile,
  parseGaReportRows,
  parseExactContentRangeTotal,
  requireLighthouseCategoryScores,
  summarizeSearchConsoleRow,
  validatePublicHealthResult,
  type DailyTrafficPoint,
  type GaReportData,
  type SearchConsoleAggregateRow,
} from "../lib/traffic-report";

try {
  process.loadEnvFile(join(process.cwd(), ".env.local"));
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
    throw error;
  }
}

type SourceStatus = "ok" | "empty" | "blocked" | "deferred";

interface SourceReport {
  name: string;
  status: SourceStatus;
  detail: string;
  fix?: string;
}

interface DateWindow {
  start: string;
  end: string;
}

interface GaSummary {
  sessions: number | null;
  users: number | null;
  views: number | null;
  engagedSessions: number | null;
  keyEvents: number | null;
  hasData: boolean;
}

const REPORT_DIR = join(process.cwd(), "content/internal/reports");
const GOOGLE_TOKEN_PATH =
  process.env.GOOGLE_TOKEN_PATH ?? join(homedir(), ".hermes/google_token.json");
const SITE_URL = process.env.GSC_SITE_URL ?? "https://hydrogenexpert.co/";
const BASE_URL = (process.env.SEO_BASE_URL ?? "https://hydrogenexpert.co").replace(/\/$/, "");
const PRODUCTION_HOSTNAME = new URL(BASE_URL).hostname;
const CANONICAL_EVENTS = [
  "scope_review_cta_click",
  "external_contact_click",
  "lead_form_view",
  "lead_form_start",
  "lead_form_submit_success",
  "lead_form_submit_error",
] as const;
const sourceReports: SourceReport[] = [];

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function shiftDate(date: Date, days: number) {
  const shifted = new Date(date);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted;
}

function comparableWindows(days: number, lagDays: number, now = new Date()) {
  const currentEnd = shiftDate(now, -lagDays);
  const currentStart = shiftDate(currentEnd, -days + 1);
  const previousEnd = shiftDate(currentStart, -1);
  const previousStart = shiftDate(previousEnd, -days + 1);

  return {
    current: { start: isoDate(currentStart), end: isoDate(currentEnd) },
    previous: { start: isoDate(previousStart), end: isoDate(previousEnd) },
  };
}

function asNumber(value?: string) {
  const parsed = Number(value);

  if (value === undefined || value.trim() === "" || !Number.isFinite(parsed)) {
    throw new Error("GA report metric value is unavailable.");
  }

  return parsed;
}

function formatInteger(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatOptionalInteger(value: number | null) {
  return value === null ? "n/a" : formatInteger(value);
}

function formatOptionalPercent(value: number | null) {
  return value === null ? "n/a" : formatPercent(value);
}

function formatOptionalChange(current: number | null, previous: number | null) {
  return current === null || previous === null ? "not comparable" : formatChange(current, previous);
}

function formatOptionalPosition(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value.toFixed(1) : "n/a";
}

function recordSource(report: SourceReport) {
  sourceReports.push(report);
}

function parseGoogleScopes(data: Record<string, unknown>) {
  const raw = data.scopes ?? data.scope ?? [];

  if (typeof raw === "string") {
    return raw.split(/\s+/).filter(Boolean);
  }

  return Array.isArray(raw) ? raw.filter((value): value is string => typeof value === "string") : [];
}

let googleAccessTokenPromise: Promise<string> | null = null;

async function googleAccessToken(requiredScopes: readonly string[]) {
  if (!existsSync(GOOGLE_TOKEN_PATH)) {
    throw new Error("Google OAuth token file is missing.");
  }

  const data = JSON.parse(readFileSync(GOOGLE_TOKEN_PATH, "utf8")) as Record<string, string | string[]>;
  const grantedScopes = parseGoogleScopes(data);
  const missingScopes = requiredScopes.filter((scope) => !grantedScopes.includes(scope));

  if (missingScopes.length > 0) {
    throw new Error(`Google OAuth is missing scope: ${missingScopes.join(", ")}`);
  }

  googleAccessTokenPromise ??= (async () => {
    const params = new URLSearchParams({
      client_id: String(data.client_id),
      client_secret: String(data.client_secret),
      refresh_token: String(data.refresh_token),
      grant_type: "refresh_token",
    });
    const response = await fetch(String(data.token_uri), { method: "POST", body: params });

    if (!response.ok) {
      throw new Error(`Google token refresh returned HTTP ${response.status}.`);
    }

    const body = (await response.json()) as { access_token?: string };

    if (!body.access_token) {
      throw new Error("Google token refresh returned no access token.");
    }

    return body.access_token;
  })();

  return googleAccessTokenPromise;
}

async function googleJson<T>(url: string, token: string, init: RequestInit = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: { message?: string } } | null;
    throw new Error(body?.error?.message ?? `Google API returned HTTP ${response.status}.`);
  }

  return (await response.json()) as T;
}

async function discoverGaPropertyId(token: string) {
  const configured = process.env.GA4_PROPERTY_ID?.trim();

  if (configured) {
    return configured.replace(/^properties\//, "");
  }

  const data = await googleJson<{
    accountSummaries?: Array<{
      propertySummaries?: Array<{ property?: string; displayName?: string }>;
    }>;
  }>("https://analyticsadmin.googleapis.com/v1beta/accountSummaries?pageSize=200", token);
  const summaries = (data.accountSummaries ?? []).flatMap(
    (account) => account.propertySummaries ?? [],
  );
  const hostnameMatch = summaries.find(
    (summary) => summary.displayName?.toLowerCase() === PRODUCTION_HOSTNAME.toLowerCase(),
  );

  if (hostnameMatch?.property) {
    return hostnameMatch.property.replace(/^properties\//, "");
  }

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim().toUpperCase();

  if (measurementId) {
    for (const summary of summaries) {
      if (!summary.property) continue;
      const streams = await googleJson<{
        dataStreams?: Array<{ webStreamData?: { measurementId?: string; defaultUri?: string } }>;
      }>(`https://analyticsadmin.googleapis.com/v1beta/${summary.property}/dataStreams?pageSize=200`, token);
      const matches = streams.dataStreams?.some(
        (stream) => stream.webStreamData?.measurementId?.toUpperCase() === measurementId,
      );

      if (matches) {
        return summary.property.replace(/^properties\//, "");
      }
    }
  }

  throw new Error(`No GA4 property matched ${PRODUCTION_HOSTNAME}.`);
}

function gaHostnameFilter() {
  return {
    filter: {
      fieldName: "hostName",
      stringFilter: { matchType: "EXACT", value: PRODUCTION_HOSTNAME, caseSensitive: false },
    },
  };
}

function gaDateRange(window: DateWindow) {
  return { startDate: window.start, endDate: window.end };
}

async function gaRunReport(
  propertyId: string,
  token: string,
  body: Record<string, unknown>,
) {
  return googleJson<GaReportData>(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    token,
    { method: "POST", body: JSON.stringify(body) },
  );
}

async function gaSummary(propertyId: string, token: string, window: DateWindow) {
  const requiredMetrics = [
    "sessions",
    "totalUsers",
    "screenPageViews",
    "engagedSessions",
    "keyEvents",
  ] as const;
  const data = await gaRunReport(propertyId, token, {
    dateRanges: [gaDateRange(window)],
    metrics: requiredMetrics.map((name) => ({ name })),
    dimensionFilter: gaHostnameFilter(),
  });
  const row = parseGaReportRows(data, { requiredMetrics })[0];

  if (!row) {
    return {
      sessions: null,
      users: null,
      views: null,
      engagedSessions: null,
      keyEvents: null,
      hasData: false,
    } satisfies GaSummary;
  }

  return {
    sessions: asNumber(row.sessions),
    users: asNumber(row.totalUsers),
    views: asNumber(row.screenPageViews),
    engagedSessions: asNumber(row.engagedSessions),
    keyEvents: asNumber(row.keyEvents),
    hasData: true,
  } satisfies GaSummary;
}

async function fetchGa4Section(now: Date) {
  const scope = "https://www.googleapis.com/auth/analytics.readonly";
  const token = await googleAccessToken([scope]);
  const propertyId = await discoverGaPropertyId(token);
  const windows30 = comparableWindows(30, 1, now);
  const window7 = comparableWindows(7, 1, now).current;
  const [current, previous, sevenDay, pagesData, sourcesData, eventsData, dailyData] =
    await Promise.all([
      gaSummary(propertyId, token, windows30.current),
      gaSummary(propertyId, token, windows30.previous),
      gaSummary(propertyId, token, window7),
      gaRunReport(propertyId, token, {
        dateRanges: [gaDateRange(windows30.current)],
        dimensions: [{ name: "pagePath" }],
        metrics: ["sessions", "screenPageViews", "engagedSessions"].map((name) => ({ name })),
        dimensionFilter: gaHostnameFilter(),
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
      gaRunReport(propertyId, token, {
        dateRanges: [gaDateRange(windows30.current)],
        dimensions: [{ name: "sessionSourceMedium" }],
        metrics: ["sessions", "engagedSessions"].map((name) => ({ name })),
        dimensionFilter: gaHostnameFilter(),
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
      gaRunReport(propertyId, token, {
        dateRanges: [gaDateRange(windows30.current)],
        dimensions: [{ name: "eventName" }],
        metrics: [{ name: "eventCount" }, { name: "keyEvents" }],
        dimensionFilter: {
          andGroup: {
            expressions: [
              gaHostnameFilter(),
              {
                filter: {
                  fieldName: "eventName",
                  inListFilter: { values: CANONICAL_EVENTS, caseSensitive: true },
                },
              },
            ],
          },
        },
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      }),
      gaRunReport(propertyId, token, {
        dateRanges: [gaDateRange(windows30.current)],
        dimensions: [{ name: "date" }],
        metrics: ["sessions", "engagedSessions", "screenPageViews"].map((name) => ({ name })),
        dimensionFilter: gaHostnameFilter(),
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
    ]);
  const pageRows = parseGaReportRows(pagesData, {
    requiredDimensions: ["pagePath"],
    requiredMetrics: ["sessions", "screenPageViews", "engagedSessions"],
  });
  const sourceRows = parseGaReportRows(sourcesData, {
    requiredDimensions: ["sessionSourceMedium"],
    requiredMetrics: ["sessions", "engagedSessions"],
  });
  const eventRows = parseGaReportRows(eventsData, {
    requiredDimensions: ["eventName"],
    requiredMetrics: ["eventCount", "keyEvents"],
  });
  const dailyPoints = parseGaReportRows(dailyData, {
    requiredDimensions: ["date"],
    requiredMetrics: ["sessions", "engagedSessions", "screenPageViews"],
  }).map<DailyTrafficPoint>((row) => ({
    date: row.date ?? "",
    sessions: asNumber(row.sessions),
    engagedSessions: asNumber(row.engagedSessions),
    views: asNumber(row.screenPageViews),
  }));
  const anomalies = detectTrafficAnomalies(dailyPoints);
  const engagementRate =
    current.sessions === null || current.engagedSessions === null
      ? null
      : current.sessions === 0
        ? 0
        : current.engagedSessions / current.sessions;
  const previousEngagementRate =
    previous.sessions === null || previous.engagedSessions === null
      ? null
      : previous.sessions === 0
        ? 0
        : previous.engagedSessions / previous.sessions;
  const comparisonNote =
    previous.sessions === null
      ? "The prior window returned no aggregate GA4 row, so period deltas are not comparable."
      : previous.sessions === 0
      ? "The prior window has no GA4 sessions. Treat period deltas as non-comparable until at least 14 continuous post-release days are available."
      : "The two GA4 windows contain data; keep anomaly days in view when interpreting the deltas.";

  recordSource({
    name: "GA4 Data API",
    status: current.hasData ? "ok" : "empty",
    detail: current.hasData
      ? `property ${propertyId}; production hostname filter; ${windows30.current.start} to ${windows30.current.end}`
      : `property ${propertyId}; no aggregate row for ${windows30.current.start} to ${windows30.current.end}`,
  });

  return `## GA4 — Consented Traffic

Property: ${propertyId}

Current 30 days: ${windows30.current.start} to ${windows30.current.end}

Previous 30 days: ${windows30.previous.start} to ${windows30.previous.end}

${comparisonNote}

| Metric | Current | Previous | Change |
| --- | ---: | ---: | ---: |
| Sessions | ${formatOptionalInteger(current.sessions)} | ${formatOptionalInteger(previous.sessions)} | ${formatOptionalChange(current.sessions, previous.sessions)} |
| Users | ${formatOptionalInteger(current.users)} | ${formatOptionalInteger(previous.users)} | ${formatOptionalChange(current.users, previous.users)} |
| Views | ${formatOptionalInteger(current.views)} | ${formatOptionalInteger(previous.views)} | ${formatOptionalChange(current.views, previous.views)} |
| Engaged sessions | ${formatOptionalInteger(current.engagedSessions)} | ${formatOptionalInteger(previous.engagedSessions)} | ${formatOptionalChange(current.engagedSessions, previous.engagedSessions)} |
| Engagement rate | ${formatOptionalPercent(engagementRate)} | ${formatOptionalPercent(previousEngagementRate)} | ${formatOptionalChange(engagementRate, previousEngagementRate)} |
| Key events | ${formatOptionalInteger(current.keyEvents)} | ${formatOptionalInteger(previous.keyEvents)} | ${formatOptionalChange(current.keyEvents, previous.keyEvents)} |

Last 7 days: ${formatOptionalInteger(sevenDay.sessions)} sessions, ${formatOptionalInteger(sevenDay.users)} users, ${formatOptionalInteger(sevenDay.engagedSessions)} engaged sessions.

### Top Pages

${pageRows.length ? pageRows.map((row) => `- ${row.pagePath}: ${formatInteger(asNumber(row.sessions))} sessions, ${formatInteger(asNumber(row.screenPageViews))} views, ${formatInteger(asNumber(row.engagedSessions))} engaged`).join("\n") : "- No rows returned."}

### Acquisition

${sourceRows.length ? sourceRows.map((row) => `- ${row.sessionSourceMedium}: ${formatInteger(asNumber(row.sessions))} sessions, ${formatInteger(asNumber(row.engagedSessions))} engaged`).join("\n") : "- No rows returned."}

### Canonical Funnel Events

${eventRows.length ? eventRows.map((row) => `- ${row.eventName}: ${formatInteger(asNumber(row.eventCount))} events, ${formatInteger(asNumber(row.keyEvents))} key events`).join("\n") : "- No canonical funnel events reported in this window."}

### Traffic Anomalies

${anomalies.length ? anomalies.map((point) => `- ${point.date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}: ${point.sessions} sessions, ${formatPercent(point.engagementRate)} engagement, ${point.viewsPerSession.toFixed(2)} views/session`).join("\n") : "- No high-volume, low-quality daily spike crossed the anomaly threshold."}`;
}

async function gscQuery(token: string, body: Record<string, unknown>) {
  return googleJson<{
    rows?: Array<SearchConsoleAggregateRow & {
      keys?: string[];
    }>;
  }>(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    token,
    { method: "POST", body: JSON.stringify(body) },
  );
}

async function gscSummary(token: string, window: DateWindow) {
  const data = await gscQuery(token, { startDate: window.start, endDate: window.end });
  return summarizeSearchConsoleRow(data.rows?.[0]);
}

async function fetchGscSection(now: Date) {
  const scope = "https://www.googleapis.com/auth/webmasters.readonly";
  const token = await googleAccessToken([scope]);
  const windows = comparableWindows(28, 2, now);
  const [current, previous, opportunitiesData, countriesData] = await Promise.all([
    gscSummary(token, windows.current),
    gscSummary(token, windows.previous),
    gscQuery(token, {
      startDate: windows.current.start,
      endDate: windows.current.end,
      dimensions: ["query", "page"],
      rowLimit: 500,
    }),
    gscQuery(token, {
      startDate: windows.current.start,
      endDate: windows.current.end,
      dimensions: ["country"],
      rowLimit: 250,
    }),
  ]);
  const opportunities = (opportunitiesData.rows ?? [])
    .filter(
      (
        row,
      ): row is typeof row & {
        position: number;
        impressions: number;
        clicks: number;
        ctr: number;
      } =>
        typeof row.position === "number" &&
        Number.isFinite(row.position) &&
        row.position >= 4 &&
        row.position <= 20 &&
        typeof row.impressions === "number" &&
        Number.isFinite(row.impressions) &&
        row.impressions >= 10 &&
        typeof row.clicks === "number" &&
        Number.isFinite(row.clicks) &&
        typeof row.ctr === "number" &&
        Number.isFinite(row.ctr),
    )
    .sort((left, right) => (right.impressions ?? 0) - (left.impressions ?? 0))
    .slice(0, 20);
  const usa = countriesData.rows?.find((row) => row.keys?.[0] === "usa");

  recordSource({
    name: "Google Search Console",
    status: current.hasData ? "ok" : "empty",
    detail: current.hasData
      ? `${SITE_URL}; ${windows.current.start} to ${windows.current.end}`
      : `${SITE_URL}; no aggregate row for ${windows.current.start} to ${windows.current.end}`,
  });

  return `## Google Search Console

Current 28 days: ${windows.current.start} to ${windows.current.end}

Previous 28 days: ${windows.previous.start} to ${windows.previous.end}

| Metric | Current | Previous | Change |
| --- | ---: | ---: | ---: |
| Clicks | ${formatOptionalInteger(current.clicks)} | ${formatOptionalInteger(previous.clicks)} | ${formatOptionalChange(current.clicks, previous.clicks)} |
| Impressions | ${formatOptionalInteger(current.impressions)} | ${formatOptionalInteger(previous.impressions)} | ${formatOptionalChange(current.impressions, previous.impressions)} |
| CTR | ${formatOptionalPercent(current.ctr)} | ${formatOptionalPercent(previous.ctr)} | ${formatOptionalChange(current.ctr, previous.ctr)} |
| Average position | ${formatOptionalPosition(current.position)} | ${formatOptionalPosition(previous.position)} | ${formatSearchPositionChange(current.position, previous.position)} |

${usa ? `United States: ${formatOptionalInteger(usa.impressions ?? null)} impressions, ${formatOptionalInteger(usa.clicks ?? null)} clicks, ${formatOptionalPercent(usa.ctr ?? null)} CTR, position ${formatOptionalPosition(usa.position)}.` : "United States: no row returned for this window."}

### Position 4–20 CTR Opportunities

${opportunities.length ? opportunities.map((row) => `- ${row.keys?.[0] ?? "(query)"} → ${row.keys?.[1] ?? "(page)"}: ${formatInteger(row.impressions)} impressions, ${formatInteger(row.clicks)} clicks, ${formatPercent(row.ctr)} CTR, position ${row.position.toFixed(1)}`).join("\n") : "- No query/page pair crossed the opportunity threshold."}`;
}

function supabaseLeadHeaders(serviceRoleKey: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    Prefer: "count=exact",
    Range: "0-0",
  };
}

async function fetchSupabaseLeadCount(
  supabaseUrl: string,
  serviceRoleKey: string,
  window: DateWindow,
) {
  const url = new URL("/rest/v1/lead_submissions", supabaseUrl);
  url.searchParams.set("select", "id");
  url.searchParams.set("created_at", `gte.${window.start}T00:00:00.000Z`);
  url.searchParams.append("created_at", `lte.${window.end}T23:59:59.999Z`);
  const response = await fetch(url, {
    headers: supabaseLeadHeaders(serviceRoleKey),
  });

  if (!response.ok) {
    throw new Error(`lead count returned HTTP ${response.status}`);
  }

  return parseExactContentRangeTotal(response.headers.get("content-range"));
}

async function fetchLeadSection(now: Date, deferSupabase: boolean) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const windows = comparableWindows(30, 1, now);

  if (!supabaseUrl || !serviceRoleKey) {
    const status = deferSupabase ? "deferred" : "blocked";
    recordSource({
      name: "Supabase lead count",
      status,
      detail: deferSupabase
        ? "deferred by explicit flag; production lead storage is not configured"
        : "production lead storage is not configured",
      fix: deferSupabase ? undefined : "Configure Supabase or rerun with --defer-supabase after an explicit user decision.",
    });
    return `## Owned Lead Count

- ${deferSupabase ? "Deferred by explicit flag" : "Blocked"}. Supabase is not available, so there is no authoritative stored-lead count.`;
  }

  try {
    const [current, previous] = await Promise.all([
      fetchSupabaseLeadCount(supabaseUrl, serviceRoleKey, windows.current),
      fetchSupabaseLeadCount(supabaseUrl, serviceRoleKey, windows.previous),
    ]);

    recordSource({
      name: "Supabase lead count",
      status: "ok",
      detail: "service-role count only; no lead fields were fetched",
    });
    return `## Owned Lead Count

- Current 30 days: ${formatInteger(current)} stored leads.
- Previous 30 days: ${formatInteger(previous)} stored leads.
- Change: ${formatChange(current, previous)}.`;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    const status = deferSupabase ? "deferred" : "blocked";
    recordSource({
      name: "Supabase lead count",
      status,
      detail: deferSupabase
        ? `deferred by explicit flag; configured source failed: ${reason}`
        : `configured source failed: ${reason}`,
      fix: deferSupabase ? undefined : "Restore the configured Supabase source or rerun with --defer-supabase after an explicit user decision.",
    });
    return `## Owned Lead Count

- ${deferSupabase ? "Deferred by explicit flag" : "Blocked"}. The configured Supabase source failed (${reason}), so no stored-lead count is claimed.`;
  }
}

async function fetchProductionHealthSection(deferSupabase: boolean) {
  const coreChecks = [
    { path: "/", contentTypes: ["text/html"] },
    { path: "/sitemap.xml", contentTypes: ["application/xml", "text/xml"] },
    { path: "/robots.txt", contentTypes: ["text/plain"] },
    { path: "/llms.txt", contentTypes: ["text/plain"] },
  ] as const;
  const deferredChecks = [
    { path: "/blog", contentTypes: ["text/html"] },
    {
      path: "/feed.xml",
      contentTypes: ["application/rss+xml", "application/xml", "text/xml"],
    },
  ] as const;
  const checks = [...coreChecks, ...deferredChecks];
  const rows = await Promise.all(
    checks.map(async ({ path, contentTypes }) => {
      const requestedUrl = new URL(path, BASE_URL).toString();

      try {
        const response = await fetch(requestedUrl, {
          redirect: "follow",
          headers: { "User-Agent": "HydrogenExpert traffic report" },
          signal: AbortSignal.timeout(15_000),
        });

        return {
          path,
          status: response.status,
          error: validatePublicHealthResult({
            requestedUrl,
            finalUrl: response.url,
            status: response.status,
            contentType: response.headers.get("content-type"),
            expectedContentTypes: contentTypes,
          }),
        };
      } catch {
        return { path, status: 0, error: "request failed" };
      }
    }),
  );
  const coreFailures = rows.filter(
    (row) =>
      coreChecks.some((check) => check.path === row.path) &&
      row.error !== null,
  );
  const deferredFailures = rows.filter(
    (row) =>
      deferredChecks.some((check) => check.path === row.path) &&
      row.error !== null,
  );

  recordSource({
    name: "Production public health",
    status:
      coreFailures.length || (deferredFailures.length && !deferSupabase)
        ? "blocked"
        : "ok",
    detail: coreFailures.length
      ? `${coreFailures.length} critical non-database route(s) failed`
      : deferredFailures.length
        ? deferSupabase
          ? `core routes healthy; ${deferredFailures.length} Supabase-dependent route failure(s) deferred by explicit flag`
          : `${deferredFailures.length} Supabase-dependent public route(s) failed`
        : "all checked routes returned HTTP 200",
    fix:
      deferredFailures.length && !deferSupabase
        ? "Restore the public routes or rerun with --defer-supabase after an explicit user decision."
        : undefined,
  });

  return `## Production Health

${rows.map((row) => `- ${row.path}: HTTP ${row.status || "request failed"}${row.error && row.status === 200 ? ` — ${row.error}` : ""}${deferSupabase && deferredFailures.some((failure) => failure.path === row.path) ? " — Supabase dependency deferred by explicit flag" : ""}`).join("\n")}`;
}

async function fetchPageSpeedSection() {
  const target = new URL("/", BASE_URL).toString();
  const url = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  url.searchParams.set("url", target);
  url.searchParams.set("strategy", "mobile");
  for (const category of ["performance", "seo", "accessibility"]) {
    url.searchParams.append("category", category);
  }
  const key = process.env.GOOGLE_API_KEY ?? process.env.PAGESPEED_API_KEY;
  if (key) url.searchParams.set("key", key);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      response.status === 429 && !key
        ? "PageSpeed quota exhausted without GOOGLE_API_KEY or PAGESPEED_API_KEY."
        : `PageSpeed returned HTTP ${response.status}.`,
    );
  }

  const data = (await response.json()) as {
    lighthouseResult?: {
      categories?: Record<string, { score?: number | null } | undefined>;
      audits?: Record<string, { displayValue?: string } | undefined>;
    };
    loadingExperience?: {
      metrics?: Record<string, { percentile?: number; category?: string } | undefined>;
      overall_category?: string;
    };
  };
  const categories = data.lighthouseResult?.categories ?? {};
  const categoryScores = requireLighthouseCategoryScores(categories);
  const audits = data.lighthouseResult?.audits ?? {};
  const fieldMetrics = data.loadingExperience?.metrics ?? {};
  const fieldLcp = fieldMetrics.LARGEST_CONTENTFUL_PAINT_MS;
  const fieldInp = fieldMetrics.INTERACTION_TO_NEXT_PAINT;
  const fieldCls = fieldMetrics.CUMULATIVE_LAYOUT_SHIFT_SCORE;
  const fieldClsValue = normalizeCruxClsPercentile(fieldCls?.percentile);

  recordSource({
    name: "PageSpeed Insights",
    status: "ok",
    detail: `${target}; mobile Lighthouse and available field data`,
  });

  return `## PageSpeed / Core Web Vitals

- Mobile Lighthouse: performance ${Math.round(categoryScores.performance * 100)}, SEO ${Math.round(categoryScores.seo * 100)}, accessibility ${Math.round(categoryScores.accessibility * 100)}.
- Lab: LCP ${audits["largest-contentful-paint"]?.displayValue ?? "n/a"}; TBT ${audits["total-blocking-time"]?.displayValue ?? "n/a"}; CLS ${audits["cumulative-layout-shift"]?.displayValue ?? "n/a"}.
- Field (${data.loadingExperience?.overall_category ?? "not enough data"}): LCP ${fieldLcp?.percentile ?? "n/a"} ms (${fieldLcp?.category ?? "n/a"}); INP ${fieldInp?.percentile ?? "n/a"} ms (${fieldInp?.category ?? "n/a"}); CLS ${fieldClsValue ?? "n/a"} (${fieldCls?.category ?? "n/a"}).`;
}

async function optionalSection(
  title: string,
  name: string,
  fn: () => Promise<string>,
  fix: string,
  unavailableStatus: Extract<SourceStatus, "blocked" | "deferred"> = "blocked",
) {
  try {
    return await fn();
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    recordSource({ name, status: unavailableStatus, detail, fix });
    const label = unavailableStatus === "blocked" ? "Blocked" : "Deferred";
    return `## ${title}\n\n- ${label}: ${detail}`;
  }
}

function renderDataHealth() {
  const labels: Record<SourceStatus, string> = {
    ok: "OK",
    empty: "EMPTY",
    blocked: "BLOCKED",
    deferred: "DEFERRED",
  };

  return `## Data Health

${sourceReports.map((report) => `- **${labels[report.status]}** ${report.name}: ${report.detail.replace(/\.$/, "")}.${report.fix ? ` Fix: ${report.fix}` : ""}`).join("\n")}`;
}

async function renderReport(now: Date) {
  sourceReports.length = 0;
  const deferSupabase = process.argv.includes("--defer-supabase");
  const ga4Section = await optionalSection(
    "GA4 — Consented Traffic",
    "GA4 Data API",
    () => fetchGa4Section(now),
    "Confirm Analytics Admin/Data API access and the analytics.readonly OAuth scope.",
  );
  const gscSection = await optionalSection(
    "Google Search Console",
    "Google Search Console",
    () => fetchGscSection(now),
    "Confirm property access and the webmasters.readonly OAuth scope.",
  );
  const leadSection = await fetchLeadSection(now, deferSupabase);
  const healthSection = await optionalSection(
    "Production Health",
    "Production public health",
    () => fetchProductionHealthSection(deferSupabase),
    "Check the production deployment and DNS.",
  );
  const pageSpeedSection = await optionalSection(
    "PageSpeed / Core Web Vitals",
    "PageSpeed Insights",
    fetchPageSpeedSection,
    "Set GOOGLE_API_KEY or PAGESPEED_API_KEY when public quota is exhausted.",
    process.argv.includes("--require-pagespeed") ? "blocked" : "deferred",
  );

  return `# Weekly Traffic and Measurement Report

Generated: ${now.toISOString()}

Only GA4 traffic for hostname ${PRODUCTION_HOSTNAME} is included. After the privacy-first release, GA4 represents consented traffic; windows that predate that deployment remain historical pre-change data. Vercel Analytics remains the cookie-free baseline.

${renderDataHealth()}

${ga4Section}

${gscSection}

${leadSection}

${healthSection}

${pageSpeedSection}
`;
}

async function main() {
  const strict = process.argv.includes("--strict");
  const now = new Date();
  const report = await renderReport(now);
  mkdirSync(REPORT_DIR, { recursive: true });
  const outputPath = join(REPORT_DIR, `traffic-${isoDate(now)}.md`);
  writeFileSync(outputPath, report);
  console.log(outputPath);

  const blockingSources = sourceReports.filter(
    (source) => source.status === "blocked",
  );

  if (blockingSources.length > 0) {
    console.error(`\n${blockingSources.length} required data source(s) did not report:`);
    for (const source of blockingSources) {
      console.error(`  - ${source.name}: ${source.detail}`);
      if (source.fix) console.error(`      fix: ${source.fix}`);
    }

    if (strict) {
      process.exit(1);
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
