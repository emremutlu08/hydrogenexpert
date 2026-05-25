import type { ContentSourceMetadata } from "../../../lib/content-sources";

export interface ServicePackageBase {
  slug:
    | "shopify-hydrogen-agency-alternative"
    | "headless-shopify-agency-alternative"
    | "shopify-hydrogen-developer"
    | "shopify-hydrogen-expert"
    | "shopify-hydrogen-experts"
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

export interface ServicePageEnrichment {
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

export interface ServiceOfferSnapshot {
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

export const SERVICE_PACKAGE_BASES = [
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
        href: "/shopify-hydrogen-experts",
        label: "Shopify Hydrogen experts",
        note: "Use this when stakeholders are comparing expert proof, agency options, and senior support paths.",
      },
      {
        href: "/shopify-hydrogen-expert",
        label: "Shopify Hydrogen expert",
        note: "Use this when the buyer wants one senior specialist instead of an agency bench.",
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
      "Headless Shopify agency alternative for brands evaluating Hydrogen, custom storefront architecture, Liquid tradeoffs, SEO risk, and launch support.",
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
      {
        href: "/shopify-hydrogen-experts",
        label: "Shopify Hydrogen experts",
        note: "Use this when the headless search has narrowed to who can safely own Hydrogen work.",
      },
      {
        href: "/shopify-hydrogen-expert",
        label: "Shopify Hydrogen expert",
        note: "Use this when the next step is evaluating one senior specialist for direct ownership.",
      },
    ],
  },
  {
    slug: "shopify-hydrogen-developer",
    pagePath: "/shopify-hydrogen-developer",
    name: "Shopify Hydrogen Developer",
    title: "Hire a senior Shopify Hydrogen developer for headless storefront work",
    metaTitle: "Shopify Hydrogen Developer | Senior Headless Storefront Expert",
    metaDescription:
      "Shopify Hydrogen developer for custom headless storefronts, Liquid migrations, Oxygen launches, Storefront API work, SEO-safe routes, performance cleanup, and fit reviews.",
    heroTitle: "Shopify Hydrogen developer for custom storefront work",
    summary:
      "A Shopify Hydrogen developer builds custom React storefronts for Shopify with Storefront API data, server-rendered routes, SEO-safe product pages, cart logic, analytics, and launch support.",
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
      {
        question: "When should you hire a Shopify Hydrogen developer?",
        answer:
          "Hire a Shopify Hydrogen developer when a brand has outgrown normal theme changes and needs custom storefront architecture, Storefront API data work, SEO-safe migration, cart behavior, performance cleanup, or post-launch Hydrogen support.",
      },
      {
        question: "What technical stack should a Shopify Hydrogen developer know?",
        answer:
          "A senior Hydrogen developer should understand React Router, TypeScript, GraphQL, Shopify Storefront API, Customer Account API, Hydrogen components and utilities, caching, SEO metadata, structured data, analytics, consent, and deployment workflows such as Oxygen or another supported hosting path.",
      },
      {
        question: "Can Shopify Hydrogen templates replace a developer?",
        answer:
          "Templates can speed up setup, but they do not replace senior ownership of product data shape, custom route behavior, SEO-safe migration, cart logic, analytics, performance, and launch QA.",
      },
      {
        question: "Where should I start if I am comparing Hydrogen docs, GitHub, training, pricing, and jobs?",
        answer:
          "Use official Shopify docs and GitHub to understand the stack, training to build internal familiarity, pricing guides to qualify budget, and a hiring checklist to evaluate whether a senior developer or an audit is the safer next step.",
      },
    ],
    relatedLinks: [
      {
        href: "/articles/how-to-hire-shopify-hydrogen-developer",
        label: "How to hire a Shopify Hydrogen developer",
        note: "Use this when the search has moved from research into evaluation criteria.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Request a scope review",
        note: "Use this when the business case or launch risk needs proof before implementation.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Review Hydrogen cost ranges",
        note: "Use this before budget conversations expand into a full rebuild scope.",
      },
      {
        href: "/case-studies",
        label: "See Production Proof",
        note: "Review production contexts before scoping a new Hydrogen engagement.",
      },
      {
        href: "/shopify-hydrogen-expert",
        label: "Shopify Hydrogen expert",
        note: "Use this when the buyer wants one senior specialist, not a broader expert list.",
      },
      {
        href: "/contact",
        label: "Request Scope Review",
        note: "Send the current store URL and the commercial pressure behind the work.",
      },
    ],
  },
  {
    slug: "shopify-hydrogen-expert",
    pagePath: "/shopify-hydrogen-expert",
    name: "Shopify Hydrogen Expert",
    title: "Work with one senior Shopify Hydrogen expert instead of a vendor layer",
    metaTitle: "Shopify Hydrogen Expert | Senior Storefront Support",
    metaDescription:
      "Work with a senior Shopify Hydrogen expert for custom storefront architecture, Storefront API work, SEO-safe migration, performance cleanup, and launch-risk review.",
    heroTitle: "Shopify Hydrogen expert for brands that need direct senior ownership",
    summary:
      "A focused commercial page for teams searching for one Shopify Hydrogen expert who can review risk, advise on architecture, and own senior storefront implementation.",
    commercialIntent:
      "For teams comparing a single senior Shopify Hydrogen expert against freelance marketplaces, agencies, and internal implementation before committing budget.",
    bestFor:
      "Brands that want direct access to a senior Hydrogen specialist for architecture, Storefront API decisions, SEO-safe route planning, migration judgment, performance work, or launch cleanup.",
    deliverables: [
      "Senior Hydrogen implementation and advisory path",
      "Storefront architecture, route, and Storefront API review",
      "SEO, analytics, cart, and checkout handoff risk checks",
      "Liquid vs Hydrogen vs agency path recommendation",
      "Clear next step: direct expert support, audit, agency scope, or no rebuild",
    ],
    proofNotes: [
      "This page targets singular expert-search intent: a buyer looking for one senior specialist, not a directory of experts.",
      "The page keeps the claim grounded in production Hydrogen storefront work, public proof surfaces, and senior implementation judgment.",
      "The buyer is routed toward the right engagement shape: direct development, scope review, the broader experts comparison page, case studies, or no rebuild.",
    ],
    faq: [
      {
        question: "What should a Shopify Hydrogen expert be able to own?",
        answer:
          "A senior Shopify Hydrogen expert should be able to connect React implementation, Shopify Storefront API data, route architecture, SEO, analytics, cart behavior, checkout handoff, and post-launch maintenance into one practical storefront plan.",
      },
      {
        question: "Is a Shopify Hydrogen expert different from a Shopify developer?",
        answer:
          "Yes. A Shopify developer may focus on themes, apps, or admin workflows. A Hydrogen expert should understand Shopify's custom storefront model, server-rendered routes, Storefront API work, Oxygen deployment concerns, and the migration risks that come with leaving a Liquid theme.",
      },
      {
        question: "When should I choose one expert instead of an agency?",
        answer:
          "Choose one senior expert when the biggest risk is technical judgment, architecture, implementation quality, SEO safety, or launch ownership. Choose an agency when the project also needs brand, creative, paid media, content production, and several delivery teams in parallel.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-experts",
        label: "Compare Shopify Hydrogen experts",
        note: "Use this when stakeholders want a broader expert and agency comparison path.",
      },
      {
        href: "/shopify-hydrogen-developer",
        label: "Hire a Shopify Hydrogen developer",
        note: "Use this when the need has already become implementation work.",
      },
      {
        href: "/articles/shopify-hydrogen-experts-production-experience",
        label: "Expert evaluation guide",
        note: "Use this to judge production experience before hiring.",
      },
      {
        href: "/case-studies",
        label: "Review production proof",
        note: "Use this to inspect approved Hydrogen storefront contexts.",
      },
    ],
  },
  {
    slug: "shopify-hydrogen-experts",
    pagePath: "/shopify-hydrogen-experts",
    name: "Shopify Hydrogen Experts",
    title: "Evaluate Shopify Hydrogen experts before choosing a build path",
    metaTitle: "Shopify Hydrogen Experts | Evaluation & Senior Support",
    metaDescription:
      "Evaluate Shopify Hydrogen experts by production proof, SEO-safe migration judgment, Storefront API depth, maintenance realism, and senior implementation ownership.",
    heroTitle: "Shopify Hydrogen experts for brands that need proof before rebuild scope",
    summary:
      "A commercial evaluation page for teams searching for Shopify Hydrogen experts and needing a proof-led way to choose between a specialist, agency, audit, or no rebuild.",
    commercialIntent:
      "For Shopify Plus and growth-stage teams comparing Hydrogen experts, expert agencies, senior developers, and headless storefront partners before committing budget.",
    bestFor:
      "Teams that are researching Shopify Hydrogen experts and need to separate real production experience from generic headless sales copy before choosing audit, migration, build, optimization, or support.",
    deliverables: [
      "Expert-fit review across proof, scope, and storefront risk",
      "Hydrogen vs Liquid vs agency path recommendation",
      "Production proof and case-study review",
      "SEO, routing, Storefront API, and maintenance-risk checks",
      "Clear next step: expert support, audit, agency scope, or no rebuild",
    ],
    proofNotes: [
      "This page targets expert-search intent without pretending HydrogenExpert is a broad directory or large agency.",
      "The decision is grounded in shipped Hydrogen storefront context, public profile proof, and technical judgment instead of generic expert claims.",
      "The page routes broad expert searches toward the right concrete next step: developer support, audit, agency alternative, case studies, or a public evaluation guide.",
    ],
    faq: [
      {
        question: "What makes someone a Shopify Hydrogen expert?",
        answer:
          "A useful Shopify Hydrogen expert should understand React, Shopify Storefront API work, route architecture, server-rendered commerce content, SEO-safe migration, analytics, cart and checkout handoff, and post-launch maintenance. The proof should come from real storefront work, not only vocabulary.",
      },
      {
        question: "Should I hire a Shopify Hydrogen expert or an agency?",
        answer:
          "Hire a senior specialist when the main risk is technical judgment, architecture, implementation, SEO, or launch safety. Hire a larger agency when the scope also needs brand, paid media, creative production, and multiple delivery teams working in parallel.",
      },
      {
        question: "Can an expert also tell us not to use Hydrogen?",
        answer:
          "Yes. A trustworthy Hydrogen expert should keep Liquid cleanup, focused optimization, delayed rebuilds, and no-rebuild recommendations on the table when Hydrogen would add more maintenance cost than business value.",
      },
    ],
    relatedLinks: [
      {
        href: "/articles/shopify-hydrogen-experts-production-experience",
        label: "How to evaluate Shopify Hydrogen experts",
        note: "The supporting article for proof, questions, and production-experience checks.",
      },
      {
        href: "/shopify-hydrogen-expert",
        label: "Shopify Hydrogen expert",
        note: "Use this when the buyer wants one senior expert rather than a broad comparison.",
      },
      {
        href: "/shopify-hydrogen-developer",
        label: "Hire a Shopify Hydrogen developer",
        note: "Use this when the search turns into direct senior implementation support.",
      },
      {
        href: "/case-studies",
        label: "Shopify Hydrogen production proof",
        note: "Review approved storefront contexts before choosing an expert or agency path.",
      },
    ],
  },
  {
    slug: "hydrogen-strategy-fit-audit",
    pagePath: "/shopify-hydrogen-audit",
    name: "Hydrogen Scope Review",
    title: "Start with the lightest review the build actually needs",
    metaTitle: "Shopify Hydrogen Scope Review | Free First Pass",
    metaDescription:
      "Start with a free Shopify Hydrogen scope review. Use a paid risk review only when SEO, apps, migration, analytics, or unclear requirements affect the estimate.",
    heroTitle: "Shopify Hydrogen scope review before the build estimate expands",
    summary:
      "Most small Hydrogen builds do not need a full audit first. Start with a free first-pass scope review, then use paid review only when the risks are unclear.",
    commercialIntent:
      "Built for brands that want to know whether the project is Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild before they buy a larger diagnostic.",
    bestFor:
      "Brands considering a fixed-scope Hydrogen build where SEO, apps, migration, analytics, or unclear requirements may affect the estimate.",
    deliverables: [
      "Free first-pass scope review when requirements are clear",
      "Optional paid Scope & Risk Review for unclear estimates",
      "Liquid vs Hydrogen fit recommendation",
      "Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild recommendation",
      "Risk notes for SEO, apps, analytics, migration, and launch scope",
    ],
    proofNotes: [
      "Direct senior review from a Shopify Hydrogen developer, not a generic ecommerce audit package.",
      "Most small builds can start with scope review instead of a full paid audit.",
      "Paid review stays optional and exists only when risk could change the estimate.",
    ],
    faq: [
      {
        question: "Do I need a full Hydrogen audit before a $2K build?",
        answer:
          "Usually no. If the scope is clear, start with a free first-pass scope review. Use a paid review only when SEO, apps, migration, analytics, or unclear requirements could change the estimate.",
      },
      {
        question: "What does the free scope review decide?",
        answer:
          "It decides whether the work looks like Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild based on store URL, desired pages, current setup, and required features.",
      },
      {
        question: "When is a paid review worth it?",
        answer:
          "Use a paid review when SEO preservation, app dependencies, analytics, migration risk, or unclear requirements could make a package estimate unreliable.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-packages",
        label: "Shopify Hydrogen packages",
        note: "Review Starter, Standard, Growth, and Custom scope before asking for a quote.",
      },
      {
        href: "/should-i-use-it",
        label: "Hydrogen fit decision guide",
        note: "A practical filter when the audit question is whether Hydrogen is justified at all.",
      },
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "Use this when the safer commercial answer may be Liquid, cleanup, or delay.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Shopify Hydrogen cost",
        note: "Use this to connect scope findings to realistic package pricing.",
      },
      {
        href: "/contact",
        label: "Request Scope Review",
        note: "Send the storefront context before rebuild budget moves.",
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
      "Shopify Hydrogen SEO service for custom storefronts covering metadata, canonicals, JSON-LD, variant URLs, sitemap, robots, SSR content, and crawl consistency.",
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
    title: "Shopify Hydrogen storefront pricing by project requirements",
    metaTitle: "Shopify Hydrogen Storefront Pricing | $2K-$5K Builds",
    metaDescription:
      "Shopify Hydrogen storefront pricing from $2K-$5K for fixed-scope Starter, Standard, and Growth builds priced by requirements, not traffic or pageviews.",
    heroTitle: "Shopify Hydrogen storefront pricing: $2K-$5K fixed-scope builds",
    summary:
      "A lean Hydrogen storefront does not need to start at agency pricing. If the scope is clear, the first version can be priced around core pages, product flow, cart behavior, checkout handoff, SEO baseline, and launch QA.",
    commercialIntent:
      "For budget-aware leads searching Shopify Hydrogen cost, pricing, packages, and fixed-scope build options before they are ready to scope implementation.",
    bestFor:
      "Brands that want a fixed-scope Hydrogen build priced by page templates, components, features, integrations, migration risk, analytics, SEO preservation, and launch support.",
    deliverables: [
      "Starter, Standard, Growth, or Custom scope review",
      "Package comparison and budget driver review",
      "Feature, template, integration, and migration-risk notes",
      "Liquid vs Hydrogen package recommendation",
      "Recommendation for free scope review, paid risk review, build, Liquid cleanup, or no rebuild",
    ],
    proofNotes: [
      "Cost is framed around storefront scope and operating reality, not around traffic, pageviews, or the word headless alone.",
      "The first budget question is whether the project fits Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
      "The output should help teams understand why a project is $2K, $3K-$3.5K, $4.5K-$5K, or custom.",
    ],
    faq: [
      {
        question: "Why can a Hydrogen storefront start around $2,000?",
        answer:
          "Because the Starter scope is limited to the core shopping path: home or landing page, listing page, product detail page, add to cart, cart drawer, Shopify checkout handoff, basic account entry, header, footer, one reusable content template, SEO baseline, and Oxygen guidance.",
      },
      {
        question: "What makes a Hydrogen build move toward $5K or custom?",
        answer:
          "Price increases when the project adds more page templates, PDP complexity, filtering, search, app integrations, analytics events, metaobjects, design complexity, SEO migration, redirect planning, launch QA, or post-launch support.",
      },
      {
        question: "Is this priced by traffic or monthly visitors?",
        answer:
          "No. Pricing is based on project requirements: page templates, features, integrations, design complexity, migration risk, analytics, and launch support.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-packages",
        label: "Shopify Hydrogen packages",
        note: "Review the Starter, Standard, Growth, and Custom package path.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom Hydrogen storefront",
        note: "Use this when the package path may need a custom build scope.",
      },
      {
        href: "/when-not-to-use-hydrogen",
        label: "When not to use Hydrogen",
        note: "Use this when a Liquid theme or smaller cleanup may be the better investment.",
      },
    ],
  },
  {
    slug: "custom-hydrogen-storefront-development",
    pagePath: "/custom-shopify-hydrogen-storefront",
    name: "Custom Hydrogen Storefront",
    title: "Start with a lean Hydrogen build before custom scope expands",
    metaTitle: "Custom Shopify Hydrogen Storefront Builds from $2K-$5K",
    metaDescription:
      "Custom Shopify Hydrogen storefront builds from $2K-$5K for brands that need fixed-scope core ecommerce pages before custom scope expands.",
    heroTitle: "Custom Shopify Hydrogen storefront builds from $2K-$5K",
    summary:
      "A Hydrogen storefront does not need to start as a massive agency rebuild. If the scope is clear, I can build a lean custom storefront around the core ecommerce flow.",
    commercialIntent:
      "For brands searching for a Shopify Hydrogen developer to build landing, listing, product, cart, checkout handoff, account entry, and basic SEO before custom complexity expands.",
    bestFor:
      "Brands that need more control than a theme, but want Starter, Standard, or Growth scope before committing to a larger custom migration.",
    deliverables: [
      "Starter, Standard, Growth, or Custom build recommendation",
      "Core ecommerce routes and reusable components",
      "Product flow, add to cart, cart drawer, and Shopify checkout handoff",
      "Basic account entry and SEO baseline",
      "Metaobjects, integrations, migration, and QA when the selected package includes them",
      "Clear scope boundaries before advanced custom work starts",
    ],
    proofNotes: [
      "The work is direct senior implementation, so strategy and code decisions stay close together.",
      "The first version should prove the storefront direction before the project becomes a full migration.",
      "Hydrogen is used when the custom experience earns the maintenance cost; Liquid stays valid when it solves the problem.",
    ],
    faq: [
      {
        question: "Can a custom Hydrogen storefront really start in the $2K-$5K range?",
        answer:
          "Yes, when the first version is fixed-scope. Starter, Standard, and Growth builds focus on core routes, product flow, cart behavior, checkout handoff, SEO baseline, and selected integrations instead of a full replatforming project.",
      },
      {
        question: "Do custom Hydrogen storefronts still use Shopify checkout?",
        answer:
          "Yes. Hydrogen storefronts usually build the customer-facing storefront and hand off to Shopify checkout for the transaction path.",
      },
      {
        question: "When does this become custom scope?",
        answer:
          "Advanced search, custom filters, B2B, subscriptions, complex content models, large catalog migration, app replacement, SEO-risky URL changes, or custom product logic move the project into custom scope.",
      },
    ],
    relatedLinks: [
      {
        href: "/shopify-hydrogen-packages",
        label: "Shopify Hydrogen packages",
        note: "Start with Starter, Standard, or Growth before custom scope expands.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Shopify Hydrogen cost",
        note: "See how requirements move pricing from $2K to $5K or custom.",
      },
      {
        href: "/case-studies",
        label: "Production proof",
        note: "Map prior Hydrogen and Liquid work to Starter, Growth, Custom, and Liquid decisions.",
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
