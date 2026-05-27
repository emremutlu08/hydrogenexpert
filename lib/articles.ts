import { cache } from "react";

import { TRAFFIC_GAP_ARTICLES } from "../features/articles/traffic-gap-articles";
import { OWNER } from "./site";

export const ARTICLE_CATEGORIES = [
  "Hiring",
  "Evaluation",
  "Cost",
  "Migration",
  "SEO",
  "Decision Guide",
  "CMS",
  "Analytics",
  "AI Commerce",
  "B2B",
  "Launch",
  "International",
  "Product Discovery",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];
export type ArticleStatus = "draft" | "scheduled" | "published";

export interface ArticleLink {
  href: string;
  label: string;
  note?: string;
  external?: boolean;
}

export interface ArticleSection {
  title: string;
  body?: readonly string[];
  bullets?: readonly string[];
  ordered?: readonly string[];
}

export interface Article {
  title: string;
  slug: string;
  description: string;
  category: ArticleCategory;
  status: ArticleStatus;
  publishAt: string;
  updatedAt: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: readonly string[];
  sections: readonly ArticleSection[];
  conclusion: string;
  links: readonly ArticleLink[];
  sources?: readonly ArticleLink[];
}

const ARTICLES = [
  ...TRAFFIC_GAP_ARTICLES,
  {
    title: "How to Hire a Shopify Hydrogen Developer",
    slug: "how-to-hire-shopify-hydrogen-developer",
    description:
      "A practical guide for Shopify Plus and growth-stage brands hiring a Hydrogen developer.",
    category: "Hiring",
    status: "scheduled",
    publishAt: "2026-05-08T10:00:00+03:00",
    updatedAt: "2026-05-08T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "How to Hire a Shopify Hydrogen Developer | HydrogenExpert",
    metaDescription:
      "A practical guide for Shopify Plus and growth-stage brands hiring a Hydrogen developer: what to check, what senior ownership covers, and when an audit is safer than a rebuild.",
    h1: "How to hire a Shopify Hydrogen developer",
    intro: [
      "Hiring a Shopify Hydrogen developer is not the same as hiring someone for theme edits. Hydrogen work sits closer to application engineering: React, routing, Storefront API data, SEO, cart behavior, analytics, deployment, and launch QA all touch the same storefront.",
    ],
    sections: [
      {
        title: "When hiring a Hydrogen developer makes sense",
        bullets: [
          "Theme limits are blocking UX or merchandising.",
          "Storefront API and custom product flows matter.",
          "SEO-safe migration is required.",
          "Cart and checkout handoff need care.",
          "The team has budget and maintenance ownership.",
        ],
      },
      {
        title: "What a senior Shopify Hydrogen developer should own",
        bullets: [
          "Route architecture and data loading.",
          "Product and collection Storefront API query shape.",
          "Server-rendered product content, metadata, and canonical behavior.",
          "Cart, checkout handoff, analytics, consent behavior, performance, and launch QA.",
        ],
      },
      {
        title: "What to ask before hiring",
        bullets: [
          "Have they shipped production Hydrogen storefronts?",
          "Can they explain Liquid vs Hydrogen tradeoffs?",
          "Can they show how SEO is protected?",
          "Can they work with Storefront API constraints?",
          "Can they say no when Hydrogen is not justified?",
        ],
      },
      {
        title: "Developer, agency, or audit?",
        body: [
          "A senior developer is best when scope is clear and senior execution is needed. An agency can be useful when the project needs broad design, copy, QA, project management, and multiple disciplines. An audit is safest before a large rebuild decision when the risk, budget, or business case is still unclear.",
        ],
      },
      {
        title: "Red flags",
        bullets: [
          "They pitch Hydrogen for every store.",
          "They ignore maintenance cost.",
          "They treat SEO as a post-launch task.",
          "They cannot explain checkout handoff.",
          "They only talk about React, not commerce.",
        ],
      },
    ],
    conclusion:
      "If you are deciding whether to hire a Shopify Hydrogen developer, start with a direct scope review before rebuild budget moves.",
    links: [
      { href: "/shopify-hydrogen-developer", label: "Hire a Shopify Hydrogen Developer" },
      { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/shopify-hydrogen-cost", label: "Review Hydrogen cost ranges" },
      { href: "/contact", label: "Request Scope Review" },
    ],
  },
  {
    title: "Shopify Hydrogen Developer vs Shopify Agency",
    slug: "shopify-hydrogen-developer-vs-agency",
    description:
      "A practical comparison of hiring a senior Shopify Hydrogen developer versus a Shopify agency.",
    category: "Hiring",
    status: "scheduled",
    publishAt: "2026-05-11T10:00:00+03:00",
    updatedAt: "2026-05-11T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Developer vs Agency | Which Should You Hire?",
    metaDescription:
      "A practical comparison of hiring a senior Shopify Hydrogen developer versus a Shopify agency for custom storefront builds, migrations, audits, and support.",
    h1: "Shopify Hydrogen developer vs Shopify agency: which should you hire?",
    intro: [
      "The safer buying path depends on ownership. Hydrogen work can be a focused senior implementation problem, or it can be one part of a broader brand, UX, content, and delivery program.",
    ],
    sections: [
      {
        title: "The real question is ownership, not job title",
        body: [
          "A developer and an agency can both be good choices. The issue is whether the project needs direct technical execution, broader team capacity, or a risk review before anyone estimates a rebuild.",
        ],
      },
      {
        title: "When a senior Hydrogen developer is the better fit",
        bullets: [
          "Scope is technical and clear.",
          "You want direct execution.",
          "You need audit, implementation, or cleanup without a large agency layer.",
          "You need someone who can say Liquid is enough.",
        ],
      },
      {
        title: "When an agency is the better fit",
        bullets: [
          "You need brand strategy, UX design, copy, project management, QA, and development as one package.",
          "Multiple stakeholder groups need management.",
          "The scope is broad and cross-functional.",
        ],
      },
      {
        title: "Where Hydrogen work gets risky",
        bullets: [
          "SEO migration, route behavior, and canonical decisions.",
          "Storefront API data, cart and checkout handoff, and analytics.",
          "Post-launch ownership after the first release is live.",
        ],
      },
      {
        title: "A safer decision path",
        ordered: [
          "Run a fit review.",
          "Audit the risk.",
          "Decide developer vs agency after scope is clear.",
        ],
      },
    ],
    conclusion:
      "The best choice is the one that matches the real scope. If the work is not clear yet, clarify risk before buying capacity.",
    links: [
      { href: "/shopify-hydrogen-developer", label: "Hire a Shopify Hydrogen Developer" },
      { href: "/shopify-hydrogen-agency", label: "Shopify Hydrogen agency alternative" },
      { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/contact", label: "Request Scope Review" },
    ],
  },
  {
    title: "What Experienced Shopify Hydrogen Developers Should Own",
    slug: "experienced-shopify-hydrogen-developers",
    description:
      "A guide to evaluating experienced Shopify Hydrogen developers by architecture, API work, SEO, analytics, cart behavior, and launch safety.",
    category: "Evaluation",
    status: "scheduled",
    publishAt: "2026-05-14T10:00:00+03:00",
    updatedAt: "2026-05-14T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "Experienced Shopify Hydrogen Developers | What They Should Own",
    metaDescription:
      "A guide to evaluating experienced Shopify Hydrogen developers based on route architecture, Storefront API work, SEO, analytics, cart behavior, and launch safety.",
    h1: "What experienced Shopify Hydrogen developers should own",
    intro: [
      "Experience in Hydrogen is not only React experience. The storefront is a commerce application, and senior ownership should cover what shoppers, crawlers, merchants, and operators all touch.",
    ],
    sections: [
      { title: "Experience is more than React", body: ["React is only one layer. The useful test is whether the developer can connect UI decisions to commerce data, SEO, analytics, cart behavior, and maintainability."] },
      { title: "Route and data ownership", body: ["Experienced developers should know how routes load product, collection, content, and merchant data without turning every page into a fragile client-only surface."] },
      { title: "Storefront API judgment", body: ["They should shape queries around what the page actually needs, understand API constraints, and avoid making product data harder to cache, debug, or maintain."] },
      { title: "SEO and canonical discipline", body: ["Hydrogen SEO needs consistent URLs, metadata, rendered content, structured data, and sitemap behavior before launch, not after traffic drops."] },
      { title: "Cart, checkout handoff, and analytics", body: ["Cart logic, Shopify checkout handoff, consent behavior, and analytics events sit close together. Senior ownership keeps those paths testable."] },
      { title: "Performance after launch", body: ["The work does not end when the storefront compiles. Production performance depends on data loading, media strategy, route shape, and QA after real content is connected."] },
      { title: "Maintenance and merchant reality", body: ["A custom storefront is only valuable if the team can keep improving it. Experienced developers should reduce avoidable custom complexity."] },
      { title: "How to evaluate real production experience", body: ["Look for shipped storefronts, case studies, honest tradeoff language, and the ability to explain when Liquid is still the better commercial answer."] },
    ],
    conclusion:
      "Experienced Hydrogen developers should protect the storefront as a system, not just complete tickets in a React codebase.",
    links: [
      { href: "/shopify-hydrogen-developer", label: "Hire a Shopify Hydrogen Developer" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/shopify-hydrogen-seo", label: "Review Hydrogen SEO" },
      { href: "/shopify-hydrogen-maintenance-cost", label: "Understand maintenance cost" },
      { href: "/contact", label: "Request Scope Review" },
    ],
  },
  {
    title: "Shopify Hydrogen Experts: How to Evaluate Real Production Experience",
    slug: "shopify-hydrogen-experts-production-experience",
    description:
      "How to evaluate Shopify Hydrogen experts before hiring based on production work, SEO, Storefront API, maintenance judgment, and honest fit decisions.",
    category: "Evaluation",
    status: "published",
    publishAt: "2026-05-15T10:00:00+03:00",
    updatedAt: "2026-05-15T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Experts | How to Evaluate Production Experience",
    metaDescription:
      "How to evaluate Shopify Hydrogen experts before hiring: production storefronts, SEO-safe migration, Storefront API experience, maintenance judgment, and honest fit decisions.",
    h1: "Shopify Hydrogen experts: how to evaluate real production experience",
    intro: [
      "Expert is easy to claim. Production experience is harder to fake because it has to survive real catalog data, launch timing, SEO constraints, merchant changes, and post-launch maintenance.",
    ],
    sections: [
      { title: "Why expert is easy to claim and hard to prove", body: ["Hydrogen is still specialized enough that many sales pages sound similar. The useful proof is not vocabulary. It is shipped work and clear judgment."] },
      { title: "Look for shipped production storefronts", body: ["A real storefront forces decisions around routing, product data, cart behavior, analytics, SEO, and QA that demos do not expose."] },
      { title: "Ask how they handle Liquid vs Hydrogen decisions", body: ["A trustworthy expert can explain when Hydrogen is justified and when a stronger Liquid path is cheaper, safer, and more maintainable."] },
      { title: "Check SEO, routing, and Storefront API depth", body: ["Ask how they protect URLs, rendered product content, structured data, canonical behavior, and Storefront API query shape before launch."] },
      { title: "Look for maintenance judgment, not just launch energy", body: ["The first launch is only the beginning. Good Hydrogen work keeps the custom application understandable after the excitement fades."] },
      {
        title: "Proof signals that matter",
        bullets: [
          "Public client feedback.",
          "Real storefront case studies.",
          "Teaching or technical content.",
          "Production-scale implementation details.",
        ],
      },
    ],
    conclusion:
      "Evaluate Shopify Hydrogen expertise by proof, judgment, and maintenance realism before choosing a rebuild path.",
    links: [
      { href: "/", label: "HydrogenExpert" },
      { href: "/shopify-hydrogen-experts", label: "Shopify Hydrogen Experts" },
      { href: "/shopify-hydrogen-developer", label: "Hire a Shopify Hydrogen Developer" },
      { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/contact", label: "Request Scope Review" },
    ],
  },
  {
    title: "Shopify Hydrogen Development Cost: Developer, Agency, or Audit?",
    slug: "shopify-hydrogen-development-cost-developer-agency-audit",
    description:
      "Compare Shopify Hydrogen development cost paths across audit, cleanup, senior support, custom build, agency scope, and migration.",
    category: "Cost",
    status: "scheduled",
    publishAt: "2026-05-20T10:00:00+03:00",
    updatedAt: "2026-05-20T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Development Cost | Developer, Agency, or Audit?",
    metaDescription:
      "Compare Shopify Hydrogen development cost paths: paid audit, focused cleanup, senior developer support, custom build, agency scope, and Plus migration.",
    h1: "Shopify Hydrogen development cost: developer, agency, or audit?",
    intro: [
      "Hydrogen development cost varies because the work can be a focused diagnostic, a cleanup sprint, senior implementation support, a custom storefront build, or a broad agency-led migration.",
    ],
    sections: [
      { title: "Why Hydrogen cost varies so much", body: ["The expensive parts are custom UX, catalog behavior, route preservation, integrations, analytics, SEO risk, QA, and the maintenance model after launch."] },
      { title: "Path 1: Free scope review or paid risk review", body: ["A free first pass is the safest first step when requirements are clear. A paid review is useful only when business case, migration risk, app dependencies, SEO, or budget range is unclear."] },
      { title: "Path 2: Focused cleanup or optimization", body: ["If the storefront is already live or the current theme can still work, cleanup may create more ROI than a rebuild."] },
      { title: "Path 3: Senior Hydrogen developer support", body: ["Direct senior support fits when the scope is clear and the project needs implementation, debugging, Storefront API work, or launch QA."] },
      { title: "Path 4: Custom storefront build", body: ["A custom build is justified when theme constraints block real product discovery, premium UX, or feature velocity."] },
      { title: "Path 5: Full agency or Shopify Plus migration scope", body: ["A broader agency path can make sense when the work needs multiple disciplines, stakeholder management, design, copy, QA, and development together."] },
      { title: "The cheapest bad decision is skipping scope", body: ["A low initial estimate can become the most expensive option if route risk, analytics, app behavior, and maintenance are discovered after implementation starts."] },
    ],
    conclusion:
      "Choose the cost path after the real storefront constraint is named, not before.",
    links: [
      { href: "/shopify-hydrogen-cost", label: "Review Hydrogen cost ranges" },
      { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
      { href: "/shopify-hydrogen-developer", label: "Hire a Shopify Hydrogen Developer" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/contact", label: "Request Scope Review" },
    ],
  },
] as const satisfies readonly Article[];

export function getAllArticles(): readonly Article[] {
  return ARTICLES;
}

export function isArticlePublic(article: Article, now = new Date()): boolean {
  if (article.status === "published") {
    return true;
  }

  if (article.status !== "scheduled") {
    return false;
  }

  return new Date(article.publishAt).getTime() <= now.getTime();
}

export function getPublicArticlesForDate(now = new Date()): Article[] {
  return ARTICLES.filter((article) => isArticlePublic(article, now)).sort(
    (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime(),
  );
}

export const getPublicArticles = cache(async (): Promise<Article[]> => getPublicArticlesForDate());

export async function getPublicArticleBySlug(slug: string): Promise<Article | null> {
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article || !isArticlePublic(article)) {
    return null;
  }

  return article;
}

export function getPublicArticleBySlugForDate(slug: string, now = new Date()): Article | null {
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article || !isArticlePublic(article, now)) {
    return null;
  }

  return article;
}

export function getPublicArticleSlugsForDate(now = new Date()): string[] {
  return getPublicArticlesForDate(now).map((article) => article.slug);
}
