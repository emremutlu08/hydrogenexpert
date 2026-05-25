import type { Database } from "../../lib/database.types";
import {
  formatLeadQualificationSummary,
  parseLeadQualification,
  type LeadQualification,
} from "../../lib/lead-qualification";
import { OWNER } from "../../lib/site";

export interface LeadCaptureFallbackAction {
  label: string;
  href: string;
}

export interface LeadCaptureApiResponse {
  ok: boolean;
  error?: string;
  fallback?: {
    message: string;
    links: readonly LeadCaptureFallbackAction[];
  };
}

export interface LeadCaptureSubmission {
  name: string;
  email: string;
  storeUrl: string | null;
  message: string;
  sourcePath: string;
  sourceKind: string;
  turnstileToken: string;
  qualification: LeadQualification;
  storedMessage: string;
}

type LeadSubmissionInsert = Database["public"]["Tables"]["lead_submissions"]["Insert"];

const LEAD_CAPTURE_FALLBACK = {
  message:
    "The form backend is unavailable right now. Send the same store URL and scope notes through one of these direct channels.",
  links: [
    { label: "Message on LinkedIn", href: OWNER.linkedIn },
    { label: "Hire on Upwork", href: OWNER.upwork },
  ],
} as const;

export function sanitizeLeadField(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidLeadEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function buildLeadCaptureFallbackResponse(
  error: string,
): LeadCaptureApiResponse {
  return {
    ok: false,
    error,
    fallback: LEAD_CAPTURE_FALLBACK,
  };
}

export function parseLeadCaptureSubmission(
  formData: FormData,
): { ok: true; submission: LeadCaptureSubmission } | { ok: false; status: 400; response: LeadCaptureApiResponse } {
  const name = sanitizeLeadField(formData.get("name"));
  const email = sanitizeLeadField(formData.get("email"));
  const storeUrl = sanitizeLeadField(formData.get("storeUrl")) || null;
  const message = sanitizeLeadField(formData.get("message"));
  const turnstileToken = sanitizeLeadField(formData.get("turnstileToken"));
  const sourcePath = sanitizeLeadField(formData.get("sourcePath")) || "/";
  const sourceKind = sanitizeLeadField(formData.get("sourceKind")) || "site_cta";
  const qualification = parseLeadQualification(formData);
  const qualificationSummary = formatLeadQualificationSummary(qualification);
  const storedMessage = [
    qualificationSummary ? `Project requirements:\n${qualificationSummary}` : "",
    message ? `Message:\n${message}` : "",
  ]
    .filter(Boolean)
    .join("\n\n") || qualification.mainProblem || "Hydrogen quiz result";
  const isQuizResult = sourceKind === "hydrogen_quiz_result";

  if (!name || !email || (!isQuizResult && (!storeUrl || !qualification.mainProblem))) {
    return {
      ok: false,
      status: 400,
      response: { ok: false, error: "Please fill out the required fields." },
    };
  }

  if (!isValidLeadEmail(email)) {
    return {
      ok: false,
      status: 400,
      response: { ok: false, error: "Please enter a valid email address." },
    };
  }

  if (
    name.length > 120 ||
    email.length > 200 ||
    (storeUrl && storeUrl.length > 300) ||
    message.length > 4000
  ) {
    return {
      ok: false,
      status: 400,
      response: { ok: false, error: "One or more fields are too long." },
    };
  }

  return {
    ok: true,
    submission: {
      name,
      email,
      storeUrl,
      message,
      sourcePath,
      sourceKind,
      turnstileToken,
      qualification,
      storedMessage,
    },
  };
}

export function buildLeadSubmissionInsert(
  submission: LeadCaptureSubmission,
): LeadSubmissionInsert {
  return {
    name: submission.name,
    email: submission.email,
    store_url: submission.storeUrl,
    message: submission.storedMessage,
    source_path: submission.sourcePath,
    source_kind: submission.sourceKind,
    current_stack: submission.qualification.currentStack,
    monthly_revenue_band: submission.qualification.monthlyRevenueBand,
    main_problem: submission.qualification.mainProblem,
    budget_range: submission.qualification.budgetRange,
    timeline: submission.qualification.timeline,
    shopify_plus_status: submission.qualification.shopifyPlusStatus,
    engagement_type: submission.qualification.engagementType,
  };
}
