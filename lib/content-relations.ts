import type { TrafficLink } from "@/lib/traffic-foundation";

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
      { href: "/shopify-hydrogen-issues", label: "Issue library", note: "Symptom to fix index." },
      { href: "/shopify-hydrogen-templates", label: "Free templates", note: "Copyable launch and scope checklists." },
      { href: "/udemy-shopify-hydrogen-course-resources", label: "Course companion", note: "Learning path for course students." },
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
    path: "/blog/shopify-hydrogen-product-description-ssr-seo",
    title: "Product description SSR SEO",
    cluster: "production",
    persona: "technical",
    intent: "troubleshoot",
    related: [
      { href: "/shopify-hydrogen-issues#seo", label: "SEO issue library", note: "Related crawlability symptoms." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements", note: "Checklist for product content state." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Broader crawl and structured-data path." },
      { href: "/blog/hydrogen-product-content-ssr", label: "Product content SSR", note: "Related production note." },
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
      { href: "/blog/hydrogen-variant-urls-seo", label: "Variant URLs and SEO", note: "Related route-state note." },
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
      { href: "/blog/shopify-hydrogen-performance-checklist", label: "Performance checklist", note: "Related production note." },
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
