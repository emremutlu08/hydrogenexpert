export const CURRENT_STACK_OPTIONS = [
  { value: "shopify_liquid", label: "Shopify Liquid theme" },
  { value: "shopify_hydrogen", label: "Shopify Hydrogen / custom storefront" },
  { value: "headless_other", label: "Other headless setup" },
  { value: "migration_planning", label: "Planning a migration" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const MONTHLY_REVENUE_OPTIONS = [
  { value: "not_shared", label: "Prefer not to share" },
  { value: "pre_revenue", label: "Pre-revenue / early launch" },
  { value: "under_50k", label: "Under $50K/mo" },
  { value: "50k_250k", label: "$50K-$250K/mo" },
  { value: "250k_1m", label: "$250K-$1M/mo" },
  { value: "1m_plus", label: "$1M+/mo" },
] as const;

export const MAIN_PROBLEM_OPTIONS = [
  { value: "feature_velocity", label: "Feature velocity" },
  { value: "performance", label: "Performance" },
  { value: "seo", label: "SEO / migration risk" },
  { value: "migration", label: "Liquid to Hydrogen migration" },
  { value: "ux", label: "Custom UX" },
  { value: "checkout_cart", label: "Cart / checkout handoff" },
  { value: "app_stack", label: "App stack / integrations" },
  { value: "unsure", label: "Unsure" },
] as const;

export const BUDGET_RANGE_OPTIONS = [
  { value: "not_set", label: "Not set yet" },
  { value: "audit_only", label: "$1.5K-$5K audit" },
  { value: "3k_12k", label: "$3K-$12K focused cleanup" },
  { value: "15k_30k", label: "$15K-$30K lean build" },
  { value: "30k_60k", label: "$30K-$60K custom storefront" },
  { value: "60k_plus", label: "$60K+ migration / Plus scope" },
  { value: "under_1500", label: "Under $1.5K" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "this_month", label: "This month" },
  { value: "1_3_months", label: "1-3 months" },
  { value: "3_6_months", label: "3-6 months" },
  { value: "planning", label: "Planning / not urgent" },
  { value: "rescue", label: "Launch rescue" },
] as const;

export const SHOPIFY_PLUS_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "considering", label: "Considering Plus" },
  { value: "unsure", label: "Unsure" },
] as const;

export const ENGAGEMENT_TYPE_OPTIONS = [
  { value: "fit_audit", label: "Fit & risk audit" },
  { value: "build", label: "Build" },
  { value: "migration", label: "Migration" },
  { value: "seo_performance", label: "SEO / performance cleanup" },
  { value: "support", label: "Support retainer" },
  { value: "unsure", label: "Help me decide" },
] as const;

type OptionList = readonly { value: string; label: string }[];

export interface LeadQualification {
  currentStack: string | null;
  monthlyRevenueBand: string | null;
  mainProblem: string | null;
  budgetRange: string | null;
  timeline: string | null;
  shopifyPlusStatus: string | null;
  engagementType: string | null;
}

function sanitizeLeadValue(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  return trimmed || null;
}

function optionValue(
  value: FormDataEntryValue | null,
  options: OptionList,
) {
  const sanitized = sanitizeLeadValue(value);

  if (!sanitized) {
    return null;
  }

  return options.some((option) => option.value === sanitized) ? sanitized : null;
}

export function parseLeadQualification(formData: FormData): LeadQualification {
  return {
    currentStack: optionValue(formData.get("currentStack"), CURRENT_STACK_OPTIONS),
    monthlyRevenueBand: optionValue(formData.get("monthlyRevenueBand"), MONTHLY_REVENUE_OPTIONS),
    mainProblem: optionValue(formData.get("mainProblem"), MAIN_PROBLEM_OPTIONS),
    budgetRange: optionValue(formData.get("budgetRange"), BUDGET_RANGE_OPTIONS),
    timeline: optionValue(formData.get("timeline"), TIMELINE_OPTIONS),
    shopifyPlusStatus: optionValue(formData.get("shopifyPlusStatus"), SHOPIFY_PLUS_OPTIONS),
    engagementType: optionValue(formData.get("engagementType"), ENGAGEMENT_TYPE_OPTIONS),
  };
}

export function leadQualificationToAnalyticsParams(
  qualification: LeadQualification,
) {
  return {
    current_stack: qualification.currentStack,
    main_problem: qualification.mainProblem,
    budget_range: qualification.budgetRange,
    timeline: qualification.timeline,
    shopify_plus_status: qualification.shopifyPlusStatus,
    engagement_type: qualification.engagementType,
  };
}
