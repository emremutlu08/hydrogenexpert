export interface ServicePackage {
  slug:
    | "hydrogen-strategy-fit-audit"
    | "liquid-to-hydrogen-migration"
    | "custom-hydrogen-storefront-development"
    | "hydrogen-performance-seo-ux-optimization"
    | "hydrogen-support-retainer";
  name: string;
  title: string;
  summary: string;
  bestFor: string;
  deliverables: readonly string[];
}

export const SERVICE_PACKAGES: readonly ServicePackage[] = [
  {
    slug: "hydrogen-strategy-fit-audit",
    name: "Strategy & Fit Audit",
    title: "Find out whether Hydrogen is actually justified",
    summary:
      "A senior review for brands considering Hydrogen but unsure whether the cost, complexity, and maintenance model make commercial sense.",
    bestFor:
      "Teams feeling theme limits, performance drag, app-stack complexity, or feature velocity problems, but not yet ready to commit to a rebuild.",
    deliverables: [
      "Current storefront and theme constraint review",
      "Liquid vs Hydrogen fit assessment",
      "Performance, SEO, and app-stack risk review",
      "Migration complexity and maintenance-readiness notes",
      "Clear recommendation: stay on Liquid, refactor, migrate to Hydrogen, or delay the rebuild",
    ],
  },
  {
    slug: "liquid-to-hydrogen-migration",
    name: "Liquid to Hydrogen Migration",
    title: "Move from theme constraints to a custom Hydrogen storefront",
    summary:
      "A structured migration path for Shopify brands that have outgrown their Liquid theme and need a custom storefront without losing SEO, analytics, or launch control.",
    bestFor:
      "Growth-stage Shopify brands with a clear business case for Hydrogen and a need to protect route structure, product discovery, cart flow, and launch stability.",
    deliverables: [
      "Route, SEO, and canonical planning",
      "Product and collection mapping",
      "Cart flow and checkout handoff implementation",
      "Storefront API implementation",
      "Analytics and tracking checks",
      "QA, launch support, and post-launch fixes",
    ],
  },
  {
    slug: "custom-hydrogen-storefront-development",
    name: "Custom Hydrogen Storefront",
    title: "Build the storefront your current theme cannot support",
    summary:
      "Hydrogen architecture and implementation for brands that need a more flexible, more intentional customer experience than a theme can cleanly deliver.",
    bestFor:
      "Brands with custom PDPs, collection experiences, search needs, content models, mobile buying journeys, or merchandising logic that exceed theme guardrails.",
    deliverables: [
      "Hydrogen architecture and storefront implementation",
      "PDP, collection, search, cart, and checkout-handoff flows",
      "Custom React components and interaction patterns",
      "Shopify metafield and metaobject integration",
      "CMS integration when the content model requires it",
      "Performance-focused implementation and launch QA",
    ],
  },
  {
    slug: "hydrogen-performance-seo-ux-optimization",
    name: "Performance, SEO & UX Optimization",
    title: "Fix a Hydrogen storefront that is slow, fragile, or hard to grow",
    summary:
      "A focused optimization engagement for existing Hydrogen storefronts where speed, organic visibility, product UX, or technical debt is holding the store back.",
    bestFor:
      "Teams already on Hydrogen that need senior debugging and cleanup instead of a full rebuild or another vague audit deck.",
    deliverables: [
      "Core Web Vitals and performance review",
      "Storefront API and GraphQL query review",
      "Metadata, canonical, and structured-data checks",
      "PDP, collection, and cart UX review",
      "Image and video loading improvements",
      "Technical debt cleanup plan and implementation support",
    ],
  },
  {
    slug: "hydrogen-support-retainer",
    name: "Support Retainer",
    title: "Senior Hydrogen support without hiring a full agency",
    summary:
      "Ongoing development support for teams that already have a Hydrogen storefront and need a direct senior operator for improvements, fixes, and planning.",
    bestFor:
      "Brands with a live Hydrogen storefront, an internal team, or an existing agency setup that still needs focused senior execution.",
    deliverables: [
      "Feature work and bug fixes",
      "Performance and UX improvements",
      "Integration support",
      "Launch and release support",
      "Technical planning and implementation review",
    ],
  },
];

export const SECONDARY_SERVICE = {
  title: "Shopify Liquid development is still on the table",
  body:
    "Hydrogen is not always the right move. If a stronger Liquid theme, a targeted UX refactor, or cleaner app setup is faster, safer, and better for the business, that should be the recommendation.",
  bullets: [
    "Liquid theme improvements when Hydrogen is overkill",
    "Figma to Liquid implementation for focused sections",
    "Performance and UX refactors inside the current theme",
  ],
} as const;

export function hasMeaningfulServicesContent() {
  return true;
}
