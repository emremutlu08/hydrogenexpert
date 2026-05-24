import type { TrafficLink } from "@/lib/traffic-foundation";

export interface ProductionNoteFrame {
  slug: string;
  problem: string;
  symptom: string;
  rootCause: string;
  fix: string;
  risk: string;
  relatedLinks: readonly TrafficLink[];
}

export const PRODUCTION_NOTE_FRAMES = [
  {
    slug: "shopify-hydrogen-product-description-ssr-seo",
    problem: "Product pages can look complete in the browser while important product copy is missing from initial HTML.",
    symptom: "View source does not contain the product description even though the hydrated page shows it.",
    rootCause: "The product description was treated as client-enhanced UI instead of route-owned product data.",
    fix: "Render the standard Shopify product description from server-loaded product data and leave JavaScript for interaction only.",
    risk: "If this is ignored, search crawlers, AI systems, and no-JavaScript checks can miss the main product explanation.",
    relatedLinks: [
      { href: "/shopify-hydrogen-issues#seo", label: "SEO issue library", note: "Symptom group for crawlability problems." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements checklist", note: "Checklist for PDP state and content." },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO", note: "Broader SEO service page." },
    ],
  },
  {
    slug: "shopify-hydrogen-variant-selection-fallback",
    problem: "Variant fallback can change the exact option the shopper clicked.",
    symptom: "A shopper selects one width, length, size, or color, then the URL or selected variant resolves to another option.",
    rootCause: "The fallback resolver searched all variants globally instead of locking the clicked option first.",
    fix: "Use the clicked option as a hard constraint, then score only compatible available variants.",
    risk: "If the resolver is wrong, PDP trust drops and product JSON-LD can describe a state the shopper did not choose.",
    relatedLinks: [
      { href: "/shopify-hydrogen-issues#pdp", label: "PDP issue library", note: "Symptom group for variant problems." },
      { href: "/shopify-hydrogen-templates#pdp-requirements", label: "PDP requirements checklist", note: "Checklist for options, availability, and schema." },
      { href: "/blog/hydrogen-variant-urls-seo", label: "Variant URLs and SEO", note: "Related route-state note." },
    ],
  },
  {
    slug: "cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
    problem: "A Hydrogen homepage can render a fast shell while delaying the commerce content shoppers need.",
    symptom: "Product sections appear only after hydration and the initial page feels incomplete.",
    rootCause: "Primary product data was fetched from a client effect instead of the common server-rendered route path.",
    fix: "Move the first visible product set into route data, cache intentionally, and leave less-common tabs for later interaction.",
    risk: "If the common path stays client-only, performance, crawlability, and perceived readiness all suffer together.",
    relatedLinks: [
      { href: "/shopify-hydrogen-issues#performance", label: "Performance issue library", note: "Symptom group for SSR and speed issues." },
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist", note: "Checklist for production verification." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "Service path for live storefront cleanup." },
    ],
  },
  {
    slug: "shopify-hydrogen-metaobjects-page-specific-sections",
    problem: "Page-specific merchandising content often starts hardcoded and becomes slow to change.",
    symptom: "Normal campaign, product-story, or landing-page copy changes require developer releases.",
    rootCause: "The content boundary was not named before implementation, so code became the content model.",
    fix: "Use structured Shopify metaobjects for repeatable page-specific content that merchants need to edit.",
    risk: "If the model grows without ownership, the Storefront API query, fallback copy, and route behavior become harder to maintain.",
    relatedLinks: [
      { href: "/shopify-hydrogen-issues#metaobjects", label: "Metaobjects issue library", note: "Symptom group for content-model problems." },
      { href: "/shopify-hydrogen-templates#content-model-brief", label: "Content model brief", note: "Checklist for field ownership." },
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront", note: "Service path for merchant-editable Hydrogen sections." },
    ],
  },
  {
    slug: "shopify-hydrogen-collection-out-of-stock-products-hidden",
    problem: "Collection pages can hide valid catalog items when storefront filtering and pagination drift apart.",
    symptom: "The Storefront API returns products, but the unfiltered collection does not render the expected cards.",
    rootCause: "App-local availability buffering was mixed with Shopify connection pagination state.",
    fix: "Separate remote pagination, local availability rules, SSR product cards, and load-more behavior.",
    risk: "If this stays hidden, shoppers and crawlers see an incomplete catalog even when Shopify data is correct.",
    relatedLinks: [
      { href: "/shopify-hydrogen-issues#collections", label: "Collection issue library", note: "Symptom group for collection bugs." },
      { href: "/shopify-hydrogen-templates#route-map", label: "Route map checklist", note: "Checklist for collection route behavior." },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization", note: "Service path for SSR and loader cleanup." },
    ],
  },
] as const satisfies readonly ProductionNoteFrame[];

export function getProductionNoteFrame(slug: string) {
  return PRODUCTION_NOTE_FRAMES.find((frame) => frame.slug === slug) ?? null;
}
