import { describe, expect, it } from "vitest";

import type { PostSummary } from "../lib/posts";
import { buildSitemapEntries, NOINDEX_STATIC_ROUTES } from "../lib/sitemap-entries";

const siteUrl = "https://hydrogenexpert.co";

const posts: PostSummary[] = [
  {
    slug: "shopify-hydrogen-product-description-ssr-seo",
    title: "Shopify Hydrogen Product Descriptions: SSR SEO",
    excerpt: "Render important product copy in the initial HTML.",
    metaDescription:
      "Fix Shopify Hydrogen product description SEO by rendering standard Shopify descriptions in the initial HTML.",
    coverImage: null,
    readingTime: 6,
    publishedAt: "2026-05-01T00:00:00.000Z",
  },
];

function pathsFromSitemap(postsInput: PostSummary[]) {
  return buildSitemapEntries({ siteUrl, posts: postsInput }).map((entry) => {
    const url = new URL(entry.url);
    return url.pathname === "/" ? "/" : url.pathname;
  });
}

describe("buildSitemapEntries", () => {
  it("includes authority, contact, service, case-study, blog, and post routes", () => {
    const paths = pathsFromSitemap(posts);

    expect(paths).toContain("/");
    expect(paths).toContain("/about");
    expect(paths).toContain("/contact");
    expect(paths).toContain("/services");
    expect(paths).toContain("/shopify-hydrogen-audit");
    expect(paths).toContain("/case-studies/eveshop-shopify-hydrogen");
    expect(paths).toContain("/case-studies/bayam-jewelry-shopify-hydrogen");
    expect(paths).toContain("/case-studies/rebel-bunny-shopify-hydrogen");
    expect(paths).toContain("/blog");
    expect(paths).toContain("/blog/shopify-hydrogen-product-description-ssr-seo");
  });

  it("excludes noindex legal routes", () => {
    const paths = pathsFromSitemap(posts);

    for (const route of NOINDEX_STATIC_ROUTES) {
      expect(paths).not.toContain(route);
    }
  });

  it("omits the blog index when no published posts exist", () => {
    const paths = pathsFromSitemap([]);

    expect(paths).not.toContain("/blog");
    expect(paths.some((path) => path.startsWith("/blog/"))).toBe(false);
    expect(paths).toContain("/about");
    expect(paths).toContain("/contact");
  });
});
