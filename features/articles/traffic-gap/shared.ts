import type { Article, ArticleSection } from "../../../lib/articles";

export const PUBLISH_DATE = "2026-05-27T10:00:00+03:00";
export const REFRESH_DATE = "2026-05-27T23:30:00+03:00";

export const scopeReviewLinks = [
  { href: "/shopify-hydrogen-packages", label: "Review fixed-scope packages" },
  { href: "/liquid-to-hydrogen-migration", label: "Plan a Liquid to Hydrogen migration" },
  { href: "/shopify-hydrogen-audit", label: "Request Scope Review" },
  { href: "/contact", label: "Send the store URL" },
] as const;

export interface ArticleQualityRefresh {
  updatedAt?: Article["updatedAt"];
  summary: NonNullable<Article["summary"]>;
  takeaways: NonNullable<Article["takeaways"]>;
  sections: readonly ArticleSection[];
  faq: NonNullable<Article["faq"]>;
}
