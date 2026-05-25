import { describe, expect, it } from "vitest";

import {
  BUDGET_RANGE_OPTIONS,
  getBudgetRangeReviewMessage,
  HYDROGEN_BUILD_PACKAGES,
  PACKAGE_BUDGET_RANGE_OPTIONS,
} from "../lib/hydrogen-packages";

describe("package funnel data", () => {
  it("derives package budget options from the package registry", () => {
    expect(PACKAGE_BUDGET_RANGE_OPTIONS).toEqual(
      HYDROGEN_BUILD_PACKAGES.map((buildPackage) => ({
        value: buildPackage.budgetOption.value,
        label: buildPackage.budgetOption.label,
      })),
    );
  });

  it("preserves the full lead budget option sequence", () => {
    expect(BUDGET_RANGE_OPTIONS.map((option) => option.value)).toEqual([
      "not_set",
      "starter_2k",
      "standard_3k_35k",
      "growth_45k_5k",
      "custom_5k_plus",
      "retainer",
      "not_sure",
    ]);
  });

  it("keeps thank-you messages tied to package choices", () => {
    expect(getBudgetRangeReviewMessage("starter_2k")).toContain("core ecommerce flow");
    expect(getBudgetRangeReviewMessage("custom_5k_plus")).toContain("migration risk");
    expect(getBudgetRangeReviewMessage("standard_3k_35k")).toBeNull();
    expect(getBudgetRangeReviewMessage("not_sure")).toBeNull();
  });
});
