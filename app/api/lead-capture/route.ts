import { NextResponse } from "next/server";

import {
  getApiHeaders,
  getClientIp,
  isRateLimitedDurable,
  isTrustedOrigin,
  verifyTurnstileToken,
} from "@/lib/security";
import { parseLeadQualification } from "@/lib/lead-qualification";
import { getSupabaseAdminClient } from "@/lib/supabase";

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Origin not allowed." },
      { status: 403, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const formData = await request.formData();
  const trap = sanitize(formData.get("company"));
  const ip = getClientIp(request);
  const supabase = getSupabaseAdminClient();

  if (trap) {
    return NextResponse.json({ ok: true }, { status: 200, headers: getApiHeaders({ Vary: "Origin" }) });
  }

  if (
    await isRateLimitedDurable({
      supabase,
      scope: "lead-capture",
      identifier: ip,
      limit: 5,
      windowMs: 15 * 60 * 1000,
    })
  ) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Please try again a little later." },
      { status: 429, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const storeUrl = sanitize(formData.get("storeUrl")) || null;
  const message = sanitize(formData.get("message"));
  const turnstileToken = sanitize(formData.get("turnstileToken"));
  const sourcePath = sanitize(formData.get("sourcePath")) || "/";
  const sourceKind = sanitize(formData.get("sourceKind")) || "site_cta";
  const qualification = parseLeadQualification(formData);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill out the required fields." },
      { status: 400, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  if (name.length > 120 || email.length > 200 || (storeUrl && storeUrl.length > 300) || message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "One or more fields are too long." },
      { status: 400, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Lead capture is not configured yet." },
      { status: 503, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const turnstileCheck = await verifyTurnstileToken(turnstileToken, ip);

  if (!turnstileCheck.success) {
    return NextResponse.json(
      { ok: false, error: "Bot verification failed. Please refresh and try again." },
      { status: 400, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  const { error } = await supabase.from("lead_submissions").insert({
    name,
    email,
    store_url: storeUrl,
    message,
    source_path: sourcePath,
    source_kind: sourceKind,
    current_stack: qualification.currentStack,
    monthly_revenue_band: qualification.monthlyRevenueBand,
    main_problem: qualification.mainProblem,
    budget_range: qualification.budgetRange,
    timeline: qualification.timeline,
    shopify_plus_status: qualification.shopifyPlusStatus,
    engagement_type: qualification.engagementType,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Your message could not be saved right now." },
      { status: 500, headers: getApiHeaders({ Vary: "Origin" }) },
    );
  }

  return NextResponse.json({ ok: true }, { headers: getApiHeaders({ Vary: "Origin" }) });
}
