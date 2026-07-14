import { cache } from "react";

import { TRAFFIC_GAP_ARTICLES } from "../features/articles/traffic-gap";
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

export interface ArticleComparisonTable {
  caption: string;
  columns: readonly [string, string, string, string];
  rows: readonly {
    label: string;
    values: readonly [string, string, string];
  }[];
}

export interface ArticleSection {
  title: string;
  body?: readonly string[];
  bullets?: readonly string[];
  ordered?: readonly string[];
  comparison?: ArticleComparisonTable;
}

export interface ArticleTakeaway {
  label: string;
  value: string;
}

export interface ArticleFaq {
  question: string;
  answer: string;
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
  summary?: readonly string[];
  takeaways?: readonly ArticleTakeaway[];
  sections: readonly ArticleSection[];
  faq?: readonly ArticleFaq[];
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
      "How to hire a Shopify Hydrogen developer: proof checks, senior ownership, SEO judgment, and when an audit should come before a rebuild.",
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
    title: "Shopify Hydrogen Developer vs Agency: How to Decide",
    slug: "shopify-hydrogen-developer-vs-agency",
    description:
      "A scope-based decision guide for choosing between a senior Shopify Hydrogen specialist and a full agency.",
    category: "Decision Guide",
    status: "scheduled",
    publishAt: "2026-05-11T10:00:00+03:00",
    updatedAt: "2026-07-14T10:00:00+03:00",
    author: OWNER.name,
    metaTitle: "Shopify Hydrogen Developer vs Agency: How to Decide",
    metaDescription:
      "Compare a senior Shopify Hydrogen developer with a full agency: scope, ownership, and risk — plus a decision checklist before you buy capacity.",
    h1: "Shopify Hydrogen developer vs. agency: how to decide",
    intro: [
      "If the scope is already technical and defined, and you want direct execution, a senior Shopify Hydrogen specialist is usually the better fit. If the work combines brand strategy, UX, content, project management, and QA across several stakeholders, an agency is usually the better fit.",
      "Start with a scope review when ownership is unclear. The right answer may also be a focused audit, a stronger Liquid path, or no rebuild rather than either delivery model.",
    ],
    summary: [
      "Choose the delivery model by the work that must be coordinated, not by the vendor label. Defined technical outcomes favor direct senior ownership; a broad cross-functional program favors an agency built to coordinate those disciplines.",
      "Before buying capacity, name who owns requirements, stakeholder decisions, migration checks, QA, and the storefront after launch. If those answers are not clear, review scope before choosing a developer or agency.",
    ],
    takeaways: [
      {
        label: "Defined technical scope",
        value: "Favor direct senior specialist execution when the work and acceptance checks are already clear.",
      },
      {
        label: "Broad delivery program",
        value: "Favor an agency when brand, UX, content, delivery management, engineering, and QA must move together.",
      },
      {
        label: "Unclear ownership",
        value: "Run a scope review first, with Liquid improvement and no rebuild still available as valid outcomes.",
      },
    ],
    sections: [
      {
        title: "Choose by scope, not by vendor label",
        body: [
          "A senior specialist and an agency can both deliver useful Hydrogen work. The decision turns on what has to be coordinated, where decision rights sit, and who will own the storefront after launch.",
          "This guide is for choosing that delivery model. If the decision is already to hire a developer, use the dedicated hiring guide to evaluate proof, technical judgment, and working fit rather than stretching this comparison into a candidate checklist.",
        ],
      },
      {
        title: "Senior specialist vs. agency: the practical comparison",
        body: [
          "Use this table as a scope filter, not a claim that one model is universally better. The stronger choice is the one whose ownership model matches the work in front of the buyer.",
        ],
        comparison: {
          caption:
            "Comparison of a senior Shopify Hydrogen specialist and an agency across seven buyer decision factors.",
          columns: ["Decision factor", "Senior specialist", "Agency", "Scope question"],
          rows: [
            {
              label: "Technical scope clarity",
              values: [
                "Stronger fit when outcomes, dependencies, and acceptance checks can be defined as focused technical work.",
                "Stronger fit when discovery must turn a broad commercial brief into coordinated creative and technical scope.",
                "Can the technical work be accepted without a wider brand or content program?",
              ],
            },
            {
              label: "Brand, UX, and content needs",
              values: [
                "Fits when the direction and assets already exist, are supplied by the buyer, or sit outside the engagement.",
                "Fits when brand strategy, UX research and design, copy, and content production need one coordinated program.",
                "Is storefront engineering the main work or one workstream inside a broader change?",
              ],
            },
            {
              label: "Delivery ownership",
              values: [
                "A named senior technical owner stays close to the risk, decisions, and implementation.",
                "Ownership is coordinated across disciplines, with delivery management connecting the workstreams.",
                "Do you need direct technical accountability or bundled cross-functional delivery?",
              ],
            },
            {
              label: "Stakeholder and project management",
              values: [
                "Fits when the buyer has a decisive owner and can coordinate internal approvals and inputs.",
                "Fits when several stakeholder groups need discovery, sequencing, reporting, and approval management.",
                "Who resolves conflicting requirements and keeps decisions moving?",
              ],
            },
            {
              label: "Post-launch ownership",
              values: [
                "Works when a named internal owner, scoped support path, or documented handoff will manage releases and changes.",
                "Works when the buyer wants an ongoing managed program across technical, creative, content, and QA needs.",
                "Who owns incidents, releases, merchant requests, and the roadmap after launch?",
              ],
            },
            {
              label: "SEO migration and canonical risk",
              values: [
                "Fits when route inventory, redirects, canonical rules, rendered content, schema, sitemap, and launch checks can stay close to implementation.",
                "Fits when those technical checks also depend on a large content inventory, editorial migration, and multi-discipline QA.",
                "Who owns the migration checklist and sign-off for this store's actual route and content scope?",
              ],
            },
            {
              label: "Commercial engagement shape",
              values: [
                "Usually a focused audit, implementation scope, cleanup, migration segment, or ongoing specialist support.",
                "Usually a broader discovery and delivery program that coordinates several disciplines.",
                "Are you buying direct judgment and execution or coordinated program capacity?",
              ],
            },
          ],
        },
      },
      {
        title: "When direct senior execution is the better buy",
        body: [
          "A senior specialist is not automatically the cheaper or safer choice. The model works best when the buyer can keep the brief focused and give the technical owner the inputs and decisions needed to execute.",
        ],
        bullets: [
          "Requirements can be written as technical outcomes, dependencies, and acceptance criteria.",
          "Brand, UX, and content inputs already exist or are explicitly outside the engagement.",
          "A buyer-side owner can make decisions and coordinate internal stakeholders.",
          "Direct access to the person making technical decisions matters more than bundled capacity.",
          "Post-launch support or handoff ownership can be named before work begins.",
          "The specialist can still recommend Liquid improvement, an audit, or no rebuild when that is safer.",
        ],
      },
      {
        title: "When the agency path is honestly better",
        body: [
          "An agency is the stronger fit when the storefront is one part of a larger program and the buyer needs the delivery model to coordinate that breadth. This is a valid requirement, not a failure to keep scope lean.",
        ],
        bullets: [
          "Brand positioning, research, UX, content production, engineering, and QA need to move as one program.",
          "Several stakeholder groups need workshops, sequencing, approvals, and reporting.",
          "Cross-functional coordination is as important as the storefront implementation itself.",
          "QA and launch readiness extend beyond code into creative, content, and operational workstreams.",
          "The desired post-launch model includes managed creative, content, or roadmap work alongside engineering.",
        ],
      },
      {
        title: "When Liquid improvement or no rebuild is safer",
        body: [
          "The developer-versus-agency question is premature if a custom storefront is not the right investment. Keep improving Liquid, or pause the rebuild, when the business problem can be solved without taking on a separate storefront application.",
        ],
        bullets: [
          "The required merchandising, content, and buyer experience can still be delivered safely in the current theme architecture.",
          "The main constraint is unclear positioning, content, operations, or decision-making rather than a storefront capability ceiling.",
          "No internal owner or funded support path can maintain releases, integrations, analytics, and incidents after launch.",
          "SEO migration risk, content migration work, or integration uncertainty is larger than the confirmed commercial upside.",
          "A focused audit or contained theme improvement can test the business case before a custom Hydrogen rebuild is purchased.",
        ],
      },
      {
        title: "Treat implementation risk as scope, not a vendor promise",
        body: [
          "Hydrogen does not make these areas fail by default, and an agency label does not make them safe by default. Their importance varies with the route map, catalog, integrations, content, analytics requirements, and operating model of the project.",
          "Put SEO and canonical decisions, Storefront API data, cart and checkout handoff, analytics and consent, launch QA, and post-launch ownership into the scope with named acceptance checks. One specialist may own the technical path, or an agency may coordinate several owners; either way, responsibility should be explicit.",
        ],
      },
      {
        title: "Can one senior developer handle a Hydrogen migration?",
        body: [
          "Sometimes. A senior developer can own a bounded migration when brand and content direction already exist, requirements and integrations can be enumerated, the buyer supplies a decision-maker, and the QA and launch plan match the workload. That is a scope judgment, not a guarantee created by a job title.",
          "An agency is usually stronger when the same migration also requires brand discovery, a new UX system, extensive content production, formal stakeholder management, and broad cross-functional QA. Do not give one person a cross-functional program and then judge the delivery model only by its schedule.",
        ],
      },
      {
        title: "Buyer decision checklist: seven questions before you choose",
        ordered: [
          "Can we describe the required technical outcomes, dependencies, and acceptance criteria?",
          "Are brand strategy, UX research or design, copy, and content production part of this engagement?",
          "Who is empowered to resolve scope questions and conflicting stakeholder requirements?",
          "Who owns route inventory, redirects, canonical rules, rendered content, schema, sitemap, and launch sign-off?",
          "Which Storefront API, cart and checkout, integration, analytics, and consent paths must be tested for this scope?",
          "Who owns code, releases, incident response, and merchant change requests after launch?",
          "If a review shows that Liquid improvement or no rebuild is safer, will the delivery partner recommend it?",
        ],
      },
      {
        title: "A safer buying sequence",
        body: [
          "Request a scope review before buying a large block of capacity. The useful input is the current store, the commercial pressure behind the work, the disciplines already covered internally, and the ownership model expected after launch.",
        ],
        ordered: [
          "Separate the business decision and risk review from the amount of delivery capacity being sold.",
          "Name owners for technical implementation, creative and content inputs, stakeholder decisions, migration QA, and post-launch support.",
          "Choose direct specialist delivery, a broader agency program, a focused audit, a Liquid improvement, or no rebuild.",
          "Document what is included, what is excluded, and which acceptance checks decide when the work is complete.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I hire a Shopify Hydrogen developer or an agency?",
        answer:
          "Choose a senior Shopify Hydrogen specialist when the technical scope is defined and you want direct execution. Choose an agency when brand, UX, content, project management, engineering, and QA need coordinated delivery. If ownership is still unclear, start with a scope review.",
      },
      {
        question: "When is an agency the better choice for Hydrogen work?",
        answer:
          "An agency is usually the better choice when the storefront sits inside a broad brand or commerce program, several stakeholder groups need active management, and creative, content, technical, and QA workstreams must move together.",
      },
      {
        question: "Can one senior Shopify Hydrogen developer handle a migration?",
        answer:
          "Yes, when the migration is bounded, brand and content direction already exist, integrations and acceptance checks can be listed, and the buyer provides timely decisions. A broader agency model is safer when the same migration also includes extensive discovery, creative, content production, stakeholder management, and cross-functional QA.",
      },
      {
        question: "Who should own support after launch?",
        answer:
          "Name the owner before implementation starts. It can be an internal team, a senior specialist under a support scope, or an agency, but responsibility for releases, incidents, analytics checks, merchant requests, and the roadmap should be explicit in the engagement.",
      },
    ],
    conclusion:
      "Request a scope review before buying capacity. Share the current store, the outcome that must change, which brand and content inputs already exist, and who will own the storefront after launch; the next step can be a senior specialist, an agency brief, an audit, a Liquid improvement, or no rebuild.",
    links: [
      { href: "/shopify-hydrogen-developer", label: "Explore direct senior Hydrogen implementation" },
      { href: "/shopify-hydrogen-agency", label: "Shopify Hydrogen agency alternative" },
      {
        href: "/articles/how-to-hire-shopify-hydrogen-developer",
        label: "Use the Hydrogen developer hiring checklist",
      },
      { href: "/shopify-hydrogen-audit", label: "Review Hydrogen scope and risk" },
      { href: "/case-studies", label: "See Production Proof" },
      { href: "/contact#fit-review-form", label: "Request a delivery-model scope review" },
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
      "How to evaluate Shopify Hydrogen experts by production work, SEO-safe migration, Storefront API depth, maintenance judgment, and fit decisions.",
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
