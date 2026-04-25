import { createHash } from "crypto";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/database.types";

const RATE_LIMIT_BUCKETS = new Map<string, number[]>();

const TRUSTED_ORIGINS = new Set([
  "https://hydrogenexpert.co",
  "https://www.hydrogenexpert.co",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);

export function buildContentSecurityPolicy() {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.supabase.co",
    "frame-src https://www.googletagmanager.com",
    "upgrade-insecure-requests",
  ].join("; ");
}

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
    return true;
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

function hashIdentifier(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export async function isRateLimitedDurable({
  supabase,
  scope,
  identifier,
  limit,
  windowMs,
}: {
  supabase: SupabaseClient<Database> | null;
  scope: string;
  identifier: string;
  limit: number;
  windowMs: number;
}) {
  if (!supabase) {
    return isRateLimited(`${scope}:${identifier}`, limit, windowMs);
  }

  const windowStart = new Date(Math.floor(Date.now() / windowMs) * windowMs).toISOString();
  const keyHash = hashIdentifier(`${scope}:${identifier}`);

  const { data, error } = await supabase.rpc("bump_rate_limit", {
    p_scope: scope,
    p_key_hash: keyHash,
    p_window_start: windowStart,
  });

  if (error || typeof data !== "number") {
    return isRateLimited(`${scope}:${identifier}`, limit, windowMs);
  }

  return data > limit;
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

  if (!secret) {
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
