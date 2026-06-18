import type { MetadataRoute } from "next";

import {
  PACKAGE_PAGE_SEO,
  PACKAGE_ROUTE,
} from "../../lib/hydrogen-packages";

export interface PublicDiscoveryRoute {
  path: string;
}

export interface LlmsPageEntry {
  title: string;
  path: string;
  description: string;
}

export const LAST_SIGNIFICANT_UPDATE = new Date("2026-05-27T00:00:00.000Z");

export const PACKAGE_PAGE_DISCOVERY = {
  ...PACKAGE_PAGE_SEO,
  canonicalUrl: `https://hydrogenexpert.co${PACKAGE_ROUTE}`,
} as const;

export const NOINDEX_STATIC_ROUTES = ["/privacy", "/cookies", "/terms"] as const;

export const PUBLIC_DISCOVERY_ROUTES: readonly PublicDiscoveryRoute[] = [
  { path: "/" },
  { path: "/about" },
  { path: "/what-is-hydrogen" },
  { path: "/services" },
  { path: PACKAGE_ROUTE },
  { path: "/resources" },
  { path: "/news-on-shopify-hydrogen" },
  { path: "/shopify-hydrogen-examples" },
  { path: "/shopify-hydrogen-issues" },
  { path: "/shopify-hydrogen-templates" },
  { path: "/udemy-shopify-hydrogen-course-resources" },
  { path: "/should-i-use-it" },
  { path: "/when-not-to-use-hydrogen" },
  { path: "/case-studies" },
  { path: "/hire-me" },
  { path: "/contact" },
  { path: "/shopify-hydrogen-agency-usa" },
  { path: "/shopify-hydrogen-fit-audit" },
  { path: "/shopify-hydrogen-maintenance-cost" },
  { path: "/shopify-hydrogen-vs-liquid" },
  { path: "/shopify-hydrogen-for-luxury-jewelry" },
  { path: "/shopify-hydrogen-for-large-catalog-retail" },
  { path: "/shopify-hydrogen-for-dtc-education-brands" },
  { path: "/shopify-hydrogen-for-beauty-brands" },
] as const;

export const INDEXING_RECOVERY_ROUTES = [
  "/shopify-hydrogen-developer",
  "/shopify-hydrogen-expert",
  "/shopify-hydrogen-experts",
  "/articles/how-to-hire-shopify-hydrogen-developer",
  "/articles/shopify-hydrogen-developer-vs-agency",
  "/articles/shopify-hydrogen-experts-production-experience",
  "/articles/shopify-hydrogen-nextjs",
  "/articles/shopify-hydrogen-cms-visual-builder",
  "/articles/shopify-apps-in-hydrogen-compatibility-checklist",
  "/articles/shopify-hydrogen-analytics-migration",
  "/articles/shopify-storefront-mcp-ucp-ai-readiness",
  "/articles/shopify-hydrogen-b2b-wholesale-guide",
  "/articles/hydrogen-deployment-checklist-oxygen-preview-production-qa",
  "/articles/shopify-hydrogen-markets-i18n-seo",
  "/articles/shopify-hydrogen-search-filters-product-discovery",
  "/articles/shopify-hydrogen-seo-checklist",
  PACKAGE_ROUTE,
  "/case-studies",
] as const;

export const INDEXING_RECOVERY_CORE_ROUTES = INDEXING_RECOVERY_ROUTES.filter(
  (route) => !route.startsWith("/articles/"),
);

export const MINIMUM_INDEXING_RECOVERY_SITEMAP_URL_COUNT = 50;

export const STATIC_ROUTE_SITEMAP_OVERRIDES: Record<
  string,
  Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "lastModified" | "priority">
> = {
  [PACKAGE_ROUTE]: {
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/shopify-hydrogen-developer": {
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/shopify-hydrogen-expert": {
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/shopify-hydrogen-experts": {
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.88,
  },
  "/case-studies": {
    lastModified: LAST_SIGNIFICANT_UPDATE,
    changeFrequency: "weekly",
    priority: 0.86,
  },
};

export const LLMS_CORE_PAGE_ENTRIES: readonly LlmsPageEntry[] = [
  {
    title: "Home",
    path: "/",
    description:
      "Senior-led Shopify Hydrogen services, proof, case studies, and fit guidance.",
  },
  {
    title: "About",
    path: "/about",
    description:
      "Founder profile, public proof, and verified entity links for Emre Mutlu.",
  },
  {
    title: "Packages",
    path: PACKAGE_ROUTE,
    description:
      "Fixed-scope Hydrogen Starter, Standard, Growth, and Custom package path from $2K-$5K.",
  },
  {
    title: "Services",
    path: "/services",
    description:
      "Overview of Hydrogen scope reviews, migrations, custom builds, performance, SEO, and support paths.",
  },
  {
    title: "What Is Hydrogen",
    path: "/what-is-hydrogen",
    description:
      "Plain-English explanation of Shopify Hydrogen for Shopify Plus and growth-stage brands.",
  },
  {
    title: "News on Shopify Hydrogen",
    path: "/news-on-shopify-hydrogen",
    description:
      "Monthly official Hydrogen update notes translated into merchant impact and end-user benefit.",
  },
  {
    title: "Should I Use It",
    path: "/should-i-use-it",
    description:
      "Merchant decision guide for when Hydrogen is or is not commercially justified.",
  },
  {
    title: "Cost",
    path: "/shopify-hydrogen-cost",
    description:
      "Hydrogen package pricing, scope drivers, and maintenance-cost guidance.",
  },
  {
    title: "Case Studies",
    path: "/case-studies",
    description:
      "Approved production contexts for EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi.",
  },
  {
    title: "Hire Me",
    path: "/hire-me",
    description:
      "Direct hiring page for a senior Shopify Hydrogen developer and advisor.",
  },
  {
    title: "Contact",
    path: "/contact",
    description:
      "Scope review entry point with the project brief form, LinkedIn, Upwork, and case-study paths.",
  },
  {
    title: "Articles",
    path: "/articles",
    description:
      "Evergreen merchant guides for Hydrogen stack, CMS, app, analytics, AI commerce, B2B, launch, markets, search, SEO, hiring, cost, migration, and fit decisions.",
  },
  {
    title: "Blog",
    path: "/blog",
    description:
      "Production notes on Hydrogen SEO, SSR content, metaobjects, variants, and performance.",
  },
] as const;

export const COMMERCIAL_VERIFICATION_ROUTES = [
  "/",
  PACKAGE_ROUTE,
  "/shopify-hydrogen-cost",
  "/custom-shopify-hydrogen-storefront",
  "/shopify-hydrogen-audit",
  "/shopify-hydrogen-agency-usa",
  "/hire-me",
  "/contact",
  "/when-not-to-use-hydrogen",
] as const;

export const INTERNAL_PACKAGE_LINK_SOURCE_ROUTES = [
  "/",
  "/shopify-hydrogen-cost",
  "/contact",
  "/when-not-to-use-hydrogen",
] as const;

export function getPublicDiscoverySitemapRoutes() {
  return PUBLIC_DISCOVERY_ROUTES.map((route) => route.path);
}
