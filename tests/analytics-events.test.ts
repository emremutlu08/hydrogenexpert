import { afterEach, describe, expect, it, vi } from "vitest";

import {
  trackAnchorCTA,
  trackBlogCardClick,
  trackCTA,
  trackLeadFormView,
  trackLeadSubmit,
  trackQuizAnswer,
  trackQuizResult,
} from "../lib/analytics";

function eventCalls(gtag: ReturnType<typeof vi.fn>) {
  return gtag.mock.calls.map((call) => ({
    command: call[0],
    eventName: call[1],
    params: call[2],
  }));
}

describe("analytics events", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("tracks dedicated external CTA events with context", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackCTA("upwork", {
      sourceKind: "service:shopify-hydrogen-seo",
      sourcePath: "/shopify-hydrogen-seo",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "cta_click",
        params: {
          destination: "upwork",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "cta_click_upwork",
        params: {
          destination: "upwork",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "upwork_click",
        params: {
          destination: "upwork",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "service_page_cta_click",
        params: {
          destination: "upwork",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
        },
      },
    ]);
  });

  it("tracks lead form view and submit without empty params", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackLeadFormView("contact_page", "/contact");
    trackLeadSubmit("contact_page", "success", {
      budget_range: "",
      engagement_type: "fit_audit",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "lead_form_view",
        params: { source: "contact_page", source_path: "/contact" },
      },
      {
        command: "event",
        eventName: "lead_form_submit",
        params: {
          source: "contact_page",
          status: "success",
          engagement_type: "fit_audit",
        },
      },
      {
        command: "event",
        eventName: "lead_form_submit_success",
        params: {
          source: "contact_page",
          status: "success",
          engagement_type: "fit_audit",
        },
      },
    ]);
  });

  it("supports explicit internal CTA event tracking", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackAnchorCTA("audit_cta_click", {
      sourceKind: "fit_audit_cta",
      sourcePath: "/shopify-hydrogen-fit-audit",
      target: "/contact",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "audit_cta_click",
        params: {
          source: "fit_audit_cta",
          source_path: "/shopify-hydrogen-fit-audit",
          target: "/contact",
        },
      },
      {
        command: "event",
        eventName: "cta_click_fit_audit",
        params: {
          source: "fit_audit_cta",
          source_path: "/shopify-hydrogen-fit-audit",
          target: "/contact",
        },
      },
    ]);
  });

  it("tracks email brief, quiz, and content card events", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackAnchorCTA("cta_click_email_brief", {
      sourceKind: "footer_start_here",
      sourcePath: "/",
      target: "/contact#fit-review-form",
    });
    trackQuizAnswer({ questionNumber: 2, answer: "yes", sourcePath: "/should-i-use-it" });
    trackQuizResult({ score: 4, total: 5, sourcePath: "/should-i-use-it" });
    trackBlogCardClick({
      slug: "shopify-hydrogen-product-description-ssr-seo",
      contentType: "blog",
      sourcePath: "/blog",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "cta_click_email_brief",
        params: {
          source: "footer_start_here",
          source_path: "/",
          target: "/contact#fit-review-form",
        },
      },
      {
        command: "event",
        eventName: "quiz_answer_click",
        params: {
          question_number: "2",
          answer: "yes",
          source_path: "/should-i-use-it",
        },
      },
      {
        command: "event",
        eventName: "quiz_result_view",
        params: {
          score: "4",
          total: "5",
          source_path: "/should-i-use-it",
        },
      },
      {
        command: "event",
        eventName: "blog_card_click",
        params: {
          content_slug: "shopify-hydrogen-product-description-ssr-seo",
          content_type: "blog",
          source_path: "/blog",
        },
      },
    ]);
  });
});
