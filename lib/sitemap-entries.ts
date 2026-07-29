import type { MetadataRoute } from "next";

import { CASE_STUDIES } from "../data/caseStudies";
import {
  getPublicDiscoverySitemapRoutes,
  LAST_SIGNIFICANT_UPDATE,
  STATIC_ROUTE_SITEMAP_OVERRIDES,
} from "../features/public-discovery/manifest";
import type { Article } from "./articles";
import type { PostSummary } from "./posts";
import { isRedirectSource } from "./legacy-redirects";
import { SERVICE_PACKAGES } from "../features/services/registry";

export { NOINDEX_STATIC_ROUTES } from "../features/public-discovery/manifest";

export function getStaticSitemapRoutes() {
  const routes = [
    ...getPublicDiscoverySitemapRoutes(),
    ...SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath),
    ...CASE_STUDIES.map((study) => `/case-studies/${study.slug}`),
  ];

  // A consolidated URL still lives in the service registry as data, but listing
  // it here would advertise a 301 hop to crawlers and re-split the signal the
  // consolidation is meant to merge.
  return [...new Set(routes.filter((route) => !isRedirectSource(route)))];
}

export function buildSitemapEntries({
  siteUrl,
  posts,
  articles = [],
}: {
  siteUrl: string;
  posts: readonly PostSummary[];
  articles?: readonly Article[];
}): MetadataRoute.Sitemap {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const staticRoutes = getStaticSitemapRoutes();

  if (posts.length > 0) {
    staticRoutes.push("/blog");
  }

  staticRoutes.push("/articles");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const routeOverride = STATIC_ROUTE_SITEMAP_OVERRIDES[route];

    return {
      url: `${normalizedSiteUrl}${route === "/" ? "" : route}`,
      lastModified: routeOverride?.lastModified ?? LAST_SIGNIFICANT_UPDATE,
      changeFrequency:
        routeOverride?.changeFrequency ??
        (route === "/" ? "weekly" : route === "/blog" ? "daily" : "monthly"),
      priority: routeOverride?.priority ?? (route === "/" ? 1 : route === "/blog" ? 0.9 : 0.8),
    };
  });

  const dynamicEntries: MetadataRoute.Sitemap = posts
    .filter((post) => !isRedirectSource(`/blog/${post.slug}`))
    .map((post) => ({
      url: `${normalizedSiteUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const articleEntries: MetadataRoute.Sitemap = articles
    .filter((article) => !isRedirectSource(`/articles/${article.slug}`))
    .map((article) => ({
      url: `${normalizedSiteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  return [...staticEntries, ...dynamicEntries, ...articleEntries];
}
