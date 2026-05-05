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
    formData.set("budgetRange", "60k_plus");
    formData.set("timeline", "rescue");
    formData.set("monthlyRevenueBand", "1m_plus");
    formData.set("shopifyPlusStatus", "yes");
    formData.set("engagementType", "migration");

    expect(parseLeadQualification(formData)).toEqual({
      currentStack: "shopify_hydrogen",
      mainProblem: "seo",
      budgetRange: "60k_plus",
      timeline: "rescue",
      monthlyRevenueBand: "1m_plus",
      shopifyPlusStatus: "yes",
      engagementType: "migration",
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
    });
  });
});

describe("leadQualificationToAnalyticsParams", () => {
  it("uses analytics-safe snake_case keys", () => {
    expect(
      leadQualificationToAnalyticsParams({
        currentStack: "shopify_liquid",
        mainProblem: "performance",
        budgetRange: "15k_30k",
        timeline: "1_3_months",
        monthlyRevenueBand: "not_shared",
        shopifyPlusStatus: "unsure",
        engagementType: "fit_audit",
      }),
    ).toEqual({
      current_stack: "shopify_liquid",
      main_problem: "performance",
      budget_range: "15k_30k",
      timeline: "1_3_months",
      shopify_plus_status: "unsure",
      engagement_type: "fit_audit",
    });
  });
});
