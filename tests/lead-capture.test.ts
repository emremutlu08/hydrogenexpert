import { describe, expect, it } from "vitest";

import {
  buildLeadCaptureFallbackResponse,
  buildLeadSubmissionInsert,
  parseLeadCaptureSubmission,
} from "../features/lead-capture/server";

function buildLeadFormData() {
  const formData = new FormData();

  formData.set("name", "Ada Merchant");
  formData.set("email", "ada@example.com");
  formData.set("storeUrl", "https://example.com");
  formData.set("mainProblem", "performance");
  formData.set("budgetRange", "starter_2k");
  formData.set("designStatus", "figma_ready");
  formData.set("productCount", "20_100");
  formData.append("neededFeatures", "pdp");
  formData.append("neededFeatures", "cart_drawer");
  formData.set("message", "Need a lean first pass.");
  formData.set("sourcePath", "/contact");
  formData.set("sourceKind", "contact_page");

  return formData;
}

describe("lead capture server helpers", () => {
  it("builds a validated submission and Supabase insert payload", () => {
    const result = parseLeadCaptureSubmission(buildLeadFormData());

    expect(result.ok).toBe(true);

    if (!result.ok) {
      return;
    }

    expect(result.submission.storedMessage).toContain("Budget range: Around $2K - Starter Storefront");
    expect(result.submission.storedMessage).toContain("Design status: Yes, Figma is ready");
    expect(result.submission.storedMessage).toContain("Needed features: PDP, Cart drawer");

    expect(buildLeadSubmissionInsert(result.submission)).toMatchObject({
      name: "Ada Merchant",
      email: "ada@example.com",
      store_url: "https://example.com",
      source_path: "/contact",
      source_kind: "contact_page",
      main_problem: "performance",
      budget_range: "starter_2k",
      message: expect.stringContaining("Need a lean first pass."),
    });
  });

  it("returns a validation response for incomplete required fields", () => {
    const formData = buildLeadFormData();
    formData.delete("storeUrl");

    expect(parseLeadCaptureSubmission(formData)).toEqual({
      ok: false,
      status: 400,
      response: { ok: false, error: "Please fill out the required fields." },
    });
  });

  it("returns direct fallback actions for storage failures", () => {
    expect(buildLeadCaptureFallbackResponse("Your message could not be saved right now.")).toEqual({
      ok: false,
      error: "Your message could not be saved right now.",
      fallback: {
        message:
          "The form backend is unavailable right now. Send the same store URL and scope notes through one of these direct channels.",
        links: [
          { label: "Message on LinkedIn", href: "https://www.linkedin.com/in/emremutlujs/" },
          { label: "Hire on Upwork", href: "https://www.upwork.com/freelancers/emremutlu" },
        ],
      },
    });
  });
});
