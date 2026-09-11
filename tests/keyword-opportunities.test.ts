import { describe, expect, it } from "vitest";

import {
  buildKeywordOpportunities,
  isRelevantKeyword,
  keywordCluster,
  parseKeywordPlannerCsv,
} from "../features/seo-intelligence/keyword-opportunities";

describe("SEO keyword opportunities", () => {
  it("parses an English Keyword Planner export without treating its preamble as headers", () => {
    const csv = `Keyword Stats 2026-09-01 at 10_00_00\n\nKeyword,Avg. monthly searches,Three month change,YoY change,Competition,Competition (indexed value),Top of page bid (low range),Top of page bid (high range)\n"shopify hydrogen developer","1,000",25%,-10%,High,81,$2.50,$8.75\n`;

    expect(parseKeywordPlannerCsv(csv, "US")).toEqual([
      {
        keyword: "shopify hydrogen developer",
        geo: "US",
        averageMonthlySearches: 1000,
        threeMonthChange: 0.25,
        yearOverYearChange: -0.1,
        competition: "High",
        competitionIndex: 81,
        lowTopOfPageBidMicros: 2_500_000,
        highTopOfPageBidMicros: 8_750_000,
      },
    ]);
  });

  it("uses the conservative lower bound for search-volume ranges", () => {
    const csv = `Keyword,Avg. monthly searches,Three month change,YoY change,Competition\nshopify hydrogen agency,10 – 100,0%,0%,Medium\nshopify hydrogen migration,0 - 10,--,--,--\n`;

    expect(parseKeywordPlannerCsv(csv, "US").map((metric) => metric.averageMonthlySearches)).toEqual([
      10,
      0,
    ]);
  });

  it("keeps only Shopify and directly relevant headless terms", () => {
    expect(isRelevantKeyword("shopify hydrogen agency")).toBe(true);
    expect(isRelevantKeyword("headless commerce development")).toBe(true);
    expect(isRelevantKeyword("green hydrogen consulting")).toBe(false);
    expect(isRelevantKeyword('shopify hydrogen agency "')).toBe(false);
    expect(isRelevantKeyword("shopify/hydrogen")).toBe(false);
    expect(keywordCluster("shopify hydrogen migration")).toBe("migration");
    expect(keywordCluster("shopify hydrogen pricing")).toBe("cost");
  });

  it("prioritizes cannibalization and existing-page refreshes before unvalidated demand", () => {
    const opportunities = buildKeywordOpportunities(
      [
        {
          query: "shopify hydrogen agency",
          page: "/shopify-hydrogen-experts",
          clicks: 1,
          impressions: 30,
          ctr: 1 / 30,
          position: 9,
        },
        {
          query: "shopify hydrogen agency",
          page: "/headless-shopify-agency",
          clicks: 0,
          impressions: 20,
          ctr: 0,
          position: 14,
        },
        {
          query: "shopify hydrogen audit",
          page: "/shopify-hydrogen-audit",
          clicks: 2,
          impressions: 40,
          ctr: 0.05,
          position: 8,
        },
      ],
      [
        {
          keyword: "shopify hydrogen agency",
          geo: "US",
          averageMonthlySearches: 100,
          threeMonthChange: null,
          yearOverYearChange: null,
          competition: "HIGH",
          competitionIndex: 80,
          lowTopOfPageBidMicros: 2_000_000,
          highTopOfPageBidMicros: 6_000_000,
        },
        {
          keyword: "shopify hydrogen support",
          geo: "US",
          averageMonthlySearches: 50,
          threeMonthChange: null,
          yearOverYearChange: null,
          competition: "MEDIUM",
          competitionIndex: 50,
          lowTopOfPageBidMicros: 1_000_000,
          highTopOfPageBidMicros: 3_000_000,
        },
      ],
    );

    expect(opportunities.map((row) => [row.keyword, row.action])).toEqual([
      ["shopify hydrogen agency", "resolve_cannibalization"],
      ["shopify hydrogen audit", "refresh_existing"],
      ["shopify hydrogen support", "validate_new_intent"],
    ]);
    expect(opportunities[0].confidence).toBe("high");
    expect(opportunities[0].searchConsole?.position).toBe(11);
  });

  it("does not call a one-off secondary page a cannibalization problem", () => {
    const [opportunity] = buildKeywordOpportunities(
      [
        {
          query: "shopify hydrogen cost",
          page: "/shopify-hydrogen-cost",
          clicks: 4,
          impressions: 95,
          ctr: 4 / 95,
          position: 8,
        },
        {
          query: "shopify hydrogen cost",
          page: "/cost",
          clicks: 0,
          impressions: 5,
          ctr: 0,
          position: 30,
        },
      ],
      [],
    );

    expect(opportunity.action).toBe("refresh_existing");
    expect(opportunity.searchConsole?.pages).toEqual(["/shopify-hydrogen-cost"]);
  });
});
