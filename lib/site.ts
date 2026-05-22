export const OWNER = {
  name: "Emre Mutlu",
  title: "Shopify Hydrogen Developer",
  headline: "Senior-led Shopify Hydrogen services — Top Rated Plus, Upwork, 100% JSS",
  personalSite: "https://www.emre-mutlu.com.tr/",
  linkedIn: "https://www.linkedin.com/in/emremutlujs/",
  instagram: "https://www.instagram.com/shopifyemre/",
  upwork: "https://www.upwork.com/freelancers/emremutlu",
  youtube: "https://www.youtube.com/channel/UCIvMTov-hGKvo4p6ZPf4kWA",
  udemyUrl:
    process.env.NEXT_PUBLIC_UDEMY_COURSE_URL?.trim() ||
    "https://www.udemy.com/shopify-hydrogen",
  course:
    "Creator of the world's first English Shopify Hydrogen course on Udemy.",
} as const;

export const SITE_NAME = "HydrogenExpert";
export const SITE_LOGO_PATH = "/brand/hydrogenexpert-logo-icon.png";
export const FOUNDER_IMAGE_PATH = "/emre-city-16x9.png";

export const UPWORK_PROFILE = {
  title: "Shopify Hydrogen & Liquid Expert | Headless Shopify Developer",
  hourlyRate: "$40/hr",
  jobSuccessScore: "100%",
  badge: "Top Rated Plus",
  totalHoursLabel: "1,900+",
  totalHoursExact: "1,956",
  totalJobs: "6",
  lastVerified: "2026-05-11",
} as const;

export const VERIFIED_PROFILE_URLS = [
  OWNER.personalSite,
  OWNER.linkedIn,
  OWNER.upwork,
  OWNER.udemyUrl,
  OWNER.instagram,
  OWNER.youtube,
] as const;

export const SITE_KEYWORDS = [
  "Shopify Hydrogen agency",
  "Shopify Hydrogen agency alternative",
  "Shopify Hydrogen developer",
  "Shopify Hydrogen development",
  "Shopify Hydrogen services",
  "Shopify Hydrogen consultant",
  "headless Shopify agency",
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
  "Kirazev",
  "Clohi",
] as const;

export const DELIVERY_PROOF = {
  productionHydrogenStorefronts: "3",
  eveShopUsers: "400K+",
  eveShopMobileUsers: "100K+",
  shopifyPortfolioProjects: "5",
  linkedInFollowers: "32K+",
  firstProductionHydrogenInTurkey: "First",
  firstEnglishHydrogenCourse: "First",
  rebelBunnyFeedback: "5.0 Rebel Bunny feedback",
  udemyCourseClaim: "World's First in English",
} as const;

export const TRUST_ITEMS = [
  UPWORK_PROFILE.badge,
  `${UPWORK_PROFILE.jobSuccessScore} JSS`,
  `${UPWORK_PROFILE.totalHoursLabel} hours on Upwork`,
  `${DELIVERY_PROOF.linkedInFollowers} LinkedIn followers`,
  DELIVERY_PROOF.udemyCourseClaim,
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

export function getSchemaIds() {
  const siteUrl = getSiteUrl();

  return {
    organization: `${siteUrl}/#organization`,
    person: `${siteUrl}/about#emre-mutlu`,
    professionalService: `${siteUrl}/#professionalservice`,
    website: `${siteUrl}/#website`,
  } as const;
}
