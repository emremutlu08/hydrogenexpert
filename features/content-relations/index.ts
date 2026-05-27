import type { TrafficLink } from "../traffic-foundation";

export interface ContentRelation {
  path: string;
  title: string;
  cluster: "decision" | "build" | "issues" | "templates" | "proof" | "learning" | "production";
  persona: "merchant" | "technical" | "founder" | "student";
  intent: "evaluate" | "scope" | "troubleshoot" | "learn" | "launch";
  related: readonly TrafficLink[];
}

const DEFAULT_RELATED_LINKS: readonly TrafficLink[] = [
  {
    href: "/resources",
    label: "Resource hub",
    note: "Start from the main HydrogenExpert discovery page.",
  },
  {
    href: "/shopify-hydrogen-issues",
    label: "Issue library",
    note: "Map production symptoms to related fixes.",
  },
  {
    href: "/shopify-hydrogen-templates",
    label: "Templates and checklists",
    note: "Copy the checklist that fits the next step.",
  },
];

export const CONTENT_RELATIONS = [
  {
    path: "/resources",
    title: "HydrogenExpert resource hub",
    cluster: "decision",
    persona: "merchant",
    intent: "evaluate",
    related: [
      { href: "/shopify-hydrogen-examples", label: "Hydrogen examples", note: "Pattern directory with source links." },
      { href: "/news-on-shopify-hydrogen", label: "Hydrogen news", note: "Official updates translated into merchant impact." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Symptom to fix index." },
      { href: "/shopify-hydrogen-templates", label: "Free templates", note: "Copyable launch and scope checklists." },
      { href: "/udemy-shopify-hydrogen-course-resources", label: "Course companion", note: "Learning path for course students." },
    ],
  },
  {
    path: "/news-on-shopify-hydrogen",
    title: "News on Shopify Hydrogen",
    cluster: "learning",
    persona: "merchant",
    intent: "learn",
    related: [
      { href: "/resources", label: "Resource hub", note: "Return to the full HydrogenExpert discovery map." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Turn update risk into production symptoms to check." },
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Use before shipping a Hydrogen upgrade." },
      { href: "https://hydrogen.shopify.dev/updates", label: "Official Hydrogen updates", note: "Shopify's source of truth for Hydrogen release notes.", external: true },
    ],
  },
  {
    path: "/shopify-hydrogen-examples",
    title: "Shopify Hydrogen examples",
    cluster: "proof",
    persona: "technical",
    intent: "learn",
    related: [
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront service", note: "Turn a pattern into a scoped build." },
      { href: "/shopify-hydrogen-templates#scope-brief", label: "Scope brief", note: "Copy requirements before estimating." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "See where examples turn into production bugs." },
      { href: "/case-studies", label: "Case studies", note: "Production proof across real storefront work." },
    ],
  },
  {
    path: "/shopify-hydrogen-issues",
    title: "Shopify Hydrogen issue library",
    cluster: "issues",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Use before shipping issue fixes." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "For crawl and rendered-content issues." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "For SSR, cache, media, and script issues." },
      { href: "/shopify-hydrogen-support-retainer", label: "Support retainer", note: "For ongoing production ownership." },
    ],
  },
  {
    path: "/shopify-hydrogen-templates",
    title: "Shopify Hydrogen templates",
    cluster: "templates",
    persona: "merchant",
    intent: "scope",
    related: [
      { href: "/resources", label: "Resource hub", note: "Return to the full discovery map." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Use symptoms to choose the right checklist." },
      { href: "/liquid-to-hydrogen-migration", label: "Migration service", note: "Use route and SEO templates before migration." },
      { href: "/shopify-hydrogen-packages", label: "Build packages", note: "Turn templates into a fixed-scope path." },
    ],
  },
  {
    path: "/udemy-shopify-hydrogen-course-resources",
    title: "Udemy course companion",
    cluster: "learning",
    persona: "student",
    intent: "learn",
    related: [
      { href: "/shopify-hydrogen-examples", label: "Hydrogen examples", note: "Study patterns after course lessons." },
      { href: "/shopify-hydrogen-templates", label: "Templates", note: "Copy checklists for practice projects." },
      { href: "/what-is-hydrogen", label: "What is Hydrogen?", note: "Plain-English fundamentals." },
      { href: "/shopify-hydrogen-developer", label: "Developer service", note: "How production ownership differs from tutorials." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-nextjs",
    title: "Shopify Hydrogen vs Next.js",
    cluster: "decision",
    persona: "merchant",
    intent: "evaluate",
    related: [
      { href: "/shopify-hydrogen-vs-liquid", label: "Hydrogen vs Liquid", note: "Check whether the store needs headless at all." },
      { href: "/when-not-to-use-hydrogen", label: "When not to use Hydrogen", note: "Use the conservative fit check before rebuilding." },
      { href: "/shopify-hydrogen-packages", label: "Build packages", note: "Turn the stack decision into fixed scope." },
      { href: "/contact", label: "Request Scope Review", note: "Send the store URL and the decision pressure." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-cms-visual-builder",
    title: "Shopify Hydrogen CMS and visual builder decision guide",
    cluster: "decision",
    persona: "merchant",
    intent: "evaluate",
    related: [
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront service", note: "Scope the content model and component boundaries." },
      { href: "/shopify-hydrogen-packages", label: "Hydrogen build packages", note: "Choose the right fixed-scope build path." },
      { href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections", label: "Metaobjects production note", note: "See a page-specific metaobject implementation issue." },
      { href: "/contact", label: "Request content model review", note: "Map editor workflow before choosing tooling." },
    ],
  },
  {
    path: "/articles/shopify-apps-in-hydrogen-compatibility-checklist",
    title: "Shopify apps in Hydrogen compatibility checklist",
    cluster: "build",
    persona: "technical",
    intent: "scope",
    related: [
      { href: "/liquid-to-hydrogen-migration", label: "Migration service", note: "Put app risk into the migration plan." },
      { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit", note: "Check whether headless is still worth the app work." },
      { href: "/articles/shopify-hydrogen-analytics-migration", label: "Analytics migration", note: "Audit tracking and consent alongside app behavior." },
      { href: "/contact", label: "Request app audit", note: "Send the app stack and launch target." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-analytics-migration",
    title: "Shopify Hydrogen analytics migration",
    cluster: "build",
    persona: "technical",
    intent: "launch",
    related: [
      { href: "/articles/shopify-apps-in-hydrogen-compatibility-checklist", label: "App compatibility checklist", note: "Audit app-triggered events and checkout behavior." },
      { href: "/liquid-to-hydrogen-migration", label: "Migration planning", note: "Keep analytics in the core migration scope." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "Avoid script and tracking regressions." },
      { href: "/contact", label: "Request analytics audit", note: "Review event payloads, consent, and checkout handoff." },
    ],
  },
  {
    path: "/articles/shopify-storefront-mcp-ucp-ai-readiness",
    title: "Storefront MCP, UCP, and AI-readable Hydrogen stores",
    cluster: "production",
    persona: "merchant",
    intent: "learn",
    related: [
      { href: "/news-on-shopify-hydrogen", label: "Hydrogen news", note: "Track official Shopify updates without hype." },
      { href: "/articles/shopify-hydrogen-seo-checklist", label: "SEO checklist", note: "Make product state readable before agent workflows." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO service", note: "Audit SSR content, schema, and crawl behavior." },
      { href: "/contact", label: "Request AI readiness audit", note: "Start with product data and policy clarity." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-b2b-wholesale-guide",
    title: "Shopify Hydrogen B2B and wholesale guide",
    cluster: "decision",
    persona: "merchant",
    intent: "scope",
    related: [
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large-catalog Hydrogen", note: "Check catalog and buyer-specific product discovery risk." },
      { href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront", label: "Partner pricing note", note: "See a pricing-path production note." },
      { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit", note: "Confirm B2B rules before implementation." },
      { href: "/contact", label: "Request B2B scope review", note: "Map account, catalog, pricing, and checkout behavior." },
    ],
  },
  {
    path: "/articles/hydrogen-deployment-checklist-oxygen-preview-production-qa",
    title: "Hydrogen deployment checklist",
    cluster: "templates",
    persona: "technical",
    intent: "launch",
    related: [
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Use the reusable QA artifact." },
      { href: "/articles/shopify-hydrogen-seo-checklist", label: "SEO checklist", note: "Check crawl and structured-data state before production." },
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Map failed checks to likely production fixes." },
      { href: "/shopify-hydrogen-support-retainer", label: "Support retainer", note: "Keep production checks owned after launch." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-markets-i18n-seo",
    title: "Shopify Hydrogen Markets and i18n SEO",
    cluster: "build",
    persona: "technical",
    intent: "scope",
    related: [
      { href: "/liquid-to-hydrogen-migration", label: "Migration planning", note: "Map locale URLs before the route migration." },
      { href: "/articles/shopify-hydrogen-seo-checklist", label: "SEO checklist", note: "Review hreflang, canonicals, sitemap, and SSR content together." },
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large-catalog Hydrogen", note: "Plan catalog behavior across markets." },
      { href: "/contact", label: "Request Markets review", note: "Send regions, currencies, and launch constraints." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-search-filters-product-discovery",
    title: "Shopify Hydrogen search and filters",
    cluster: "build",
    persona: "technical",
    intent: "scope",
    related: [
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large-catalog Hydrogen", note: "Scope product discovery around catalog complexity." },
      { href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden", label: "Collection production note", note: "See collection filtering and pagination risk." },
      { href: "/shopify-hydrogen-issues#collections", label: "Collection issue library", note: "Map symptoms to search and filter fixes." },
      { href: "/contact", label: "Request discovery audit", note: "Review search, filters, sorting, and merchandising." },
    ],
  },
  {
    path: "/articles/shopify-hydrogen-seo-checklist",
    title: "Shopify Hydrogen SEO checklist",
    cluster: "templates",
    persona: "technical",
    intent: "launch",
    related: [
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Use the main service path for crawl and content fixes." },
      { href: "/shopify-hydrogen-templates#seo-migration-checklist", label: "SEO migration checklist", note: "Copy the reusable checklist before launch." },
      { href: "/blog/shopify-hydrogen-product-description-ssr-seo", label: "Product SSR note", note: "See initial HTML content risk in practice." },
      { href: "/contact", label: "Request SEO audit", note: "Review rendered HTML, sitemap, robots, schema, and analytics." },
    ],
  },
  {
    path: "/blog/shopify-hydrogen-product-description-ssr-seo",
    title: "Product description SSR SEO",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#seo", label: "SEO issue library", note: "Related crawlability symptoms." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements", note: "Checklist for product content state." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Broader crawl and structured-data path." },
      { href: "/shopify-hydrogen-seo", label: "Product content SSR", note: "Related SEO guide." },
    ],
  },
  {
    path: "/blog/shopify-hydrogen-variant-selection-fallback",
    title: "Variant selection fallback",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#pdp", label: "PDP issue library", note: "Related variant and product-page symptoms." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements", note: "Checklist for option state and schema." },
      { href: "/shopify-hydrogen-seo", label: "Variant URLs and SEO", note: "Related route-state guide." },
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront", note: "When PDP behavior is part of a wider build." },
    ],
  },
  {
    path: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
    title: "Homepage performance production note",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#performance", label: "Performance issue library", note: "Related SSR and speed symptoms." },
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Checklist for production checks." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "Service path for live storefront cleanup." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance checklist", note: "Related performance guide." },
    ],
  },
  {
    path: "/blog/shopify-hydrogen-metaobjects-page-specific-sections",
    title: "Metaobjects page-specific sections",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#metaobjects", label: "Metaobjects issue library", note: "Related content-model symptoms." },
      { href: "/shopify-hydrogen-templates#content-model-brief", label: "Content model brief", note: "Checklist for field ownership." },
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront", note: "Service path for merchant-editable content." },
      { href: "/blog/shopify-hydrogen-hero-title-mobile-desktop-metaobject-mismatch", label: "Hero title mismatch", note: "Related metaobject note." },
    ],
  },
  {
    path: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden",
    title: "Collection out-of-stock products hidden",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#collections", label: "Collection issue library", note: "Related catalog and pagination symptoms." },
      { href: "/shopify-hydrogen-templates#route-map", label: "Route map", note: "Checklist for collection route behavior." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "SSR and loader cleanup service path." },
      { href: "/blog/shopify-hydrogen-product-description-ssr-seo", label: "Product description SSR", note: "Related initial HTML note." },
    ],
  },
] as const satisfies readonly ContentRelation[];

export function getRelatedLinksForPath(path: string): readonly TrafficLink[] {
  const normalizedPath = path.replace(/\/$/, "") || "/";
  const relation = CONTENT_RELATIONS.find((item) => item.path === normalizedPath);

  return relation?.related ?? DEFAULT_RELATED_LINKS;
}

export function getAllContentRelations(): readonly ContentRelation[] {
  return CONTENT_RELATIONS;
}
