import { afterEach, describe, expect, it } from "vitest";

import { isTrustedOrigin, safeCompare } from "../lib/security";

function requestWithOrigin(origin?: string) {
  return new Request("https://hydrogenexpert.co/api/lead-capture", {
    headers: origin ? { origin } : undefined,
  });
}

describe("isTrustedOrigin", () => {
  const originalNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("allows configured production origins", () => {
    process.env.NODE_ENV = "production";

    expect(isTrustedOrigin(requestWithOrigin("https://hydrogenexpert.co"))).toBe(true);
    expect(isTrustedOrigin(requestWithOrigin("https://www.hydrogenexpert.co"))).toBe(true);
  });

  it("rejects evil origins and missing origins in production", () => {
    process.env.NODE_ENV = "production";

    expect(isTrustedOrigin(requestWithOrigin("https://evil.example"))).toBe(false);
    expect(isTrustedOrigin(requestWithOrigin())).toBe(false);
  });

  it("preserves missing-origin local testing outside production", () => {
    process.env.NODE_ENV = "test";

    expect(isTrustedOrigin(requestWithOrigin())).toBe(true);
    expect(isTrustedOrigin(requestWithOrigin("http://localhost:3000"))).toBe(true);
    expect(isTrustedOrigin(requestWithOrigin("http://127.0.0.1:3100"))).toBe(true);
  });
});

describe("safeCompare", () => {
  it("accepts equal strings", () => {
    expect(safeCompare("Bearer secret", "Bearer secret")).toBe(true);
  });

  it("rejects same-length mismatches", () => {
    expect(safeCompare("Bearer secret", "Bearer public")).toBe(false);
  });

  it("rejects different-length strings", () => {
    expect(safeCompare("short", "a much longer secret")).toBe(false);
  });
});
