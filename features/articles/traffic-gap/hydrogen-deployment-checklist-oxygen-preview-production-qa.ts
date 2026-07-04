import type { Article } from "../../../lib/articles";
import { OWNER } from "../../../lib/site";

import type { ArticleQualityRefresh } from "./shared";
import { PUBLISH_DATE } from "./shared";

export const draft = {
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
} as const satisfies Article;

export const refresh = {
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
} satisfies ArticleQualityRefresh;
