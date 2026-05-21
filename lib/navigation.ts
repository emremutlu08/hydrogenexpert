import { cache } from "react";

import { getPublicArticles } from "@/lib/articles";
import { getPublishedPosts } from "@/lib/posts";

export interface SiteNavItem {
  href: string;
  label: string;
}

export const getSiteNavigation = cache(async (): Promise<readonly SiteNavItem[]> => {
  const [posts, articles] = await Promise.all([getPublishedPosts(), getPublicArticles()]);
  const hasBlog = posts.length > 0;
  const hasArticles = articles.length > 0;
  const items: SiteNavItem[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/shopify-hydrogen-developer", label: "Hydrogen Developer" },
    { href: "/what-is-hydrogen", label: "What Is Hydrogen" },
    { href: "/should-i-use-it", label: "Should I Use It?" },
    { href: "/shopify-hydrogen-cost", label: "Cost" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  if (hasBlog) {
    items.push({ href: "/blog", label: "Blog" });
  }

  if (hasArticles) {
    items.push({ href: "/articles", label: "Articles" });
  }

  items.push({ href: "/hire-me", label: "Hire Me" });

  return items;
});
