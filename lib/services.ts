import type { ContentSourceMetadata } from "./content-sources";
import { SHOPIFY_CONTENT_LAST_VERIFIED, SOURCE_PACKS } from "./content-sources";

interface ServicePackageBase {
  slug:
    | "shopify-hydrogen-agency-alternative"
    | "headless-shopify-agency-alternative"
    | "shopify-hydrogen-developer"
    | "hydrogen-strategy-fit-audit"
    | "liquid-to-hydrogen-migration"
    | "shopify-hydrogen-seo"
    | "shopify-hydrogen-cost"
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

interface ServicePageEnrichment {
  uniqueSection: {
    eyebrow: string;
    title: string;
    body: readonly string[];
  };
  decisionTable: readonly {
    signal: string;
    strongerMove: string;
    caution: string;
  }[];
  contextualLinks: readonly {
    href: string;
    label: string;
    note: string;
  }[];
  pricingRows?: readonly {
    engagement: string;
    range: string;
  }[];
  wrongFitNotes?: readonly string[];
  auditOffer?: {
    name: string;
    price: string;
    timeline: string;
    format: string;
    outcomes: readonly string[];
  };
}

interface ServiceOfferSnapshot {
  entryPoint: string;
  typicalTimeline: string;
  expectedOutput: string;
  qualification: string;
}

export interface ServicePackage
  extends ServicePackageBase,
    ServicePageEnrichment,
    ContentSourceMetadata {
  offerSnapshot: ServiceOfferSnapshot;
}

const SERVICE_PACKAGE_BASES = [
  {
    slug: "shopify-hydrogen-agency-alternative",
    pagePath: "/shopify-hydrogen-agency",
    name: "Shopify Hydrogen Agency Alternative",
    title: "Senior-led Hydrogen direction for agency-intent buyers",
    metaTitle: "Shopify Hydrogen Agency Alternative | Emre Mutlu",
    metaDescription:
      "Shopify Hydrogen agency alternative for Shopify Plus brands that need senior storefront strategy, audits, migrations, custom builds, SEO, and launch support.",
    heroTitle: "Shopify Hydrogen agency alternative for brands that need senior ownership",
    summary:
      "A focused commercial path for teams searching for a Shopify Hydrogen agency but wanting direct senior strategy and implementation instead of a large delivery layer.",
    commercialIntent:
      "Built for Shopify Plus teams comparing Hydrogen agencies, freelance specialists, and senior operator support before committing rebuild budget.",
    bestFor:
      "Brands that need Hydrogen judgment, storefront implementation, migration planning, or post-launch cleanup, but do not want agency overhead between the commercial problem and the code.",
    deliverables: [
      "Hydrogen fit and scope review",
      "Migration, custom build, SEO, or optimization recommendation",
      "Senior implementation planning",
      "Storefront architecture and launch-risk review",
      "Clear next step: audit, migration, build, optimization, support, or no rebuild",
    ],
    proofNotes: [
      "This page targets agency search intent while keeping the work honest: HydrogenExpert is a senior-led service model, not a broad full-service agency claim.",
      "The positioning protects budget by keeping Liquid, targeted refactors, and delayed rebuilds on the table when they are better answers.",
      "The engagement connects strategy and implementation so technical choices are not separated from storefront outcomes.",
    ],
    faq: [
      {
        question: "Is HydrogenExpert a Shopify Hydrogen agency?",
        answer:
          "HydrogenExpert is positioned as a Shopify Hydrogen agency alternative. The work is led directly by Emre Mutlu as a senior Shopify Hydrogen developer and advisor, not by a broad agency team.",
      },
      {
        question: "When should a brand choose a senior operator instead of an agency?",
        answer:
          "A senior operator is useful when the main need is clear technical judgment, storefront implementation, migration planning, SEO cleanup, or launch ownership without a large account layer.",
      },
      {
        question: "Can this still support larger Shopify Plus decisions?",
        answer:
          "Yes. The point is not to make the scope smaller by default. It is to keep the decision path direct, evidence-led, and honest about whether Hydrogen is the right investment.",
      },
    ],
    relatedLinks: [
      {
        href: "/headless-shopify-agency",
        label: "Headless Shopify agency alternative",
        note: "Use this when the search is broader than Hydrogen but still about headless Shopify architecture.",
      },
      {
        href: "/shopify-hydrogen-developer",
        label: "Shopify Hydrogen developer",
        note: "Use this when the immediate need is senior implementation rather than agency comparison.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this before choosing an agency path when the business case still needs proof.",
      },
    ],
  },
  {
    slug: "headless-shopify-agency-alternative",
    pagePath: "/headless-shopify-agency",
    name: "Headless Shopify Agency Alternative",
    title: "Plan headless Shopify without buying complexity first",
    metaTitle: "Headless Shopify Agency Alternative | Emre Mutlu",
    metaDescription:
      "Headless Shopify agency alternative for brands evaluating Hydrogen, custom storefront architecture, Liquid tradeoffs, SEO risk, migration cost, and launch support.",
    heroTitle: "Headless Shopify agency alternative for teams comparing serious storefront paths",
    summary:
      "A practical path for brands researching headless Shopify agencies and needing a senior Hydrogen perspective on whether headless is justified at all.",
    commercialIntent:
      "For teams comparing headless Shopify agency options, Hydrogen specialists, and lower-risk Liquid alternatives before committing to custom storefront architecture.",
    bestFor:
      "Teams with theme limits, custom UX demands, integration pressure, or performance goals that may justify headless Shopify, but still need the decision tested against cost and maintenance reality.",
    deliverables: [
      "Headless Shopify fit assessment",
      "Hydrogen vs Liquid tradeoff review",
      "Architecture, SEO, analytics, and integration risk notes",
      "Migration and launch-path recommendation",
      "Budget-aware next-step scope",
    ],
    proofNotes: [
      "Headless is treated as a storefront architecture decision, not a default upgrade.",
      "Hydrogen remains the preferred custom Shopify path when headless is justified, but Liquid stays valid when it solves the real constraint.",
      "The work avoids full-service agency language and keeps the buyer close to the technical decision.",
    ],
    faq: [
      {
        question: "Is headless Shopify always Hydrogen?",
        answer:
          "No. Hydrogen is Shopify's React-based framework for custom storefronts, but headless Shopify is a broader architecture choice. The useful question is whether a custom storefront is justified for the brand.",
      },
      {
        question: "What should be checked before hiring a headless Shopify agency?",
        answer:
          "Check the commercial reason for going headless, SEO and route risk, integration needs, internal maintenance capacity, launch timeline, and whether the same outcome can be reached with a stronger Liquid path.",
      },
      {
        question: "Can you help if the brand is still undecided?",
        answer:
          "Yes. The audit and planning path is designed for exactly that stage: before a team commits to a full headless rebuild or agency scope.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-agency",
        label: "Shopify Hydrogen agency alternative",
        note: "Use this when the decision has already narrowed to Hydrogen.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Use this when the current Shopify theme is the storefront constraint.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Shopify Hydrogen cost",
        note: "Use this to connect headless ambition to realistic budget ranges.",
      },
    ],
  },
  {
    slug: "shopify-hydrogen-developer",
    pagePath: "/shopify-hydrogen-developer",
    name: "Shopify Hydrogen Developer",
    title: "Hire a senior Shopify Hydrogen developer for direct storefront work",
    metaTitle: "Shopify Hydrogen Developer for Shopify Plus Brands | Emre Mutlu",
    metaDescription:
      "Hire a senior Shopify Hydrogen developer for audits, Liquid to Hydrogen migrations, custom storefront builds, SEO fixes, performance cleanup, and launch support.",
    heroTitle: "Shopify Hydrogen developer for stores that need senior execution",
    summary:
      "Direct Hydrogen implementation and advisory for Shopify Plus brands that need someone who can scope, build, debug, and launch without a translation layer.",
    commercialIntent:
      "For teams searching for a Shopify Hydrogen developer rather than a generic Shopify agency or broad ecommerce vendor.",
    bestFor:
      "Brands that know Hydrogen is likely part of the answer and need senior help with architecture, components, Storefront API work, SEO, performance, or migration details.",
    deliverables: [
      "Hydrogen route and component implementation",
      "Storefront API and product-flow work",
      "PDP, collection, cart, and checkout-handoff support",
      "SEO, performance, and analytics cleanup",
      "Launch QA and post-launch fixes",
    ],
    proofNotes: [
      "The page keeps /hire-me as the broader proof profile while this URL serves developer search intent directly.",
      "The work is framed around senior execution and judgment, not anonymous team capacity.",
      "Hydrogen development is offered alongside audit and fit checks so the build does not outrun the business case.",
    ],
    faq: [
      {
        question: "What does a Shopify Hydrogen developer work on?",
        answer:
          "A Hydrogen developer builds and maintains the custom React storefront around Shopify: routes, product pages, collections, cart flow, Storefront API data, metadata, performance, and checkout handoff.",
      },
      {
        question: "Is this for new builds or existing Hydrogen stores?",
        answer:
          "Both. The work can support a new Liquid to Hydrogen migration, a custom storefront build, or cleanup and feature work on an existing Hydrogen codebase.",
      },
      {
        question: "How is this different from hiring a general Shopify developer?",
        answer:
          "Hydrogen work is closer to application development than theme customization. It needs React, routing, server rendering, data loading, SEO, performance, and Shopify commerce knowledge together.",
      },
    ],
    relatedLinks: [
      {
        href: "/hire-me",
        label: "Emre Mutlu proof profile",
        note: "Use this for credentials, client proof, and direct background.",
      },
      {
        href: "/shopify-hydrogen-agency",
        label: "Shopify Hydrogen agency alternative",
        note: "Use this when internal stakeholders are comparing agency routes.",
      },
      {
        href: "/case-studies",
        label: "Production case studies",
        note: "Review production contexts before scoping a new Hydrogen engagement.",
      },
    ],
  },
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
        href: "/shopify-hydrogen-seo",
        label: "Shopify Hydrogen SEO guide",
        note: "Use this for the broader metadata, canonical, sitemap, robots, and structured-data checklist.",
      },
      {
        href: "/should-i-use-it",
        label: "Hydrogen fit decision guide",
        note: "A practical filter when the audit question is whether Hydrogen is justified at all.",
      },
      {
        href: "/shopify-hydrogen-cost",
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
    slug: "shopify-hydrogen-seo",
    pagePath: "/shopify-hydrogen-seo",
    name: "Shopify Hydrogen SEO",
    title: "Make a Hydrogen storefront crawlable, stable, and commercially useful",
    metaTitle: "Shopify Hydrogen SEO for Custom Storefronts | Emre Mutlu",
    metaDescription:
      "Shopify Hydrogen SEO service for custom storefronts covering metadata, canonical URLs, JSON-LD, variant URLs, sitemap, robots, SSR content, and crawl consistency.",
    heroTitle: "Shopify Hydrogen SEO for custom storefronts that need clean crawl signals",
    summary:
      "SEO review and implementation support for Hydrogen storefronts where route metadata, canonical choices, product state, structured data, and rendered HTML need to agree.",
    commercialIntent:
      "For Shopify teams searching for Hydrogen SEO help after launch, during migration planning, or before a custom storefront goes live.",
    bestFor:
      "Teams with a live or planned Hydrogen storefront that need route-level metadata, canonical discipline, product schema, sitemap coverage, and server-rendered commerce content checked together.",
    deliverables: [
      "Metadata and canonical review",
      "JSON-LD and rendered product-state alignment",
      "Sitemap, robots, and route coverage checks",
      "Variant URL and search-param recommendations",
      "SSR, performance, and crawlability implementation support",
    ],
    proofNotes: [
      "Hydrogen SEO is treated as engineering work: the URL, rendered state, structured data, and performance pattern need to line up.",
      "The work avoids keyword stuffing and focuses on merchant-readable content, crawl consistency, and buying-critical HTML.",
      "SEO review connects naturally to audit, migration, and performance cleanup instead of living as a disconnected checklist.",
    ],
    faq: [
      {
        question: "Is Shopify Hydrogen good for SEO?",
        answer:
          "Hydrogen can be good for SEO when the storefront renders important content server-side, owns route metadata carefully, keeps canonical URLs intentional, and makes JSON-LD match the visible product state.",
      },
      {
        question: "What usually breaks SEO on Hydrogen storefronts?",
        answer:
          "Common issues include generic metadata, duplicate or unstable canonical URLs, product content hidden behind client-only rendering, mismatched JSON-LD, weak sitemap coverage, and variant URLs that do not match the visible state.",
      },
      {
        question: "Should Hydrogen SEO be handled before or after migration?",
        answer:
          "The safest time is before migration, because route mapping, canonical decisions, product data, analytics, and structured data all affect launch risk. Existing Hydrogen stores can still be audited and improved after launch.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-audit",
        label: "Shopify Hydrogen audit",
        note: "Use this when SEO issues are part of a broader storefront and migration-risk review.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Hydrogen performance optimization",
        note: "Use this when crawlability is tied to speed, SSR, images, or technical debt.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Use this when SEO preservation is part of a move away from Liquid.",
      },
    ],
  },
  {
    slug: "shopify-hydrogen-cost",
    pagePath: "/shopify-hydrogen-cost",
    name: "Shopify Hydrogen Cost",
    title: "Understand Hydrogen budget before the scope gets expensive",
    metaTitle: "Shopify Hydrogen Cost and Budget Planning | Emre Mutlu",
    metaDescription:
      "Shopify Hydrogen cost planning for Shopify Plus brands comparing budget ranges, migration scope, integrations, SEO risk, maintenance, and launch support.",
    heroTitle: "Shopify Hydrogen cost planning for brands weighing rebuild budget",
    summary:
      "A budget-focused landing page for teams trying to understand what drives Hydrogen cost before choosing an agency, developer, migration, or audit path.",
    commercialIntent:
      "For budget-aware leads searching Shopify Hydrogen cost, pricing, or rebuild budget before they are ready to scope implementation.",
    bestFor:
      "Brands that need a realistic cost conversation around custom storefront complexity, integrations, migration risk, SEO preservation, QA, and post-launch support.",
    deliverables: [
      "Scope and budget driver review",
      "Lean, growth, and complex build range discussion",
      "Migration and integration risk notes",
      "Maintenance and post-launch support considerations",
      "Recommendation for audit, migration, custom build, optimization, or delay",
    ],
    proofNotes: [
      "Cost is framed around storefront scope and operating reality, not around the word headless alone.",
      "The page keeps the existing budget guidance but makes /shopify-hydrogen-cost the canonical commercial URL.",
      "The output should help teams decide whether to start with an audit before committing to a rebuild quote.",
    ],
    faq: [
      {
        question: "What affects Shopify Hydrogen cost the most?",
        answer:
          "The biggest drivers are custom UX, catalog and merchandising complexity, integrations, migration scope, SEO preservation, analytics, QA depth, and the amount of post-launch iteration required.",
      },
      {
        question: "Is Hydrogen usually more expensive than Liquid?",
        answer:
          "Yes. Liquid is usually cheaper to launch and maintain. Hydrogen becomes easier to justify when custom UX, performance patterns, or feature velocity matter enough to cover the application-level maintenance cost.",
      },
      {
        question: "Should a brand get an audit before asking for a Hydrogen quote?",
        answer:
          "Often yes. If the business case, route risk, SEO risk, or integration scope is unclear, an audit can keep the rebuild from turning into a broad estimate with too many assumptions.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-audit",
        label: "Start with a Hydrogen audit",
        note: "Use this when the budget range is still unclear or the rebuild may not be justified.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Liquid to Hydrogen migration",
        note: "Use this when the current Shopify theme is the storefront constraint.",
      },
      {
        href: "/shopify-hydrogen-developer",
        label: "Shopify Hydrogen developer",
        note: "Use this when the next step is direct implementation help.",
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
        href: "/shopify-hydrogen-seo",
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
] as const satisfies readonly ServicePackageBase[];

const SERVICE_PAGE_ENRICHMENTS = {
  "shopify-hydrogen-agency-alternative": {
    uniqueSection: {
      eyebrow: "Agency alternative",
      title: "When a senior operator beats a traditional agency path.",
      body: [
        "A traditional ecommerce agency can be the right answer when the brand needs a large multi-discipline team, paid media, brand work, creative production, and ongoing account structure. HydrogenExpert is intentionally narrower. The useful comparison is not agency good, solo bad. It is whether the real risk is coordination or judgment.",
        "Hydrogen projects often fail before code because the scope is sold before the operating model is tested. A senior operator is useful when the brand needs someone who can read the commercial pressure, inspect the storefront constraints, understand Hydrogen, and still say that Liquid or a smaller refactor is the better move. That direct line matters when the decision affects SEO, analytics, migration risk, and maintenance cost.",
        "This page keeps agency search intent, but the delivery model is different: fewer layers, tighter scope, and direct ownership of the technical tradeoffs. The point is to reduce translation between strategy and implementation so the brand can decide what to ship, what to delay, and what not to buy.",
      ],
    },
    decisionTable: [
      {
        signal: "Stakeholders need a Hydrogen decision, not a full agency apparatus.",
        strongerMove: "Start with a senior fit audit or focused scope.",
        caution: "Use a larger agency when brand, media, content, and engineering all need parallel teams.",
      },
      {
        signal: "The rebuild estimate is expanding before the technical risk is clear.",
        strongerMove: "Separate audit, migration risk, and budget sanity before implementation.",
        caution: "Avoid buying a broad rebuild scope only because the storefront is called headless.",
      },
      {
        signal: "Internal team wants one accountable technical owner.",
        strongerMove: "Use the operator model for architecture, implementation, and launch judgment.",
        caution: "Do not use this model if the project requires large-team throughput every week.",
      },
    ],
    contextualLinks: [
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop production case",
        note: "A national retail context where Hydrogen needed operating discipline.",
      },
      {
        href: "/blog/shopify-hydrogen-developer-vs-agency",
        label: "Developer vs agency note",
        note: "Useful when stakeholders are comparing delivery models.",
      },
    ],
  },
  "headless-shopify-agency-alternative": {
    uniqueSection: {
      eyebrow: "Decision tree",
      title: "Headless should be a decision tree, not a default upgrade.",
      body: [
        "Headless Shopify starts as a business constraint, not a technology preference. If the current Liquid theme blocks a core product journey, slows feature work, or cannot support the brand's content and merchandising model, a custom storefront may be worth studying. If the pressure is mostly visual polish, app cleanup, or a handful of sections, Liquid may still be the smarter path.",
        "Hydrogen is Shopify's custom storefront path for teams that want a React application connected to Shopify commerce data. That is powerful, but it also moves the storefront into application ownership. The buyer should ask whether the brand has the budget, development support, QA discipline, and launch runway to maintain that application after launch.",
        "The honest decision tree is: keep Liquid if it solves the constraint, refactor Liquid if the current theme is messy but salvageable, move to Hydrogen when custom storefront flexibility earns its cost, or delay the rebuild when the operating model is not ready.",
      ],
    },
    decisionTable: [
      {
        signal: "Theme sections are messy but the commerce model is straightforward.",
        strongerMove: "Refactor Liquid first.",
        caution: "Hydrogen may add application maintenance without enough return.",
      },
      {
        signal: "Product discovery, content, and UI logic cannot fit theme patterns.",
        strongerMove: "Scope a Hydrogen storefront.",
        caution: "Protect SEO, analytics, checkout handoff, and route continuity early.",
      },
      {
        signal: "The team wants headless because competitors mention it.",
        strongerMove: "Run the fit audit before any rebuild commitment.",
        caution: "Competitor architecture is not proof that your store should copy it.",
      },
    ],
    contextualLinks: [
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "The fastest way to stop a headless decision from becoming default.",
      },
      {
        href: "/shopify-hydrogen-vs-liquid",
        label: "Hydrogen vs Liquid",
        note: "Plain-English tradeoffs for merchant-side stakeholders.",
      },
    ],
  },
  "shopify-hydrogen-developer": {
    uniqueSection: {
      eyebrow: "Senior ownership",
      title: "What senior Hydrogen ownership actually covers.",
      body: [
        "A senior Hydrogen developer is not only writing React components. The useful ownership covers route design, Storefront API data shape, server-rendered product content, cart and checkout handoff, analytics behavior, metadata, canonical logic, performance tradeoffs, and the boring launch details that decide whether a custom storefront is safe to run.",
        "Hydrogen work sits between commerce architecture and frontend implementation. A developer needs to understand Shopify data, the buyer journey, how crawlers see the page, and how the merchant team will maintain the code after launch. That is why this service is framed around judgment as much as throughput.",
        "The right output can be implementation, but it can also be a smaller recommendation: fix the current Hydrogen store, delay a migration, tighten a Liquid theme, or run a fit audit before committing rebuild budget.",
      ],
    },
    decisionTable: [
      {
        signal: "You need code and storefront judgment in the same person.",
        strongerMove: "Hire senior Hydrogen development support.",
        caution: "Do not treat this as generic Shopify theme work.",
      },
      {
        signal: "Routes, product state, and SEO behavior are already fragile.",
        strongerMove: "Start with audit or cleanup before feature expansion.",
        caution: "Adding features on unstable foundations can make launch risk worse.",
      },
      {
        signal: "The team only needs small theme edits.",
        strongerMove: "Use Liquid support instead.",
        caution: "Hydrogen-specific help may be unnecessary for simple theme tasks.",
      },
    ],
    contextualLinks: [
      {
        href: "/case-studies/rebel-bunny-shopify-hydrogen",
        label: "Rebel Bunny case",
        note: "DTC, education, product, and partner paths inside one storefront.",
      },
      {
        href: "/blog/shopify-hydrogen-performance-checklist",
        label: "Performance checklist",
        note: "Where senior implementation often shows up after launch.",
      },
    ],
  },
  "hydrogen-strategy-fit-audit": {
    uniqueSection: {
      eyebrow: "Paid diagnostic",
      title: "What I check before recommending Hydrogen.",
      body: [
        "The audit exists because rebuild money should not move on vibes. Before recommending Hydrogen, I look at the current storefront constraint, whether Liquid is actually blocked, what the catalog and content model require, how much SEO risk a migration creates, what analytics and consent behavior must survive, and whether the team can maintain an application after launch.",
        "The deliverable is not a generic score. It is a decision memo: stay on Liquid, refactor Liquid, run focused optimization, migrate to Hydrogen, or delay the rebuild. That recommendation is paired with the risks, rough budget range, and next scope that would make the decision commercially sane.",
        "This is especially useful when a team is caught between an agency pitch, a theme that feels limiting, and internal pressure to do something bigger. The audit slows the decision down just enough to stop unnecessary complexity.",
      ],
    },
    decisionTable: [
      {
        signal: "The team cannot explain why Hydrogen is necessary.",
        strongerMove: "Run the Fit & Risk Audit.",
        caution: "Do not start a rebuild until the constraint is named.",
      },
      {
        signal: "SEO, routes, apps, or analytics are business-critical.",
        strongerMove: "Audit the launch risks before estimating implementation.",
        caution: "Migration surprises are cheaper to catch before code is underway.",
      },
      {
        signal: "The brand needs immediate theme fixes only.",
        strongerMove: "Use a smaller Liquid or optimization scope.",
        caution: "A Hydrogen audit should not turn every small problem into a rebuild.",
      },
    ],
    contextualLinks: [
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Dedicated audit offer",
        note: "Fixed-scope package details, timeline, and outcomes.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Cost planning",
        note: "Translate audit findings into realistic budget ranges.",
      },
    ],
    auditOffer: {
      name: "Shopify Hydrogen Fit & Risk Audit",
      price: "$1.5K-$5K starting range",
      timeline: "5-10 business days depending on store complexity",
      format: "Written memo plus Loom walkthrough",
      outcomes: [
        "Stay on Liquid",
        "Refactor Liquid",
        "Run focused optimization",
        "Migrate to Hydrogen",
        "Delay rebuild",
      ],
    },
  },
  "liquid-to-hydrogen-migration": {
    uniqueSection: {
      eyebrow: "Migration risk",
      title: "Migration failure modes: routes, canonicals, analytics, apps, and checkout handoff.",
      body: [
        "A Liquid to Hydrogen migration is not just a theme rebuild in React. The fragile parts are the commercial surfaces that already exist: routes, product URLs, collection logic, canonical decisions, structured data, analytics, consent behavior, app dependencies, and the moment the customer moves from storefront cart to Shopify checkout.",
        "The safest migration starts with an inventory of what must not break. Which URLs already earn search traffic? Which product states create indexable pages? Which apps inject storefront behavior today? Which events does the business rely on for reporting? Which checkout assumptions came from the theme and need to be rebuilt deliberately?",
        "Hydrogen can be the right move when the current theme cannot support the required UX or feature velocity. But migration should preserve the store's map before it changes the storefront's look.",
      ],
    },
    decisionTable: [
      {
        signal: "Route structure and organic traffic are valuable.",
        strongerMove: "Create route and canonical mapping before build.",
        caution: "Do not let redesign URLs become accidental SEO decisions.",
      },
      {
        signal: "Apps currently drive PDP, subscriptions, reviews, or merchandising.",
        strongerMove: "Audit replacement paths and API surfaces.",
        caution: "Many theme app assumptions do not transfer automatically to Hydrogen.",
      },
      {
        signal: "Checkout and analytics are business-critical.",
        strongerMove: "QA cart, checkout handoff, consent, and tracking before launch.",
        caution: "A visually complete storefront can still be commercially broken.",
      },
    ],
    contextualLinks: [
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop retail case",
        note: "High-catalog retail pressure where production readiness mattered.",
      },
      {
        href: "/blog/liquid-to-hydrogen-migration-checklist",
        label: "Migration checklist",
        note: "The operational checklist behind this service.",
      },
    ],
  },
  "shopify-hydrogen-seo": {
    uniqueSection: {
      eyebrow: "Technical SEO",
      title: "Hydrogen SEO is state consistency, not just metadata.",
      body: [
        "Hydrogen SEO works when the URL, server-rendered HTML, metadata, canonical URL, product state, and structured data all describe the same page. A storefront can have a title tag and still be weak if the initial HTML hides product content, JSON-LD describes a different variant, or canonical rules change with search parameters.",
        "Shopify's Hydrogen SEO surface includes metadata, canonical URLs, JSON-LD, sitemap routes, and robots behavior. The merchant-facing interpretation is simple: make the page understandable before JavaScript finishes, keep indexable states intentional, and do not let variant or filter URLs create duplicate signals accidentally.",
        "The strongest Hydrogen SEO work happens during migration planning, not after traffic drops. But existing Hydrogen stores can still recover value by auditing routes, sitemap coverage, robots output, product state, and Core Web Vitals together.",
      ],
    },
    decisionTable: [
      {
        signal: "Important product content appears only after client-side code runs.",
        strongerMove: "Move buyer-critical content into initial HTML.",
        caution: "Client-only product state creates crawl and snippet risk.",
      },
      {
        signal: "Variant URLs, filters, or search params create many similar pages.",
        strongerMove: "Define canonical and indexability rules.",
        caution: "Do not let every UI state become an accidental landing page.",
      },
      {
        signal: "JSON-LD does not match visible price, availability, or variant.",
        strongerMove: "Align structured data with rendered product state.",
        caution: "Schema should describe reality, not a preferred marketing version.",
      },
    ],
    contextualLinks: [
      {
        href: "/blog/shopify-hydrogen-product-description-ssr-seo",
        label: "SSR product content note",
        note: "A practical example of product content and crawlability.",
      },
      {
        href: "/blog/shopify-hydrogen-variant-fallback-seo",
        label: "Variant fallback note",
        note: "Related variant-state and URL behavior.",
      },
    ],
  },
  "shopify-hydrogen-cost": {
    uniqueSection: {
      eyebrow: "Budget drivers",
      title: "What makes a Hydrogen project expensive.",
      body: [
        "Hydrogen cost rises when the storefront stops being a theme replacement and becomes a custom commerce application. The expensive parts are not only pages. They are design complexity, catalog behavior, integrations, route and SEO preservation, analytics and consent, content modeling, QA depth, launch support, and post-launch ownership.",
        "A lean Hydrogen build may be reasonable when the brand has a focused product model and clear launch scope. A complex Plus migration becomes expensive when the store has high SEO exposure, multiple app dependencies, unusual merchandising rules, international or B2B needs, and a team that needs launch assurance.",
        "The budget conversation should also include the wrong answer. Hydrogen may be the wrong investment if the current problems can be solved with Liquid, if there is no plan for maintenance, or if the brand wants a custom storefront mainly because it sounds premium.",
      ],
    },
    decisionTable: [
      {
        signal: "Scope is mostly advisory and risk review.",
        strongerMove: "Budget for the audit range.",
        caution: "Do not ask for a full build quote before risks are known.",
      },
      {
        signal: "Custom UX, migration, integrations, and SEO risk all overlap.",
        strongerMove: "Plan for growth-stage or complex migration budget.",
        caution: "Low estimates usually hide launch and maintenance assumptions.",
      },
      {
        signal: "The brand wants theme polish on a small budget.",
        strongerMove: "Stay in Liquid.",
        caution: "Hydrogen can be overkill for straightforward theme work.",
      },
    ],
    contextualLinks: [
      {
        href: "/shopify-hydrogen-fit-audit",
        label: "Budget sanity audit",
        note: "Use a diagnostic before spending rebuild money.",
      },
      {
        href: "/shopify-hydrogen-maintenance-cost",
        label: "Maintenance cost",
        note: "Understand the ongoing application cost after launch.",
      },
    ],
    pricingRows: [
      { engagement: "Hydrogen fit / risk audit", range: "$1.5K-$5K" },
      { engagement: "Focused SEO / performance cleanup", range: "$3K-$12K" },
      { engagement: "Lean Hydrogen build", range: "$15K-$30K" },
      { engagement: "Growth-stage custom storefront", range: "$30K-$60K" },
      { engagement: "Complex Plus migration", range: "$60K-$100K+" },
    ],
    wrongFitNotes: [
      "The main issue is a small visual theme change.",
      "The team has no budget or plan for application maintenance.",
      "Organic traffic is important but route mapping is not approved yet.",
      "Stakeholders cannot name the commercial constraint Hydrogen solves.",
    ],
  },
  "custom-hydrogen-storefront-development": {
    uniqueSection: {
      eyebrow: "Custom UX",
      title: "When custom storefront UX earns its maintenance cost.",
      body: [
        "A custom Hydrogen storefront earns its cost when the buying experience cannot be expressed cleanly in theme constraints. That might mean richer product discovery, high-trust luxury presentation, unusual PDP logic, content-led commerce, complex mobile journeys, or merchandising patterns that need application-level control.",
        "The caution is that custom UX also creates custom responsibility. Every route, component, data dependency, image strategy, and content workflow needs an owner. A good Hydrogen build keeps the first launch focused enough to ship, but structured enough to grow without becoming a pile of one-off product pages.",
        "The build should be justified by the customer journey, not by the architecture label. If the same outcome can be reached with Liquid, that is usually the cheaper and safer move.",
      ],
    },
    decisionTable: [
      {
        signal: "Theme patterns flatten a premium or complex catalog.",
        strongerMove: "Build custom Hydrogen storefront surfaces.",
        caution: "Keep product discovery and mobile behavior central to scope.",
      },
      {
        signal: "The brand needs editorial, product, and cart flows in one system.",
        strongerMove: "Use Hydrogen when content and commerce need shared ownership.",
        caution: "Avoid disconnected landing pages that cannot be maintained.",
      },
      {
        signal: "The request is only a homepage redesign.",
        strongerMove: "Use Liquid or a smaller frontend scope.",
        caution: "Do not create an application just to decorate a theme.",
      },
    ],
    contextualLinks: [
      {
        href: "/case-studies/bayam-jewelry-shopify-hydrogen",
        label: "Bayam Jewelry proof",
        note: "Luxury catalog discovery and premium storefront presentation.",
      },
      {
        href: "/shopify-hydrogen-for-luxury-jewelry",
        label: "Luxury jewelry vertical",
        note: "A vertical page tied to real Bayam context.",
      },
    ],
  },
  "hydrogen-performance-seo-ux-optimization": {
    uniqueSection: {
      eyebrow: "Post-launch cleanup",
      title: "Performance cleanup after launch: SSR, data loading, images, and API queries.",
      body: [
        "Hydrogen optimization often starts after launch, when the store is live but the user experience feels heavy, search signals are inconsistent, or the team is afraid to touch the code. The cleanup work is practical: inspect initial HTML, data loading, image and video weight, Storefront API queries, third-party scripts, metadata, structured data, and Core Web Vitals together.",
        "The strongest fixes are usually boring. Render important product and collection content earlier. Stop overfetching. Use image constraints. Remove unnecessary client-only paths. Make route metadata deterministic. Keep analytics and consent behavior understandable.",
        "Optimization is not a second rebuild unless the codebase is truly unsalvageable. The goal is to make the current Hydrogen storefront safer, faster, and easier to grow.",
      ],
    },
    decisionTable: [
      {
        signal: "Primary content is delayed or unstable.",
        strongerMove: "Audit SSR and data loading first.",
        caution: "Animation and polish cannot compensate for missing useful HTML.",
      },
      {
        signal: "Images, video, and third-party scripts dominate load time.",
        strongerMove: "Run focused performance cleanup.",
        caution: "Do not treat Core Web Vitals as only a Lighthouse exercise.",
      },
      {
        signal: "SEO and UX issues share the same root cause.",
        strongerMove: "Fix product state, metadata, and performance together.",
        caution: "Separate checklists can miss cross-page behavior.",
      },
    ],
    contextualLinks: [
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Performance production note",
        note: "SSR-focused cleanup from real storefront work.",
      },
      {
        href: "/shopify-hydrogen-seo",
        label: "Hydrogen SEO service",
        note: "Technical SEO and performance often share the same page-state risks.",
      },
    ],
  },
  "hydrogen-support-retainer": {
    uniqueSection: {
      eyebrow: "Ongoing ownership",
      title: "When a retainer is safer than random fix tickets.",
      body: [
        "A Hydrogen storefront is an application. After launch, the work rarely ends cleanly: product UX changes, campaigns need support, apps change behavior, tracking needs adjustment, dependencies move, and performance can drift. Random fix tickets work for isolated bugs, but they are risky when the same person has to rediscover the codebase every time.",
        "A retainer is useful when the store already has a stable direction and needs recurring senior judgment. The work can include feature delivery, release review, performance cleanup, integration fixes, SEO checks, and technical planning. It is not the right container for a vague redesign or a major migration that has not been scoped.",
        "The value is continuity: someone understands the storefront, the commercial context, and the tradeoffs well enough to make smaller decisions without restarting from zero.",
      ],
    },
    decisionTable: [
      {
        signal: "The storefront is live and improving every month.",
        strongerMove: "Use a support retainer.",
        caution: "Keep a clear backlog so retainer time does not become vague availability.",
      },
      {
        signal: "The codebase is unstable or unreviewed.",
        strongerMove: "Start with audit or optimization.",
        caution: "A retainer should not hide a foundation problem.",
      },
      {
        signal: "The brand needs a major redesign or migration.",
        strongerMove: "Scope a project first.",
        caution: "Large resets need milestones, not only recurring support.",
      },
    ],
    contextualLinks: [
      {
        href: "/case-studies/rebel-bunny-shopify-hydrogen",
        label: "Rebel Bunny proof",
        note: "A storefront where ongoing commerce, education, and brand surfaces matter.",
      },
      {
        href: "/shopify-hydrogen-performance-optimization",
        label: "Optimization first",
        note: "Use this when the live store needs cleanup before ongoing work.",
      },
    ],
  },
} as const satisfies Record<ServicePackageBase["slug"], ServicePageEnrichment>;

const SERVICE_SOURCE_METADATA = {
  "shopify-hydrogen-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "headless-shopify-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-developer": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-strategy-fit-audit": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "liquid-to-hydrogen-migration": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-seo": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.googleHelpfulContent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-cost": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "custom-hydrogen-storefront-development": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-performance-seo-ux-optimization": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-support-retainer": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<ServicePackageBase["slug"], ContentSourceMetadata>;

const SERVICE_OFFER_SNAPSHOTS = {
  "shopify-hydrogen-agency-alternative": {
    entryPoint: "Hydrogen fit audit or senior scoping sprint",
    typicalTimeline: "5-10 business days for audit, 2-3 weeks for deeper scope",
    expectedOutput: "A clear decision path: audit, migration, build, optimization, support, Liquid, or no rebuild",
    qualification: "Best when stakeholders are comparing agency options but need Hydrogen-specific judgment first.",
  },
  "headless-shopify-agency-alternative": {
    entryPoint: "Headless architecture decision review",
    typicalTimeline: "1-2 weeks depending on catalog, integrations, and SEO risk",
    expectedOutput: "Liquid vs Hydrogen vs other headless recommendation with risk notes",
    qualification: "Best when the brand wants headless but has not proved the custom storefront case yet.",
  },
  "shopify-hydrogen-developer": {
    entryPoint: "Senior development support or implementation scope",
    typicalTimeline: "2-6 weeks for focused work, 6-16 weeks for broader builds",
    expectedOutput: "Production-ready Hydrogen routes, components, Storefront API work, QA, and launch support",
    qualification: "Best when Hydrogen is already likely and the team needs senior implementation ownership.",
  },
  "hydrogen-strategy-fit-audit": {
    entryPoint: "Shopify Hydrogen Fit & Risk Audit",
    typicalTimeline: "5-10 business days",
    expectedOutput: "Written decision memo plus walkthrough with recommended next step",
    qualification: "Best before rebuild budget moves or when an agency scope feels too broad.",
  },
  "liquid-to-hydrogen-migration": {
    entryPoint: "Migration scope and route-risk planning",
    typicalTimeline: "2-4 weeks for planning, 6-16 weeks for implementation depending on complexity",
    expectedOutput: "Migration plan, route map, storefront implementation, analytics checks, QA, and launch support",
    qualification: "Best when the current Liquid theme is truly blocking the buying experience or feature velocity.",
  },
  "shopify-hydrogen-seo": {
    entryPoint: "Hydrogen SEO audit or implementation cleanup",
    typicalTimeline: "1-3 weeks depending on route count and product-state complexity",
    expectedOutput: "Metadata, canonical, JSON-LD, sitemap, robots, SSR content, and crawl-consistency fixes",
    qualification: "Best when a Hydrogen storefront is live or close to launch and search signals need discipline.",
  },
  "shopify-hydrogen-cost": {
    entryPoint: "Budget sanity review",
    typicalTimeline: "3-5 business days for first-pass guidance, longer when technical review is required",
    expectedOutput: "Planning range, budget drivers, risk notes, and recommended first paid step",
    qualification: "Best when stakeholders need cost confidence before approving audit, migration, or build work.",
  },
  "custom-hydrogen-storefront-development": {
    entryPoint: "Custom storefront build scope",
    typicalTimeline: "6-16 weeks for many scoped Hydrogen builds",
    expectedOutput: "Custom Hydrogen storefront surfaces, product flows, content model integration, performance and launch QA",
    qualification: "Best when theme constraints block a real product, content, or mobile buying journey.",
  },
  "hydrogen-performance-seo-ux-optimization": {
    entryPoint: "Performance, SEO, and UX cleanup sprint",
    typicalTimeline: "1-4 weeks depending on diagnosis and implementation depth",
    expectedOutput: "Prioritized fixes for SSR, data loading, Storefront API queries, media, metadata, and UX friction",
    qualification: "Best when the Hydrogen storefront is live but slow, fragile, hard to crawl, or hard to grow.",
  },
  "hydrogen-support-retainer": {
    entryPoint: "Monthly senior Hydrogen support",
    typicalTimeline: "Monthly retainer after initial codebase review",
    expectedOutput: "Recurring feature work, bug fixes, release support, integration help, and technical planning",
    qualification: "Best when the storefront direction is stable and the team needs continuity after launch.",
  },
} as const satisfies Record<ServicePackageBase["slug"], ServiceOfferSnapshot>;

export const SERVICE_PACKAGES = SERVICE_PACKAGE_BASES.map((servicePackage) => ({
  ...servicePackage,
  offerSnapshot: SERVICE_OFFER_SNAPSHOTS[servicePackage.slug],
  ...SERVICE_PAGE_ENRICHMENTS[servicePackage.slug],
  ...SERVICE_SOURCE_METADATA[servicePackage.slug],
})) satisfies readonly ServicePackage[];

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
