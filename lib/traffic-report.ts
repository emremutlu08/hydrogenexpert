export interface DailyTrafficPoint {
  date: string;
  sessions: number;
  engagedSessions: number;
  views: number;
}

export interface TrafficAnomaly extends DailyTrafficPoint {
  engagementRate: number;
  viewsPerSession: number;
}

export interface SearchConsoleAggregateRow {
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
}

const LIGHTHOUSE_CATEGORY_NAMES = ["performance", "seo", "accessibility"] as const;

type LighthouseCategoryName = (typeof LIGHTHOUSE_CATEGORY_NAMES)[number];

export function requireLighthouseCategoryScores(
  categories?: Record<string, { score?: number | null } | undefined>,
) {
  const missing: LighthouseCategoryName[] = [];
  const scores = {} as Record<LighthouseCategoryName, number>;

  for (const name of LIGHTHOUSE_CATEGORY_NAMES) {
    const score = categories?.[name]?.score;

    if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 1) {
      missing.push(name);
      continue;
    }

    scores[name] = score;
  }

  if (missing.length > 0) {
    throw new Error(
      `PageSpeed returned incomplete Lighthouse category scores: ${missing.join(", ")}.`,
    );
  }

  return scores;
}

export function parseExactContentRangeTotal(contentRange: string | null) {
  const total = contentRange?.split("/")[1];

  if (!total || total === "*") {
    throw new Error("lead count response omitted an exact count");
  }

  if (!/^\d+$/.test(total)) {
    throw new Error(`lead count response returned an invalid exact count: ${total}`);
  }

  const parsed = Number(total);

  if (!Number.isSafeInteger(parsed) || parsed < 0) {
    throw new Error(`lead count response returned an invalid exact count: ${total}`);
  }

  return parsed;
}

function finiteNumberOrNull(value: number | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export function summarizeSearchConsoleRow(row?: SearchConsoleAggregateRow) {
  return {
    clicks: finiteNumberOrNull(row?.clicks),
    impressions: finiteNumberOrNull(row?.impressions),
    ctr: finiteNumberOrNull(row?.ctr),
    position: finiteNumberOrNull(row?.position),
    hasData: Boolean(row),
  };
}

export function normalizeCruxClsPercentile(percentile: number | undefined) {
  return typeof percentile === "number" && Number.isFinite(percentile)
    ? percentile / 100
    : null;
}

export function percentChange(current: number, previous: number) {
  if (previous === 0) {
    return current === 0 ? 0 : null;
  }

  return ((current - previous) / previous) * 100;
}

export function formatChange(current: number, previous: number) {
  const change = percentChange(current, previous);

  if (change === null) {
    return "new from zero";
  }

  return `${change >= 0 ? "+" : ""}${change.toFixed(1)}%`;
}

function median(values: number[]) {
  if (values.length === 0) {
    return 0;
  }

  const sorted = [...values].sort((left, right) => left - right);
  const midpoint = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return ((sorted[midpoint - 1] ?? 0) + (sorted[midpoint] ?? 0)) / 2;
  }

  return sorted[midpoint] ?? 0;
}

export function detectTrafficAnomalies(points: DailyTrafficPoint[]) {
  const sessionMedian = median(points.map((point) => point.sessions));
  const sessionThreshold = Math.max(10, sessionMedian * 3);

  return points
    .filter((point) => {
      if (point.sessions < sessionThreshold || point.sessions === 0) {
        return false;
      }

      const engagementRate = point.engagedSessions / point.sessions;
      const viewsPerSession = point.views / point.sessions;

      return engagementRate < 0.15 || viewsPerSession <= 1.1;
    })
    .map<TrafficAnomaly>((point) => ({
      ...point,
      engagementRate: point.engagedSessions / point.sessions,
      viewsPerSession: point.views / point.sessions,
    }));
}
