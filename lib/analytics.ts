type AnalyticsValue = string | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;
type ExternalDestination = "linkedin" | "upwork";
type LeadStatus = "success" | "error";

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined && value !== ""),
  ) as Record<string, string>;
}

function sendEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, cleanParams(params));
  }
}

function contextualCtaEvent(sourceKind?: string) {
  if (!sourceKind) {
    return null;
  }

  if (sourceKind.includes("audit") || sourceKind.includes("fit_audit")) {
    return "audit_cta_click";
  }

  if (sourceKind.includes("cost")) {
    return "cost_page_cta_click";
  }

  if (sourceKind.startsWith("service:")) {
    return "service_page_cta_click";
  }

  if (sourceKind.startsWith("case_study:") || sourceKind.includes("case_studies")) {
    return "case_study_click";
  }

  return null;
}

export function trackCTA(
  destination: ExternalDestination,
  context: { sourceKind?: string; sourcePath?: string } = {},
) {
  const params = {
    destination,
    source: context.sourceKind,
    source_path: context.sourcePath,
  };

  sendEvent("cta_click", params);
  sendEvent(`${destination}_click`, params);

  const contextualEvent = contextualCtaEvent(context.sourceKind);

  if (contextualEvent) {
    sendEvent(contextualEvent, params);
  }
}

export function trackAnchorCTA(
  eventName: "audit_cta_click" | "case_study_click" | "cost_page_cta_click" | "service_page_cta_click",
  context: { sourceKind?: string; sourcePath?: string; target?: string } = {},
) {
  sendEvent(eventName, {
    source: context.sourceKind,
    source_path: context.sourcePath,
    target: context.target,
  });
}

export function trackLeadFormView(source: string, sourcePath?: string) {
  sendEvent("lead_form_view", { source, source_path: sourcePath });
}

export function trackLeadStart(source: string, sourcePath?: string) {
  sendEvent("lead_form_start", { source, source_path: sourcePath });
}

export function trackLeadSubmit(
  source: string,
  status: LeadStatus,
  details: AnalyticsParams = {},
) {
  sendEvent("lead_form_submit", { source, status, ...details });
}

export function trackBlogView(slug: string) {
  sendEvent("blog_view", { post_slug: slug });
}

export function trackScrollDepth(slug: string) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const marker = document.querySelector<HTMLElement>("[data-blog-scroll-marker]");

  if (!marker || marker.dataset.trackingBound === "true") {
    return () => undefined;
  }

  marker.dataset.trackingBound = "true";
  let fired = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry?.isIntersecting && !fired) {
        fired = true;
        sendEvent("blog_read", { post_slug: slug });
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );

  observer.observe(marker);

  return () => observer.disconnect();
}
