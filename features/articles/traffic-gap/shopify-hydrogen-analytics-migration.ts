import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
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
} as const satisfies Article;

export const refresh = {
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
} satisfies ArticleQualityRefresh;
