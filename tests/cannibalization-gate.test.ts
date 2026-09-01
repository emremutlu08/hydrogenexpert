import { describe, expect, it } from "vitest";

import { evaluateAgencyCannibalizationGate } from "../features/search-intent";

describe("agency cannibalization gate", () => {
  it("blocks redirects and consolidation before September 5", () => {
    expect(
      evaluateAgencyCannibalizationGate({
        asOfDate: "2026-09-01",
        baselineUrlCount: 10,
        currentUrlCount: 12,
        ownerPresent: false,
      }).decision,
    ).toBe("wait");
  });

  it("keeps distinct pages when the owner ranks and URL count falls by at least 30%", () => {
    expect(
      evaluateAgencyCannibalizationGate({
        asOfDate: "2026-09-05",
        baselineUrlCount: 10,
        currentUrlCount: 7,
        ownerPresent: true,
      }).decision,
    ).toBe("keep");
  });

  it("rewrites only the agency page when the owner is absent but URL count falls", () => {
    expect(
      evaluateAgencyCannibalizationGate({
        asOfDate: "2026-09-05",
        baselineUrlCount: 10,
        currentUrlCount: 6,
        ownerPresent: false,
      }).decision,
    ).toBe("rewrite");
  });

  it("recommends a separate consolidation PR when the owner is absent and URL count stays high", () => {
    expect(
      evaluateAgencyCannibalizationGate({
        asOfDate: "2026-09-05",
        baselineUrlCount: 10,
        currentUrlCount: 12,
        ownerPresent: false,
      }).decision,
    ).toBe("consolidate");
  });
});
