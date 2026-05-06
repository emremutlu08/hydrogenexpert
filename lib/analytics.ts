type AnalyticsValue = string | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;
type ExternalDestination = "linkedin" | "upwork";
type LeadStatus = "success" | "error";
type InternalCtaEvent =
  | "cta_click_fit_audit"
  | "cta_click_email_brief"
  | "cta_click_case_studies"
  | "audit_cta_click"
  | "case_study_click"
  | "cost_page_cta_click"
  | "service_page_cta_click";

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
  sendEvent(`cta_click_${destination}`, params);
  sendEvent(`${destination}_click`, params);

  const contextualEvent = contextualCtaEvent(context.sourceKind);

  if (contextualEvent) {
    sendEvent(contextualEvent, params);
  }
}

export function trackAnchorCTA(
  eventName: InternalCtaEvent,
  context: { sourceKind?: string; sourcePath?: string; target?: string } = {},
) {
  const params = {
    source: context.sourceKind,
    source_path: context.sourcePath,
    target: context.target,
  };

  sendEvent(eventName, params);

  if (eventName === "audit_cta_click") {
    sendEvent("cta_click_fit_audit", params);
  }

  if (eventName === "case_study_click") {
    sendEvent("cta_click_case_studies", params);
  }
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
  const params = { source, status, ...details };

  sendEvent("lead_form_submit", params);
  sendEvent(status === "success" ? "lead_form_submit_success" : "lead_form_submit_error", params);
}

export function trackBlogView(slug: string) {
  sendEvent("blog_view", { post_slug: slug });
}

export function trackQuizAnswer(
  context: { questionNumber: number; answer: "yes" | "no"; sourcePath?: string },
) {
  sendEvent("quiz_answer_click", {
    question_number: String(context.questionNumber),
    answer: context.answer,
    source_path: context.sourcePath,
  });
}

export function trackQuizResult(
  context: { score: number; total: number; sourcePath?: string },
) {
  sendEvent("quiz_result_view", {
    score: String(context.score),
    total: String(context.total),
    source_path: context.sourcePath,
  });
}

export function trackBlogCardClick(
  context: { slug: string; contentType: "blog" | "article"; sourcePath?: string },
) {
  sendEvent("blog_card_click", {
    content_slug: context.slug,
    content_type: context.contentType,
    source_path: context.sourcePath,
  });
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
        sendEvent("article_read_depth", { post_slug: slug, depth: "80" });
        sendEvent("blog_read", { post_slug: slug });
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );

  observer.observe(marker);

  return () => observer.disconnect();
}
