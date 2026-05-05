import type { MetadataRoute } from "next";

import { getPublicArticles } from "@/lib/articles";
import { getPublishedPosts } from "@/lib/posts";
import { buildSitemapEntries } from "@/lib/sitemap-entries";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, articles] = await Promise.all([getPublishedPosts(), getPublicArticles()]);
  return buildSitemapEntries({ siteUrl: getSiteUrl(), posts, articles });
}
