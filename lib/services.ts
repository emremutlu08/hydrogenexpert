export interface ServicePackage {
  slug:
    | "hydrogen-strategy-fit-audit"
    | "liquid-to-hydrogen-migration"
    | "custom-hydrogen-storefront-development"
    | "hydrogen-performance-seo-ux-optimization"
    | "hydrogen-support-retainer";
  pagePath: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  summary: string;
  commercialIntent: string;
  bestFor: string;
  deliverables: readonly string[];
  proofNotes: readonly string[];
  faq: readonly {
    question: string;
    answer: string;
  }[];
  relatedLinks: readonly {
    href: string;
    label: string;
    note: string;
  }[];
}

export const SERVICE_PACKAGES: readonly ServicePackage[] = [
  {
    slug: "hydrogen-strategy-fit-audit",
    pagePath: "/shopify-hydrogen-audit",
    name: "Strategy & Fit Audit",
    title: "Find out whether Hydrogen is actually justified",
    metaTitle: "Shopify Hydrogen Audit for Shopify Plus Brands | Emre Mutlu",
    metaDescription:
      "Shopify Hydrogen audit for Shopify Plus brands reviewing performance, SEO, variant URLs, Storefront API usage, analytics, and migration risk.",
    heroTitle: "Shopify Hydrogen audit before the rebuild money moves",
    summary:
      "A senior review for brands considering Hydrogen but unsure whether the cost, complexity, and maintenance model make commercial sense.",
    commercialIntent:
      "Built for teams searching for a Shopify Hydrogen audit before committing to a rebuild, agency scope, or platform-level decision.",
    bestFor:
      "Teams feeling theme limits, performance drag, app-stack complexity, or feature velocity problems, but not yet ready to commit to a rebuild.",
    deliverables: [
      "Current storefront and theme constraint review",
      "Liquid vs Hydrogen fit assessment",
      "Performance, SEO, and app-stack risk review",
      "Migration complexity and maintenance-readiness notes",
      "Clear recommendation: stay on Liquid, refactor, migrate to Hydrogen, or delay the rebuild",
    ],
    proofNotes: [
      "Direct senior review from a Shopify Hydrogen developer, not a generic ecommerce audit package.",
      "Fit-first framing protects budget when Liquid, targeted UX work, or no rebuild is the better business answer.",
      "The audit covers SEO, performance, analytics, migration risk, and operating model readiness together.",
    ],
    faq: [
      {
        question: "What does a Shopify Hydrogen audit check?",
        answer:
          "It reviews whether Hydrogen is commercially justified, then checks storefront speed, crawlability, route structure, app-stack pressure, Storefront API usage, analytics, migration risk, and maintenance readiness.",
      },
      {
        question: "Is this only for brands already committed to Hydrogen?",
        answer:
          "No. The point is to decide whether Hydrogen is worth it before a rebuild starts. If Liquid is still the better path, that should be the recommendation.",
      },
      {
        question: "What should a brand send before an audit?",
        answer:
          "Send the current store URL, known performance or SEO issues, the commercial reason Hydrogen is being discussed, and any planned redesign or migration timeline.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for the broader metadata, canonical, sitemap, robots, and structured-data checklist.",
      },
      {
        href: "/should-i-use-it",
        label: "Hydrogen fit decision guide",
        note: "A practical filter when the audit question is whether Hydrogen is justified at all.",
      },
      {
        href: "/cost",
        label: "Shopify Hydrogen cost",
        note: "Use this to connect audit findings to realistic budget ranges.",
      },
    ],
  },
  {
    slug: "liquid-to-hydrogen-migration",
    pagePath: "/liquid-to-hydrogen-migration",
    name: "Liquid to Hydrogen Migration",
    title: "Move from theme constraints to a custom Hydrogen storefront",
    metaTitle: "Liquid to Hydrogen Migration for Shopify Plus Brands | Emre Mutlu",
    metaDescription:
      "Plan and ship a Liquid to Hydrogen migration with route, SEO, product, analytics, cart, checkout handoff, and launch risk covered.",
    heroTitle: "Liquid to Hydrogen migration without losing the storefront map",
    summary:
      "A structured migration path for Shopify brands that have outgrown their Liquid theme and need a custom storefront without losing SEO, analytics, or launch control.",
    commercialIntent:
      "For Shopify Plus brands comparing Liquid constraints against a Hydrogen migration and needing a production-safe path.",
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
    proofNotes: [
      "Migration work is scoped around route continuity, canonical decisions, analytics, and checkout handoff, not only component rebuilds.",
      "The plan keeps Liquid as a valid fallback when a full custom storefront is not commercially justified.",
      "Production Hydrogen experience across retail, luxury ecommerce, and DTC informs the migration risk model.",
    ],
    faq: [
      {
        question: "What usually breaks during a Liquid to Hydrogen migration?",
        answer:
          "The common risks are route changes, product and collection URL drift, analytics gaps, missing structured data, app replacement surprises, and checkout handoff details that were implicit in the theme.",
      },
      {
        question: "Can a Liquid theme and Hydrogen storefront overlap during migration?",
        answer:
          "Yes. A phased migration can preserve current operations while the Hydrogen storefront is scoped, built, QA'd, and launched against a clear route and analytics plan.",
      },
      {
        question: "When should a brand not migrate from Liquid to Hydrogen?",
        answer:
          "If the main problems can be solved with a stronger theme, smaller Liquid refactor, or cleaner app setup, Hydrogen may add cost without enough operational payoff.",
      },
    ],
    relatedLinks: [
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "Use this to avoid migrating when Liquid still solves the real business problem.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Start with a Hydrogen audit",
        note: "Use this before migration scope if the business case still needs proof.",
      },
      {
        href: "/case-studies",
        label: "Production case studies",
        note: "See how different storefront pressures shaped real Hydrogen work.",
      },
    ],
  },
  {
    slug: "custom-hydrogen-storefront-development",
    pagePath: "/custom-shopify-hydrogen-storefront",
    name: "Custom Hydrogen Storefront",
    title: "Build the storefront your current theme cannot support",
    metaTitle: "Custom Shopify Hydrogen Storefront Development | Emre Mutlu",
    metaDescription:
      "Custom Shopify Hydrogen storefront development for Shopify Plus brands needing bespoke PDPs, collections, search, cart, content, and mobile UX.",
    heroTitle: "Custom Shopify Hydrogen storefront development for theme-breaking ideas",
    summary:
      "Hydrogen architecture and implementation for brands that need a more flexible, more intentional customer experience than a theme can cleanly deliver.",
    commercialIntent:
      "For brands searching for a Shopify Hydrogen developer to build a custom storefront beyond theme guardrails.",
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
    proofNotes: [
      "The work is direct senior implementation, so strategy and code decisions stay close together.",
      "The storefront is built around product discovery, mobile buying behavior, and launch ownership instead of headless novelty.",
      "Hydrogen is used when the custom experience earns the maintenance cost.",
    ],
    faq: [
      {
        question: "What makes a Shopify Hydrogen storefront custom?",
        answer:
          "The storefront can define its own React UI, route behavior, product and collection experiences, content model, performance strategy, and commerce handoff while Shopify remains the commerce engine.",
      },
      {
        question: "Do custom Hydrogen storefronts still use Shopify checkout?",
        answer:
          "Yes. Hydrogen storefronts usually build the customer-facing storefront and hand off to Shopify checkout for the transaction path.",
      },
      {
        question: "How do you keep a custom storefront maintainable?",
        answer:
          "Keep the first launch scope focused, use reusable route and component patterns, render important content server-side, and avoid custom logic that does not support a real business need.",
      },
    ],
    relatedLinks: [
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Use this when the custom build is replacing an existing Shopify theme.",
      },
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry case study",
        note: "A luxury catalog example where presentation and discovery mattered.",
      },
      {
        href: "/hire-me",
        label: "Hire a Shopify Hydrogen developer",
        note: "The direct route when you need senior storefront implementation.",
      },
    ],
  },
  {
    slug: "hydrogen-performance-seo-ux-optimization",
    pagePath: "/shopify-hydrogen-performance-optimization",
    name: "Performance, SEO & UX Optimization",
    title: "Fix a Hydrogen storefront that is slow, fragile, or hard to grow",
    metaTitle: "Shopify Hydrogen Performance Optimization | Emre Mutlu",
    metaDescription:
      "Optimize Shopify Hydrogen performance, SEO, UX, Core Web Vitals, product rendering, metadata, canonical URLs, JSON-LD, images, and Storefront API queries.",
    heroTitle: "Shopify Hydrogen performance optimization for live storefronts",
    summary:
      "A focused optimization engagement for existing Hydrogen storefronts where speed, organic visibility, product UX, or technical debt is holding the store back.",
    commercialIntent:
      "For teams with a live Hydrogen storefront searching for performance, SEO, UX, and technical debt cleanup.",
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
    proofNotes: [
      "The optimization path focuses on rendered content, Core Web Vitals, product UX, and crawl consistency together.",
      "Technical fixes are tied to storefront outcomes: faster pages, clearer product state, cleaner metadata, and safer releases.",
      "The service is designed for live Hydrogen stores that need targeted cleanup rather than another full rebuild pitch.",
    ],
    faq: [
      {
        question: "What causes Shopify Hydrogen storefronts to feel slow?",
        answer:
          "Common causes include client-side fetching for primary content, heavy images or video, broad Storefront API queries, weak caching choices, render-blocking third-party scripts, and component patterns that delay useful HTML.",
      },
      {
        question: "Can Hydrogen SEO be optimized after launch?",
        answer:
          "Yes. Metadata, canonical URLs, JSON-LD, server-rendered content, sitemap coverage, robots output, and product state consistency can all be audited and improved after launch.",
      },
      {
        question: "Is this different from a full rebuild?",
        answer:
          "Yes. The goal is to fix the current storefront when the architecture is still worth keeping, not to reset the project unless the codebase truly requires it.",
      },
    ],
    relatedLinks: [
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Hydrogen performance case note",
        note: "A production note about moving primary homepage data back into SSR.",
      },
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "Product description SSR SEO",
        note: "A related crawlability fix for product detail content.",
      },
      {
        href: "/shopify-hydrogen-seo-guide",
        label: "Shopify Hydrogen SEO guide",
        note: "The broader route metadata, canonical, and structured-data framework.",
      },
    ],
  },
  {
    slug: "hydrogen-support-retainer",
    pagePath: "/shopify-hydrogen-support-retainer",
    name: "Support Retainer",
    title: "Senior Hydrogen support without hiring a full agency",
    metaTitle: "Shopify Hydrogen Support Retainer | Emre Mutlu",
    metaDescription:
      "Senior Shopify Hydrogen support retainer for live storefront improvements, bug fixes, feature work, performance cleanup, integrations, and release support.",
    heroTitle: "Shopify Hydrogen support retainer for teams that already shipped",
    summary:
      "Ongoing development support for teams that already have a Hydrogen storefront and need a direct senior operator for improvements, fixes, and planning.",
    commercialIntent:
      "For teams searching for ongoing Shopify Hydrogen support without adding a full agency layer.",
    bestFor:
      "Brands with a live Hydrogen storefront, an internal team, or an existing agency setup that still needs focused senior execution.",
    deliverables: [
      "Feature work and bug fixes",
      "Performance and UX improvements",
      "Integration support",
      "Launch and release support",
      "Technical planning and implementation review",
    ],
    proofNotes: [
      "Retainer work keeps senior implementation available after launch without forcing a broad agency engagement.",
      "The focus is practical: fixes, feature work, performance cleanup, integrations, and release support.",
      "Useful for teams that need someone who can read the storefront, make decisions, and ship without a long translation layer.",
    ],
    faq: [
      {
        question: "Who is a Shopify Hydrogen support retainer for?",
        answer:
          "It is for brands with a live Hydrogen storefront that need recurring senior help with improvements, bugs, releases, performance work, integrations, or technical planning.",
      },
      {
        question: "Is a support retainer only for stores Emre built?",
        answer:
          "No. Existing Hydrogen storefronts can be reviewed and supported when the codebase and working model are healthy enough for ongoing collaboration.",
      },
      {
        question: "What work should not go into a retainer?",
        answer:
          "A full rebuild, major redesign, or unclear migration should be scoped separately first. Retainers work best when the storefront already has a stable direction.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "A focused project path when the live storefront needs a deeper cleanup first.",
      },
      {
        href: "/hire-me",
        label: "Work with Emre",
        note: "The direct route for ongoing senior Shopify Hydrogen support.",
      },
      {
        href: "/case-studies/rebel-bunny-shopify-hydrogen",
        label: "Rebel Bunny case study",
        note: "A DTC storefront context where brand, education, and commerce all had to move together.",
      },
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

export function getServicePackageByPagePath(path: string) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.pagePath === path) ?? null;
}

export function requireServicePackageByPagePath(path: string) {
  const servicePackage = getServicePackageByPagePath(path);

  if (!servicePackage) {
    throw new Error(`Missing service package for ${path}.`);
  }

  return servicePackage;
}

export function getServicePackageBySlug(slug: ServicePackage["slug"]) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.slug === slug) ?? null;
}
