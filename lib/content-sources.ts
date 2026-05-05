export type SourceType =
  | "shopify_official"
  | "google_official"
  | "personal_experience"
  | "case_study"
  | "competitor_reference";

export type SourceTopic =
  | "hydrogen"
  | "oxygen"
  | "storefront_api"
  | "customer_account_api"
  | "seo"
  | "analytics"
  | "storefront_mcp"
  | "ucp"
  | "commercial_positioning";

export type ClaimClassification =
  | "official_shopify_fact"
  | "emre_experience"
  | "commercial_opinion"
  | "case_study_fact"
  | "seo_hypothesis";

export interface ContentSource {
  label: string;
  sourceType: SourceType;
  topic: SourceTopic;
  url?: string;
  retrievedAt?: string;
  usedFor: string;
}

export interface ContentSourceMetadata {
  lastVerified: string;
  claimTypes: readonly ClaimClassification[];
  sourceMap: readonly ContentSource[];
}

export const SHOPIFY_CONTENT_LAST_VERIFIED = "2026-05-05";

export const SOURCE_PACKS = {
  hydrogenFundamentals: {
    label: "Shopify: Hydrogen and Oxygen fundamentals",
    sourceType: "shopify_official",
    topic: "hydrogen",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Hydrogen, React Router, custom storefront, and Oxygen positioning claims.",
  },
  hydrogenSeo: {
    label: "Shopify: Search Engine Optimization for Hydrogen",
    sourceType: "shopify_official",
    topic: "seo",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Hydrogen metadata, canonical URL, JSON-LD, sitemap.xml, robots.txt, and Oxygen robots behavior claims.",
  },
  hydrogenAnalytics: {
    label: "Shopify: Analytics with Hydrogen and Oxygen",
    sourceType: "shopify_official",
    topic: "analytics",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/analytics",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Hydrogen analytics, Shopify analytics, and tracking implementation claims.",
  },
  hydrogenConsent: {
    label: "Shopify: Get consent for analytics and customer privacy",
    sourceType: "shopify_official",
    topic: "analytics",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/analytics/consent",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Customer privacy, consent, checkout domain, and CSP-sensitive analytics claims.",
  },
  storefrontMcp: {
    label: "Shopify: Storefront MCP server",
    sourceType: "shopify_official",
    topic: "storefront_mcp",
    url: "https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Storefront MCP catalog search, cart, checkout, and store policy agent claims.",
  },
  ucpCheckout: {
    label: "Shopify: Checkout MCP server",
    sourceType: "shopify_official",
    topic: "ucp",
    url: "https://shopify.dev/docs/agents/checkout/mcp",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Universal Commerce Protocol checkout capability and authenticated Checkout MCP claims.",
  },
  ucpCatalog: {
    label: "Shopify: Catalog MCP server",
    sourceType: "shopify_official",
    topic: "ucp",
    url: "https://shopify.dev/docs/agents/catalog/mcp",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Universal Commerce Protocol catalog discovery, global product search, lookup, and authenticated Catalog MCP claims.",
  },
  customerAccountApi: {
    label: "Shopify: Customer Account API",
    sourceType: "shopify_official",
    topic: "customer_account_api",
    url: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/getting-started",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Customer Account API authentication, customer account, order, address, and customer-scoped data claims.",
  },
  googleHelpfulContent: {
    label: "Google Search Central: Creating helpful, reliable, people-first content",
    sourceType: "google_official",
    topic: "seo",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "People-first content, originality, and non-generic content quality checks.",
  },
  googleSpamPolicies: {
    label: "Google Search Central: Spam policies",
    sourceType: "google_official",
    topic: "seo",
    url: "https://developers.google.com/search/docs/essentials/spam-policies",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Doorway-page and scaled-content risk checks for overlapping landing pages.",
  },
  emreProductionExperience: {
    label: "Emre Mutlu production Shopify Hydrogen experience",
    sourceType: "personal_experience",
    topic: "commercial_positioning",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Operator interpretation, commercial positioning, and production judgment claims.",
  },
  caseStudyEvidence: {
    label: "HydrogenExpert approved case-study evidence",
    sourceType: "case_study",
    topic: "commercial_positioning",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "EveShop, Bayam Jewelry, and Rebel Bunny context that is already approved for public use.",
  },
} as const satisfies Record<string, ContentSource>;

export const DEFAULT_SHOPIFY_SOURCE_MAP = [
  SOURCE_PACKS.hydrogenFundamentals,
  SOURCE_PACKS.hydrogenSeo,
  SOURCE_PACKS.emreProductionExperience,
] as const;

export const BLOG_SOURCE_METADATA = {
  "shopify-hydrogen-vs-liquid": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-nextjs": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "liquid-to-hydrogen-migration-checklist": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-performance-checklist": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-seo-checklist": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.googleHelpfulContent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-plus-hydrogen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-developer-vs-agency": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-sitemap-robots-oxygen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-json-ld-product-state": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-variant-urls-seo": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-product-content-ssr": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "what-breaks-when-moving-from-liquid-to-hydrogen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-route-mapping": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-analytics-migration": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-apps-in-hydrogen-what-to-check": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-checkout-handoff-risks": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "what-is-shopify-hydrogen-in-plain-english": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "what-is-shopify-oxygen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-vs-liquid-maintenance-cost": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-deployment-checklist": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "oxygen-preview-production-launch-qa": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-environment-variables-and-launch-risk": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-storefront-mcp-explained": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.ucpCatalog,
      SOURCE_PACKS.ucpCheckout,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "storefront-mcp-vs-shopify-dev-mcp": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.ucpCatalog,
      SOURCE_PACKS.ucpCheckout,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "what-ucp-means-for-shopify-merchants": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.ucpCatalog,
      SOURCE_PACKS.ucpCheckout,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "is-hydrogen-ready-for-ai-shopping-agents": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "ai-readable-shopify-product-pages": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-seo-for-ai-agents": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "storefront-mcp-product-discovery-cart-checkout": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.ucpCatalog,
      SOURCE_PACKS.ucpCheckout,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "should-your-store-build-an-ai-shopping-agent": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.ucpCatalog,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<string, ContentSourceMetadata>;

export const STATIC_PAGE_SOURCE_METADATA = {
  "/": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/services": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/what-is-hydrogen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-seo-guide": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.googleHelpfulContent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/should-i-use-it": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/when-not-to-use-hydrogen": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/case-studies": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["case_study_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/hire-me": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["emre_experience", "case_study_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-agency-usa": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "case_study_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-fit-audit": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-maintenance-cost": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-vs-liquid": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-for-luxury-jewelry": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["case_study_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-for-large-catalog-retail": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["case_study_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-for-dtc-education-brands": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["case_study_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-for-beauty-brands": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["case_study_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<string, ContentSourceMetadata>;

export function getStaticPageSourceMetadata(path: string) {
  return STATIC_PAGE_SOURCE_METADATA[path as keyof typeof STATIC_PAGE_SOURCE_METADATA] ?? null;
}

export function getBlogSourceMetadata(slug: string) {
  return BLOG_SOURCE_METADATA[slug as keyof typeof BLOG_SOURCE_METADATA] ?? null;
}
