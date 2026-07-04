import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
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
} as const satisfies Article;

export const refresh = {
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
} satisfies ArticleQualityRefresh;
