export const TARGET_MARKETS = [
  { code: "US", name: "United States", geoTargetId: "2840" },
  { code: "GB", name: "United Kingdom", geoTargetId: "2826" },
  { code: "CA", name: "Canada", geoTargetId: "2124" },
  { code: "AU", name: "Australia", geoTargetId: "2036" },
] as const;

export const KEYWORD_SEEDS = [
  "shopify hydrogen developer",
  "shopify hydrogen experts",
  "shopify hydrogen agency",
  "headless shopify agency",
  "shopify hydrogen migration",
  "shopify hydrogen audit",
  "shopify hydrogen cost",
  "shopify hydrogen performance",
  "shopify hydrogen seo",
  "shopify hydrogen vs liquid",
] as const;

export interface PlannerMetric {
  keyword: string;
  geo: string;
  averageMonthlySearches: number | null;
  threeMonthChange: number | null;
  yearOverYearChange: number | null;
  competition: string | null;
  competitionIndex: number | null;
  lowTopOfPageBidMicros: number | null;
  highTopOfPageBidMicros: number | null;
}

export interface SearchConsoleKeywordRow {
  query: string;
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export type OpportunityAction =
  | "resolve_cannibalization"
  | "refresh_existing"
  | "protect_existing"
  | "validate_new_intent"
  | "hold";

export interface KeywordOpportunity {
  keyword: string;
  cluster: string;
  action: OpportunityAction;
  confidence: "high" | "medium" | "low";
  rationale: string;
  searchConsole: {
    clicks: number;
    impressions: number;
    ctr: number | null;
    position: number | null;
    pages: string[];
  } | null;
  planner: {
    combinedAverageMonthlySearches: number | null;
    markets: PlannerMetric[];
  } | null;
}

const CSV_HEADER_ALIASES = {
  keyword: ["keyword", "keywords"],
  averageMonthlySearches: ["avg. monthly searches", "average monthly searches"],
  threeMonthChange: ["three month change", "3 month change"],
  yearOverYearChange: ["yoy change", "year over year change"],
  competition: ["competition"],
  competitionIndex: ["competition (indexed value)", "competition index"],
  lowTopOfPageBid: ["top of page bid (low range)", "low top of page bid"],
  highTopOfPageBid: ["top of page bid (high range)", "high top of page bid"],
} as const;

function parseCsvRows(input: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];

    if (character === '"') {
      if (quoted && input[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (character === "," && !quoted) {
      row.push(value);
      value = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && input[index + 1] === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += character;
  }

  row.push(value);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

function normalizedHeader(value: string) {
  return value.trim().toLowerCase().replace(/^\uFEFF/, "");
}

function headerIndex(headers: string[], aliases: readonly string[], required = false) {
  const index = headers.findIndex((header) => aliases.includes(header));

  if (required && index === -1) {
    throw new Error(`Keyword Planner CSV is missing column: ${aliases[0]}.`);
  }

  return index;
}

function cell(row: string[], index: number) {
  return index === -1 ? "" : row[index]?.trim() ?? "";
}

function parseNumber(value: string) {
  if (!value || value === "--" || value.toLowerCase() === "n/a") return null;
  const negative = /^\(.*\)$/.test(value.trim());
  const cleaned = value.replace(/[^\d.,-]/g, "");
  const normalized = cleaned.includes(".") && cleaned.includes(",")
    ? cleaned.replace(/,/g, "")
    : cleaned.replace(/,/g, "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? (negative ? -parsed : parsed) : null;
}

function parseSearchVolume(value: string) {
  const rangeMatch = value.trim().match(/^([\d,.]+)\s*[-–]\s*[\d,.]+$/);
  return parseNumber(rangeMatch?.[1] ?? value);
}

function parsePercent(value: string) {
  const parsed = parseNumber(value);
  return parsed === null ? null : parsed / 100;
}

function currencyToMicros(value: string) {
  const parsed = parseNumber(value);
  return parsed === null ? null : Math.round(parsed * 1_000_000);
}

export function parseKeywordPlannerCsv(input: string, geo = "manual"): PlannerMetric[] {
  const rows = parseCsvRows(input);
  if (rows.length === 0) return [];

  const headerRowIndex = rows.findIndex((row) => {
    const normalized = row.map(normalizedHeader);
    return CSV_HEADER_ALIASES.keyword.some((alias) => normalized.includes(alias));
  });

  if (headerRowIndex === -1) {
    throw new Error(`Keyword Planner CSV is missing column: ${CSV_HEADER_ALIASES.keyword[0]}.`);
  }

  const headers = rows[headerRowIndex].map(normalizedHeader);
  const indexes = {
    keyword: headerIndex(headers, CSV_HEADER_ALIASES.keyword, true),
    averageMonthlySearches: headerIndex(headers, CSV_HEADER_ALIASES.averageMonthlySearches),
    threeMonthChange: headerIndex(headers, CSV_HEADER_ALIASES.threeMonthChange),
    yearOverYearChange: headerIndex(headers, CSV_HEADER_ALIASES.yearOverYearChange),
    competition: headerIndex(headers, CSV_HEADER_ALIASES.competition),
    competitionIndex: headerIndex(headers, CSV_HEADER_ALIASES.competitionIndex),
    lowTopOfPageBid: headerIndex(headers, CSV_HEADER_ALIASES.lowTopOfPageBid),
    highTopOfPageBid: headerIndex(headers, CSV_HEADER_ALIASES.highTopOfPageBid),
  };

  return rows.slice(headerRowIndex + 1).flatMap((row) => {
    const keyword = cell(row, indexes.keyword);
    if (!keyword) return [];

    return [{
      keyword,
      geo,
      averageMonthlySearches: parseSearchVolume(cell(row, indexes.averageMonthlySearches)),
      threeMonthChange: parsePercent(cell(row, indexes.threeMonthChange)),
      yearOverYearChange: parsePercent(cell(row, indexes.yearOverYearChange)),
      competition: cell(row, indexes.competition) || null,
      competitionIndex: parseNumber(cell(row, indexes.competitionIndex)),
      lowTopOfPageBidMicros: currencyToMicros(cell(row, indexes.lowTopOfPageBid)),
      highTopOfPageBidMicros: currencyToMicros(cell(row, indexes.highTopOfPageBid)),
    }];
  });
}

export function normalizeKeyword(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function keywordCluster(keyword: string) {
  const normalized = normalizeKeyword(keyword);

  if (/\b(cost|price|pricing|budget)\b/.test(normalized)) return "cost";
  if (/\b(vs|versus|liquid|compare|comparison)\b/.test(normalized)) return "decision";
  if (/\b(migrat|replatform|move)\w*\b/.test(normalized)) return "migration";
  if (/\b(audit|review|assessment)\b/.test(normalized)) return "audit";
  if (/\b(performance|speed|core web vitals|seo)\b/.test(normalized)) return "optimization";
  if (/\b(developer|expert|agency|hire|company|service)\w*\b/.test(normalized)) return "hiring";
  if (/\b(headless|hydrogen|storefront api)\b/.test(normalized)) return "education";
  return "other";
}

export function isRelevantKeyword(keyword: string) {
  const normalized = normalizeKeyword(keyword);
  if (/["/\\]/.test(normalized)) return false;
  if (normalized.length > 70 || normalized.split(" ").length > 9) return false;
  return (
    normalized.includes("shopify") ||
    normalized.includes("headless commerce") ||
    normalized.includes("storefront api")
  );
}

function finite(value: number | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function actionRank(action: OpportunityAction) {
  return {
    resolve_cannibalization: 5,
    refresh_existing: 4,
    validate_new_intent: 3,
    protect_existing: 2,
    hold: 1,
  }[action];
}

export function buildKeywordOpportunities(
  searchConsoleRows: readonly SearchConsoleKeywordRow[],
  plannerMetrics: readonly PlannerMetric[],
) {
  const byQuery = new Map<string, SearchConsoleKeywordRow[]>();
  const byPlannerKeyword = new Map<string, PlannerMetric[]>();

  for (const row of searchConsoleRows) {
    const key = normalizeKeyword(row.query);
    if (!isRelevantKeyword(key)) continue;
    byQuery.set(key, [...(byQuery.get(key) ?? []), row]);
  }

  for (const metric of plannerMetrics) {
    const key = normalizeKeyword(metric.keyword);
    if (!isRelevantKeyword(key)) continue;
    byPlannerKeyword.set(key, [...(byPlannerKeyword.get(key) ?? []), metric]);
  }

  const keywords = new Set([...byQuery.keys(), ...byPlannerKeyword.keys()]);
  const opportunities: KeywordOpportunity[] = [];

  for (const keyword of keywords) {
    const gscRows = byQuery.get(keyword) ?? [];
    const markets = byPlannerKeyword.get(keyword) ?? [];
    const impressions = gscRows.reduce((sum, row) => sum + finite(row.impressions), 0);
    const clicks = gscRows.reduce((sum, row) => sum + finite(row.clicks), 0);
    const materialPageThreshold = Math.max(5, impressions * 0.1);
    const materialRows = gscRows.filter((row) => row.impressions >= materialPageThreshold);
    const pageRows = materialRows.length > 0
      ? materialRows
      : [...gscRows].sort((left, right) => right.impressions - left.impressions).slice(0, 1);
    const pages = [...new Set(pageRows.map((row) => row.page))];
    const materialImpressions = pageRows.reduce((sum, row) => sum + row.impressions, 0);
    const weightedPosition = materialImpressions > 0
      ? pageRows.reduce((sum, row) => sum + row.position * row.impressions, 0) / materialImpressions
      : null;
    const ctr = impressions > 0 ? clicks / impressions : null;
    const combinedVolume = markets.some((metric) => metric.averageMonthlySearches !== null)
      ? markets.reduce((sum, metric) => sum + (metric.averageMonthlySearches ?? 0), 0)
      : null;

    let action: OpportunityAction = "hold";
    let rationale = "Available evidence is not strong enough for a content or targeting decision.";

    if (pages.length > 1 && impressions >= 10) {
      action = "resolve_cannibalization";
      rationale = `${pages.length} pages each received a material share of impressions for the same query; confirm the intended owner before changing content.`;
    } else if (weightedPosition !== null && weightedPosition >= 4 && weightedPosition <= 20 && impressions >= 10) {
      action = "refresh_existing";
      rationale = "The query already has measurable impressions in positions 4-20; improve the existing owner before considering a new URL.";
    } else if (weightedPosition !== null && weightedPosition < 4 && impressions >= 10) {
      action = "protect_existing";
      rationale = "The existing page already ranks strongly; monitor intent coverage and avoid creating a competing URL.";
    } else if (gscRows.length === 0 && combinedVolume !== null && combinedVolume > 0) {
      action = "validate_new_intent";
      rationale = "Keyword Planner reports demand but Search Console has no exact-query evidence; validate SERP intent and existing-page fit before adding content.";
    }

    opportunities.push({
      keyword,
      cluster: keywordCluster(keyword),
      action,
      confidence: gscRows.length > 0 && markets.length > 0
        ? "high"
        : gscRows.length > 0 && impressions >= 10
          ? "medium"
          : "low",
      rationale,
      searchConsole: gscRows.length > 0
        ? { clicks, impressions, ctr, position: weightedPosition, pages }
        : null,
      planner: markets.length > 0
        ? { combinedAverageMonthlySearches: combinedVolume, markets }
        : null,
    });
  }

  return opportunities.sort((left, right) => {
    const actionDifference = actionRank(right.action) - actionRank(left.action);
    if (actionDifference !== 0) return actionDifference;
    const leftImpressions = left.searchConsole?.impressions ?? 0;
    const rightImpressions = right.searchConsole?.impressions ?? 0;
    if (leftImpressions !== rightImpressions) return rightImpressions - leftImpressions;
    return (right.planner?.combinedAverageMonthlySearches ?? 0) -
      (left.planner?.combinedAverageMonthlySearches ?? 0);
  });
}
