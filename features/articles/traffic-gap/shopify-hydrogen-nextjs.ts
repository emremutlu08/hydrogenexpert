import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE, scopeReviewLinks } from "./shared";

export const draft = {
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
} as const satisfies Article;

export const refresh = {
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
} satisfies ArticleQualityRefresh;
