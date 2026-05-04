import { describe, expect, it } from "vitest";

import { getValidGaMeasurementId } from "../lib/analytics-config";

describe("getValidGaMeasurementId", () => {
  it("rejects empty and invalid values", () => {
    expect(getValidGaMeasurementId("")).toBeNull();
    expect(getValidGaMeasurementId("not-a-ga-id")).toBeNull();
    expect(getValidGaMeasurementId("UA-123456-1")).toBeNull();
  });

  it("rejects placeholder-like GA values", () => {
    expect(getValidGaMeasurementId("G-XXXXXXXXXX")).toBeNull();
    expect(getValidGaMeasurementId("G-YOURID123")).toBeNull();
    expect(getValidGaMeasurementId("G-PLACEHOLDER")).toBeNull();
  });

  it("accepts real-looking GA measurement IDs", () => {
    expect(getValidGaMeasurementId("G-ABC123DEF4")).toBe("G-ABC123DEF4");
    expect(getValidGaMeasurementId(" g-abc123def4 ")).toBe("G-ABC123DEF4");
  });
});
