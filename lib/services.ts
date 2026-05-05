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

export interface ServicePackage extends ServicePackageBase, ContentSourceMetadata {}

const SERVICE_PACKAGE_BASES = [
  {
    slug: "shopify-hydrogen-agency-alternative",
    pagePath: "/shopify-hydrogen-agency",
    name: "Shopify Hydrogen Agency Alternative",
    title: "Senior Hydrogen direction without the agency maze",
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
      "This page targets agency search intent while keeping the work honest: HydrogenExpert is a direct senior operator model, not a full-service agency claim.",
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

const SERVICE_SOURCE_METADATA = {
  "shopify-hydrogen-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "headless-shopify-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-developer": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-strategy-fit-audit": {
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
  "liquid-to-hydrogen-migration": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
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
      SOURCE_PACKS.googleHelpfulContent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-cost": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
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
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<ServicePackageBase["slug"], ContentSourceMetadata>;

export const SERVICE_PACKAGES = SERVICE_PACKAGE_BASES.map((servicePackage) => ({
  ...servicePackage,
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
