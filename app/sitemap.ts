import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/posts";
import { buildSitemapEntries } from "@/lib/sitemap-entries";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  return buildSitemapEntries({ siteUrl: getSiteUrl(), posts });
}
