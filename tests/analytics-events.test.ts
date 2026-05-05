import { afterEach, describe, expect, it, vi } from "vitest";

import {
  trackAnchorCTA,
  trackCTA,
  trackLeadFormView,
  trackLeadSubmit,
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
    ]);
  });
});
