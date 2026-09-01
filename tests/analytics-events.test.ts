import { afterEach, describe, expect, it, vi } from "vitest";

import {
  ANALYTICS_READY_EVENT,
  setRuntimeAnalyticsConsent,
} from "../lib/analytics-consent";

import {
  trackAnchorCTA,
  trackBlogCardClick,
  trackBlogView,
  trackChecklistCopy,
  trackCTA,
  trackLeadFormView,
  trackLeadSelection,
  trackLeadStart,
  trackLeadSubmit,
  trackPackageCtaClick,
  trackProofLinkClicked,
  trackQuizAnswer,
  trackQuizResult,
} from "../lib/analytics";

function setupAnalytics(preference: "granted" | "denied" = "granted") {
  const gtag = vi.fn();
  const localStorage = {
    getItem: vi.fn(() => preference),
    setItem: vi.fn(),
  };

  vi.stubGlobal("window", { gtag, localStorage });

  return gtag;
}

function eventCalls(gtag: ReturnType<typeof vi.fn>) {
  return gtag.mock.calls.map((call) => ({
    eventName: call[1],
    params: call[2],
  }));
}

describe("canonical analytics events", () => {
  afterEach(() => {
    setRuntimeAnalyticsConsent(null);
    vi.unstubAllGlobals();
  });

  it("applies an unpersisted runtime choice consistently to event delivery", () => {
    const gtag = setupAnalytics("denied");

    setRuntimeAnalyticsConsent("granted");
    expect(trackLeadStart("runtime_grant", "/contact")).toBe(true);

    setRuntimeAnalyticsConsent("denied");
    expect(trackLeadStart("runtime_denial", "/contact")).toBe(false);
    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "lead_form_start",
    ]);
  });

  it("does not emit events without granted analytics consent", () => {
    const gtag = setupAnalytics("denied");

    trackCTA("linkedin", { sourceKind: "hero", sourcePath: "/" });
    const delivered = trackLeadStart("contact_page", "/contact");

    expect(gtag).not.toHaveBeenCalled();
    expect(delivered).toBe(false);
  });

  it("emits one external-contact event with non-reserved context", () => {
    const gtag = setupAnalytics();

    trackCTA("upwork", {
      sourceKind: "service:shopify-hydrogen-seo",
      sourcePath: "/shopify-hydrogen-seo",
      ctaLabel: "Hire on Upwork",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        eventName: "external_contact_click",
        params: {
          cta_destination: "upwork",
          cta_label: "Hire on Upwork",
          source_kind: "service:shopify-hydrogen-seo",
          source_path: "/shopify-hydrogen-seo",
        },
      },
    ]);
    expect(Object.keys(eventCalls(gtag)[0]?.params ?? {})).not.toContain("source");
  });

  it("retries consented CTA events once when the analytics runtime becomes ready", () => {
    const listeners = new Map<string, EventListener>();
    const gtag = vi.fn();
    const localStorage = { getItem: vi.fn(() => "granted"), setItem: vi.fn() };
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage,
      addEventListener: vi.fn((name: string, listener: EventListener) => {
        listeners.set(name, listener);
      }),
      removeEventListener: vi.fn((name: string) => {
        listeners.delete(name);
      }),
    };
    vi.stubGlobal("window", windowStub);

    trackCTA("linkedin", { sourceKind: "hero", sourcePath: "/" });
    trackAnchorCTA("scope_review_cta_click", {
      sourceKind: "hero",
      sourcePath: "/",
      target: "/contact",
    });

    expect(gtag).not.toHaveBeenCalled();
    expect(windowStub.addEventListener).toHaveBeenCalledTimes(3);

    windowStub.gtag = gtag;
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));

    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "external_contact_click",
      "scope_review_cta_click",
    ]);
    expect(windowStub.removeEventListener).toHaveBeenCalledWith(
      ANALYTICS_READY_EVENT,
      expect.any(Function),
    );
  });

  it("does not queue CTA events before analytics consent", () => {
    const gtag = vi.fn();
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage: { getItem: vi.fn(() => "denied"), setItem: vi.fn() },
      addEventListener: vi.fn(),
    };
    vi.stubGlobal("window", windowStub);

    trackCTA("upwork", { sourceKind: "hero", sourcePath: "/" });

    expect(gtag).not.toHaveBeenCalled();
    expect(windowStub.addEventListener).not.toHaveBeenCalled();
  });

  it("retries an initial blog view for a returning consented visitor", () => {
    const listeners = new Map<string, EventListener>();
    const gtag = vi.fn();
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage: { getItem: vi.fn(() => "granted"), setItem: vi.fn() },
      addEventListener: vi.fn((name: string, listener: EventListener) => {
        listeners.set(name, listener);
      }),
      removeEventListener: vi.fn((name: string) => {
        listeners.delete(name);
      }),
    };
    vi.stubGlobal("window", windowStub);

    expect(trackBlogView("production-note")).toBe(true);
    expect(gtag).not.toHaveBeenCalled();

    windowStub.gtag = gtag;
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));

    expect(eventCalls(gtag)).toEqual([
      { eventName: "blog_view", params: { post_slug: "production-note" } },
    ]);
  });

  it("separates package browsing from genuine scope-review events", () => {
    const gtag = setupAnalytics();

    trackAnchorCTA("audit_cta_click", {
      sourceKind: "fit_audit_cta",
      sourcePath: "/shopify-hydrogen-fit-audit",
      target: "/contact#fit-review-form",
      ctaLabel: "Request scope review",
    });
    trackPackageCtaClick({
      packageName: "Hydrogen Starter Storefront",
      ctaLabel: "Request Scope Review",
      sourceKind: "package_cards",
      sourcePath: "/shopify-hydrogen-packages",
    });
    trackAnchorCTA("package_cta_click", {
      sourceKind: "homepage_hero",
      sourcePath: "/",
      target: "/shopify-hydrogen-packages",
      ctaLabel: "View Build Packages",
      packageName: "All Hydrogen packages",
    });

    expect(eventCalls(gtag)).toEqual([
      {
        eventName: "scope_review_cta_click",
        params: {
          cta_destination: "/contact#fit-review-form",
          cta_kind: "audit_cta_click",
          cta_label: "Request scope review",
          source_kind: "fit_audit_cta",
          source_path: "/shopify-hydrogen-fit-audit",
        },
      },
      {
        eventName: "scope_review_cta_click",
        params: {
          cta_label: "Request Scope Review",
          package_name: "Hydrogen Starter Storefront",
          source_kind: "package_cards",
          source_path: "/shopify-hydrogen-packages",
        },
      },
      {
        eventName: "package_browse_click",
        params: {
          cta_destination: "/shopify-hydrogen-packages",
          cta_kind: "package_cta_click",
          cta_label: "View Build Packages",
          package_name: "All Hydrogen packages",
          source_kind: "homepage_hero",
          source_path: "/",
        },
      },
    ]);
  });

  it("emits one event for each lead funnel state", () => {
    const gtag = setupAnalytics();

    expect(trackLeadFormView("contact_page", "/contact")).toBe(true);
    expect(trackLeadStart("contact_page", "/contact")).toBe(true);
    trackLeadSubmit(
      "contact_page",
      "success",
      { budget_range: "starter_2k", engagement_type: "fit_audit" },
      "/contact",
    );
    trackLeadSubmit("contact_page", "error", {}, "/contact");

    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "lead_form_view",
      "lead_form_start",
      "lead_form_submit_success",
      "lead_form_submit_error",
    ]);
    expect(eventCalls(gtag)[2]?.params).toEqual({
      budget_range: "starter_2k",
      engagement_type: "fit_audit",
      source_kind: "contact_page",
      source_path: "/contact",
    });
  });

  it("tracks one-shot funnel stages once per mounted form visit", () => {
    const gtag = setupAnalytics();

    expect(trackLeadFormView("revisited_contact", "/contact", "visit-a")).toBe(true);
    expect(trackLeadFormView("revisited_contact", "/contact", "visit-a")).toBe(true);
    expect(trackLeadFormView("revisited_contact", "/contact", "visit-b")).toBe(true);
    expect(trackLeadStart("revisited_contact", "/contact", "visit-a")).toBe(true);
    expect(trackLeadStart("revisited_contact", "/contact", "visit-a")).toBe(true);
    expect(trackLeadStart("revisited_contact", "/contact", "visit-b")).toBe(true);

    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "lead_form_view",
      "lead_form_view",
      "lead_form_start",
      "lead_form_start",
    ]);
  });

  it("delivers a pending terminal event once when consented analytics becomes ready", () => {
    const listeners = new Map<string, EventListener>();
    const gtag = vi.fn();
    const localStorage = { getItem: vi.fn(() => "granted"), setItem: vi.fn() };
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage,
      addEventListener: vi.fn((name: string, listener: EventListener) => {
        listeners.set(name, listener);
      }),
      removeEventListener: vi.fn((name: string) => {
        listeners.delete(name);
      }),
    };
    vi.stubGlobal("window", windowStub);

    expect(
      trackLeadSubmit("contact_page", "success", { budget_range: "starter_2k" }, "/contact"),
    ).toBe(false);
    expect(gtag).not.toHaveBeenCalled();

    windowStub.gtag = gtag;
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));

    expect(eventCalls(gtag)).toEqual([
      {
        eventName: "lead_form_submit_success",
        params: {
          budget_range: "starter_2k",
          source_kind: "contact_page",
          source_path: "/contact",
        },
      },
    ]);
    expect(windowStub.removeEventListener).toHaveBeenCalledWith(
      ANALYTICS_READY_EVENT,
      expect.any(Function),
    );
  });

  it("preserves pending funnel stages through success navigation", () => {
    const listeners = new Map<string, EventListener>();
    const gtag = vi.fn();
    const localStorage = {
      getItem: vi.fn<() => string | null>(() => null),
      setItem: vi.fn(),
    };
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage,
      addEventListener: vi.fn((name: string, listener: EventListener) => {
        listeners.set(name, listener);
      }),
      removeEventListener: vi.fn((name: string) => {
        listeners.delete(name);
      }),
    };
    vi.stubGlobal("window", windowStub);

    expect(trackLeadFormView("contact_navigation", "/contact")).toBe(false);
    expect(trackLeadStart("contact_navigation", "/contact")).toBe(false);
    expect(trackLeadSubmit("contact_navigation", "success", {}, "/contact")).toBe(false);

    localStorage.getItem.mockReturnValue("granted");
    windowStub.gtag = gtag;
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));

    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "lead_form_view",
      "lead_form_start",
      "lead_form_submit_success",
    ]);

    expect(trackLeadFormView("contact_navigation", "/contact")).toBe(true);
    expect(trackLeadStart("contact_navigation", "/contact")).toBe(true);
    expect(eventCalls(gtag)).toHaveLength(3);
  });

  it("clears pre-consent funnel events when analytics is denied", () => {
    const listeners = new Map<string, EventListener>();
    const gtag = vi.fn();
    const localStorage = {
      getItem: vi.fn<() => string | null>(() => null),
      setItem: vi.fn(),
    };
    const windowStub = {
      gtag: undefined as typeof gtag | undefined,
      localStorage,
      addEventListener: vi.fn((name: string, listener: EventListener) => {
        listeners.set(name, listener);
      }),
      removeEventListener: vi.fn((name: string) => {
        listeners.delete(name);
      }),
    };
    vi.stubGlobal("window", windowStub);

    expect(trackLeadFormView("denied_contact", "/contact")).toBe(false);
    expect(trackLeadStart("denied_contact", "/contact")).toBe(false);

    localStorage.getItem.mockReturnValue("denied");
    listeners.get("storage")?.(new Event("storage"));
    localStorage.getItem.mockReturnValue("granted");
    windowStub.gtag = gtag;
    listeners.get(ANALYTICS_READY_EVENT)?.(new Event(ANALYTICS_READY_EVENT));

    expect(gtag).not.toHaveBeenCalled();
    expect(windowStub.removeEventListener).toHaveBeenCalledWith(
      ANALYTICS_READY_EVENT,
      expect.any(Function),
    );

    expect(trackLeadFormView("denied_contact", "/contact")).toBe(true);
    expect(trackLeadStart("denied_contact", "/contact")).toBe(true);
    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "lead_form_view",
      "lead_form_start",
    ]);
  });

  it("keeps useful content and qualification events singular and PII-free", () => {
    const gtag = setupAnalytics();

    trackLeadSelection("budget_selected", {
      sourceKind: "contact_page",
      sourcePath: "/contact",
      value: "starter_2k",
    });
    trackProofLinkClicked({
      proofLabel: "Upwork profile",
      href: "https://example.com/upwork",
      sourceKind: "trust_bar",
      sourcePath: "/",
    });
    trackBlogView("production-note");
    trackQuizAnswer({ questionNumber: 2, answer: "yes", sourcePath: "/should-i-use-it" });
    trackQuizResult({ score: 4, total: 5, sourcePath: "/should-i-use-it" });
    trackBlogCardClick({
      slug: "production-note",
      contentType: "blog",
      sourcePath: "/blog",
    });
    trackChecklistCopy({ templateId: "launch-qa", templateTitle: "Launch QA" });

    expect(eventCalls(gtag).map((call) => call.eventName)).toEqual([
      "budget_selected",
      "proof_link_clicked",
      "blog_view",
      "quiz_answer_click",
      "quiz_result_view",
      "blog_card_click",
      "checklist_copy",
    ]);
    expect(eventCalls(gtag)[1]?.params).toMatchObject({
      cta_destination: "https://example.com/upwork",
      source_kind: "trust_bar",
      source_path: "/",
    });
  });
});
