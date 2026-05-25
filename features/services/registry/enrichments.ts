import type { ServicePackageBase, ServicePageEnrichment } from "./base";

export const SERVICE_PAGE_ENRICHMENTS = {
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
        href: "/shopify-hydrogen-developer",
        label: "Senior developer path",
        note: "Useful when stakeholders are comparing direct execution with agency delivery.",
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
        "A senior Hydrogen developer is not only writing React components. The useful ownership covers React Router route design, Storefront API query shape, server-rendered product content, cart and checkout handoff, analytics behavior, metadata, canonical logic, performance tradeoffs, and the launch details that decide whether a custom storefront is safe to run.",
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
        href: "/shopify-hydrogen-experts",
        label: "Shopify Hydrogen experts",
        note: "Use this when the buyer is comparing proof, expert claims, agencies, and direct senior support.",
      },
      {
        href: "/shopify-hydrogen-expert",
        label: "Shopify Hydrogen expert",
        note: "Use this when the buyer wants direct senior ownership from one specialist.",
      },
      {
        href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
        label: "Performance production note",
        note: "Where senior implementation often shows up after launch.",
      },
    ],
  },
  "shopify-hydrogen-expert": {
    uniqueSection: {
      eyebrow: "Senior specialist path",
      title: "A singular expert page should answer who owns the hard decisions.",
      body: [
        "A search for a Shopify Hydrogen expert is usually not asking for a generic vendor list. It is asking whether one senior person can understand the current store, separate Hydrogen hype from actual constraints, and carry the storefront decision from architecture into implementation.",
        "That means the proof should not stop at React or Shopify vocabulary. The expert should be able to explain Storefront API data shape, route and caching behavior, SEO continuity, analytics and consent requirements, cart and checkout handoff, merchant editing workflows, and what happens after launch when the storefront becomes an application to maintain.",
        "HydrogenExpert keeps this page focused on direct senior ownership. If the need is broader, the path routes to expert comparison, agency-alternative pages, or a scope review before rebuild scope expands.",
      ],
    },
    decisionTable: [
      {
        signal: "The buyer wants one accountable senior person.",
        strongerMove: "Use a specialist path with direct architecture and implementation ownership.",
        caution: "A large agency layer may add coordination cost if the problem is mostly technical judgment.",
      },
      {
        signal: "The store has SEO, routing, product-data, or migration risk.",
        strongerMove: "Review routes, rendered content, Storefront API shape, and launch rollback paths before build.",
        caution: "Do not treat a custom storefront as safe just because the frontend looks polished.",
      },
      {
        signal: "Stakeholders are still unsure whether Hydrogen is justified.",
        strongerMove: "Start with a scope review before buying development scope.",
        caution: "The expert should be willing to recommend Liquid cleanup or no rebuild when that is safer.",
      },
    ],
    contextualLinks: [
      {
        href: "/shopify-hydrogen-experts",
        label: "Broader expert comparison",
        note: "Use this when stakeholders are still comparing experts, agencies, and marketplace options.",
      },
      {
        href: "/articles/shopify-hydrogen-experts-production-experience",
        label: "How to evaluate production experience",
        note: "A public checklist for judging expert proof before hiring.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Start with an audit",
        note: "Use a diagnostic when the right expert path depends on fit, risk, and budget clarity.",
      },
    ],
    wrongFitNotes: [
      "The project needs brand, content, paid media, and several delivery pods more than senior storefront ownership.",
      "The store only needs small Liquid theme edits or app configuration.",
      "Stakeholders cannot name the business constraint Hydrogen needs to solve.",
      "The team wants the cheapest implementation option and is not ready to pay for senior judgment.",
    ],
  },
  "shopify-hydrogen-experts": {
    uniqueSection: {
      eyebrow: "Expert evaluation",
      title: "Expertise should be proved before a Hydrogen rebuild gets funded.",
      body: [
        "Shopify Hydrogen experts are easy to describe and harder to verify. The useful test is whether the expert can connect React, Storefront API data, route behavior, SEO, analytics, cart logic, checkout handoff, and merchant maintenance into one storefront decision.",
        "A strong expert will not treat Hydrogen as the answer by default. The first job is to decide whether the brand really needs a custom storefront, whether the current Liquid theme can be repaired, and which risks must be handled before budget moves. That is especially important when Google, AI overviews, and buyer research pages group experts, agencies, marketplaces, and official docs together.",
        "HydrogenExpert is intentionally positioned as a senior-led expert path and agency alternative, not a broad directory. The page gives searchers a practical evaluation path, then routes them to direct developer support, a scope review, case studies, or the deeper evaluation article.",
      ],
    },
    decisionTable: [
      {
        signal: "The page or profile says expert, but proof is vague.",
        strongerMove: "Ask for production storefront context and launch-risk examples.",
        caution: "Do not treat demos, boilerplate repos, or generic headless copy as proof.",
      },
      {
        signal: "SEO, route continuity, and product data matter to revenue.",
        strongerMove: "Choose an expert who can explain migration and crawl behavior before build.",
        caution: "A beautiful Hydrogen frontend can still damage search visibility if URL and content state drift.",
      },
      {
        signal: "The team is comparing expert, agency, and marketplace options.",
        strongerMove: "Separate audit, direct implementation, and broad agency needs before buying scope.",
        caution: "The best vendor shape depends on coordination needs, not only Hydrogen vocabulary.",
      },
    ],
    contextualLinks: [
      {
        href: "/articles/shopify-hydrogen-experts-production-experience",
        label: "Expert evaluation guide",
        note: "A deeper checklist for judging production experience before hiring.",
      },
      {
        href: "/case-studies/eveshop-shopify-hydrogen",
        label: "EveShop production case",
        note: "High-catalog retail context where production Hydrogen judgment mattered.",
      },
      {
        href: "/shopify-hydrogen-audit",
        label: "Start with an audit",
        note: "Use a diagnostic when expert selection depends on fit, risk, and budget clarity.",
      },
    ],
    wrongFitNotes: [
      "The store only needs small theme edits or section-level Liquid work.",
      "Stakeholders cannot name the commercial constraint Hydrogen solves.",
      "The team wants a list of experts before deciding whether Hydrogen is justified.",
      "The project requires a large multi-discipline agency team more than direct senior storefront ownership.",
    ],
  },
  "hydrogen-strategy-fit-audit": {
    uniqueSection: {
      eyebrow: "Risk filter",
      title: "Use paid review only when the estimate depends on hidden risk.",
      body: [
        "A $2K-$5K build should not be blocked by a large audit when the requirements are already clear. The first pass should decide whether the project fits Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
        "Paid review makes sense when a quote would otherwise be guesswork: SEO preservation, route changes, app dependencies, analytics, unclear product data, migration risk, or launch responsibilities could all change the scope.",
        "The goal is not to create another paid gate before the build. The goal is to keep small scopes moving quickly and reserve deeper audit work for stores where hidden risk could make the estimate misleading.",
      ],
    },
    decisionTable: [
      {
        signal: "Desired routes, design source, and required features are clear.",
        strongerMove: "Start with a free first-pass scope review.",
        caution: "Do not turn a small fixed-scope build into an unnecessary audit.",
      },
      {
        signal: "SEO, routes, apps, or analytics are business-critical.",
        strongerMove: "Use a paid Scope & Risk Review before final pricing.",
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
        href: "/shopify-hydrogen-packages",
        label: "Build packages",
        note: "Starter, Standard, Growth, and Custom scopes before paid review.",
      },
      {
        href: "/shopify-hydrogen-cost",
        label: "Cost planning",
        note: "Translate requirements into $2K-$5K package pricing.",
      },
    ],
    auditOffer: {
      name: "Paid Scope & Risk Review",
      price: "$300-$750",
      timeline: "Usually 2-4 business days depending on risk clarity",
      format: "Written notes plus async walkthrough when useful",
      outcomes: [
        "Starter Storefront",
        "Standard Storefront",
        "Growth Storefront",
        "Custom Hydrogen scope",
        "Liquid cleanup or no rebuild",
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
        href: "/shopify-hydrogen-vs-liquid",
        label: "Hydrogen vs Liquid tradeoff",
        note: "The safer decision path before a migration scope is approved.",
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
        href: "/blog/shopify-hydrogen-variant-selection-fallback",
        label: "Variant fallback note",
        note: "Related variant-state and URL behavior.",
      },
    ],
  },
  "shopify-hydrogen-cost": {
    uniqueSection: {
      eyebrow: "Pricing by scope",
      title: "Pricing is based on project scope, not traffic.",
      body: [
        "Pricing is based on project scope, not traffic, pageviews, or store size. A lean Hydrogen storefront can start around $2,000 when the scope is clear: core pages, product flow, cart drawer, Shopify checkout handoff, and basic account entry.",
        "More complex work increases the price when it adds custom filters, integrations, content models, migration risk, analytics, SEO preservation, or post-launch support.",
        "A $2K Hydrogen build is not a full replatforming project. It is a focused storefront launch with a limited number of routes and features. If the project requires migration planning, advanced filtering, custom search, subscriptions, B2B, multiple apps, or SEO-risky URL changes, the scope moves into the $3K-$5K or custom range.",
      ],
    },
    decisionTable: [
      {
        signal: "Core pages, product flow, cart drawer, checkout handoff, and basic account entry are enough.",
        strongerMove: "Hydrogen Starter Storefront.",
        caution: "Keep advanced filters, subscriptions, B2B, and large migration out of scope.",
      },
      {
        signal: "Search, basic filters, content templates, reviews, analytics, and metadata baseline are needed.",
        strongerMove: "Hydrogen Standard or Growth Storefront.",
        caution: "Price depends on exact templates, components, integrations, and launch QA.",
      },
      {
        signal: "Migration risk, advanced search, B2B, subscriptions, app replacement, or custom product logic appears.",
        strongerMove: "Custom Hydrogen Scope.",
        caution: "Do not force complex projects into a $2K fixed-scope package.",
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
      { engagement: "Hydrogen Starter Storefront", range: "Starting at $2,000" },
      { engagement: "Hydrogen Standard Storefront", range: "$3,000-$3,500" },
      { engagement: "Hydrogen Growth Storefront", range: "$4,500-$5,000" },
      { engagement: "Custom Hydrogen Scope", range: "$5K+" },
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
      eyebrow: "Start lean",
      title: "Start lean, then expand.",
      body: [
        "The first version should prove the storefront direction before the project becomes a full migration. Starter and Standard builds keep the first launch focused. Growth and Custom scopes add complexity only when the business case is clear.",
        "A lean custom storefront can cover the core ecommerce flow: landing page, collection listing, product detail page, cart drawer, checkout handoff, account entry, and basic SEO. That is the right entry point when the brand needs more control than a theme but does not need enterprise scope.",
        "For advanced search, custom filters, B2B, subscriptions, complex content models, or SEO-risky migration, the project becomes a custom scope.",
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
