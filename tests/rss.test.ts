import { describe, expect, it } from "vitest";

import type { PostSummary } from "../lib/posts";
import { buildRssFeed } from "../lib/rss";

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

describe("buildRssFeed", () => {
  it("builds RSS channel metadata and post URLs", () => {
    const feed = buildRssFeed({
      siteUrl: "https://hydrogenexpert.co",
      posts,
    });

    expect(feed).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(feed).toContain("<title>HydrogenExpert Blog</title>");
    expect(feed).toContain("<link>https://hydrogenexpert.co</link>");
    expect(feed).toContain(
      "<link>https://hydrogenexpert.co/blog/shopify-hydrogen-product-description-ssr-seo</link>",
    );
    expect(feed).toContain("Fix Shopify Hydrogen product description SEO");
    expect(feed).toContain('type="application/rss+xml"');
  });

  it("escapes XML-sensitive post fields", () => {
    const feed = buildRssFeed({
      siteUrl: "https://hydrogenexpert.co/",
      posts: [
        {
          ...posts[0],
          title: "Hydrogen & SEO <Guide>",
          metaDescription: 'Use "server HTML" & stable routes.',
        },
      ],
    });

    expect(feed).toContain("Hydrogen &amp; SEO &lt;Guide&gt;");
    expect(feed).toContain("Use &quot;server HTML&quot; &amp; stable routes.");
  });
});
