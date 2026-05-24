import { afterEach, describe, expect, it, vi } from "vitest";

import {
  trackAnchorCTA,
  trackBlogCardClick,
  trackChecklistCopy,
  trackCTA,
  trackLeadStart,
  trackLeadSelection,
  trackLeadFormView,
  trackLeadSubmit,
  trackPackageCtaClick,
  trackProofLinkClicked,
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
          route: "/shopify-hydrogen-seo",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
          source_section: "service:shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "cta_click_upwork",
        params: {
          destination: "upwork",
          route: "/shopify-hydrogen-seo",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
          source_section: "service:shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "upwork_click",
        params: {
          destination: "upwork",
          route: "/shopify-hydrogen-seo",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
          source_section: "service:shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "upwork_clicked",
        params: {
          destination: "upwork",
          route: "/shopify-hydrogen-seo",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
          source_section: "service:shopify-hydrogen-seo",
        },
      },
      {
        command: "event",
        eventName: "service_page_cta_click",
        params: {
          destination: "upwork",
          route: "/shopify-hydrogen-seo",
          source: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
          source_section: "service:shopify-hydrogen-seo",
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
        params: {
          route: "/contact",
          source: "contact_page",
          source_path: "/contact",
          source_section: "contact_page",
        },
      },
      {
        command: "event",
        eventName: "lead_form_submit",
        params: {
          source: "contact_page",
          source_section: "contact_page",
          status: "success",
          engagement_type: "fit_audit",
        },
      },
      {
        command: "event",
        eventName: "lead_form_submit_success",
        params: {
          source: "contact_page",
          source_section: "contact_page",
          status: "success",
          engagement_type: "fit_audit",
        },
      },
      {
        command: "event",
        eventName: "contact_form_submitted",
        params: {
          source: "contact_page",
          source_section: "contact_page",
          status: "success",
          engagement_type: "fit_audit",
        },
      },
    ]);
  });

  it("tracks contact form start as a funnel event", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackLeadStart("contact_page", "/contact");

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "lead_form_start",
        params: {
          route: "/contact",
          source: "contact_page",
          source_path: "/contact",
          source_section: "contact_page",
        },
      },
      {
        command: "event",
        eventName: "contact_form_started",
        params: {
          route: "/contact",
          source: "contact_page",
          source_path: "/contact",
          source_section: "contact_page",
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
          route: "/shopify-hydrogen-fit-audit",
          source: "fit_audit_cta",
          source_path: "/shopify-hydrogen-fit-audit",
          source_section: "fit_audit_cta",
          target: "/contact",
        },
      },
      {
        command: "event",
        eventName: "cta_click_fit_audit",
        params: {
          route: "/shopify-hydrogen-fit-audit",
          source: "fit_audit_cta",
          source_path: "/shopify-hydrogen-fit-audit",
          source_section: "fit_audit_cta",
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
          route: "/",
          source: "footer_start_here",
          source_path: "/",
          source_section: "footer_start_here",
          target: "/contact#fit-review-form",
        },
      },
      {
        command: "event",
        eventName: "scope_review_cta_click",
        params: {
          route: "/",
          source: "footer_start_here",
          source_path: "/",
          source_section: "footer_start_here",
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

  it("tracks package CTAs, form selections, and proof links without PII", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackPackageCtaClick({
      packageName: "Hydrogen Starter Storefront",
      ctaLabel: "Request Scope Review",
      sourceKind: "package_cards",
      sourcePath: "/shopify-hydrogen-packages",
    });
    trackLeadSelection("budget_selected", {
      sourceKind: "contact_page",
      sourcePath: "/contact",
      value: "starter_2k",
    });
    trackLeadSelection("feature_selected", {
      sourceKind: "contact_page",
      sourcePath: "/contact",
      value: "cart_drawer",
      selectedFeaturesCount: 3,
    });
    trackProofLinkClicked({
      proofLabel: "Top Rated Plus",
      href: "https://example.com/upwork",
      sourceKind: "trust_bar",
      sourcePath: "/",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "package_cta_click",
        params: {
          cta_label: "Request Scope Review",
          package_name: "Hydrogen Starter Storefront",
          route: "/shopify-hydrogen-packages",
          source: "package_cards",
          source_path: "/shopify-hydrogen-packages",
          source_section: "package_cards",
        },
      },
      {
        command: "event",
        eventName: "scope_review_cta_click",
        params: {
          cta_label: "Request Scope Review",
          package_name: "Hydrogen Starter Storefront",
          route: "/shopify-hydrogen-packages",
          source: "package_cards",
          source_path: "/shopify-hydrogen-packages",
          source_section: "package_cards",
        },
      },
      {
        command: "event",
        eventName: "budget_selected",
        params: {
          budget_range: "starter_2k",
          route: "/contact",
          source: "contact_page",
          source_path: "/contact",
          source_section: "contact_page",
        },
      },
      {
        command: "event",
        eventName: "feature_selected",
        params: {
          feature: "cart_drawer",
          route: "/contact",
          selected_features_count: "3",
          source: "contact_page",
          source_path: "/contact",
          source_section: "contact_page",
        },
      },
      {
        command: "event",
        eventName: "proof_link_clicked",
        params: {
          proof_label: "Top Rated Plus",
          route: "/",
          source: "trust_bar",
          source_path: "/",
          source_section: "trust_bar",
          target: "https://example.com/upwork",
        },
      },
    ]);
  });

  it("tracks checklist copy events without personal data", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackChecklistCopy({
      templateId: "launch-qa-checklist",
      templateTitle: "Launch QA checklist",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        command: "event",
        eventName: "checklist_copy",
        params: {
          template_id: "launch-qa-checklist",
          template_title: "Launch QA checklist",
        },
      },
    ]);
  });
});
