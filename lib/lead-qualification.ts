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
  { value: "starter_2k", label: "Around $2K - Starter Storefront" },
  { value: "standard_3k_35k", label: "$3K-$3.5K - Standard Storefront" },
  { value: "growth_45k_5k", label: "$4.5K-$5K - Growth Storefront" },
  { value: "custom_5k_plus", label: "$5K+ - Custom scope" },
  { value: "retainer", label: "Retainer / ongoing support" },
  { value: "not_sure", label: "Not sure yet" },
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
  { value: "starter_build", label: "Starter Hydrogen build" },
  { value: "standard_build", label: "Standard Hydrogen build" },
  { value: "growth_build", label: "Growth Hydrogen build" },
  { value: "migration", label: "Liquid to Hydrogen migration" },
  { value: "performance_cleanup", label: "Hydrogen performance cleanup" },
  { value: "seo_cleanup", label: "Hydrogen SEO cleanup" },
  { value: "support", label: "Support retainer" },
  { value: "unsure", label: "Help me decide" },
] as const;

export const DESIGN_STATUS_OPTIONS = [
  { value: "figma_ready", label: "Yes, Figma is ready" },
  { value: "adapt_existing", label: "Yes, existing Shopify theme/design will be adapted" },
  { value: "need_simple_design", label: "No, I need a simple clean design" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export const PRODUCT_COUNT_OPTIONS = [
  { value: "under_20", label: "Under 20" },
  { value: "20_100", label: "20-100" },
  { value: "100_500", label: "100-500" },
  { value: "500_plus", label: "500+" },
] as const;

export const NEEDED_FEATURE_OPTIONS = [
  { value: "product_listing", label: "Product listing" },
  { value: "pdp", label: "PDP" },
  { value: "cart_drawer", label: "Cart drawer" },
  { value: "customer_account", label: "Customer account" },
  { value: "search", label: "Search" },
  { value: "filters", label: "Filters" },
  { value: "blog_content", label: "Blog/content" },
  { value: "reviews_app", label: "Reviews app" },
  { value: "email_popup", label: "Email popup" },
  { value: "subscriptions", label: "Subscriptions" },
  { value: "b2b_wholesale", label: "B2B/wholesale" },
  { value: "multi_language", label: "Multi-language" },
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
  designStatus: string | null;
  productCount: string | null;
  neededFeatures: string[];
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

function optionValues(
  values: FormDataEntryValue[],
  options: OptionList,
) {
  const allowedValues = new Set(options.map((option) => option.value));

  return values
    .map(sanitizeLeadValue)
    .filter((value): value is string => Boolean(value && allowedValues.has(value)));
}

function optionLabel(value: string | null, options: OptionList) {
  if (!value) {
    return null;
  }

  return options.find((option) => option.value === value)?.label ?? null;
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
    designStatus: optionValue(formData.get("designStatus"), DESIGN_STATUS_OPTIONS),
    productCount: optionValue(formData.get("productCount"), PRODUCT_COUNT_OPTIONS),
    neededFeatures: optionValues(formData.getAll("neededFeatures"), NEEDED_FEATURE_OPTIONS),
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
    design_status: qualification.designStatus,
    product_count: qualification.productCount,
    needed_features: qualification.neededFeatures.join(","),
  };
}

export function formatLeadQualificationSummary(
  qualification: LeadQualification,
) {
  const features = qualification.neededFeatures
    .map((feature) => optionLabel(feature, NEEDED_FEATURE_OPTIONS))
    .filter(Boolean)
    .join(", ");
  const rows = [
    ["Current stack", optionLabel(qualification.currentStack, CURRENT_STACK_OPTIONS)],
    ["Main problem", optionLabel(qualification.mainProblem, MAIN_PROBLEM_OPTIONS)],
    ["Budget range", optionLabel(qualification.budgetRange, BUDGET_RANGE_OPTIONS)],
    ["Timeline", optionLabel(qualification.timeline, TIMELINE_OPTIONS)],
    ["Monthly revenue", optionLabel(qualification.monthlyRevenueBand, MONTHLY_REVENUE_OPTIONS)],
    ["Shopify Plus", optionLabel(qualification.shopifyPlusStatus, SHOPIFY_PLUS_OPTIONS)],
    ["Help type", optionLabel(qualification.engagementType, ENGAGEMENT_TYPE_OPTIONS)],
    ["Design status", optionLabel(qualification.designStatus, DESIGN_STATUS_OPTIONS)],
    ["Product count", optionLabel(qualification.productCount, PRODUCT_COUNT_OPTIONS)],
    ["Needed features", features || null],
  ];

  return rows
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}
