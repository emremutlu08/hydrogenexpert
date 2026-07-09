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
  | "b2b"
  | "cms"
  | "checkout"
  | "discounts"
  | "automation"
  | "seo"
  | "analytics"
  | "themes"
  | "storefront_mcp"
  | "ucp"
  | "app_compatibility"
  | "product_discovery"
  | "internationalization"
  | "deployment"
  | "shopify_partners"
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
  targetKeyword?: string;
  searchIntent?: string;
  reviewedBy?: string;
  contentType?: string;
}

export const SHOPIFY_CONTENT_LAST_VERIFIED = "2026-05-05";
export const SEO_CHECKLIST_SOURCE_LAST_VERIFIED = "2026-07-09";

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
  onlineStore20ThemeEditor: {
    label: "Shopify: Online Store 2.0",
    sourceType: "shopify_official",
    topic: "themes",
    url: "https://shopify.dev/docs/storefronts/themes/os20",
    retrievedAt: "2026-07-05",
    usedFor:
      "Liquid theme model, sections, blocks, and merchant-editable storefront claims.",
  },
  hydrogenUpdates: {
    label: "Shopify Hydrogen updates",
    sourceType: "shopify_official",
    topic: "hydrogen",
    url: "https://hydrogen.shopify.dev/updates",
    retrievedAt: "2026-05-26",
    usedFor:
      "Hydrogen release-note dates, update summaries, upgrade monitoring, and merchant-impact interpretation.",
  },
  headlessBuildOptions: {
    label: "Shopify: Options for building headless",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/storefronts/headless/getting-started/build-options",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Headless Shopify, Hydrogen, Hydrogen React, Headless channel, and Storefront API positioning claims.",
  },
  packDigitalHydrogen: {
    label: "Pack Digital: Hydrogen DXP introduction",
    sourceType: "competitor_reference",
    topic: "commercial_positioning",
    url: "https://docs.packdigital.com/getting-started/introduction",
    retrievedAt: "2026-05-26",
    usedFor:
      "Visual Hydrogen builder and marketer-editable DXP decision-path positioning.",
  },
  weaverseHydrogen: {
    label: "Weaverse: Visual SDK for Shopify Hydrogen",
    sourceType: "competitor_reference",
    topic: "commercial_positioning",
    url: "https://weaverse.io/",
    retrievedAt: "2026-05-26",
    usedFor:
      "Visual Hydrogen builder, Git-friendly workflow, and marketer-control positioning.",
  },
  fluxHydrogenNextjs: {
    label: "Flux: Hydrogen vs Next.js for Shopify",
    sourceType: "competitor_reference",
    topic: "commercial_positioning",
    url: "https://flux.agency/insights/hydrogen-vs-nextjs-shopify-framework-comparison",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen vs Next.js tradeoff, hosting, ecosystem, and total-cost decision framing.",
  },
  talkShopHydrogenNextjs: {
    label: "Talk Shop: Shopify Hydrogen vs Next.js for headless stores",
    sourceType: "competitor_reference",
    topic: "commercial_positioning",
    url: "https://www.letstalkshop.com/blog/shopify-hydrogen-vs-nextjs-for-headless-store",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen vs Next.js decision framework, hosting, performance, and cost comparison context.",
  },
  builderHydrogenCms: {
    label: "Builder.io: Headless CMS for Shopify Hydrogen",
    sourceType: "competitor_reference",
    topic: "cms",
    url: "https://www.builder.io/m/hydrogen-cms/",
    retrievedAt: "2026-05-27",
    usedFor:
      "Visual CMS and page-building comparison context for Hydrogen content workflow decisions.",
  },
  weaverseVsSanity: {
    label: "Weaverse: Weaverse vs Sanity",
    sourceType: "competitor_reference",
    topic: "cms",
    url: "https://weaverse.io/comparisons/vs-sanity",
    retrievedAt: "2026-05-27",
    usedFor:
      "Visual storefront builder versus headless CMS role comparison for Hydrogen stores.",
  },
  sanityHydrogen: {
    label: "Flux: Sanity CMS for Shopify Hydrogen",
    sourceType: "competitor_reference",
    topic: "cms",
    url: "https://flux.agency/partners/sanity",
    retrievedAt: "2026-05-27",
    usedFor:
      "Sanity editorial workflow and composable content positioning for Hydrogen CMS decisions.",
  },
  yotpoHydrogenReviews: {
    label: "Yotpo: Using Yotpo Reviews with Shopify Hydrogen",
    sourceType: "competitor_reference",
    topic: "app_compatibility",
    url: "https://support.yotpo.com/docs/using-yotpo-reviews-with-shopify-hydrogen",
    retrievedAt: "2026-05-27",
    usedFor:
      "Reviews integration and headless app compatibility checks for Hydrogen migrations.",
  },
  yotpoHeadlessLoyalty: {
    label: "Yotpo: Loyalty and Referrals on a headless platform",
    sourceType: "competitor_reference",
    topic: "app_compatibility",
    url: "https://support.yotpo.com/docs/setting-up-yotpo-loyalty-referrals-on-a-headless-platform",
    retrievedAt: "2026-05-27",
    usedFor:
      "Loyalty, referrals, customer identity, and headless app compatibility checks.",
  },
  shopifyHydrogenSubscriptions: {
    label: "Shopify: Subscriptions in Hydrogen",
    sourceType: "shopify_official",
    topic: "app_compatibility",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/cookbook/subscriptions",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen subscription product, selling plan, cart, and checkout integration claims.",
  },
  hydrogenDataFetching: {
    label: "Shopify: Fetch Shopify API data in Hydrogen",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/data-fetching",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Storefront API, Customer Account API, loader data, caching, and performance-related Hydrogen claims.",
  },
  hydrogenGithubDeployments: {
    label: "Shopify: Hydrogen CI/CD with GitHub",
    sourceType: "shopify_official",
    topic: "oxygen",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/github",
    retrievedAt: SHOPIFY_CONTENT_LAST_VERIFIED,
    usedFor:
      "Oxygen, Hydrogen channel, GitHub deployment workflow, preview deployment, and PR deployment claims.",
  },
  hydrogenDeployments: {
    label: "Shopify: Hydrogen deployments",
    sourceType: "shopify_official",
    topic: "deployment",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/index",
    retrievedAt: "2026-05-27",
    usedFor:
      "Oxygen deployment, preview, production, redeploy, and environment variable launch checks.",
  },
  hydrogenDeployCli: {
    label: "Shopify CLI: hydrogen deploy",
    sourceType: "shopify_official",
    topic: "deployment",
    url: "https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen deploy command, preview deployment, token, and environment-file launch checks.",
  },
  hydrogenMarkets: {
    label: "Shopify: Internationalization with Shopify Markets",
    sourceType: "shopify_official",
    topic: "internationalization",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/markets",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen Markets, locale, country, currency, and route-context implementation claims.",
  },
  storefrontMetaobjects: {
    label: "Shopify Storefront API: metaobjects query",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/api/storefront/latest/queries/metaobjects",
    retrievedAt: "2026-05-14",
    usedFor:
      "Metaobject type, first/page arguments, and merchant-defined content section grounding.",
  },
  storefrontCollection: {
    label: "Shopify Storefront API: Collection object",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/api/storefront/latest/objects/Collection",
    retrievedAt: "2026-05-23",
    usedFor:
      "Collection product connection, filters, sorting, and pagination grounding for collection-page troubleshooting.",
  },
  storefrontProductAvailability: {
    label: "Shopify Storefront API: Product object availability",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/api/storefront/latest/objects/Product",
    retrievedAt: "2026-05-23",
    usedFor:
      "Product availableForSale and product-list rendering claims for out-of-stock collection-page debugging.",
  },
  storefrontProductFilter: {
    label: "Shopify Storefront API: ProductFilter input",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter",
    retrievedAt: "2026-05-23",
    usedFor:
      "Availability filter behavior and collection product filtering claims.",
  },
  storefrontPageInfo: {
    label: "Shopify Storefront API: PageInfo object",
    sourceType: "shopify_official",
    topic: "storefront_api",
    url: "https://shopify.dev/docs/api/storefront/latest/objects/PageInfo",
    retrievedAt: "2026-05-23",
    usedFor:
      "Pagination cursor and hasNextPage interpretation when app-local buffers also exist.",
  },
  algoliaHydrogen: {
    label: "Algolia: Shopify Hydrogen search",
    sourceType: "competitor_reference",
    topic: "product_discovery",
    url: "https://www.algolia.com/search-solutions/shopify/hydrogen",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hydrogen search, autocomplete, collection filters, and product discovery architecture context.",
  },
  shopifySearchDiscoveryFilters: {
    label: "Shopify Help Center: Search and Discovery filters",
    sourceType: "shopify_official",
    topic: "product_discovery",
    url: "https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-filters",
    retrievedAt: "2026-05-27",
    usedFor:
      "Filter sources, behavior, limits, and custom storefront filter display claims.",
  },
  hydrogenSeo: {
    label: "Shopify: Search Engine Optimization for Hydrogen",
    sourceType: "shopify_official",
    topic: "seo",
    url: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
    retrievedAt: SEO_CHECKLIST_SOURCE_LAST_VERIFIED,
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
  hydrogenVideoComponent: {
    label: "Shopify: Hydrogen Video component",
    sourceType: "shopify_official",
    topic: "hydrogen",
    url: "https://shopify.dev/docs/api/hydrogen/2025-05/components/media/video",
    retrievedAt: "2026-05-10",
    usedFor:
      "Hydrogen video media rendering reference for the hero carousel timing production note.",
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
  storefrontCatalogMcp: {
    label: "Shopify: Storefront Catalog MCP",
    sourceType: "shopify_official",
    topic: "storefront_mcp",
    url: "https://shopify.dev/docs/agents/catalog/storefront-catalog",
    retrievedAt: "2026-05-27",
    usedFor:
      "Store-scoped catalog discovery, UCP catalog capability, and agent readiness claims.",
  },
  agenticCommerce: {
    label: "Shopify: Agentic commerce",
    sourceType: "shopify_official",
    topic: "ucp",
    url: "https://shopify.dev/docs/agents",
    retrievedAt: "2026-05-27",
    usedFor:
      "UCP, global catalog, storefront catalog, universal cart, and agentic commerce positioning.",
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
  customerAccountApiHydrogen: {
    label: "Shopify: Using the Customer Account API with Hydrogen",
    sourceType: "shopify_official",
    topic: "customer_account_api",
    url: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen",
    retrievedAt: "2026-05-18",
    usedFor:
      "Hydrogen customer login and customer recognition claims for partner pricing production notes.",
  },
  shopifyDiscounts: {
    label: "Shopify: About discounts",
    sourceType: "shopify_official",
    topic: "discounts",
    url: "https://shopify.dev/docs/apps/build/discounts",
    retrievedAt: "2026-05-18",
    usedFor:
      "Automatic discount, code discount, discount app, and Shopify Functions discount positioning claims.",
  },
  shopifyDiscountFunctions: {
    label: "Shopify: Discount Function API",
    sourceType: "shopify_official",
    topic: "discounts",
    url: "https://shopify.dev/docs/api/functions/reference/order-discounts/graphql/input",
    retrievedAt: "2026-05-18",
    usedFor:
      "Checkout-integrated discount logic, function combination rules, and automatic cart math claims.",
  },
  shopifyDiscountCustomerSegments: {
    label: "Shopify Admin GraphQL: DiscountCustomerSegments",
    sourceType: "shopify_official",
    topic: "discounts",
    url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments",
    retrievedAt: "2026-05-18",
    usedFor:
      "Customer-segment eligibility claims for partner pricing and future pricing-model extensibility.",
  },
  shopifyPartnerDirectory: {
    label: "Shopify Help Center: Partner Directory",
    sourceType: "shopify_official",
    topic: "shopify_partners",
    url: "https://help.shopify.com/en/manual/partner-directory",
    retrievedAt: "2026-05-26",
    usedFor:
      "Partner Directory, service-category, and Experts Marketplace replacement claims for hiring guidance.",
  },
  shopifyCheckoutExtensions: {
    label: "Shopify: Apps in checkout",
    sourceType: "shopify_official",
    topic: "checkout",
    url: "https://shopify.dev/docs/apps/build/checkout",
    retrievedAt: "2026-05-26",
    usedFor:
      "Checkout extension, checkout UI extension, and upgrade-safe checkout customization claims.",
  },
  shopifyFunctions: {
    label: "Shopify: Function APIs",
    sourceType: "shopify_official",
    topic: "checkout",
    url: "https://shopify.dev/docs/api/functions/latest",
    retrievedAt: "2026-05-26",
    usedFor:
      "Shopify Functions claims for custom backend commerce logic in checkout-adjacent flows.",
  },
  shopifyFlow: {
    label: "Shopify: About Flow",
    sourceType: "shopify_official",
    topic: "automation",
    url: "https://shopify.dev/docs/apps/build/flow",
    retrievedAt: "2026-05-26",
    usedFor:
      "Shopify Flow automation and workflow integration claims for Plus and growth-stage operations.",
  },
  shopifyB2BApps: {
    label: "Shopify: Apps and B2B",
    sourceType: "shopify_official",
    topic: "b2b",
    url: "https://shopify.dev/docs/apps/build/b2b",
    retrievedAt: "2026-05-18",
    usedFor:
      "Shopify Plus B2B company, company location, catalog, and negotiated-pricing migration caveats.",
  },
  shopifyHeadlessB2B: {
    label: "Shopify: Headless with B2B",
    sourceType: "shopify_official",
    topic: "b2b",
    url: "https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/b2b",
    retrievedAt: "2026-05-18",
    usedFor:
      "Future native B2B custom storefront context for customer accounts, company locations, B2B pricing, and cart contextualization.",
  },
  shopifyB2BCompanies: {
    label: "Shopify Help Center: Creating and managing B2B companies",
    sourceType: "shopify_official",
    topic: "b2b",
    url: "https://help.shopify.com/en/manual/b2b/companies-and-customers/creating-companies",
    retrievedAt: "2026-05-27",
    usedFor:
      "Company, company location, payment terms, catalog, pricing, and B2B customer context claims.",
  },
  googleStructuredData: {
    label: "Google Search Central: Structured data introduction",
    sourceType: "google_official",
    topic: "seo",
    url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    retrievedAt: SEO_CHECKLIST_SOURCE_LAST_VERIFIED,
    usedFor:
      "Structured data purpose, JSON-LD, and search appearance guidance.",
  },
  googleSitemaps: {
    label: "Google Search Central: Sitemaps overview",
    sourceType: "google_official",
    topic: "seo",
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    retrievedAt: SEO_CHECKLIST_SOURCE_LAST_VERIFIED,
    usedFor:
      "Sitemap discovery and crawl guidance for public SEO checklist content.",
  },
  googleJavaScriptSeo: {
    label: "Google Search Central: JavaScript SEO basics",
    sourceType: "google_official",
    topic: "seo",
    url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    retrievedAt: SEO_CHECKLIST_SOURCE_LAST_VERIFIED,
    usedFor:
      "Rendered HTML, JavaScript rendering, and Search Console verification guidance for Hydrogen SEO checks.",
  },
  googleLocalizedVersions: {
    label: "Google Search Central: Localized versions",
    sourceType: "google_official",
    topic: "internationalization",
    url: "https://developers.google.com/search/docs/specialty/international/localized-versions",
    retrievedAt: "2026-05-27",
    usedFor:
      "Hreflang and localized URL guidance for Hydrogen Markets and i18n SEO content.",
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
      "EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi context that is already approved for public use.",
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
  "how-to-find-shopify-hydrogen-expert": {
    lastVerified: "2026-05-26",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.shopifyPartnerDirectory,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.shopifyCheckoutExtensions,
      SOURCE_PACKS.shopifyFunctions,
      SOURCE_PACKS.shopifyFlow,
      SOURCE_PACKS.shopifyB2BApps,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "how to find shopify hydrogen expert",
    searchIntent: "hiring evaluation",
    reviewedBy: "Emre Mutlu",
    contentType: "source_grounded_blog_post",
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
      SOURCE_PACKS.headlessBuildOptions,
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
  "shopify-hydrogen-hero-video-carousel-onended": {
    lastVerified: "2026-05-10",
    claimTypes: ["official_shopify_fact", "emre_experience"],
    targetKeyword: "shopify hydrogen hero video carousel",
    searchIntent: "post-launch troubleshooting",
    reviewedBy: "Emre Mutlu",
    contentType: "technical_blog",
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenVideoComponent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-hero-title-mobile-desktop-metaobject-mismatch": {
    lastVerified: "2026-05-14",
    claimTypes: ["official_shopify_fact", "emre_experience"],
    targetKeyword: "shopify hydrogen metaobject responsive title",
    searchIntent: "post-launch troubleshooting",
    reviewedBy: "Emre Mutlu",
    contentType: "technical_blog",
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.storefrontMetaobjects,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-b2b-partner-pricing-without-separate-storefront": {
    lastVerified: "2026-05-18",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    targetKeyword: "shopify b2b partner pricing",
    searchIntent: "implementation planning",
    reviewedBy: "Emre Mutlu",
    contentType: "technical_blog",
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.customerAccountApiHydrogen,
      SOURCE_PACKS.shopifyDiscounts,
      SOURCE_PACKS.shopifyDiscountFunctions,
      SOURCE_PACKS.shopifyDiscountCustomerSegments,
      SOURCE_PACKS.shopifyB2BApps,
      SOURCE_PACKS.shopifyHeadlessB2B,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-collection-out-of-stock-products-hidden": {
    lastVerified: "2026-05-23",
    claimTypes: ["official_shopify_fact", "emre_experience"],
    targetKeyword: "shopify hydrogen out of stock products collection",
    searchIntent: "post-launch troubleshooting",
    reviewedBy: "Emre Mutlu",
    contentType: "technical_blog",
    sourceMap: [
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.storefrontCollection,
      SOURCE_PACKS.storefrontProductFilter,
      SOURCE_PACKS.storefrontProductAvailability,
      SOURCE_PACKS.storefrontPageInfo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<string, ContentSourceMetadata>;

export const ARTICLE_SOURCE_METADATA = {
  "shopify-hydrogen-nextjs": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.fluxHydrogenNextjs,
      SOURCE_PACKS.talkShopHydrogenNextjs,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen vs next.js",
    searchIntent: "stack selection",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-cms-visual-builder": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.builderHydrogenCms,
      SOURCE_PACKS.weaverseVsSanity,
      SOURCE_PACKS.packDigitalHydrogen,
      SOURCE_PACKS.sanityHydrogen,
      SOURCE_PACKS.storefrontMetaobjects,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen cms",
    searchIntent: "CMS and visual builder decision",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-apps-in-hydrogen-compatibility-checklist": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.yotpoHydrogenReviews,
      SOURCE_PACKS.yotpoHeadlessLoyalty,
      SOURCE_PACKS.shopifyHydrogenSubscriptions,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify apps in hydrogen",
    searchIntent: "app compatibility audit",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-analytics-migration": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen analytics migration",
    searchIntent: "analytics migration planning",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-storefront-mcp-ucp-ai-readiness": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.storefrontCatalogMcp,
      SOURCE_PACKS.storefrontMcp,
      SOURCE_PACKS.agenticCommerce,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify storefront mcp",
    searchIntent: "AI commerce readiness",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-b2b-wholesale-guide": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.shopifyHeadlessB2B,
      SOURCE_PACKS.shopifyB2BCompanies,
      SOURCE_PACKS.customerAccountApiHydrogen,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen b2b",
    searchIntent: "B2B implementation planning",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "hydrogen-deployment-checklist-oxygen-preview-production-qa": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenDeployments,
      SOURCE_PACKS.hydrogenDeployCli,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "hydrogen deployment checklist",
    searchIntent: "launch QA",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-markets-i18n-seo": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenMarkets,
      SOURCE_PACKS.googleLocalizedVersions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen markets",
    searchIntent: "international SEO planning",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-search-filters-product-discovery": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.algoliaHydrogen,
      SOURCE_PACKS.shopifySearchDiscoveryFilters,
      SOURCE_PACKS.storefrontCollection,
      SOURCE_PACKS.storefrontProductFilter,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen search",
    searchIntent: "product discovery architecture",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "shopify-hydrogen-seo-checklist": {
    lastVerified: SEO_CHECKLIST_SOURCE_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "seo_hypothesis", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.googleStructuredData,
      SOURCE_PACKS.googleSitemaps,
      SOURCE_PACKS.googleJavaScriptSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "shopify hydrogen seo checklist",
    searchIntent: "implementation checklist",
    reviewedBy: "Emre Mutlu",
    contentType: "evergreen_article",
  },
  "how-to-hire-shopify-hydrogen-developer": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.shopifyPartnerDirectory,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-developer-vs-agency": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "experienced-shopify-hydrogen-developers": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-experts-production-experience": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience", "case_study_fact"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-development-cost-developer-agency-audit": {
    lastVerified: "2026-05-27",
    claimTypes: ["official_shopify_fact", "commercial_opinion", "emre_experience"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
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
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-packages": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.packDigitalHydrogen,
      SOURCE_PACKS.weaverseHydrogen,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/resources": {
    lastVerified: "2026-05-24",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/news-on-shopify-hydrogen": {
    lastVerified: "2026-05-26",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenUpdates,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "Shopify Hydrogen news",
    searchIntent: "release update monitoring",
    reviewedBy: "Emre Mutlu",
    contentType: "official_update_digest",
  },
  "/shopify-hydrogen-examples": {
    lastVerified: "2026-05-24",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-issues": {
    lastVerified: "2026-05-24",
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.storefrontCollection,
      SOURCE_PACKS.storefrontProductFilter,
      SOURCE_PACKS.storefrontMetaobjects,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/shopify-hydrogen-templates": {
    lastVerified: "2026-05-24",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "/udemy-shopify-hydrogen-course-resources": {
    lastVerified: "2026-05-24",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
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
      SOURCE_PACKS.headlessBuildOptions,
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
    lastVerified: "2026-07-05",
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.onlineStore20ThemeEditor,
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
    targetKeyword: "Shopify Hydrogen vs Liquid",
    searchIntent: "Evaluate whether to stay on Liquid or move to Shopify Hydrogen",
    reviewedBy: "Claude-reviewed Hermes brief plus Codex source-grounded implementation",
    contentType: "Decision landing page",
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

export function getArticleSourceMetadata(slug: string) {
  return ARTICLE_SOURCE_METADATA[slug as keyof typeof ARTICLE_SOURCE_METADATA] ?? null;
}
