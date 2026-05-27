import type { Article } from "../../lib/articles";
import { OWNER } from "../../lib/site";

const PUBLISH_DATE = "2026-05-27T10:00:00+03:00";

const scopeReviewLinks = [
  { href: "/shopify-hydrogen-packages", label: "Review fixed-scope packages" },
  { href: "/liquid-to-hydrogen-migration", label: "Plan a Liquid to Hydrogen migration" },
  { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
  { href: "/contact", label: "Send the store URL" },
] as const;

export const TRAFFIC_GAP_ARTICLES = [
  {
    title: "Shopify Hydrogen vs Next.js: Which Headless Stack Fits Your Store?",
    slug: "shopify-hydrogen-nextjs",
    description:
      "A merchant decision guide for Shopify Hydrogen vs Next.js across hosting, TCO, app risk, SEO, and long-term ownership.",
    category: "Decision Guide",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen vs Next.js | Headless Stack Decision Guide",
    metaDescription:
      "Compare Shopify Hydrogen vs Next.js for headless Shopify: Oxygen, Vercel, TCO, SEO, app risk, and when Liquid is still safer.",
    h1: "Shopify Hydrogen vs Next.js: which headless stack fits your store?",
    intro: [
      "Hydrogen vs Next.js is rarely a pure framework debate. For a merchant, the real decision is how much Shopify-native commerce, hosting simplicity, custom application flexibility, and long-term maintenance ownership the storefront needs.",
      "Hydrogen is usually the cleaner first choice when Shopify is the center of the business and the project is mostly commerce. Next.js can still be the better answer when the storefront is part of a wider product, content, membership, or multi-platform application.",
    ],
    sections: [
      {
        title: "The decision is not only performance",
        body: [
          "A well-built Hydrogen storefront and a well-built Next.js storefront can both be fast. The bigger differences are default commerce wiring, hosting model, team familiarity, and how much custom infrastructure the merchant wants to own after launch.",
        ],
      },
      {
        title: "Choose Hydrogen when Shopify is the system of record",
        bullets: [
          "Product, collection, cart, checkout, customer, and content decisions mostly live in Shopify.",
          "Oxygen hosting and Shopify-aligned deployment reduce infrastructure decisions.",
          "The team wants fewer custom commerce primitives to maintain.",
          "The first launch should stay close to Shopify's roadmap instead of a broad composable platform.",
        ],
      },
      {
        title: "Choose Next.js when the storefront is also a web app",
        bullets: [
          "The site needs major non-commerce routes such as portals, booking, editorial workflows, or app-like account areas.",
          "The in-house team already has strong Next.js and Vercel patterns.",
          "The business wants platform-neutral hosting or a broader composable stack.",
          "The team accepts more upfront wiring for cart, API caching, checkout handoff, and app integrations.",
        ],
      },
      {
        title: "Where TCO usually hides",
        bullets: [
          "CMS and page-building workflow.",
          "Search, filters, recommendations, and merchandising.",
          "Reviews, subscriptions, loyalty, analytics, and consent.",
          "Preview, launch, monitoring, and post-launch developer availability.",
        ],
      },
      {
        title: "A safer decision path",
        ordered: [
          "Confirm whether Liquid can still solve the business problem.",
          "Map required app behavior before choosing a framework.",
          "Choose Hydrogen for Shopify-native commerce scope, Next.js for broader application scope.",
          "Price the maintenance model, not only the first build.",
        ],
      },
    ],
    conclusion:
      "Use Hydrogen vs Next.js as a risk and ownership decision. If the answer is not obvious, run a short scope review before the rebuild becomes an expensive default.",
    links: [
      { href: "/shopify-hydrogen-vs-liquid", label: "Compare Hydrogen vs Liquid" },
      ...scopeReviewLinks,
    ],
    sources: [
      {
        href: "https://flux.agency/insights/hydrogen-vs-nextjs-shopify-framework-comparison",
        label: "Flux: Hydrogen vs Next.js for Shopify",
        note: "English comparison source translated into the merchant decision frame.",
        external: true,
      },
      {
        href: "https://www.letstalkshop.com/blog/shopify-hydrogen-vs-nextjs-for-headless-store",
        label: "Talk Shop: Shopify Hydrogen vs Next.js",
        note: "English headless framework comparison used for TCO and hosting prompts.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals",
        label: "Shopify: Hydrogen fundamentals",
        note: "Official grounding for Hydrogen and Oxygen claims.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen CMS and Visual Builder Decision Guide",
    slug: "shopify-hydrogen-cms-visual-builder",
    description:
      "Compare Metaobjects, Sanity, Builder, Pack, Weaverse, and custom Hydrogen components for merchant-editable content.",
    category: "CMS",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen CMS Guide | Metaobjects, Sanity, Builder, Pack",
    metaDescription:
      "Choose a Shopify Hydrogen CMS path: Metaobjects, Sanity, Builder, Pack, Weaverse, or custom components based on workflow risk.",
    h1: "Shopify Hydrogen CMS and visual builder decision guide",
    intro: [
      "Hydrogen does not remove the content workflow question. It makes that question more important because every section, landing page, product story, and campaign module needs a clear owner.",
      "The safest CMS choice depends on who edits the storefront, how often layout changes, whether content is Shopify-centric, and how much custom engineering the merchant can maintain.",
    ],
    sections: [
      {
        title: "Metaobjects are best for structured Shopify-native content",
        body: [
          "Metaobjects work well when content is strongly tied to Shopify data: product callouts, reusable sections, brand facts, collection copy, and controlled landing blocks. They are not a complete visual builder by themselves.",
        ],
      },
      {
        title: "Sanity fits complex editorial content",
        bullets: [
          "Use Sanity when content spans campaigns, guides, lookbooks, editorial workflows, approvals, and non-Shopify channels.",
          "Budget for schema design, preview wiring, content modeling, and frontend query maintenance.",
          "Do not add Sanity just because the site is headless; add it when the editorial workflow needs it.",
        ],
      },
      {
        title: "Builder, Pack, and Weaverse solve page control differently",
        bullets: [
          "Visual builders help when marketers need layout control without waiting for developers.",
          "They still need component boundaries, data rules, QA, and performance discipline.",
          "Treat them as workflow products, not magic replacements for storefront architecture.",
        ],
      },
      {
        title: "Custom components fit stable sections",
        body: [
          "If the store only needs a small set of repeatable sections, custom Hydrogen components with Shopify-managed data may be cheaper and easier to maintain than a full visual editing layer.",
        ],
      },
      {
        title: "The practical decision table",
        bullets: [
          "Mostly Shopify data and controlled fields: Metaobjects plus custom components.",
          "Heavy editorial program: Sanity or another headless CMS.",
          "Frequent landing page layout changes: Pack, Weaverse, Builder, or a similar visual builder.",
          "Small fixed-scope launch: keep the content model narrow first.",
        ],
      },
    ],
    conclusion:
      "Pick the content system around editor behavior, not around the most impressive demo. A smaller model that the merchant can actually maintain usually wins.",
    links: [
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom Hydrogen storefront" },
      { href: "/shopify-hydrogen-packages", label: "Hydrogen build packages" },
      { href: "/blog/shopify-hydrogen-metaobjects-page-specific-sections", label: "Metaobjects production note" },
      { href: "/contact", label: "Request Scope Review" },
    ],
    sources: [
      {
        href: "https://www.builder.io/m/hydrogen-cms/",
        label: "Builder: Hydrogen CMS",
        note: "English visual CMS source adapted into a buyer workflow checklist.",
        external: true,
      },
      {
        href: "https://weaverse.io/comparisons/vs-sanity",
        label: "Weaverse vs Sanity",
        note: "English comparison source translated into tool-fit criteria.",
        external: true,
      },
      {
        href: "https://docs.packdigital.com/getting-started/introduction",
        label: "Pack Digital documentation",
        note: "English DXP reference used for visual builder positioning.",
        external: true,
      },
      {
        href: "https://flux.agency/partners/sanity",
        label: "Flux: Sanity CMS for Shopify Hydrogen",
        note: "English Sanity positioning source used for editorial workflow context.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Apps in Hydrogen: Compatibility Checklist",
    slug: "shopify-apps-in-hydrogen-compatibility-checklist",
    description:
      "A practical app compatibility checklist for Hydrogen migrations covering reviews, subscriptions, loyalty, search, analytics, and checkout.",
    category: "Migration",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Apps in Hydrogen | Compatibility Checklist",
    metaDescription:
      "Audit Shopify apps before a Hydrogen migration: reviews, subscriptions, loyalty, search, analytics, customer accounts, and checkout risk.",
    h1: "Shopify apps in Hydrogen: compatibility checklist",
    intro: [
      "The biggest Hydrogen migration surprise is often not React. It is discovering that a theme app worked because Liquid, theme app embeds, scripts, or Shopify globals were available.",
      "Before a merchant commits to Hydrogen, every revenue-critical app should be sorted into native Shopify capability, headless API integration, custom rebuild, checkout-only behavior, or replace/remove.",
    ],
    sections: [
      {
        title: "Start with revenue-critical app categories",
        bullets: [
          "Reviews and ratings.",
          "Subscriptions and purchase options.",
          "Loyalty, referrals, rewards, and store credit.",
          "Search, recommendations, and merchandising.",
          "Analytics, pixels, consent, and attribution.",
          "Customer accounts, B2B pricing, and gated experiences.",
        ],
      },
      {
        title: "What to ask each vendor",
        bullets: [
          "Is there a Hydrogen, headless, React, or Storefront API integration path?",
          "Does the app depend on Liquid snippets, theme app embeds, or storefront globals?",
          "Which events must be sent from the custom frontend?",
          "Which features only work in checkout, customer accounts, or the Shopify admin?",
        ],
      },
      {
        title: "Reviews and loyalty are not the same risk",
        body: [
          "Review display is often a frontend integration problem. Loyalty and referrals can involve customer identity, checkout redemption, points state, and post-purchase workflows. Put them in separate workstreams.",
        ],
      },
      {
        title: "Subscriptions need checkout and product-state proof",
        body: [
          "Subscription apps and Shopify purchase options need product page UI, selling plan data, cart line behavior, checkout handoff, and post-purchase account behavior to agree. Test the full path before launch week.",
        ],
      },
      {
        title: "The audit output should be a replacement map",
        ordered: [
          "Keep with vendor headless integration.",
          "Replace with Shopify-native capability.",
          "Rebuild a smaller custom version.",
          "Move behavior to checkout or account surfaces.",
          "Remove if the app does not justify headless complexity.",
        ],
      },
    ],
    conclusion:
      "Treat app compatibility as migration scope, not as a post-launch cleanup list. The right answer may be Hydrogen, Liquid, or a narrower first launch.",
    links: [
      { href: "/liquid-to-hydrogen-migration", label: "Liquid to Hydrogen migration" },
      { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit" },
      { href: "/shopify-hydrogen-issues", label: "Hydrogen issue library" },
      { href: "/contact", label: "Request Scope Review" },
    ],
    sources: [
      {
        href: "https://support.yotpo.com/docs/using-yotpo-reviews-with-shopify-hydrogen",
        label: "Yotpo: Reviews with Shopify Hydrogen",
        note: "English integration source translated into reviews-risk checks.",
        external: true,
      },
      {
        href: "https://support.yotpo.com/docs/setting-up-yotpo-loyalty-referrals-on-a-headless-platform",
        label: "Yotpo: Loyalty on a headless platform",
        note: "English source used for loyalty and customer identity prompts.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/cookbook/subscriptions",
        label: "Shopify: Subscriptions in Hydrogen",
        note: "Official source for Hydrogen subscription implementation checks.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen Analytics Migration: GA4, GTM, Consent, and QA",
    slug: "shopify-hydrogen-analytics-migration",
    description:
      "Plan analytics migration for Hydrogen across Shopify analytics, GA4, GTM, consent, checkout handoff, and launch validation.",
    category: "Analytics",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Analytics Migration | GA4, GTM, Consent",
    metaDescription:
      "A Shopify Hydrogen analytics migration guide for GA4, GTM, Shopify analytics, consent tracking, checkout handoff, and QA.",
    h1: "Shopify Hydrogen analytics migration: GA4, GTM, consent, and QA",
    intro: [
      "When a Shopify storefront moves from Liquid to Hydrogen, analytics does not automatically move with the theme. The custom frontend becomes responsible for page views, commerce events, consent state, and checkout handoff evidence.",
      "The goal is not to fire more tags. The goal is to keep Shopify analytics, GA4, ad platforms, and internal decision-making aligned enough that the team can trust launch data.",
    ],
    sections: [
      {
        title: "Separate first-party and third-party measurement",
        bullets: [
          "Shopify analytics should be implemented using Hydrogen's analytics patterns.",
          "GA4 and GTM need explicit event mapping from the custom storefront.",
          "Ad pixels should be tied to consent and checkout constraints, not scattered across components.",
        ],
      },
      {
        title: "Consent is a launch blocker",
        body: [
          "Hydrogen analytics must respect customer privacy requirements. Checkout domain, content security policy, Storefront API proxy behavior, cookie banner setup, and consent updates should be tested as one system.",
        ],
      },
      {
        title: "Map events before implementation",
        bullets: [
          "Page view, product view, collection view, search, add to cart, cart view, checkout start, and lead form events.",
          "Variant, price, currency, item id, quantity, and discount fields.",
          "Consent state, region behavior, and duplicate-tag prevention.",
        ],
      },
      {
        title: "Where GA4 and GTM usually drift",
        bullets: [
          "Client navigation sends page views differently than a theme page load.",
          "Checkout lives on a different domain or surface.",
          "Consent updates happen after tags already fired.",
          "App embeds no longer inject the same tracking snippets.",
        ],
      },
      {
        title: "Launch QA",
        ordered: [
          "Compare Liquid baseline events before migration.",
          "Validate Hydrogen event payloads in preview.",
          "Run consent accept and reject paths.",
          "Test checkout handoff and purchase attribution.",
          "Document known gaps before production cutover.",
        ],
      },
    ],
    conclusion:
      "Analytics migration should be scoped before build completion. If the storefront launches first and tracking is repaired later, the team loses the most important comparison window.",
    links: [
      { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit" },
      { href: "/liquid-to-hydrogen-migration", label: "Migration planning" },
      { href: "/shopify-hydrogen-performance-optimization", label: "Performance optimization" },
      { href: "/contact", label: "Request analytics audit" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/analytics/index",
        label: "Shopify: Analytics with Hydrogen and Oxygen",
        note: "Official analytics source translated into migration checks.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/analytics/consent",
        label: "Shopify: Consent for analytics and customer privacy",
        note: "Official source for consent, checkout domain, and CSP considerations.",
        external: true,
      },
      {
        href: "https://support.google.com/analytics/answer/10089681",
        label: "Google Analytics 4 overview",
        note: "Official Google Analytics source used for GA4 framing.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Storefront MCP, UCP, and AI-Readable Hydrogen Stores",
    slug: "shopify-storefront-mcp-ucp-ai-readiness",
    description:
      "An evergreen AI commerce readiness guide for Shopify merchants focused on product data, SSR content, schema, and Storefront MCP.",
    category: "AI Commerce",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Storefront MCP and UCP | Hydrogen AI Readiness",
    metaDescription:
      "Prepare a Shopify Hydrogen store for AI shopping agents with Storefront MCP, UCP, product data quality, SSR content, schema, and policies.",
    h1: "Shopify Storefront MCP, UCP, and AI-readable Hydrogen stores",
    intro: [
      "AI commerce is useful only when product data, policies, variant state, and checkout paths are clear enough for an agent to act without guessing.",
      "For Hydrogen stores, the practical readiness work is not hype. It is server-rendered product content, structured product state, clean catalog data, policy clarity, and store-scoped shopping surfaces.",
    ],
    sections: [
      {
        title: "What Storefront MCP changes",
        body: [
          "Shopify's Storefront MCP surfaces store-scoped catalog search, product detail, cart, checkout, and policy tasks for agents. That makes a merchant's product data and policy clarity more important, not less.",
        ],
      },
      {
        title: "UCP is a protocol surface, not an SEO shortcut",
        bullets: [
          "Good product titles, variants, inventory state, and policies still matter.",
          "Structured data should match visible product state.",
          "Important product copy should render in initial HTML.",
          "Checkout handoff should remain merchant-controlled and testable.",
        ],
      },
      {
        title: "Hydrogen readiness checklist",
        bullets: [
          "SSR product descriptions, variant options, price, availability, and policy cues.",
          "JSON-LD that reflects the selected product state.",
          "Consistent canonical URLs and internal links for product and collection pages.",
          "Machine-readable return, shipping, and support policies.",
          "A clean product feed and catalog taxonomy.",
        ],
      },
      {
        title: "Where merchants should avoid hype",
        body: [
          "Do not build an AI shopping agent before the store can answer basic product questions reliably. Fix product data, schema, and policy clarity first.",
        ],
      },
      {
        title: "A practical first scope",
        ordered: [
          "Audit product data quality.",
          "Audit initial HTML and structured data.",
          "Check policy visibility.",
          "Review Storefront MCP and UCP readiness.",
          "Decide whether an agent experience is actually useful for the catalog.",
        ],
      },
    ],
    conclusion:
      "The best AI commerce work starts with boring product-data discipline. Hydrogen is useful when it makes that data clear to shoppers, crawlers, and agent workflows.",
    links: [
      { href: "/news-on-shopify-hydrogen", label: "Official Hydrogen update notes" },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO" },
      { href: "/shopify-hydrogen-issues#seo", label: "SEO issue library" },
      { href: "/contact", label: "Request AI readiness audit" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/agents/catalog/storefront-catalog",
        label: "Shopify: Storefront Catalog MCP",
        note: "Official source for store-scoped catalog discovery via UCP.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront",
        label: "Shopify: Storefront MCP server",
        note: "Official source for catalog, cart, checkout, and policy agent tasks.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/agents",
        label: "Shopify: Agentic commerce",
        note: "Official source for UCP and merchant-scoped agentic commerce context.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen B2B and Wholesale Guide",
    slug: "shopify-hydrogen-b2b-wholesale-guide",
    description:
      "A Shopify Hydrogen B2B guide for headless storefronts, customer accounts, company locations, negotiated pricing, and wholesale QA.",
    category: "B2B",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen B2B Guide | Wholesale, Accounts, Pricing",
    metaDescription:
      "Plan Shopify Hydrogen B2B and wholesale storefronts around company locations, customer accounts, catalogs, pricing, and launch QA.",
    h1: "Shopify Hydrogen B2B and wholesale guide",
    intro: [
      "B2B Hydrogen work is not just a different product page. It changes identity, pricing, catalog visibility, checkout expectations, account state, and operational support.",
      "The safest B2B scope starts by confirming which Shopify-native B2B features are available, which customer account flows must be respected, and where custom storefront behavior begins.",
    ],
    sections: [
      {
        title: "Start with company and location logic",
        body: [
          "Shopify B2B uses companies and company locations to represent business buyers and their purchasing context. A Hydrogen storefront must know how buyer identity changes catalog, pricing, payment terms, and checkout behavior.",
        ],
      },
      {
        title: "Customer Account API affects the storefront plan",
        bullets: [
          "Login and customer recognition are not optional UI details.",
          "Account state can affect pricing, product visibility, and checkout handoff.",
          "Custom account experiences need careful API and security review.",
        ],
      },
      {
        title: "B2B launch risks",
        bullets: [
          "Wrong company location selected.",
          "Wholesale price leaks to retail shoppers.",
          "Catalog rules differ between collection, search, and product pages.",
          "Discounts, payment terms, and checkout rules are not tested together.",
        ],
      },
      {
        title: "When Hydrogen makes sense for B2B",
        bullets: [
          "The buyer journey needs custom product discovery or account-aware UX.",
          "The catalog is complex enough that Liquid becomes hard to control.",
          "The team can maintain application-level logic after launch.",
          "B2B rules are known before implementation starts.",
        ],
      },
      {
        title: "When to stay conservative",
        body: [
          "If the B2B process is still changing, keep the first scope narrow. A Liquid or Shopify-native path can be safer until pricing, customer approval, and account operations stabilize.",
        ],
      },
    ],
    conclusion:
      "Hydrogen can support serious B2B storefront work, but only when buyer identity, catalog rules, pricing, and checkout behavior are treated as one system.",
    links: [
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog Hydrogen guide" },
      { href: "/blog/shopify-b2b-partner-pricing-without-separate-storefront", label: "Partner pricing production note" },
      { href: "/shopify-hydrogen-fit-audit", label: "Hydrogen fit audit" },
      { href: "/contact", label: "Request B2B scope review" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/b2b",
        label: "Shopify: Headless with B2B",
        note: "Official source for B2B custom storefront grounding.",
        external: true,
      },
      {
        href: "https://help.shopify.com/en/manual/b2b/companies-and-customers/creating-companies",
        label: "Shopify Help: Companies and company locations",
        note: "Official source translated into B2B identity checks.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/hydrogen",
        label: "Shopify: Customer Account API with Hydrogen",
        note: "Official source for customer account implementation context.",
        external: true,
      },
    ],
  },
  {
    title: "Hydrogen Deployment Checklist for Oxygen Preview and Production QA",
    slug: "hydrogen-deployment-checklist-oxygen-preview-production-qa",
    description:
      "A launch QA checklist for Hydrogen and Oxygen covering preview, production, environment variables, sitemap, robots, analytics, and rollback.",
    category: "Launch",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Hydrogen Deployment Checklist | Oxygen Preview and Launch QA",
    metaDescription:
      "Use this Hydrogen deployment checklist for Oxygen preview, production launch QA, environment variables, analytics, sitemap, robots, and rollback.",
    h1: "Hydrogen deployment checklist for Oxygen preview and production QA",
    intro: [
      "A Hydrogen launch is safe only when preview behavior, production behavior, environment variables, discovery files, analytics, and checkout handoff have all been tested.",
      "The deployment checklist should be short enough to run, but complete enough to catch the mistakes that become expensive after search engines and shoppers see the new storefront.",
    ],
    sections: [
      {
        title: "Preview is not production",
        body: [
          "Preview deployments are useful for QA, but production still needs its own domain, environment variables, robots behavior, analytics, checkout handoff, and indexability checks.",
        ],
      },
      {
        title: "Environment variables to verify",
        bullets: [
          "Public store domain and checkout domain.",
          "Storefront API credentials and environment scoping.",
          "Analytics, consent, and third-party service keys.",
          "Feature flags that differ between preview and production.",
        ],
      },
      {
        title: "Discovery and SEO checks",
        bullets: [
          "Sitemap returns production URLs.",
          "Robots behavior matches the production domain.",
          "Canonical URLs point to the final domain.",
          "JSON-LD is present on product, article, and key service pages.",
          "Redirects cover important Liquid or old headless routes.",
        ],
      },
      {
        title: "Commerce path checks",
        bullets: [
          "Product page, variant, search, collection, cart, and checkout handoff.",
          "Discount, subscription, B2B, or customer-account behavior if present.",
          "Lead forms, emails, and thank-you routing.",
        ],
      },
      {
        title: "Closeout",
        ordered: [
          "Validate preview.",
          "Deploy only after the PR exists and validation passes.",
          "Verify production HTML and browser behavior.",
          "Merge or close the PR after live verification.",
          "Delete the remote branch and document the release.",
        ],
      },
    ],
    conclusion:
      "Do not treat deployment as the final command. Treat it as the start of production verification.",
    links: [
      { href: "/shopify-hydrogen-templates#launch-qa-checklist", label: "Launch QA checklist template" },
      { href: "/shopify-hydrogen-issues", label: "Hydrogen issue library" },
      { href: "/shopify-hydrogen-support-retainer", label: "Support retainer" },
      { href: "/contact", label: "Request launch QA" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/index",
        label: "Shopify: Hydrogen deployments",
        note: "Official source for Oxygen deployment and environment-variable behavior.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy",
        label: "Shopify CLI: hydrogen deploy",
        note: "Official CLI source for preview deployment command behavior.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify: Hydrogen SEO",
        note: "Official source for sitemap, robots, canonical, and JSON-LD launch checks.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen Markets and i18n SEO Guide",
    slug: "shopify-hydrogen-markets-i18n-seo",
    description:
      "Plan Hydrogen Markets, international URLs, locale routing, currency display, hreflang, and multi-region SEO without creating duplicate risk.",
    category: "International",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Markets and i18n SEO Guide",
    metaDescription:
      "Plan Shopify Hydrogen Markets and i18n SEO: locale URLs, currency, hreflang, cache behavior, canonical rules, and multi-region QA.",
    h1: "Shopify Hydrogen Markets and i18n SEO guide",
    intro: [
      "International Hydrogen work needs more than a language switcher. Locale routing, market context, currency, product availability, translated content, canonical URLs, and hreflang must agree.",
      "The safest approach is to define the market architecture before pages are built, because retrofitting locale behavior after launch usually creates duplicate URLs and inconsistent product state.",
    ],
    sections: [
      {
        title: "Decide the URL model first",
        bullets: [
          "Subfolders such as /en-us or /de can keep one domain easier to manage.",
          "Country domains can make sense for established regional operations.",
          "Query-string locale switching is usually weak for SEO and internal linking.",
        ],
      },
      {
        title: "Markets affect data, not only text",
        body: [
          "A market can affect currency, pricing context, product availability, translations, and buyer expectations. Hydrogen route data should load the correct market context before rendering SEO-critical content.",
        ],
      },
      {
        title: "Hreflang and canonicals must be consistent",
        bullets: [
          "Each localized page should identify its real alternates.",
          "Canonical URLs should not collapse distinct regional pages into one page by accident.",
          "Sitemaps can include alternate language entries when the architecture supports them.",
        ],
      },
      {
        title: "Common Hydrogen i18n risks",
        bullets: [
          "Translated UI but untranslated product content.",
          "Currency switcher changes display without market-aware cart behavior.",
          "Cache keys ignore locale or country.",
          "Search and collection filters behave differently by region.",
        ],
      },
      {
        title: "Launch QA",
        ordered: [
          "Test every supported locale URL.",
          "Check product, collection, cart, and checkout context.",
          "Validate canonical and hreflang output.",
          "Confirm sitemap and robots behavior.",
          "Monitor Search Console by locale after launch.",
        ],
      },
    ],
    conclusion:
      "Hydrogen Markets work should start with URL, market, and content ownership. The translation layer is only one part of international SEO.",
    links: [
      { href: "/liquid-to-hydrogen-migration", label: "Migration planning" },
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO" },
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog guide" },
      { href: "/contact", label: "Request Markets/i18n review" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/markets",
        label: "Shopify: Internationalization with Shopify Markets",
        note: "Official source for Hydrogen Markets implementation grounding.",
        external: true,
      },
      {
        href: "https://developers.google.com/search/docs/specialty/international/localized-versions",
        label: "Google: Localized versions of your pages",
        note: "Official source for hreflang and localized page signals.",
        external: true,
      },
      {
        href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
        label: "Next.js: Sitemap file convention",
        note: "Official source for localized sitemap output in this Next.js site.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen Search, Filters, and Product Discovery Architecture",
    slug: "shopify-hydrogen-search-filters-product-discovery",
    description:
      "A product discovery guide for Hydrogen stores covering search, collection filters, Algolia, faceted navigation, merchandising, and SEO risk.",
    category: "Product Discovery",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Search and Filters | Product Discovery Guide",
    metaDescription:
      "Plan Shopify Hydrogen search, collection filters, faceted navigation, Algolia, merchandising, and SEO-safe product discovery for large catalogs.",
    h1: "Shopify Hydrogen search, filters, and product discovery architecture",
    intro: [
      "Large-catalog Hydrogen work succeeds or fails on product discovery. Search, collection filters, sort rules, recommendations, merchandising, and SEO cannot be treated as separate widgets.",
      "The right architecture depends on catalog size, filter complexity, search tolerance, merchandiser control, and whether filtered views should be crawlable or purely shopper-facing.",
    ],
    sections: [
      {
        title: "Start with shopper intent",
        bullets: [
          "Search handles messy language, model names, product attributes, and misspellings.",
          "Filters narrow structured attributes such as size, color, vendor, material, price, or availability.",
          "Collections carry merchandising and SEO intent.",
        ],
      },
      {
        title: "Shopify-native filters still need frontend work",
        body: [
          "Shopify Search and Discovery can define filter behavior, but a Hydrogen storefront still needs route, UI, query, state, and pagination behavior implemented correctly.",
        ],
      },
      {
        title: "When Algolia or a search platform makes sense",
        bullets: [
          "The catalog needs strong typo tolerance, synonyms, ranking control, personalization, or analytics.",
          "The team wants instant search, autocomplete, and richer merchandising controls.",
          "The budget supports another service and integration surface.",
        ],
      },
      {
        title: "Faceted SEO risk",
        bullets: [
          "Not every filtered URL should be indexable.",
          "Important filtered demand may deserve real collection pages instead.",
          "Canonical, robots, and internal links must match the intent.",
          "Infinite scroll should not hide important products from crawlers or shoppers.",
        ],
      },
      {
        title: "Architecture checklist",
        ordered: [
          "List product attributes and filter sources.",
          "Choose native filtering, search platform, or hybrid approach.",
          "Define indexable vs non-indexable filtered states.",
          "Test pagination, empty states, and availability.",
          "Track search and filter behavior after launch.",
        ],
      },
    ],
    conclusion:
      "Product discovery should be scoped before the build estimate. A pretty collection grid is not enough for a large catalog.",
    links: [
      { href: "/shopify-hydrogen-for-large-catalog-retail", label: "Large catalog Hydrogen guide" },
      { href: "/blog/shopify-hydrogen-collection-out-of-stock-products-hidden", label: "Collection filtering production note" },
      { href: "/shopify-hydrogen-issues#collections", label: "Collection issue library" },
      { href: "/contact", label: "Request product discovery review" },
    ],
    sources: [
      {
        href: "https://www.algolia.com/search-solutions/shopify/hydrogen",
        label: "Algolia: Shopify Hydrogen search",
        note: "English source used for headless search and filter integration context.",
        external: true,
      },
      {
        href: "https://help.shopify.com/en/manual/online-store/storefront-search/search-and-discovery-filters",
        label: "Shopify Help: Search and Discovery filters",
        note: "Official source for filter behavior and limits.",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter",
        label: "Shopify Storefront API: ProductFilter",
        note: "Official source for Storefront API filtering constraints.",
        external: true,
      },
    ],
  },
  {
    title: "Shopify Hydrogen SEO Checklist: JSON-LD, Sitemap, Robots, and Oxygen",
    slug: "shopify-hydrogen-seo-checklist",
    description:
      "A Hydrogen SEO implementation checklist covering rendered content, metadata, canonical URLs, JSON-LD, sitemap, robots, and Oxygen launch QA.",
    category: "SEO",
    status: "published",
    publishAt: PUBLISH_DATE,
    updatedAt: PUBLISH_DATE,
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen SEO Checklist | JSON-LD, Sitemap, Robots",
    metaDescription:
      "Use this Shopify Hydrogen SEO checklist for SSR content, metadata, canonical URLs, JSON-LD, sitemap.xml, robots.txt, Oxygen, and launch QA.",
    h1: "Shopify Hydrogen SEO checklist: JSON-LD, sitemap, robots, and Oxygen",
    intro: [
      "Hydrogen SEO is not one tag. It is the agreement between rendered content, metadata, route shape, structured data, sitemap, robots behavior, internal links, and launch QA.",
      "This checklist supports the main Hydrogen SEO service page with the implementation details a technical stakeholder should verify before and after launch.",
    ],
    sections: [
      {
        title: "Rendered content",
        bullets: [
          "Product descriptions and buying context appear in initial HTML when they matter.",
          "Collection pages include crawlable headings, copy, product links, and pagination paths.",
          "Client-only widgets do not hide the core shopping or SEO content.",
        ],
      },
      {
        title: "Metadata and canonical URLs",
        bullets: [
          "Every indexable route has a unique title and meta description.",
          "Canonical URLs use the final production domain.",
          "Variant, filter, and campaign URLs have intentional canonical rules.",
          "Noindex is used only where it is actually intended.",
        ],
      },
      {
        title: "JSON-LD",
        bullets: [
          "Product structured data matches visible title, price, availability, variant, and image state.",
          "Article and guide pages expose Article schema.",
          "Breadcrumb schema matches the visible navigation path.",
          "Organization and Person facts stay consistent with approved proof.",
        ],
      },
      {
        title: "Sitemap and robots",
        bullets: [
          "Sitemap includes only public canonical URLs.",
          "Robots behavior is checked on production, not only preview.",
          "Old Liquid or legacy headless routes redirect cleanly.",
          "Important new pages appear in internal links and llms-full context.",
        ],
      },
      {
        title: "Post-launch checks",
        ordered: [
          "Fetch production HTML.",
          "Open the page in a browser.",
          "Check sitemap and robots.",
          "Validate structured data.",
          "Monitor Search Console for crawl, canonical, and indexing signals.",
        ],
      },
    ],
    conclusion:
      "Hydrogen SEO should be verified as a production system. The code can look correct while live HTML, sitemap, robots, or structured data still drift.",
    links: [
      { href: "/shopify-hydrogen-seo", label: "Hydrogen SEO service page" },
      { href: "/shopify-hydrogen-templates#seo-migration-checklist", label: "SEO migration checklist template" },
      { href: "/blog/shopify-hydrogen-product-description-ssr-seo", label: "Product content SSR note" },
      { href: "/contact", label: "Request SEO audit" },
    ],
    sources: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
        label: "Shopify: Search Engine Optimization for Hydrogen",
        note: "Official source for Hydrogen metadata, sitemap, robots, and JSON-LD claims.",
        external: true,
      },
      {
        href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
        label: "Google: Structured data",
        note: "Official source for structured data guidance.",
        external: true,
      },
      {
        href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
        label: "Google: Sitemaps overview",
        note: "Official source for sitemap discovery expectations.",
        external: true,
      },
    ],
  },
] as const satisfies readonly Article[];
