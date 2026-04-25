import { cache } from "react";

import { getPublishedPosts } from "@/lib/posts";
import { hasMeaningfulServicesContent } from "@/lib/services";

export interface SiteNavItem {
  href: string;
  label: string;
}

export const getSiteNavigation = cache(async (): Promise<readonly SiteNavItem[]> => {
  const hasBlog = (await getPublishedPosts()).length > 0;
  const items: SiteNavItem[] = [{ href: "/", label: "Home" }];

  if (hasMeaningfulServicesContent()) {
    items.push({ href: "/services", label: "Services" });
  }

  items.push(
    { href: "/what-is-hydrogen", label: "What Is Hydrogen" },
    { href: "/should-i-use-it", label: "Should I Use It?" },
    { href: "/cost", label: "Cost" },
    { href: "/case-studies", label: "Case Studies" },
  );

  if (hasBlog) {
    items.push({ href: "/blog", label: "Blog" });
  }

  items.push({ href: "/hire-me", label: "Hire Me" });

  return items;
});
