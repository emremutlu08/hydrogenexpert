import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/posts";
import { hasMeaningfulServicesContent } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

const LAST_SIGNIFICANT_UPDATE = new Date("2026-04-25T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const posts = await getPublishedPosts();
  const staticRoutes = [
    "/",
    "/what-is-hydrogen",
    "/shopify-hydrogen-seo-guide",
    "/should-i-use-it",
    "/when-not-to-use-hydrogen",
    "/cost",
    "/case-studies",
    "/hire-me",
  ];

  if (hasMeaningfulServicesContent()) {
    staticRoutes.splice(1, 0, "/services");
  }

  if (posts.length > 0) {
    staticRoutes.push("/blog");
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const dynamicEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...dynamicEntries];
}
