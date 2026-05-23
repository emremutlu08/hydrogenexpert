import { describe, expect, it } from "vitest";

import {
  COMMERCIAL_COPY_RULES,
  checkCommercialCopy,
} from "../lib/commercial-launch-guard";

describe("commercial launch copy guard", () => {
  it("checks the post-launch commercial routes", () => {
    expect(COMMERCIAL_COPY_RULES.map((rule) => rule.route)).toEqual([
      "/",
      "/shopify-hydrogen-packages",
      "/shopify-hydrogen-cost",
      "/custom-shopify-hydrogen-storefront",
      "/shopify-hydrogen-audit",
      "/shopify-hydrogen-agency-usa",
      "/contact",
      "/when-not-to-use-hydrogen",
    ]);
  });

  it("fails with route and phrase details when required copy disappears", () => {
    expect(checkCommercialCopy("/", "<html>Request Scope Review</html>")).toContainEqual({
      route: "/",
      phrase: "$2K-$5K",
      reason: "required commercial copy is missing",
    });
  });

  it("rejects legacy premium agency pricing language", () => {
    expect(
      checkCommercialCopy(
        "/shopify-hydrogen-cost",
        "Hydrogen Starter Storefront Request Scope Review $15K-$30K lean build",
      ),
    ).toContainEqual({
      route: "/shopify-hydrogen-cost",
      phrase: "$15K-$30K lean build",
      reason: "forbidden legacy pricing or positioning copy returned",
    });
  });

  it("allows higher pricing only in custom or enterprise context", () => {
    expect(
      checkCommercialCopy(
        "/shopify-hydrogen-cost",
        "Some complex enterprise custom migrations can exceed $60K when risk is high.",
      ).some((violation) => violation.phrase === "$60K"),
    ).toBe(false);

    expect(
      checkCommercialCopy(
        "/shopify-hydrogen-cost",
        "A main package card says $60K for normal fixed-scope work.",
      ),
    ).toContainEqual({
      route: "/shopify-hydrogen-cost",
      phrase: "$60K",
      reason: "higher pricing appears outside a complex/custom/enterprise context",
    });
  });
});
