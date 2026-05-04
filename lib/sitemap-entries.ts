import type { MetadataRoute } from "next";

import { CASE_STUDIES } from "../data/caseStudies";
import type { PostSummary } from "./posts";
import { hasMeaningfulServicesContent, SERVICE_PACKAGES } from "./services";

const LAST_SIGNIFICANT_UPDATE = new Date("2026-04-25T00:00:00.000Z");

export const NOINDEX_STATIC_ROUTES = ["/privacy", "/cookies", "/terms"] as const;

export function getStaticSitemapRoutes() {
  const routes = [
    "/",
    "/about",
    "/what-is-hydrogen",
    "/should-i-use-it",
    "/when-not-to-use-hydrogen",
    "/case-studies",
    "/hire-me",
    "/contact",
  ];

  if (hasMeaningfulServicesContent()) {
    routes.splice(2, 0, "/services");
    routes.push(...SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath));
  }

  routes.push(...CASE_STUDIES.map((study) => `/case-studies/${study.slug}`));

  return routes;
}

export function buildSitemapEntries({
  siteUrl,
  posts,
}: {
  siteUrl: string;
  posts: readonly PostSummary[];
}): MetadataRoute.Sitemap {
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const staticRoutes = getStaticSitemapRoutes();

  if (posts.length > 0) {
    staticRoutes.push("/blog");
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${normalizedSiteUrl}${route === "/" ? "" : route}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: route === "/" ? "weekly" : route === "/blog" ? "daily" : "monthly",
    priority: route === "/" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const dynamicEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${normalizedSiteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...dynamicEntries];
}
