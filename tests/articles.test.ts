import { describe, expect, it } from "vitest";

import {
  getAllArticles,
  getPublicArticleBySlugForDate,
  getPublicArticleSlugsForDate,
  getPublicArticlesForDate,
} from "../lib/articles";
import { getArticleSourceMetadata } from "../features/content-sources";
import { buildFaqPageSchema } from "../lib/structured-data";

const TRAFFIC_GAP_ARTICLE_SLUGS = [
  "shopify-hydrogen-nextjs",
  "shopify-hydrogen-cms-visual-builder",
  "shopify-apps-in-hydrogen-compatibility-checklist",
  "shopify-hydrogen-analytics-migration",
  "shopify-storefront-mcp-ucp-ai-readiness",
  "shopify-hydrogen-b2b-wholesale-guide",
  "hydrogen-deployment-checklist-oxygen-preview-production-qa",
  "shopify-hydrogen-markets-i18n-seo",
  "shopify-hydrogen-search-filters-product-discovery",
  "shopify-hydrogen-seo-checklist",
] as const;

const TRAFFIC_GAP_REFRESH_DATE = "2026-05-27T23:30:00+03:00";
const SEO_CHECKLIST_REFRESH_DATE = "2026-07-09T10:00:00+03:00";
const SEO_CHECKLIST_SOURCE_LAST_VERIFIED = "2026-07-09";

function getArticleWordCount(article: ReturnType<typeof getAllArticles>[number]) {
  const text = [
    article.title,
    ...article.intro,
    ...(article.summary ?? []),
    ...(article.takeaways ?? []).flatMap((item) => [item.label, item.value]),
    ...article.sections.flatMap((section) => [
      section.title,
      ...(section.body ?? []),
      ...(section.bullets ?? []),
      ...(section.ordered ?? []),
      ...(section.comparison
        ? [
            section.comparison.caption,
            ...section.comparison.columns,
            ...section.comparison.rows.flatMap((row) => [row.label, ...row.values]),
          ]
        : []),
    ]),
    ...(article.faq ?? []).flatMap((item) => [item.question, item.answer]),
    article.conclusion,
  ].join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}

describe("scheduled articles", () => {
  const beforeFirstPublish = new Date("2026-05-06T10:00:00+03:00");
  const afterFirstPublish = new Date("2026-05-08T10:01:00+03:00");

  it("keeps future scheduled articles hidden from public article lists", () => {
    const publicArticles = getPublicArticlesForDate(beforeFirstPublish);
    const publicSlugs = publicArticles.map((article) => article.slug);

    expect(publicSlugs).toContain("shopify-hydrogen-experts-production-experience");
    expect(publicSlugs).not.toContain("how-to-hire-shopify-hydrogen-developer");
    expect(getPublicArticleSlugsForDate(beforeFirstPublish)).toEqual(publicSlugs);
  });

  it("publishes scheduled articles after publishAt", () => {
    const publicArticles = getPublicArticlesForDate(afterFirstPublish);

    expect(publicArticles.map((article) => article.slug)).toContain(
      "how-to-hire-shopify-hydrogen-developer",
    );
  });

  it("returns null for future article direct access before publishAt", () => {
    expect(
      getPublicArticleBySlugForDate("how-to-hire-shopify-hydrogen-developer", beforeFirstPublish),
    ).toBeNull();
  });

  it("keeps article source files separate from Supabase-backed blog posts", () => {
    expect(getAllArticles().every((article) => article.slug.length > 0)).toBe(true);
    expect(getAllArticles().every((article) => ["published", "scheduled"].includes(article.status))).toBe(true);
  });

  it("keeps the developer-vs-agency guide focused on delivery-model decisions", () => {
    const article = getAllArticles().find(
      (item) => item.slug === "shopify-hydrogen-developer-vs-agency",
    );

    expect(article).toBeDefined();
    expect(article?.metaTitle).toBe(
      "Shopify Hydrogen Developer vs Agency: How to Decide",
    );
    expect(article?.metaDescription).toBe(
      "Compare a senior Shopify Hydrogen developer with a full agency: scope, ownership, and risk — plus a decision checklist before you buy capacity.",
    );
    expect(article?.h1).toBe("Shopify Hydrogen developer vs. agency: how to decide");
    expect(article?.intro[0]).toContain("scope is already technical and defined");

    const comparison = article?.sections.find((section) => section.comparison)?.comparison;
    expect(comparison?.rows.map((row) => row.label)).toEqual([
      "Technical scope clarity",
      "Brand, UX, and content needs",
      "Delivery ownership",
      "Stakeholder and project management",
      "Post-launch ownership",
      "SEO migration and canonical risk",
      "Commercial engagement shape",
    ]);

    const checklist = article?.sections.find((section) =>
      section.title.startsWith("Buyer decision checklist"),
    );
    expect(checklist?.ordered?.length).toBeGreaterThanOrEqual(5);
    expect(checklist?.ordered?.length).toBeLessThanOrEqual(7);

    const liquidGuidance = article?.sections.find(
      (section) => section.title === "When Liquid improvement or no rebuild is safer",
    );
    expect(liquidGuidance?.bullets?.length).toBeGreaterThanOrEqual(4);
    expect(liquidGuidance?.body?.[0]).toContain("custom storefront is not the right investment");

    expect(article?.faq?.length).toBeGreaterThanOrEqual(3);
    const faqSchema = buildFaqPageSchema(article?.faq ?? []);
    expect(
      faqSchema.mainEntity.map((entry) => ({
        question: entry.name,
        answer: entry.acceptedAnswer.text,
      })),
    ).toEqual(article?.faq);

    expect(article?.links.map((link) => link.href)).toEqual(
      expect.arrayContaining([
        "/shopify-hydrogen-developer",
        "/shopify-hydrogen-agency",
        "/articles/how-to-hire-shopify-hydrogen-developer",
        "/shopify-hydrogen-audit",
        "/case-studies",
        "/contact#fit-review-form",
      ]),
    );
  });

  it("publishes traffic-gap articles on May 27 with English source references", () => {
    const afterTrafficGapPublish = new Date("2026-05-27T10:01:00+03:00");
    const publicArticles = getPublicArticlesForDate(afterTrafficGapPublish);
    const publicSlugs = publicArticles.map((article) => article.slug);

    for (const slug of TRAFFIC_GAP_ARTICLE_SLUGS) {
      const article = publicArticles.find((item) => item.slug === slug);
      const sourceMetadata = getArticleSourceMetadata(slug);
      const expectedUpdatedAt =
        slug === "shopify-hydrogen-seo-checklist"
          ? SEO_CHECKLIST_REFRESH_DATE
          : TRAFFIC_GAP_REFRESH_DATE;
      const expectedLastVerified =
        slug === "shopify-hydrogen-seo-checklist"
          ? SEO_CHECKLIST_SOURCE_LAST_VERIFIED
          : "2026-05-27";

      expect(publicSlugs).toContain(slug);
      expect(article?.updatedAt).toBe(expectedUpdatedAt);
      expect(article?.summary?.length).toBeGreaterThanOrEqual(2);
      expect(article?.takeaways?.length).toBeGreaterThanOrEqual(3);
      expect(article?.sections.length).toBeGreaterThanOrEqual(8);
      expect(article?.faq?.length).toBeGreaterThanOrEqual(3);
      expect(article ? getArticleWordCount(article) : 0).toBeGreaterThanOrEqual(550);
      expect(article?.sources?.length).toBeGreaterThan(0);
      expect(sourceMetadata?.sourceMap.length).toBeGreaterThan(0);
      expect(sourceMetadata?.lastVerified).toBe(expectedLastVerified);
    }
  });
});
