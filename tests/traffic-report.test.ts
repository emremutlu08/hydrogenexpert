import { describe, expect, it } from "vitest";

import {
  detectTrafficAnomalies,
  formatChange,
  normalizeCruxClsPercentile,
  parseExactContentRangeTotal,
  percentChange,
  requireLighthouseCategoryScores,
  summarizeSearchConsoleRow,
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

  it("accepts complete PageSpeed category scores", () => {
    expect(
      requireLighthouseCategoryScores({
        performance: { score: 0.91 },
        seo: { score: 1 },
        accessibility: { score: 0.97 },
      }),
    ).toEqual({ performance: 0.91, seo: 1, accessibility: 0.97 });
  });

  it("normalizes the CrUX field CLS percentile from the API scale", () => {
    expect(normalizeCruxClsPercentile(12)).toBe(0.12);
    expect(normalizeCruxClsPercentile(0)).toBe(0);
    expect(normalizeCruxClsPercentile(undefined)).toBeNull();
  });

  it("rejects incomplete PageSpeed responses instead of inventing zero scores", () => {
    expect(() =>
      requireLighthouseCategoryScores({
        performance: { score: null },
        seo: { score: 1 },
      }),
    ).toThrow(
      "PageSpeed returned incomplete Lighthouse category scores: performance, accessibility.",
    );
  });

  it("parses finite nonnegative Supabase content-range totals", () => {
    expect(parseExactContentRangeTotal("0-0/12")).toBe(12);
    expect(parseExactContentRangeTotal("*/0")).toBe(0);
  });

  it("rejects malformed Supabase content-range totals", () => {
    expect(() => parseExactContentRangeTotal("0-0/not-a-number")).toThrow(
      "lead count response returned an invalid exact count: not-a-number",
    );
    expect(() => parseExactContentRangeTotal("0-0/*")).toThrow(
      "lead count response omitted an exact count",
    );
    expect(() => parseExactContentRangeTotal(null)).toThrow(
      "lead count response omitted an exact count",
    );
  });

  it("preserves absent Search Console aggregate positions as unavailable", () => {
    expect(summarizeSearchConsoleRow()).toEqual({
      clicks: null,
      impressions: null,
      ctr: null,
      position: null,
      hasData: false,
    });
    expect(summarizeSearchConsoleRow({ clicks: 0, impressions: 0 })).toEqual({
      clicks: 0,
      impressions: 0,
      ctr: null,
      position: null,
      hasData: true,
    });
  });
});
