import { cache } from "react";

import { getPublishedPosts } from "@/lib/posts";

export interface SiteNavItem {
  href: string;
  label: string;
}

export const getSiteNavigation = cache(async (): Promise<readonly SiteNavItem[]> => {
  const hasBlog = (await getPublishedPosts()).length > 0;
  const items: SiteNavItem[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/what-is-hydrogen", label: "What Is Hydrogen" },
    { href: "/should-i-use-it", label: "Should I Use It?" },
    { href: "/shopify-hydrogen-cost", label: "Cost" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  if (hasBlog) {
    items.push({ href: "/blog", label: "Blog" });
  }

  items.push({ href: "/hire-me", label: "Hire Me" });

  return items;
});
