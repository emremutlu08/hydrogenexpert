import type { Article, ArticleSection } from "../../lib/articles";
import { OWNER } from "../../lib/site";

const PUBLISH_DATE = "2026-05-27T10:00:00+03:00";
const REFRESH_DATE = "2026-05-27T23:30:00+03:00";

const scopeReviewLinks = [
  { href: "/shopify-hydrogen-packages", label: "Review fixed-scope packages" },
  { href: "/liquid-to-hydrogen-migration", label: "Plan a Liquid to Hydrogen migration" },
  { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
  { href: "/contact", label: "Send the store URL" },
] as const;

const TRAFFIC_GAP_ARTICLE_DRAFTS = [
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
      "B2B Hydrogen work changes more than the product page. It changes identity, pricing, catalog visibility, checkout expectations, account state, and operational support.",
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

type TrafficGapSlug = (typeof TRAFFIC_GAP_ARTICLE_DRAFTS)[number]["slug"];

interface ArticleQualityRefresh {
  summary: NonNullable<Article["summary"]>;
  takeaways: NonNullable<Article["takeaways"]>;
  sections: readonly ArticleSection[];
  faq: NonNullable<Article["faq"]>;
}

const ARTICLE_REFRESHES = {
  "shopify-hydrogen-nextjs": {
    summary: [
      "The useful answer is usually commercial, not ideological: Hydrogen is the lower-friction route when Shopify owns commerce logic and the team wants Shopify-aligned hosting, routing, cart primitives, and deployment. Next.js is stronger when the storefront is one part of a wider product surface that already depends on Vercel, custom app routes, or non-Shopify systems.",
      "A good scope review should price the work after launch: who maintains caching, app replacements, analytics, consent, preview workflows, search, CMS editing, and checkout handoff. The framework decision is healthy only when those operating costs are visible before the build starts.",
    ],
    takeaways: [
      {
        label: "Best fit",
        value:
          "Use Hydrogen when the storefront is commerce-first and Shopify remains the center of product, cart, checkout, customer, and content decisions.",
      },
      {
        label: "Risk signal",
        value:
          "Choose Next.js carefully if the team is really buying app-platform flexibility, because more flexibility also means more owned integration and QA work.",
      },
      {
        label: "First move",
        value:
          "Map CMS, apps, analytics, search, markets, and launch ownership before estimating a rebuild or comparing Vercel and Oxygen costs.",
      },
    ],
    sections: [
      {
        title: "Translate the framework debate into merchant risk",
        body: [
          "Hydrogen gives Shopify-native defaults for a headless storefront, but it does not remove architecture decisions. The team still has to decide how data is loaded, where content is edited, how product pages render, how the cart behaves, and which parts of the stack need fallback paths.",
          "Next.js gives a broader web application surface. That can be valuable when the store sits beside member portals, editorial systems, marketplaces, or internal product tooling. It can also increase the number of custom seams the merchant must own after the launch team leaves.",
        ],
      },
      {
        title: "Use hosting as an operating model decision",
        bullets: [
          "Oxygen keeps the deployment model close to Shopify and is easier to justify when commerce is the main workload.",
          "Vercel can be a good fit when the team already has preview, analytics, edge, and app patterns there.",
          "The wrong hosting choice usually shows up later as preview drift, environment confusion, cache bugs, or slow incident response.",
          "A fair comparison includes who can debug production on a Friday afternoon, not only who can ship a demo fastest.",
        ],
      },
      {
        title: "TCO questions before anyone writes the proposal",
        ordered: [
          "Which apps must survive the move, and which need a custom rebuild?",
          "Which content roles need visual editing, preview, approval, or localization?",
          "Which analytics events are legally and commercially required?",
          "Which routes must preserve SEO value, canonicals, hreflang, redirects, and structured data?",
          "Who owns framework upgrades, Shopify API changes, monitoring, and post-launch support?",
        ],
      },
      {
        title: "A senior-led recommendation pattern",
        body: [
          "If Shopify commerce is the center and the scope is product detail pages, collections, search, cart, checkout handoff, CMS decisions, and SEO-safe migration, start with Hydrogen unless there is a strong reason not to. If the storefront is really a custom web app with Shopify as one backend among several, treat Next.js as a serious candidate and budget the extra integration work honestly.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Hydrogen faster than Next.js for Shopify?",
        answer:
          "Framework alone does not decide speed. A clean Hydrogen build and a clean Next.js build can both be fast. The bigger difference is how much commerce wiring, hosting, caching, app compatibility, and QA the team has to own.",
      },
      {
        question: "Should a Shopify Plus brand always choose Hydrogen?",
        answer:
          "No. Hydrogen is often a strong fit for commerce-first headless Shopify, but Plus status by itself is not a reason to rebuild. Liquid can still be safer when the problem is theme-level merchandising, performance cleanup, or a limited UX change.",
      },
      {
        question: "When is Next.js the safer choice?",
        answer:
          "Next.js is safer when the store is part of a larger application, the team already has strong Next.js operations, or the roadmap depends on non-Shopify workflows that would feel awkward inside a commerce-first Hydrogen project.",
      },
    ],
  },
  "shopify-hydrogen-cms-visual-builder": {
    summary: [
      "The CMS decision is really an ownership decision. Metaobjects keep content close to Shopify, Sanity and Storyblok give structured editorial systems, Builder, Pack, and Weaverse can improve visual editing, and custom components can be the simplest answer when content variation is controlled.",
      "The mistake is choosing a builder because editors want flexibility before defining which pages should be flexible. Hydrogen projects age better when merchants can edit the right surfaces without turning every component into an open-ended layout system.",
    ],
    takeaways: [
      {
        label: "Editor need",
        value:
          "Define who edits product storytelling, campaign pages, landing pages, navigation copy, and localized content before choosing tooling.",
      },
      {
        label: "Build risk",
        value:
          "Visual freedom can create SEO, performance, brand, and QA risk if the component model is not constrained.",
      },
      {
        label: "Safe start",
        value:
          "Ship a small editable system first: page sections, product content, preview, approval, and production QA.",
      },
    ],
    sections: [
      {
        title: "A practical CMS decision matrix",
        bullets: [
          "Metaobjects fit structured Shopify-native content such as product specs, badges, buying guides, and reusable merchandising data.",
          "Sanity or Storyblok fit teams that need stronger editorial modeling, roles, workflows, references, and content APIs outside Shopify.",
          "Builder, Pack, and Weaverse fit teams that need visual composition, but only when component boundaries and preview rules are clear.",
          "Custom React components fit high-control storefronts where the team values predictable performance and fewer moving parts.",
        ],
      },
      {
        title: "Do not confuse page building with content governance",
        body: [
          "A visual builder can make campaign work faster, but it does not automatically create good content governance. Merchants still need rules for which fields are required, which components can appear on SEO-sensitive routes, how previews are reviewed, and who can publish changes that affect conversion paths.",
          "The best Hydrogen CMS setup usually gives editors meaningful control over content while keeping product data, navigation, pricing, structured data, and core purchase flows under stricter engineering ownership.",
        ],
      },
      {
        title: "Questions for vendors and implementation teams",
        ordered: [
          "Can the CMS preview a Hydrogen route with production-like data?",
          "Can required fields protect SEO titles, summaries, images, and product references?",
          "Can editors localize content without breaking route shape or hreflang?",
          "Can the implementation cache content safely without stale campaign pages?",
          "Can the team roll back a bad content publish without a code deploy?",
        ],
      },
      {
        title: "A sane first scope",
        body: [
          "Start with the pages that change most often and have commercial impact: campaign landers, collection storytelling, product education, and reusable proof blocks. Leave global layout, checkout-adjacent flows, canonical behavior, and app integration logic in code until the editing model has proven itself.",
        ],
      },
    ],
    faq: [
      {
        question: "Can Shopify Metaobjects replace a headless CMS?",
        answer:
          "Sometimes. Metaobjects are useful for structured Shopify-native content, but they are not a full editorial system for every team. If editors need complex workflows, previews, localization, or cross-channel content modeling, a dedicated CMS may be worth the extra integration.",
      },
      {
        question: "Are visual builders safe for Hydrogen SEO?",
        answer:
          "They can be, but only when important content renders in HTML, metadata is controlled, image fields are required, and editors cannot publish layouts that hide headings, product links, or structured content from crawlers.",
      },
      {
        question: "What should be editable first?",
        answer:
          "Prioritize high-change, high-value content: campaign pages, collection copy, product education, banners, FAQs, and proof blocks. Keep cart logic, checkout handoff, canonical rules, and core product data under stricter control.",
      },
    ],
  },
  "shopify-apps-in-hydrogen-compatibility-checklist": {
    summary: [
      "App compatibility is one of the fastest ways a Hydrogen migration gets under-scoped. Many Shopify apps are built for Liquid theme injection, app blocks, script tags, or checkout surfaces that do not move cleanly into a custom Hydrogen storefront.",
      "The right checklist starts with revenue-critical behavior: reviews, subscriptions, loyalty, search, recommendations, analytics, consent, customer accounts, bundles, and returns. Each app needs a decision: native Hydrogen support, API integration, script embed, replacement, or removal.",
    ],
    takeaways: [
      {
        label: "Main risk",
        value:
          "Theme app blocks and Liquid snippets rarely translate directly into Hydrogen. Assume every important app needs verification.",
      },
      {
        label: "Priority",
        value:
          "Check purchase-path and measurement apps first: subscriptions, reviews, loyalty, search, analytics, consent, and checkout-adjacent tools.",
      },
      {
        label: "Deliverable",
        value:
          "Create an app inventory with owner, current behavior, headless path, fallback, QA case, and launch blocker status.",
      },
    ],
    sections: [
      {
        title: "Build the inventory before choosing the migration date",
        body: [
          "The inventory should list every app that touches product pages, collections, account flows, cart, checkout handoff, emails, pixels, customer data, search, or merchandising. For each app, capture where it appears today, how it loads, which data it needs, and what breaks if it disappears for a week.",
          "This turns app compatibility from a vague fear into a launch checklist. A merchant can then separate must-have behavior from legacy scripts that no longer justify the complexity.",
        ],
      },
      {
        title: "Common Hydrogen app paths",
        bullets: [
          "Native headless SDK or API integration when the vendor supports it clearly.",
          "Server-side data fetch plus custom React UI when the app exposes stable APIs.",
          "Script embed for low-risk widgets that do not control core purchase behavior.",
          "Replacement when the app depends on Liquid theme injection or unsupported checkout behavior.",
          "Removal when the feature no longer supports the commercial plan.",
        ],
      },
      {
        title: "Vendor questions that save rework",
        ordered: [
          "Do you support Shopify Hydrogen or headless Storefront API implementations?",
          "Can reviews, subscription options, loyalty state, or recommendations render server-side or hydrate safely?",
          "Which events must be sent from the storefront, checkout, or customer account surface?",
          "What happens to historical data, customer tags, subscription contracts, and loyalty balances?",
          "Can we test this on a preview domain before production launch?",
        ],
      },
      {
        title: "QA cases for compatibility signoff",
        bullets: [
          "A new shopper can discover the feature, add to cart, and reach checkout with the expected state.",
          "A returning customer sees the expected account, subscription, loyalty, or personalization behavior.",
          "Analytics and consent fire once, with no duplicate purchase or add-to-cart events.",
          "The app does not block SSR, crawlable content, or page performance on key product and collection routes.",
        ],
      },
    ],
    faq: [
      {
        question: "Do Shopify apps work automatically in Hydrogen?",
        answer:
          "No. Apps that rely on Liquid app blocks, snippets, or theme script injection need review. Some vendors offer headless APIs or SDKs, while others require custom integration, replacement, or removal.",
      },
      {
        question: "Which apps should be checked first?",
        answer:
          "Start with anything tied to revenue, trust, measurement, or customer state: subscriptions, reviews, loyalty, search, recommendations, analytics, consent, bundles, customer accounts, and returns.",
      },
      {
        question: "What is the safest output of an app audit?",
        answer:
          "A compatibility matrix with each app's current behavior, headless integration path, data owner, fallback plan, QA scenario, and launch-blocker status. That matrix should drive scope, budget, and launch timing.",
      },
    ],
  },
  "shopify-hydrogen-analytics-migration": {
    summary: [
      "Analytics migration is not a tag copy-paste task. Hydrogen changes where events are emitted, how consent is read, how checkout handoff is attributed, and how server-rendered pages expose product and collection context.",
      "A reliable migration starts with an event map, then tests GA4, GTM, Shopify analytics, consent mode, pixels, server/client boundaries, and checkout attribution against real shopper paths before production launch.",
    ],
    takeaways: [
      {
        label: "First artifact",
        value:
          "Create an event map covering view item, select item, add to cart, begin checkout, search, collection filter, sign in, and purchase attribution.",
      },
      {
        label: "Biggest error",
        value:
          "Duplicate events often hide in Hydrogen migrations because legacy pixels, GTM, app scripts, and custom client events all fire together.",
      },
      {
        label: "Launch gate",
        value:
          "Compare old and new tracking on preview and production-like flows before cutting over traffic.",
      },
    ],
    sections: [
      {
        title: "Start with the measurement contract",
        body: [
          "The measurement contract should name each event, where it fires, which properties it carries, which consent state is required, and which platform receives it. Without that contract, the team usually argues about dashboards after launch instead of validating behavior before launch.",
          "Hydrogen gives the team more control over storefront events, but that control cuts both ways. It becomes easy to miss collection filter events, double-send cart events, or lose product context when a component hydrates differently from the server-rendered route.",
        ],
      },
      {
        title: "Consent and checkout handoff deserve separate tests",
        bullets: [
          "Consent state must be read before marketing or analytics tags fire.",
          "Rejected consent should suppress the correct events without breaking essential storefront behavior.",
          "Checkout attribution should survive the transition from Hydrogen storefront to Shopify checkout.",
          "Purchase reporting should be checked against the platform that owns the final transaction event.",
        ],
      },
      {
        title: "GA4 and GTM QA sequence",
        ordered: [
          "Document the current Liquid event baseline.",
          "Create the Hydrogen event map and property naming rules.",
          "Test preview flows with debug tooling and consent states.",
          "Check duplicate tags, duplicate ecommerce events, and missing item parameters.",
          "Run a post-launch comparison window before declaring the migration done.",
        ],
      },
      {
        title: "What an analytics audit should report",
        bullets: [
          "Event coverage by route and shopper action.",
          "Consent behavior by accepted, rejected, and partially accepted states.",
          "Checkout attribution and purchase reporting assumptions.",
          "Known gaps, owner, severity, and whether the issue blocks launch.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I reuse my Liquid GTM setup in Hydrogen?",
        answer:
          "Some configuration can move, but it should not be copied blindly. Hydrogen needs explicit event emission, consent checks, and checkout attribution testing because theme snippets and app-injected tags may no longer run the same way.",
      },
      {
        question: "What should be tested before launch?",
        answer:
          "Test product views, collection views, search, filters, add to cart, cart changes, begin checkout, consent states, checkout attribution, and purchase reporting. Also check that each expected event fires once.",
      },
      {
        question: "How do you know the migration worked?",
        answer:
          "Use a short comparison window with known traffic patterns, debug logs, and platform reports. The goal is not perfect parity on every number, but no missing critical events, no obvious duplication, and documented attribution assumptions.",
      },
    ],
  },
  "shopify-storefront-mcp-ucp-ai-readiness": {
    summary: [
      "AI commerce readiness starts with boring storefront quality: clean product data, crawlable SSR content, consistent schema, clear policies, reliable availability, and pages that answer buying questions without depending on client-only widgets.",
      "Storefront MCP and Universal Cart Protocol point toward agent-mediated shopping, but merchants should avoid hype-led rebuilds. The durable work is making the product catalog, page structure, and commerce actions understandable to search engines, LLMs, and future shopping agents.",
    ],
    takeaways: [
      {
        label: "Best work",
        value:
          "Improve product data, structured content, schema, policy clarity, and SSR before chasing agent-commerce experiments.",
      },
      {
        label: "Risk",
        value:
          "AI agents cannot compensate for weak titles, vague descriptions, missing variants, thin PDPs, or inconsistent availability data.",
      },
      {
        label: "Position",
        value:
          "Treat AI readiness as storefront quality and data governance, not as a separate novelty project.",
      },
    ],
    sections: [
      {
        title: "What AI-readable commerce actually needs",
        bullets: [
          "Product titles, variants, options, materials, sizes, availability, pricing context, and policy information are explicit.",
          "Important buying guidance appears in rendered HTML, not only behind tabs, personalization, or client-only components.",
          "JSON-LD matches visible product state and does not invent unavailable offers or stale prices.",
          "Internal links help crawlers and agents understand category, product, collection, and buying-guide relationships.",
        ],
      },
      {
        title: "Where Storefront MCP and UCP fit",
        body: [
          "Storefront MCP gives developers a way to expose storefront capabilities to AI agents in a Shopify-aligned way. UCP points at cart and checkout portability for agentic shopping. For merchants, the practical takeaway is simpler: the store needs dependable product data and safe commerce actions before agents are useful.",
          "A thin PDP with inconsistent product facts will still be thin when an AI system reads it. The first readiness pass should fix the underlying catalog and page quality before adding another interface on top.",
        ],
      },
      {
        title: "AI readiness audit items",
        ordered: [
          "Check PDP HTML for product facts, buying guidance, policy links, and crawlable content.",
          "Check schema against visible price, availability, variant, brand, image, and breadcrumb state.",
          "Check collection pages for meaningful category copy, filters, product links, and pagination.",
          "Check llms.txt, sitemap, robots, and internal links for discoverability.",
          "Check whether cart and checkout actions can be represented safely for future agent flows.",
        ],
      },
      {
        title: "A merchant-friendly scope",
        body: [
          "Package the work as product-data cleanup, SSR and schema validation, policy clarity, and route-level discoverability. That keeps the project tied to current SEO and conversion value while preparing the storefront for AI shopping surfaces that mature over time.",
        ],
      },
    ],
    faq: [
      {
        question: "Should merchants rebuild for AI shopping agents now?",
        answer:
          "Usually no. Most merchants get more value by improving product data, rendered content, structured data, policies, sitemap, llms.txt, and checkout reliability. Those improvements help today and also prepare the store for agent-mediated shopping.",
      },
      {
        question: "What makes a product page AI-readable?",
        answer:
          "A useful page has clear product facts, variant information, buying guidance, policy links, product availability, structured data that matches the page, and crawlable HTML that does not depend on client-only rendering.",
      },
      {
        question: "How does Hydrogen help AI readiness?",
        answer:
          "Hydrogen gives teams control over SSR, route structure, data loading, schema, and product-page composition. That control helps when the implementation uses it to make commerce data explicit and consistent.",
      },
    ],
  },
  "shopify-hydrogen-b2b-wholesale-guide": {
    summary: [
      "Hydrogen can work well for Shopify B2B when the storefront needs custom buyer UX, company-aware pricing, market-specific catalogs, account flows, and content that Liquid cannot express cleanly. The risk is underestimating customer identity, price visibility, and account-state QA.",
      "A B2B Hydrogen scope should begin with buyer rules: who can sign in, which company location they belong to, which catalog and price list they see, how quick order or reorder works, and what happens when unauthenticated users land on sensitive product pages.",
    ],
    takeaways: [
      {
        label: "Decision point",
        value:
          "Choose Hydrogen for B2B when custom account, pricing, catalog, and merchandising workflows justify application-level storefront work.",
      },
      {
        label: "Core risk",
        value:
          "Company location, buyer identity, price visibility, and catalog access must be tested as security and revenue logic, not only UI states.",
      },
      {
        label: "Scope shape",
        value:
          "Design the buyer journey before the component library: login, approval, catalog access, price display, cart, checkout, reorder, and support.",
      },
    ],
    sections: [
      {
        title: "Start with buyer identity and access",
        body: [
          "B2B storefront work should not begin with page design. It should begin with who the buyer is, how they authenticate, which company and location they belong to, and which commercial rules apply after sign-in.",
          "That access model affects product visibility, pricing, quantity rules, payment terms, shipping expectations, and what the storefront can safely show before login.",
        ],
      },
      {
        title: "B2B Hydrogen requirements to map early",
        bullets: [
          "Company, company location, and buyer role behavior.",
          "Catalog, price list, market, and currency rules.",
          "Guest visibility, gated pricing, and restricted products.",
          "Quick order, reorder, saved lists, drafts, and account support flows.",
          "Checkout handoff, payment terms, and operational ownership after launch.",
        ],
      },
      {
        title: "Customer Account API and storefront UX",
        body: [
          "Customer account decisions shape the whole storefront. The team needs to decide which account features live in Hydrogen, which stay close to Shopify account surfaces, and how buyer identity is carried into pricing, cart, and checkout behavior.",
          "Treat account state as a system boundary. A stale buyer context, wrong company location, or cached price can create a commercial problem, not only a bad interface.",
        ],
      },
      {
        title: "B2B QA cases that should block launch",
        ordered: [
          "Guest sees only the intended public product and price information.",
          "Approved buyer sees the correct company, location, catalog, price, currency, and payment terms.",
          "Buyer switching, sign-out, and cache behavior do not leak restricted prices or products.",
          "Cart and checkout preserve the intended B2B state.",
          "Search, filters, recommendations, and internal links respect catalog access rules.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Hydrogen required for Shopify B2B?",
        answer:
          "No. Many B2B stores can stay on Shopify theme architecture. Hydrogen makes sense when the buyer experience, catalog rules, account flows, or integration needs justify a custom storefront application.",
      },
      {
        question: "What is the biggest B2B migration risk?",
        answer:
          "The biggest risk is incorrect buyer context: wrong company location, wrong catalog, wrong price, leaked restricted products, or checkout state that does not match the buyer's commercial terms.",
      },
      {
        question: "What should a B2B Hydrogen audit cover?",
        answer:
          "It should cover buyer authentication, company/location rules, catalog access, price visibility, customer account behavior, cart and checkout handoff, search/filter behavior, analytics, and launch QA.",
      },
    ],
  },
  "hydrogen-deployment-checklist-oxygen-preview-production-qa": {
    summary: [
      "Hydrogen launch QA should prove that the production storefront behaves correctly, not only that the code builds. Oxygen previews, environment variables, domain routing, robots, sitemap, analytics, app integrations, caching, and rollback all need explicit checks.",
      "The safest launch plan separates preview validation from production verification. Preview proves the build and flows; production verification proves the real domain, crawler surface, tracking, redirects, and customer-facing behavior.",
    ],
    takeaways: [
      {
        label: "Launch rule",
        value:
          "Do not treat a passing build as launch readiness. Validate storefront behavior, crawler output, tracking, redirects, and rollback.",
      },
      {
        label: "Oxygen risk",
        value:
          "Environment drift between preview and production can break API tokens, content sources, analytics, or robots behavior at the worst moment.",
      },
      {
        label: "QA output",
        value:
          "Use a launch checklist with owner, evidence URL, pass/fail state, severity, and rollback decision.",
      },
    ],
    sections: [
      {
        title: "Separate preview QA from production QA",
        body: [
          "Preview QA should prove that the release candidate renders routes, loads data, supports purchase-path flows, and behaves correctly across devices. Production QA should prove the live domain, DNS, redirects, robots, sitemap, analytics, and cache behavior after the cutover.",
          "Both phases matter. Preview can pass while production fails because environment variables, domain rules, robots settings, or third-party callbacks differ.",
        ],
      },
      {
        title: "Oxygen environment checks",
        bullets: [
          "Storefront API tokens and public env vars are set for the correct environment.",
          "CMS, search, analytics, consent, and app endpoints point at production-safe systems.",
          "Preview domains are not accidentally indexed.",
          "Production robots, sitemap, canonical URLs, and open graph URLs use the final domain.",
        ],
      },
      {
        title: "Production launch sequence",
        ordered: [
          "Build and test the release branch.",
          "Validate Oxygen preview flows with production-like data.",
          "Confirm environment variables, domains, redirects, sitemap, robots, and analytics.",
          "Cut over production when rollback ownership is clear.",
          "Verify live HTML, browser behavior, tracking, redirects, Search Console signals, and support channels.",
        ],
      },
      {
        title: "Rollback should be boring",
        body: [
          "A launch plan is incomplete until rollback is explicit. The team should know which deploy to revert to, who can make the call, which data changes are reversible, and which post-launch checks decide whether the release stays live.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a successful Oxygen deployment enough for launch?",
        answer:
          "No. Deployment only proves that code shipped. Launch readiness requires live route checks, environment validation, app behavior, tracking, sitemap, robots, redirects, cache behavior, and rollback clarity.",
      },
      {
        question: "What should be checked only on production?",
        answer:
          "Check the final domain, canonical URLs, robots.txt, sitemap, redirects, checkout handoff, analytics collection, Search Console visibility, and any third-party callback that depends on the live hostname.",
      },
      {
        question: "How should a Hydrogen launch checklist be documented?",
        answer:
          "Each item should have an owner, expected result, evidence link or command, status, severity, and rollback implication. That makes launch decisions visible instead of relying on memory.",
      },
    ],
  },
  "shopify-hydrogen-markets-i18n-seo": {
    summary: [
      "International Hydrogen work is a routing, pricing, content, and cache problem at the same time. Markets, locale URLs, currency, hreflang, product availability, translated content, and canonical behavior must agree across the rendered page.",
      "The failure mode is subtle: the page loads, but crawlers see mixed-language metadata, wrong currency, stale market data, duplicated canonicals, or hreflang that points to routes with different commercial state.",
    ],
    takeaways: [
      {
        label: "Core decision",
        value:
          "Choose the locale URL model before building templates, because it affects routing, canonicals, hreflang, sitemap, caching, and analytics.",
      },
      {
        label: "Commerce risk",
        value:
          "Language, market, currency, availability, and price must be tested together. SEO correctness and buyer trust depend on the same state.",
      },
      {
        label: "Launch gate",
        value:
          "Verify rendered HTML, hreflang pairs, sitemap entries, market context, and checkout handoff for each launch locale.",
      },
    ],
    sections: [
      {
        title: "Markets and i18n need one source of truth",
        body: [
          "A Hydrogen storefront can render localized routes, but the team must decide how locale, market, currency, language, and availability are resolved. If those rules live in scattered components, the storefront becomes hard to cache and harder to debug.",
          "The source of truth should be clear enough that a developer can explain what happens when a shopper lands on a country-specific URL, changes language, changes currency, or opens a product unavailable in that market.",
        ],
      },
      {
        title: "International SEO checks",
        bullets: [
          "Locale URLs are stable and match the sitemap.",
          "Canonical URLs do not collapse distinct localized pages that should be indexed separately.",
          "Hreflang references return indexable, equivalent pages.",
          "Titles, descriptions, headings, product copy, schema, and open graph content match the page language.",
          "Currency, availability, shipping, duties, and policy copy match the market context.",
        ],
      },
      {
        title: "Caching and personalization boundaries",
        body: [
          "Market and locale data often touches caches. A cache key that ignores market state can leak the wrong currency or availability. A page that over-personalizes by geolocation can make crawler behavior unpredictable.",
          "Prefer explicit route and market rules over hidden browser guesses for SEO-critical pages. Let shoppers change region, but keep indexable URLs stable and understandable.",
        ],
      },
      {
        title: "Launch sequence for a new market",
        ordered: [
          "Define locale URL structure and market resolution rules.",
          "Map translated content, product availability, pricing, currency, and policy differences.",
          "Validate canonical, hreflang, sitemap, schema, and internal links.",
          "Run browser QA and checkout handoff for each market.",
          "Monitor indexing, crawl, and conversion signals after launch.",
        ],
      },
    ],
    faq: [
      {
        question: "Should Hydrogen use subfolders, subdomains, or country domains for i18n?",
        answer:
          "There is no universal answer. The right model depends on brand, markets, operational ownership, SEO history, and technical complexity. The important rule is consistency across routing, canonicals, hreflang, sitemap, and market context.",
      },
      {
        question: "What breaks international SEO in Hydrogen?",
        answer:
          "Common issues include mixed-language metadata, wrong canonicals, incomplete hreflang, missing localized sitemap URLs, client-only locale switching, stale cache keys, and product schema that does not match local price or availability.",
      },
      {
        question: "How should Markets be tested before launch?",
        answer:
          "Test each locale and market as a full shopper path: landing page, collection, product, search, filters, cart, checkout handoff, currency, policies, structured data, sitemap, and analytics.",
      },
    ],
  },
  "shopify-hydrogen-search-filters-product-discovery": {
    summary: [
      "Search and filtering in Hydrogen is a product-discovery architecture decision. Large catalogs need reliable indexing, crawlable collection routes, useful filters, merchandising rules, analytics, and performance budgets that survive real shopper behavior.",
      "Algolia or another search platform can help, but it does not decide the architecture by itself. The team still needs to decide which data is indexed, which filters are SEO-safe, which pages are crawlable, and how product discovery is measured.",
    ],
    takeaways: [
      {
        label: "Best fit",
        value:
          "Use custom discovery architecture when default collection behavior cannot support catalog size, filter complexity, merchandising, or search relevance.",
      },
      {
        label: "SEO risk",
        value:
          "Faceted URLs can create crawl waste and duplicates unless canonical, noindex, internal linking, and sitemap rules are intentional.",
      },
      {
        label: "Measurement",
        value:
          "Track search terms, zero-result queries, filter usage, sort changes, collection exits, and add-to-cart after discovery interactions.",
      },
    ],
    sections: [
      {
        title: "Design discovery around shopper decisions",
        body: [
          "Filters should reflect how buyers narrow choices, not only how product data happens to be stored. Size, fit, material, compatibility, use case, availability, price, and collection intent may matter more than a generic vendor or tag list.",
          "A Hydrogen implementation gives the team freedom to model discovery well. That freedom should be used to make product finding faster, not to expose every possible facet.",
        ],
      },
      {
        title: "Search platform responsibilities",
        bullets: [
          "Index the product fields shoppers actually search and compare.",
          "Keep inventory, price, variants, and merchandising state fresh enough for the buying path.",
          "Handle synonyms, redirects, no-result fallbacks, and promoted results intentionally.",
          "Expose analytics that help merchants improve product names, tags, content, and collections.",
        ],
      },
      {
        title: "Faceted SEO rules",
        body: [
          "Some filtered pages deserve crawlable URLs because they match real search demand. Many do not. The architecture should decide which filter combinations are indexable, which canonicalize to a parent, and which remain shopper-only interactions.",
          "This is especially important for large catalogs. Without rules, Hydrogen can generate fast pages that still create duplicate, thin, or low-value crawl surfaces.",
        ],
      },
      {
        title: "Discovery QA checklist",
        ordered: [
          "Search returns relevant products for common, long-tail, typo, and zero-result queries.",
          "Filters update results, URL state, accessibility labels, and analytics correctly.",
          "Crawlable collection pages render headings, copy, product links, and pagination in HTML.",
          "Canonical and noindex behavior matches the indexation plan.",
          "Sort, pagination, and cache behavior stay stable across desktop and mobile.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Hydrogen include search and filters out of the box?",
        answer:
          "Hydrogen gives developers the storefront foundation, but product discovery still needs architecture. The team must decide data source, index strategy, filter model, URL behavior, SEO rules, UI state, and analytics.",
      },
      {
        question: "When should a store use Algolia or another search platform?",
        answer:
          "A search platform becomes useful when catalog size, typo tolerance, synonyms, merchandising, ranking, analytics, or speed requirements exceed what the current Shopify collection and search setup can support.",
      },
      {
        question: "Should filtered collection pages be indexed?",
        answer:
          "Only selected filtered pages should be indexable. Choose combinations with real search demand and unique value. Canonicalize, noindex, or keep other combinations as shopper-only states to avoid crawl waste.",
      },
    ],
  },
  "shopify-hydrogen-seo-checklist": {
    summary: [
      "Hydrogen SEO is production QA. The page must render useful HTML, expose accurate metadata and schema, use intentional canonical and sitemap rules, preserve internal links, and behave correctly on the live domain after deployment.",
      "The checklist should be used before launch, during migration, and after production cutover. Source inspection is not enough; fetch the live HTML, open the route in a browser, validate structured data, and monitor Search Console signals after the release.",
    ],
    takeaways: [
      {
        label: "Priority",
        value:
          "Protect rendered product and collection content, canonicals, redirects, structured data, sitemap, robots, and internal links before polishing secondary SEO details.",
      },
      {
        label: "Common miss",
        value:
          "A Hydrogen page can look correct in the browser while HTML, schema, canonical, or sitemap output is wrong for crawlers.",
      },
      {
        label: "Audit output",
        value:
          "Use route-level findings with evidence, severity, owner, expected fix, and whether the issue blocks launch.",
      },
    ],
    sections: [
      {
        title: "Rendered HTML is the first checkpoint",
        body: [
          "Product titles, product descriptions, buying guidance, collection copy, breadcrumbs, product links, and pagination should be present in the HTML when they carry search value. Client-only enhancements are fine, but they should not be the only place important commerce content exists.",
          "This is where many Hydrogen SEO issues become visible. A beautiful PDP can still be weak if crawlers receive thin HTML and most useful content appears only after hydration.",
        ],
      },
      {
        title: "Structured data must match the visible page",
        bullets: [
          "Product schema should match visible title, image, price, currency, availability, variant, and brand state.",
          "Breadcrumb schema should match the visible route hierarchy.",
          "Article, FAQ, Organization, and Person schema should be used only where the visible content supports it.",
          "Generated schema should not invent reviews, ratings, prices, offers, or business facts.",
        ],
      },
      {
        title: "Migration-specific SEO checks",
        ordered: [
          "Map old URLs to new URLs and test redirects on production.",
          "Confirm canonical URLs use the final production domain.",
          "Verify sitemap includes only public canonical URLs.",
          "Check robots.txt after launch, not only preview.",
          "Compare Search Console coverage, canonical selection, crawl errors, and indexed URLs after cutover.",
        ],
      },
      {
        title: "AI and LLM discoverability",
        body: [
          "Hydrogen SEO now overlaps with AI discoverability. Clear headings, self-contained answer blocks, source-backed claims, schema, sitemap, and llms.txt help crawlers and answer engines understand what the page can be cited for.",
          "That does not mean writing for bots first. It means making the page precise enough that a human buyer, a search engine, and an AI answer system all understand the same facts.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Hydrogen bad for SEO?",
        answer:
          "No. Hydrogen can be strong for SEO when rendered content, metadata, canonicals, redirects, structured data, sitemap, robots, internal links, and performance are implemented and verified on production.",
      },
      {
        question: "What is the first thing to check on a Hydrogen SEO audit?",
        answer:
          "Fetch the rendered HTML and compare it with what users see in the browser. If important product, collection, or guide content is missing from HTML, fix that before deeper optimization.",
      },
      {
        question: "How should SEO be validated after launch?",
        answer:
          "Check live HTML, browser behavior, structured data, sitemap, robots.txt, redirects, canonical URLs, internal links, analytics, and Search Console signals. Keep a post-launch window for crawl and indexing follow-up.",
      },
    ],
  },
} satisfies Record<TrafficGapSlug, ArticleQualityRefresh>;

export const TRAFFIC_GAP_ARTICLES = TRAFFIC_GAP_ARTICLE_DRAFTS.map((article) => {
  const refresh = ARTICLE_REFRESHES[article.slug];

  return {
    ...article,
    updatedAt: REFRESH_DATE,
    summary: refresh.summary,
    takeaways: refresh.takeaways,
    sections: [...article.sections, ...refresh.sections],
    faq: refresh.faq,
  };
}) satisfies readonly Article[];
