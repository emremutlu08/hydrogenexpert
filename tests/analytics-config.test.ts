import { describe, expect, it } from "vitest";

import {
  getProductionGaMeasurementId,
  getValidGaMeasurementId,
} from "../lib/analytics-config";

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

describe("getProductionGaMeasurementId", () => {
  it("allows a valid ID only in the production deployment", () => {
    expect(getProductionGaMeasurementId("G-ABC123DEF4", "production")).toBe("G-ABC123DEF4");
    expect(getProductionGaMeasurementId("G-ABC123DEF4", "preview")).toBeNull();
    expect(getProductionGaMeasurementId("G-ABC123DEF4", "development")).toBeNull();
    expect(getProductionGaMeasurementId("G-ABC123DEF4", undefined)).toBeNull();
  });

  it("still rejects invalid production IDs", () => {
    expect(getProductionGaMeasurementId("G-XXXXXXXXXX", "production")).toBeNull();
  });
});
