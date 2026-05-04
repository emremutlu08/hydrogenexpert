export const OWNER = {
  name: "Emre Mutlu",
  title: "Shopify Hydrogen Developer",
  headline: "Shopify Hydrogen Developer — Top Rated Plus, Upwork, 100% JSS",
  linkedIn: "https://www.linkedin.com/in/emremutlujs/",
  instagram: "https://www.instagram.com/shopifyemre/",
  upwork: "https://www.upwork.com/freelancers/emremutlu",
  udemyUrl:
    process.env.NEXT_PUBLIC_UDEMY_COURSE_URL?.trim() ||
    "https://www.udemy.com/shopify-hydrogen",
  course:
    "Creator of the world's first English Shopify Hydrogen course on Udemy.",
} as const;

export const UPWORK_PROFILE = {
  title: "Shopify Hydrogen & Liquid Expert | Plus Stores | Headless Dev",
  hourlyRate: "$32/hr",
  jobSuccessScore: "100%",
  badge: "Top Rated Plus",
  totalHoursLabel: "1,900+",
  totalHoursExact: "1,916",
  totalJobs: "6",
  lastVerified: "2026-05-03",
} as const;

export const SITE_KEYWORDS = [
  "Shopify Hydrogen developer",
  "Shopify Hydrogen services",
  "Shopify Hydrogen consultant",
  "Shopify Hydrogen cost",
  "hire Shopify Hydrogen developer",
  "Shopify Plus Hydrogen developer",
  "Hydrogen migration",
  "Shopify storefront performance",
] as const;

export const CLIENTS = [
  "Rebel Bunny",
  "Bayam Jewelry",
  "EveShop",
] as const;

export const TRUST_ITEMS = [
  "Top Rated Plus",
  "100% JSS",
  "1,900+ hours on Upwork",
  "32K+ LinkedIn followers",
  "World's first in English",
  "First in Turkey",
] as const;

export const DEFAULT_CTA_HEADLINE = "Let’s scope the storefront your growth stage actually needs.";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function absoluteUrl(pathname: string): string {
  const normalizedPath = pathname === "/" ? "" : pathname;
  return `${getSiteUrl()}${normalizedPath}`;
}
