import { readFileSync } from "node:fs";
import { join } from "node:path";

import { afterEach, describe, expect, it, vi } from "vitest";

import {
  checkRateLimitDurable,
  isRateLimited,
  isTrustedOrigin,
  safeCompare,
  verifyTurnstileToken,
} from "../lib/security";

const repoRoot = process.cwd();

function requestWithOrigin(origin?: string) {
  return new Request("https://hydrogenexpert.co/api/lead-capture", {
    headers: origin ? { origin } : undefined,
  });
}

describe("isTrustedOrigin", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("allows configured production origins", () => {
    vi.stubEnv("NODE_ENV", "production");

    expect(isTrustedOrigin(requestWithOrigin("https://hydrogenexpert.co"))).toBe(true);
    expect(isTrustedOrigin(requestWithOrigin("https://www.hydrogenexpert.co"))).toBe(true);
  });

  it("rejects evil origins and missing origins in production", () => {
    vi.stubEnv("NODE_ENV", "production");

    expect(isTrustedOrigin(requestWithOrigin("https://evil.example"))).toBe(false);
    expect(isTrustedOrigin(requestWithOrigin())).toBe(false);
  });

  it("preserves missing-origin local testing outside production", () => {
    vi.stubEnv("NODE_ENV", "test");

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

describe("verifyTurnstileToken", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("keeps lead capture usable when Turnstile is not fully configured", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret-only");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");

    await expect(verifyTurnstileToken("")).resolves.toEqual({
      success: true,
      optional: true,
    });
  });
});

describe("checkRateLimitDurable", () => {
  it("uses memory fallback when durable storage is unavailable and allowed", async () => {
    await expect(
      checkRateLimitDurable({
        supabase: null,
        scope: "test-memory-allowed",
        identifier: crypto.randomUUID(),
        limit: 1,
        windowMs: 60_000,
        fallbackPolicy: "memory",
      }),
    ).resolves.toMatchObject({
      allowed: true,
      reason: "within_limit",
      status: 200,
      backend: "memory",
      degraded: true,
    });
  });

  it("can fail closed when durable storage is unavailable", async () => {
    await expect(
      checkRateLimitDurable({
        supabase: null,
        scope: "test-deny",
        identifier: crypto.randomUUID(),
        limit: 1,
        windowMs: 60_000,
        fallbackPolicy: "deny",
      }),
    ).resolves.toEqual({
      allowed: false,
      reason: "backend_unavailable",
      status: 503,
      backend: "none",
      degraded: true,
    });
  });

  it("returns rate-limited status from durable storage", async () => {
    const supabase = {
      rpc: vi.fn().mockResolvedValue({ data: 2, error: null }),
    };

    await expect(
      checkRateLimitDurable({
        supabase: supabase as never,
        scope: "test-supabase",
        identifier: "127.0.0.1",
        limit: 1,
        windowMs: 60_000,
      }),
    ).resolves.toMatchObject({
      allowed: false,
      reason: "rate_limited",
      status: 429,
      backend: "supabase",
      degraded: false,
    });
  });
});

describe("isRateLimited", () => {
  it("bounds the in-memory bucket store when flooded with unique keys", () => {
    const victimKey = `victim:${crypto.randomUUID()}`;

    isRateLimited(victimKey, 2, 60_000);
    isRateLimited(victimKey, 2, 60_000);
    isRateLimited(victimKey, 2, 60_000);
    expect(isRateLimited(victimKey, 2, 60_000)).toBe(true);

    for (let index = 0; index < 2100; index += 1) {
      isRateLimited(`flood:${index}:${crypto.randomUUID()}`, 2, 60_000);
    }

    expect(isRateLimited(victimKey, 2, 60_000)).toBe(false);
  });
});

describe("response headers", () => {
  it("does not hardcode a stale homepage Last-Modified header", () => {
    const nextConfig = readFileSync(join(repoRoot, "next.config.ts"), "utf8");

    expect(nextConfig).not.toContain('key: "Last-Modified"');
  });
});
