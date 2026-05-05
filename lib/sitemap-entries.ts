import type { MetadataRoute } from "next";

import { CASE_STUDIES } from "../data/caseStudies";
import type { Article } from "./articles";
import type { PostSummary } from "./posts";
import { SERVICE_PACKAGES } from "./services";

const LAST_SIGNIFICANT_UPDATE = new Date("2026-04-25T00:00:00.000Z");

export const NOINDEX_STATIC_ROUTES = ["/privacy", "/cookies", "/terms"] as const;

export function getStaticSitemapRoutes() {
  const routes = [
    "/",
    "/about",
    "/what-is-hydrogen",
    "/services",
    "/should-i-use-it",
    "/when-not-to-use-hydrogen",
    "/case-studies",
    "/hire-me",
    "/contact",
    "/shopify-hydrogen-agency-usa",
    "/shopify-hydrogen-fit-audit",
    "/shopify-hydrogen-maintenance-cost",
    "/shopify-hydrogen-vs-liquid",
    "/shopify-hydrogen-for-luxury-jewelry",
    "/shopify-hydrogen-for-large-catalog-retail",
    "/shopify-hydrogen-for-dtc-education-brands",
    "/shopify-hydrogen-for-beauty-brands",
    ...SERVICE_PACKAGES.map((servicePackage) => servicePackage.pagePath),
  ];

  routes.push(...CASE_STUDIES.map((study) => `/case-studies/${study.slug}`));

  return routes;
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

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${normalizedSiteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...dynamicEntries, ...articleEntries];
}
