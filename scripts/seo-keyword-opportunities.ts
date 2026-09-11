import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

import {
  buildKeywordOpportunities,
  KEYWORD_SEEDS,
  parseKeywordPlannerCsv,
  TARGET_MARKETS,
  type PlannerMetric,
  type SearchConsoleKeywordRow,
} from "../features/seo-intelligence/keyword-opportunities";
import { resolveCommercialIntentPath } from "../features/search-intent";
import { createGoogleAccessTokenProvider, googleJson } from "../lib/google-oauth";

try {
  process.loadEnvFile(join(process.cwd(), ".env.local"));
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
}

type SourceStatus = "ok" | "empty" | "blocked";

interface SourceReport {
  name: string;
  status: SourceStatus;
  detail: string;
}

interface GoogleAdsKeywordResult {
  text?: string;
  keywordIdeaMetrics?: {
    avgMonthlySearches?: string | number;
    competition?: string;
    competitionIndex?: string | number;
    lowTopOfPageBidMicros?: string | number;
    highTopOfPageBidMicros?: string | number;
    monthlySearchVolumes?: Array<{
      year?: string | number;
      month?: string;
      monthlySearches?: string | number;
    }>;
  };
}

const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const GOOGLE_ADS_SCOPE = "https://www.googleapis.com/auth/adwords";
const GOOGLE_TOKEN_PATH =
  process.env.GOOGLE_TOKEN_PATH ?? join(homedir(), ".hermes/google_token.json");
const GOOGLE_ADS_TOKEN_PATH = process.env.GOOGLE_ADS_TOKEN_PATH ?? GOOGLE_TOKEN_PATH;
const SITE_URL = process.env.GSC_SITE_URL ?? "https://hydrogenexpert.co/";
const LANDING_PAGE = process.env.SEO_KEYWORD_LANDING_PAGE ?? "https://hydrogenexpert.co/";
const REPORT_DIR = join(process.cwd(), "content/internal/reports");
const API_VERSION = process.env.GOOGLE_ADS_API_VERSION ?? "v25";
const sourceReports: SourceReport[] = [];

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function shiftDate(date: Date, days: number) {
  const shifted = new Date(date);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted;
}

function safeNumber(value: string | number | undefined) {
  if (value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizedCustomerId(value: string | undefined) {
  const normalized = value?.replace(/-/g, "").trim();
  return normalized && /^\d{10}$/.test(normalized) ? normalized : null;
}

function monthNumber(month: string | undefined) {
  return [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
  ].indexOf(month ?? "") + 1;
}

function historicalChange(
  volumes: NonNullable<GoogleAdsKeywordResult["keywordIdeaMetrics"]>["monthlySearchVolumes"],
  monthsBack: number,
) {
  const sorted = [...(volumes ?? [])]
    .map((point) => ({
      order: (safeNumber(point.year) ?? 0) * 12 + monthNumber(point.month),
      searches: safeNumber(point.monthlySearches),
    }))
    .filter((point): point is { order: number; searches: number } => point.searches !== null)
    .sort((left, right) => right.order - left.order);
  const latest = sorted[0];
  const comparison = latest
    ? sorted.find((point) => point.order === latest.order - monthsBack)
    : undefined;

  if (!latest || !comparison || comparison.searches === 0) return null;
  return (latest.searches - comparison.searches) / comparison.searches;
}

function toPath(value: string) {
  try {
    return new URL(value).pathname || "/";
  } catch {
    return value;
  }
}

async function fetchSearchConsoleRows(now: Date) {
  const token = await createGoogleAccessTokenProvider(GOOGLE_TOKEN_PATH, [GSC_SCOPE])();
  const endDate = shiftDate(now, -2);
  const startDate = shiftDate(endDate, -89);
  const data = await googleJson<{
    rows?: Array<{
      keys?: string[];
      clicks?: number;
      impressions?: number;
      ctr?: number;
      position?: number;
    }>;
  }>(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    token,
    {
      method: "POST",
      body: JSON.stringify({
        startDate: isoDate(startDate),
        endDate: isoDate(endDate),
        dimensions: ["query", "page"],
        rowLimit: 25_000,
        dataState: "final",
      }),
    },
  );

  const rows = (data.rows ?? []).flatMap<SearchConsoleKeywordRow>((row) => {
    const [query, page] = row.keys ?? [];
    const clicks = safeNumber(row.clicks);
    const impressions = safeNumber(row.impressions);
    const ctr = safeNumber(row.ctr);
    const position = safeNumber(row.position);

    if (!query || !page || clicks === null || impressions === null || ctr === null || position === null) {
      return [];
    }

    return [{
      query,
      page: resolveCommercialIntentPath(toPath(page)),
      clicks,
      impressions,
      ctr,
      position,
    }];
  });

  sourceReports.push({
    name: "Google Search Console",
    status: rows.length > 0 ? "ok" : "empty",
    detail: `${SITE_URL}; ${isoDate(startDate)} to ${isoDate(endDate)}; ${rows.length} query/page rows; retired commercial redirects normalized to their canonical owner`,
  });
  return rows;
}

async function fetchGoogleAdsMetrics() {
  const customerId = normalizedCustomerId(process.env.GOOGLE_ADS_CUSTOMER_ID);
  if (!customerId) {
    throw new Error("GOOGLE_ADS_CUSTOMER_ID is missing or is not a 10-digit customer ID.");
  }

  const token = await createGoogleAccessTokenProvider(GOOGLE_ADS_TOKEN_PATH, [GOOGLE_ADS_SCOPE])();
  const loginCustomerId = normalizedCustomerId(process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID);
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN?.trim();
  const headers: Record<string, string> = {};
  if (loginCustomerId) headers["login-customer-id"] = loginCustomerId;
  if (developerToken) headers["developer-token"] = developerToken;

  const results: PlannerMetric[] = [];
  for (const market of TARGET_MARKETS) {
    const data = await googleJson<{ results?: GoogleAdsKeywordResult[] }>(
      `https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}:generateKeywordIdeas`,
      token,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          language: "languageConstants/1000",
          geoTargetConstants: [`geoTargetConstants/${market.geoTargetId}`],
          keywordPlanNetwork: "GOOGLE_SEARCH",
          includeAdultKeywords: false,
          pageSize: 1_000,
          keywordAndUrlSeed: {
            url: LANDING_PAGE,
            keywords: KEYWORD_SEEDS,
          },
        }),
      },
    );

    for (const result of data.results ?? []) {
      if (!result.text) continue;
      const metrics = result.keywordIdeaMetrics;
      results.push({
        keyword: result.text,
        geo: market.code,
        averageMonthlySearches: safeNumber(metrics?.avgMonthlySearches),
        threeMonthChange: historicalChange(metrics?.monthlySearchVolumes, 3),
        yearOverYearChange: historicalChange(metrics?.monthlySearchVolumes, 12),
        competition: metrics?.competition ?? null,
        competitionIndex: safeNumber(metrics?.competitionIndex),
        lowTopOfPageBidMicros: safeNumber(metrics?.lowTopOfPageBidMicros),
        highTopOfPageBidMicros: safeNumber(metrics?.highTopOfPageBidMicros),
      });
    }
  }

  sourceReports.push({
    name: "Google Ads Keyword Planner API",
    status: results.length > 0 ? "ok" : "empty",
    detail: `${TARGET_MARKETS.map((market) => market.code).join(", ")}; ${results.length} keyword/market rows`,
  });
  return results;
}

function manualCsvPath() {
  const argumentIndex = process.argv.indexOf("--planner-csv");
  return argumentIndex >= 0 ? process.argv[argumentIndex + 1] : process.env.KEYWORD_PLANNER_CSV;
}

function loadManualPlannerCsv() {
  const path = manualCsvPath();
  if (!path) return null;
  if (!existsSync(path)) throw new Error(`Keyword Planner CSV does not exist: ${path}.`);
  const geo = process.env.KEYWORD_PLANNER_GEO ?? "manual";
  const rows = parseKeywordPlannerCsv(readFileSync(path, "utf8"), geo);
  sourceReports.push({
    name: "Keyword Planner CSV",
    status: rows.length > 0 ? "ok" : "empty",
    detail: `${rows.length} keyword rows; market ${geo}`,
  });
  return rows;
}

async function optionalSource<T>(name: string, run: () => Promise<T>, fallback: T) {
  try {
    return await run();
  } catch (error) {
    sourceReports.push({
      name,
      status: "blocked",
      detail: error instanceof Error ? error.message : String(error),
    });
    return fallback;
  }
}

function formatNumber(value: number | null) {
  return value === null ? "n/a" : Math.round(value).toLocaleString("en-US");
}

function formatPosition(value: number | null) {
  return value === null ? "n/a" : value.toFixed(1);
}

function renderMarkdown(now: Date, opportunities: ReturnType<typeof buildKeywordOpportunities>) {
  const actionable = opportunities.filter((row) => row.action !== "hold").slice(0, 40);
  const sourceLabels = { ok: "OK", empty: "EMPTY", blocked: "BLOCKED" } as const;

  return `# HydrogenExpert SEO Keyword Opportunity Report

Generated: ${now.toISOString()}

This report is decision support, not an instruction to create a page or campaign. Google Ads metrics are commercial-demand signals, not SEO difficulty scores. No advertising mutations are performed.

## Data Health

${sourceReports.map((source) => `- **${sourceLabels[source.status]}** ${source.name}: ${source.detail}`).join("\n")}

## Actionable Opportunities

| Action | Confidence | Cluster | Keyword | GSC impressions | Position | Pages | Combined target-market volume |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: |
${actionable.length > 0
    ? actionable.map((row) => `| ${row.action} | ${row.confidence} | ${row.cluster} | ${row.keyword.replace(/\|/g, "\\|")} | ${formatNumber(row.searchConsole?.impressions ?? null)} | ${formatPosition(row.searchConsole?.position ?? null)} | ${row.searchConsole?.pages.length ?? 0} | ${formatNumber(row.planner?.combinedAverageMonthlySearches ?? null)} |`).join("\n")
    : "| hold | low | n/a | No actionable query crossed the evidence gates. | n/a | n/a | n/a | n/a |"}

## Decision Notes

${actionable.length > 0
    ? actionable.slice(0, 15).map((row) => `- **${row.keyword}**: ${row.rationale}`).join("\n")
    : "- Keep collecting Search Console and Keyword Planner evidence."}

## Guardrails

- Refresh the existing owner before proposing a new URL for a query already seen in Search Console.
- Treat multiple ranking pages as a cannibalization review, not an automatic redirect or deletion.
- Validate SERP intent manually before creating content for a Planner-only keyword.
- Do not publish content, change indexing, or create Google Ads campaigns from this report automatically.
`;
}

async function main() {
  const now = new Date();
  sourceReports.length = 0;
  const gscRows = await optionalSource(
    "Google Search Console",
    () => fetchSearchConsoleRows(now),
    [] as SearchConsoleKeywordRow[],
  );
  let plannerRows: PlannerMetric[] = [];
  const csvRows = loadManualPlannerCsv();

  if (csvRows) {
    plannerRows = csvRows;
  } else if (!process.argv.includes("--no-ads-api")) {
    plannerRows = await optionalSource(
      "Google Ads Keyword Planner API",
      fetchGoogleAdsMetrics,
      [] as PlannerMetric[],
    );
  } else {
    sourceReports.push({
      name: "Google Ads Keyword Planner API",
      status: "blocked",
      detail: "Disabled with --no-ads-api and no manual CSV was supplied.",
    });
  }

  sourceReports.push({
    name: "Google Trends API",
    status: "blocked",
    detail: "Official API access is limited alpha and no supported HydrogenExpert API access is configured; the Gemini web UI is intentionally not automated.",
  });

  const opportunities = buildKeywordOpportunities(gscRows, plannerRows);
  const report = renderMarkdown(now, opportunities);
  const output = {
    generatedAt: now.toISOString(),
    siteUrl: SITE_URL,
    targetMarkets: TARGET_MARKETS,
    sources: sourceReports,
    opportunities,
  };

  if (process.argv.includes("--write")) {
    mkdirSync(REPORT_DIR, { recursive: true });
    const basename = `seo-keyword-opportunities-${isoDate(now)}`;
    writeFileSync(join(REPORT_DIR, `${basename}.md`), report);
    writeFileSync(join(REPORT_DIR, `${basename}.json`), `${JSON.stringify(output, null, 2)}\n`);
  }

  console.log(process.argv.includes("--json") ? JSON.stringify(output, null, 2) : report);

  if (process.argv.includes("--strict") && sourceReports.some((source) => source.status === "blocked")) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
