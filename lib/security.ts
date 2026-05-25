import { createHash } from "crypto";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/database.types";

const RATE_LIMIT_BUCKETS = new Map<string, number[]>();

const TRUSTED_ORIGINS = new Set([
  "https://hydrogenexpert.co",
  "https://www.hydrogenexpert.co",
  "http://localhost:3000",
  "http://localhost:3100",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3100",
]);

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export function isTrustedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return process.env.NODE_ENV !== "production";
  }

  return TRUSTED_ORIGINS.has(origin);
}

export function isRateLimited(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const windowStart = now - windowMs;
  const recentHits = (RATE_LIMIT_BUCKETS.get(key) || []).filter((timestamp) => timestamp > windowStart);

  recentHits.push(now);
  RATE_LIMIT_BUCKETS.set(key, recentHits);

  return recentHits.length > limit;
}

export type RateLimitFallbackPolicy = "memory" | "deny";

export interface RateLimitCheckResult {
  allowed: boolean;
  reason: "within_limit" | "rate_limited" | "backend_unavailable";
  status: 200 | 429 | 503;
  backend: "supabase" | "memory" | "none";
  degraded: boolean;
}

function hashIdentifier(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function memoryRateLimitResult({
  key,
  limit,
  windowMs,
}: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitCheckResult {
  const rateLimited = isRateLimited(key, limit, windowMs);

  return {
    allowed: !rateLimited,
    reason: rateLimited ? "rate_limited" : "within_limit",
    status: rateLimited ? 429 : 200,
    backend: "memory",
    degraded: true,
  };
}

function unavailableRateLimitResult(): RateLimitCheckResult {
  return {
    allowed: false,
    reason: "backend_unavailable",
    status: 503,
    backend: "none",
    degraded: true,
  };
}

export async function checkRateLimitDurable({
  supabase,
  scope,
  identifier,
  limit,
  windowMs,
  fallbackPolicy = "memory",
}: {
  supabase: SupabaseClient<Database> | null;
  scope: string;
  identifier: string;
  limit: number;
  windowMs: number;
  fallbackPolicy?: RateLimitFallbackPolicy;
}): Promise<RateLimitCheckResult> {
  const memoryKey = `${scope}:${identifier}`;

  if (!supabase) {
    return fallbackPolicy === "memory"
      ? memoryRateLimitResult({ key: memoryKey, limit, windowMs })
      : unavailableRateLimitResult();
  }

  const windowStart = new Date(Math.floor(Date.now() / windowMs) * windowMs).toISOString();
  const keyHash = hashIdentifier(`${scope}:${identifier}`);

  const { data, error } = await supabase.rpc("bump_rate_limit", {
    p_scope: scope,
    p_key_hash: keyHash,
    p_window_start: windowStart,
  });

  if (error || typeof data !== "number") {
    return fallbackPolicy === "memory"
      ? memoryRateLimitResult({ key: memoryKey, limit, windowMs })
      : unavailableRateLimitResult();
  }

  const rateLimited = data > limit;

  return {
    allowed: !rateLimited,
    reason: rateLimited ? "rate_limited" : "within_limit",
    status: rateLimited ? 429 : 200,
    backend: "supabase",
    degraded: false,
  };
}

export async function isRateLimitedDurable(
  options: Parameters<typeof checkRateLimitDurable>[0],
) {
  const result = await checkRateLimitDurable(options);

  return !result.allowed;
}

export function safeCompare(a: string, b: string) {
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);

  if (aBytes.length !== bBytes.length) {
    return false;
  }

  let mismatch = 0;

  for (let index = 0; index < aBytes.length; index += 1) {
    mismatch |= aBytes[index] ^ bBytes[index];
  }

  return mismatch === 0;
}

export function getApiHeaders(extra?: HeadersInit) {
  return {
    "Cache-Control": "no-store, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
    ...extra,
  };
}

export function sanitizeJsonScriptContent(input: string) {
  return input
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export async function verifyTurnstileToken(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!secret || !siteKey) {
    return { success: true, optional: true as const };
  }

  if (!token) {
    return { success: false, optional: false as const };
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
      ...(ip ? { remoteip: ip } : {}),
    }),
    cache: "no-store",
  });

  const payload = (await response.json()) as { success?: boolean };

  return {
    success: Boolean(payload.success),
    optional: false as const,
  };
}
