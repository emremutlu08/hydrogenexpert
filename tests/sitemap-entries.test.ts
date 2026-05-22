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
    expect(paths).toContain("/shopify-hydrogen-agency");
    expect(paths).toContain("/headless-shopify-agency");
    expect(paths).toContain("/shopify-hydrogen-developer");
    expect(paths).toContain("/shopify-hydrogen-expert");
    expect(paths).toContain("/shopify-hydrogen-experts");
    expect(paths).toContain("/shopify-hydrogen-audit");
    expect(paths).toContain("/liquid-to-hydrogen-migration");
    expect(paths).toContain("/shopify-hydrogen-seo");
    expect(paths).toContain("/shopify-hydrogen-cost");
    expect(paths).toContain("/case-studies/eveshop-shopify-hydrogen");
    expect(paths).toContain("/case-studies/bayam-jewelry-shopify-hydrogen");
    expect(paths).toContain("/case-studies/rebel-bunny-shopify-hydrogen");
    expect(paths).toContain("/case-studies/kirazev-shopify-liquid");
    expect(paths).toContain("/case-studies/clohi-shopify-liquid");
    expect(paths).toContain("/blog");
    expect(paths).toContain("/blog/shopify-hydrogen-product-description-ssr-seo");
    expect(paths).toContain("/articles");
  });

  it("excludes noindex legal routes", () => {
    const paths = pathsFromSitemap(posts);

    for (const route of NOINDEX_STATIC_ROUTES) {
      expect(paths).not.toContain(route);
    }
  });

  it("excludes legacy commercial routes that now redirect", () => {
    const paths = pathsFromSitemap(posts);

    expect(paths).not.toContain("/cost");
    expect(paths).not.toContain("/shopify-hydrogen-seo-guide");
    expect(paths).not.toContain("/blog/shopify-hydrogen-v2-setup-guide");
  });

  it("omits the blog index when no published posts exist", () => {
    const paths = pathsFromSitemap([]);

    expect(paths).not.toContain("/blog");
    expect(paths.some((path) => path.startsWith("/blog/"))).toBe(false);
    expect(paths).toContain("/articles");
    expect(paths).toContain("/about");
    expect(paths).toContain("/contact");
  });

  it("includes only public article detail routes passed by the scheduled publishing layer", () => {
    const paths = buildSitemapEntries({
      siteUrl,
      posts,
      articles: [
        {
          title: "Past public article",
          slug: "past-public-article",
          description: "Visible article",
          category: "Hiring",
          status: "scheduled",
          publishAt: "2026-05-01T10:00:00+03:00",
          updatedAt: "2026-05-01T10:00:00+03:00",
          author: "Emre Mutlu",
          metaTitle: "Past public article",
          metaDescription: "Visible article",
          h1: "Past public article",
          intro: ["Visible."],
          sections: [],
          conclusion: "Visible.",
          links: [],
        },
      ],
    }).map((entry) => new URL(entry.url).pathname || "/");

    expect(paths).toContain("/articles");
    expect(paths).toContain("/articles/past-public-article");
    expect(paths).not.toContain("/articles/future-scheduled-article");
  });

  it("gives the Shopify Hydrogen developer page fresh discovery metadata", () => {
    const entries = buildSitemapEntries({ siteUrl, posts });
    const developerEntry = entries.find(
      (entry) => new URL(entry.url).pathname === "/shopify-hydrogen-developer",
    );

    expect(developerEntry?.changeFrequency).toBe("weekly");
    expect(developerEntry?.priority).toBe(0.9);
    expect(developerEntry?.lastModified).toEqual(new Date("2026-05-21T00:00:00.000Z"));
  });
});
