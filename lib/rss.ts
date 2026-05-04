import type { PostSummary } from "@/lib/posts";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildRssFeed({
  siteUrl,
  posts,
}: {
  siteUrl: string;
  posts: readonly PostSummary[];
}) {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const now = new Date().toUTCString();
  const items = posts
    .map((post) => {
      const url = `${normalizedSiteUrl}/blog/${post.slug}`;
      const pubDate = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : now;

      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid>${escapeXml(url)}</guid>`,
        `      <description>${escapeXml(post.metaDescription || post.excerpt)}</description>`,
        `      <pubDate>${pubDate}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>HydrogenExpert Blog</title>",
    `    <link>${escapeXml(normalizedSiteUrl)}</link>`,
    "    <description>Merchant-friendly Shopify Hydrogen strategy, SEO, performance, and migration notes by Emre Mutlu.</description>",
    `    <atom:link href="${escapeXml(`${normalizedSiteUrl}/feed.xml`)}" rel="self" type="application/rss+xml" />`,
    `    <lastBuildDate>${now}</lastBuildDate>`,
    "    <language>en</language>",
    items,
    "  </channel>",
    "</rss>",
  ]
    .filter(Boolean)
    .join("\n");
}
