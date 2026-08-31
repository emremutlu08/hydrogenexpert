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
