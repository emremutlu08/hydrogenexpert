import type { MetadataRoute } from "next";

import { getPublicArticles } from "@/lib/articles";
import { getPublishedPostListResult } from "@/lib/posts";
import { buildSitemapEntries } from "@/lib/sitemap-entries";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postResult, articles] = await Promise.all([
    getPublishedPostListResult(),
    getPublicArticles(),
  ]);

  if (postResult.status === "source_unavailable") {
    throw new Error(postResult.error);
  }

  return buildSitemapEntries({ siteUrl: getSiteUrl(), posts: postResult.posts, articles });
}
