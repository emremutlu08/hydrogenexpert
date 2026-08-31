import { describe, expect, it } from "vitest";

import {
  detectTrafficAnomalies,
  formatChange,
  percentChange,
} from "../lib/traffic-report";

describe("traffic report calculations", () => {
  it("calculates comparable-period changes without inventing a baseline", () => {
    expect(percentChange(120, 100)).toBe(20);
    expect(formatChange(80, 100)).toBe("-20.0%");
    expect(formatChange(0, 0)).toBe("+0.0%");
    expect(formatChange(4, 0)).toBe("new from zero");
  });

  it("flags high-volume, low-quality daily spikes", () => {
    const points = [
      { date: "2026-08-01", sessions: 3, engagedSessions: 2, views: 5 },
      { date: "2026-08-02", sessions: 4, engagedSessions: 3, views: 6 },
      { date: "2026-08-03", sessions: 42, engagedSessions: 2, views: 42 },
      { date: "2026-08-04", sessions: 5, engagedSessions: 4, views: 8 },
    ];

    expect(detectTrafficAnomalies(points)).toEqual([
      {
        date: "2026-08-03",
        sessions: 42,
        engagedSessions: 2,
        views: 42,
        engagementRate: 2 / 42,
        viewsPerSession: 1,
      },
    ]);
  });

  it("does not flag normal engaged growth", () => {
    const points = [
      { date: "2026-08-01", sessions: 2, engagedSessions: 1, views: 3 },
      { date: "2026-08-02", sessions: 3, engagedSessions: 2, views: 5 },
      { date: "2026-08-03", sessions: 12, engagedSessions: 8, views: 20 },
    ];

    expect(detectTrafficAnomalies(points)).toEqual([]);
  });
});
