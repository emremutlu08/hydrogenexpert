import { describe, expect, it } from "vitest";

import { getArticleSourceMetadata, type ContentSource } from "../features/content-sources";
import { getRelatedLinksForPath } from "../features/content-relations";
import { getPublicArticleBySlugForDate, getPublicArticlesForDate } from "../lib/articles";
import { buildSitemapEntries } from "../lib/sitemap-entries";

const SLUG = "hydrogen-2026-10-migration";
const PATH = `/articles/${SLUG}`;
const afterPublish = new Date("2026-11-12T00:00:00+03:00");

function articleText() {
  const article = getPublicArticleBySlugForDate(SLUG, afterPublish);

  if (!article) {
    throw new Error(`${PATH} is not public`);
  }

  return JSON.stringify(article);
}

describe("Hydrogen 2026-10 migration article", () => {
  it("is public with SEO metadata inside length limits", () => {
    const article = getPublicArticleBySlugForDate(SLUG, afterPublish);

    expect(article).not.toBeNull();
    expect(article?.category).toBe("Migration");
    expect(article?.metaTitle.length).toBeLessThanOrEqual(60);
    expect(article?.title.length).toBeLessThanOrEqual(60);
    expect(article?.metaDescription.length).toBeLessThanOrEqual(155);
    expect(article?.faq?.length).toBeGreaterThanOrEqual(3);
  });

  it("ends with a soft CTA to the Scope & Risk Review page", () => {
    const article = getPublicArticleBySlugForDate(SLUG, afterPublish);

    expect(article?.links[0]?.href).toBe("/shopify-hydrogen-audit");
    expect(article?.conclusion).toContain("Scope & Risk Review");
  });

  it("cites only the three approved Shopify sources", () => {
    const article = getPublicArticleBySlugForDate(SLUG, afterPublish);
    const metadata = getArticleSourceMetadata(SLUG);

    expect(article?.sources?.map((source) => source.href)).toEqual([
      "https://shopify.dev/changelog/blog/hydrogen-2026-10-is-now-available",
      "https://shopify.dev/docs/storefronts/hydrogen/migrate",
      "https://github.com/Shopify/hydrogen/blob/main/packages/hydrogen/CHANGELOG.md",
    ]);
    expect(metadata?.lastVerified).toBe("2026-11-11");
    const sourceMap: readonly ContentSource[] = metadata?.sourceMap ?? [];

    expect(sourceMap.map((source) => source.url)).toEqual(
      article?.sources?.map((source) => source.href),
    );
  });

  it("keeps client names, prices, and em dashes out of the copy", () => {
    const text = articleText();

    expect(text).not.toMatch(/bayam|rebel ?bunny|rebelbunny/i);
    expect(text).not.toMatch(/\$\d|\bUSD\b|\bTL\b/);
    expect(text).not.toContain("\u2014");
  });

  it("is listed in the sitemap and has its own related links", () => {
    const paths = buildSitemapEntries({
      siteUrl: "https://hydrogenexpert.co",
      posts: [],
      articles: getPublicArticlesForDate(afterPublish),
    }).map((entry) => new URL(entry.url).pathname);

    expect(paths).toContain(PATH);
    expect(getRelatedLinksForPath(PATH).map((link) => link.href)).toContain(
      "/articles/shopify-hydrogen-analytics-migration",
    );
  });
});
