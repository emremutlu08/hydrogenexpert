import { NextResponse } from "next/server";

import {
  buildLeadCaptureFallbackResponse,
  buildLeadSubmissionInsert,
  parseLeadCaptureSubmission,
  sanitizeLeadField,
} from "@/features/lead-capture/server";
import {
  checkRateLimitDurable,
  getApiHeaders,
  getClientIp,
  isTrustedOrigin,
  verifyTurnstileToken,
} from "@/lib/security";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Origin not allowed." },
      { status: 403, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const formData = await request.formData();
  const trap = sanitizeLeadField(formData.get("company"));
  const ip = getClientIp(request);
  const supabase = getSupabaseAdminClient();

  if (trap) {
    return NextResponse.json({ ok: true }, { status: 200, headers: getApiHeaders({ Vary: "Origin" }) });
  }

  const rateLimit = await checkRateLimitDurable({
    supabase,
    scope: "lead-capture",
    identifier: ip,
    limit: 5,
    windowMs: 15 * 60 * 1000,
    fallbackPolicy: "memory",
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Please try again a little later." },
      { status: 429, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const parsed = parseLeadCaptureSubmission(formData);

  if (!parsed.ok) {
    return NextResponse.json(
      parsed.response,
      { status: parsed.status, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  if (!supabase) {
    return NextResponse.json(
      buildLeadCaptureFallbackResponse("Lead capture is not configured yet."),
      { status: 503, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const turnstileCheck = await verifyTurnstileToken(parsed.submission.turnstileToken, ip);

  if (!turnstileCheck.success) {
    return NextResponse.json(
      { ok: false, error: "Bot verification failed. Please refresh and try again." },
      { status: 400, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const { error } = await supabase
    .from("lead_submissions")
    .insert(buildLeadSubmissionInsert(parsed.submission));

  if (error) {
    return NextResponse.json(
      buildLeadCaptureFallbackResponse("Your message could not be saved right now."),
      { status: 500, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  return NextResponse.json({ ok: true }, { headers: getApiHeaders({ Vary: "Origin" }) });
}
