import { describe, expect, it } from "vitest";

import {
  leadQualificationToAnalyticsParams,
  parseLeadQualification,
} from "../lib/lead-qualification";

describe("parseLeadQualification", () => {
  it("keeps only known low-cardinality values", () => {
    const formData = new FormData();
    formData.set("currentStack", "shopify_hydrogen");
    formData.set("mainProblem", "seo");
    formData.set("budgetRange", "custom_5k_plus");
    formData.set("timeline", "rescue");
    formData.set("monthlyRevenueBand", "1m_plus");
    formData.set("shopifyPlusStatus", "yes");
    formData.set("engagementType", "migration");
    formData.set("designStatus", "figma_ready");
    formData.set("productCount", "100_500");
    formData.append("neededFeatures", "pdp");
    formData.append("neededFeatures", "filters");
    formData.append("neededFeatures", "unknown_feature");

    expect(parseLeadQualification(formData)).toEqual({
      currentStack: "shopify_hydrogen",
      mainProblem: "seo",
      budgetRange: "custom_5k_plus",
      timeline: "rescue",
      monthlyRevenueBand: "1m_plus",
      shopifyPlusStatus: "yes",
      engagementType: "migration",
      designStatus: "figma_ready",
      productCount: "100_500",
      neededFeatures: ["pdp", "filters"],
    });
  });

  it("drops unknown values instead of storing free-form tracking data", () => {
    const formData = new FormData();
    formData.set("currentStack", "my secret stack");
    formData.set("budgetRange", "999999");

    expect(parseLeadQualification(formData)).toEqual({
      currentStack: null,
      mainProblem: null,
      budgetRange: null,
      timeline: null,
      monthlyRevenueBand: null,
      shopifyPlusStatus: null,
      engagementType: null,
      designStatus: null,
      productCount: null,
      neededFeatures: [],
    });
  });
});

describe("leadQualificationToAnalyticsParams", () => {
  it("uses analytics-safe snake_case keys", () => {
    expect(
      leadQualificationToAnalyticsParams({
        currentStack: "shopify_liquid",
        mainProblem: "performance",
        budgetRange: "standard_3k_35k",
        timeline: "1_3_months",
        monthlyRevenueBand: "not_shared",
        shopifyPlusStatus: "unsure",
        engagementType: "standard_build",
        designStatus: "adapt_existing",
        productCount: "20_100",
        neededFeatures: ["product_listing", "cart_drawer"],
      }),
    ).toEqual({
      current_stack: "shopify_liquid",
      main_problem: "performance",
      budget_range: "standard_3k_35k",
      timeline: "1_3_months",
      shopify_plus_status: "unsure",
      engagement_type: "standard_build",
      design_status: "adapt_existing",
      product_count: "20_100",
      needed_features: "product_listing,cart_drawer",
    });
  });
});
