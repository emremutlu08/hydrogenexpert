import { hasAnalyticsConsent } from "./analytics-consent";

type AnalyticsValue = string | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;
type ExternalDestination = "linkedin" | "upwork";
type LeadStatus = "success" | "error";
type InternalCtaEvent =
  | "cta_click_fit_audit"
  | "cta_click_email_brief"
  | "cta_click_case_studies"
  | "package_cta_click"
  | "scope_review_cta_click"
  | "audit_cta_click"
  | "case_study_click"
  | "cost_page_cta_click"
  | "service_page_cta_click";
type LeadSelectionEvent =
  | "budget_selected"
  | "service_selected"
  | "design_status_selected"
  | "product_count_selected"
  | "feature_selected";

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined && value !== ""),
  ) as Record<string, string>;
}

function sendEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", eventName, cleanParams(params));
    return true;
  }

  return false;
}

function routeParams(context: { sourceKind?: string; sourcePath?: string } = {}) {
  return {
    source_kind: context.sourceKind,
    source_path: context.sourcePath,
  };
}

export function trackCTA(
  destination: ExternalDestination,
  context: { sourceKind?: string; sourcePath?: string; ctaLabel?: string } = {},
) {
  const params = {
    cta_destination: destination,
    ...routeParams(context),
    cta_label: context.ctaLabel,
  };

  sendEvent("external_contact_click", params);
}

export function trackAnchorCTA(
  eventName: InternalCtaEvent,
  context: {
    sourceKind?: string;
    sourcePath?: string;
    target?: string;
    ctaLabel?: string;
    packageName?: string;
  } = {},
) {
  const params = {
    ...routeParams(context),
    cta_destination: context.target,
    cta_label: context.ctaLabel,
    cta_kind: eventName,
    package_name: context.packageName,
  };

  sendEvent("scope_review_cta_click", params);
}

export function trackLeadFormView(source: string, sourcePath?: string) {
  return sendEvent("lead_form_view", routeParams({ sourceKind: source, sourcePath }));
}

export function trackLeadStart(source: string, sourcePath?: string) {
  const params = routeParams({ sourceKind: source, sourcePath });

  return sendEvent("lead_form_start", params);
}

export function trackLeadSubmit(
  source: string,
  status: LeadStatus,
  details: AnalyticsParams = {},
  sourcePath?: string,
) {
  const params = { ...routeParams({ sourceKind: source, sourcePath }), ...details };

  sendEvent(status === "success" ? "lead_form_submit_success" : "lead_form_submit_error", params);
}

export function trackPackageCtaClick(
  context: { packageName: string; ctaLabel: string; sourceKind?: string; sourcePath?: string },
) {
  const params = {
    ...routeParams(context),
    package_name: context.packageName,
    cta_label: context.ctaLabel,
  };

  sendEvent("scope_review_cta_click", params);
}

export function trackLeadSelection(
  eventName: LeadSelectionEvent,
  context: {
    sourceKind?: string;
    sourcePath?: string;
    value?: string | null;
    selectedFeaturesCount?: number;
  } = {},
) {
  const params = {
    ...routeParams(context),
    budget_range: eventName === "budget_selected" ? context.value : undefined,
    service_type: eventName === "service_selected" ? context.value : undefined,
    design_status: eventName === "design_status_selected" ? context.value : undefined,
    product_count: eventName === "product_count_selected" ? context.value : undefined,
    feature: eventName === "feature_selected" ? context.value : undefined,
    selected_features_count:
      eventName === "feature_selected" && context.selectedFeaturesCount !== undefined
        ? String(context.selectedFeaturesCount)
        : undefined,
  };

  sendEvent(eventName, params);
}

export function trackProofLinkClicked(
  context: { proofLabel: string; href: string; sourceKind?: string; sourcePath?: string },
) {
  sendEvent("proof_link_clicked", {
    ...routeParams(context),
    proof_label: context.proofLabel,
    cta_destination: context.href,
  });
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

export function trackChecklistCopy(context: { templateId: string; templateTitle: string }) {
  sendEvent("checklist_copy", {
    template_id: context.templateId,
    template_title: context.templateTitle,
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
