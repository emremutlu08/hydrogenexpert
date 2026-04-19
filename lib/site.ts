export const OWNER = {
  name: "Emre Mutlu",
  title: "Shopify Hydrogen Developer",
  headline: "Shopify Hydrogen Developer — Top Rated Plus, Upwork, 100% JSS",
  linkedIn: "https://www.linkedin.com/in/emremutlujs/",
  upwork: "https://www.upwork.com/freelancers/emremutlu",
  course:
    "Creator of the first English Shopify Hydrogen course on Udemy.",
} as const;

export const CLIENTS = [
  "Rebel Bunny",
  "Bayam Jewelry",
  "EveShop",
] as const;

export const TRUST_ITEMS = [
  "Top Rated Plus",
  "100% JSS",
  "Udemy Instructor",
  "3 Production Hydrogen Stores",
] as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/what-is-hydrogen", label: "What Is Hydrogen" },
  { href: "/should-i-use-it", label: "Should I Use It?" },
  { href: "/cost", label: "Cost" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/hire-me", label: "Hire Me" },
] as const;

export const DEFAULT_CTA_HEADLINE = "Ready to migrate to Hydrogen?";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export function absoluteUrl(pathname: string): string {
  const normalizedPath = pathname === "/" ? "" : pathname;
  return `${getSiteUrl()}${normalizedPath}`;
}
