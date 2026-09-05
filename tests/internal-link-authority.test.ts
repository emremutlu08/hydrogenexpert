import { describe, expect, it } from "vitest";

import { TRAFFIC_GAP_ARTICLES } from "../features/articles/traffic-gap";
import { getPostEnhancement, POST_ENHANCEMENTS } from "../features/post-enhancements";
import { getPublicArticlesForDate } from "../lib/articles";

const referenceDate = new Date("2026-07-30T00:00:00.000Z");

const HIRING_OWNER = "/shopify-hydrogen-experts";

const COMMERCIAL_OWNERS = [
  "/shopify-hydrogen-expert",
  "/shopify-hydrogen-experts",
  "/shopify-hydrogen-developer",
  "/shopify-hydrogen-agency",
  "/headless-shopify-agency",
  "/shopify-hydrogen-audit",
  "/shopify-hydrogen-packages",
  "/shopify-hydrogen-cost",
  "/hire-me",
  "/contact",
];

function collectLinkSets(): [string, readonly string[]][] {
  return [
    ...getPublicArticlesForDate(referenceDate).map(
      (article) =>
        [article.slug, article.links.map((link) => link.href)] as [string, readonly string[]],
    ),
    ...Object.keys(POST_ENHANCEMENTS).map(
      (slug) =>
        [slug, getPostEnhancement(slug).internalLinks.map((link) => link.href)] as [
          string,
          readonly string[],
        ],
    ),
  ];
}

describe("internal link authority", () => {
  it("points every traffic-gap article at the hiring owner exactly once", () => {
    // These ten hold the best Search Console positions on the site, roughly 6
    // to 10, while the commercial pages sit near 20. Before this guarantee not
    // one of them linked to a hiring page, so their authority went nowhere.
    for (const article of TRAFFIC_GAP_ARTICLES) {
      const hrefs = article.links.map((link) => link.href);
      const count = hrefs.filter((href) => href === HIRING_OWNER).length;

      expect(count, `${article.slug} should link to ${HIRING_OWNER} once`).toBe(1);
    }
  });

  it("points every enhanced post at the hiring owner exactly once", () => {
    for (const slug of Object.keys(POST_ENHANCEMENTS)) {
      const hrefs = getPostEnhancement(slug).internalLinks.map((link) => link.href);
      const count = hrefs.filter((href) => href === HIRING_OWNER).length;

      expect(count, `${slug} should link to ${HIRING_OWNER} once`).toBe(1);
    }
  });

  it("never repeats the same internal href inside one page", () => {
    for (const [name, hrefs] of collectLinkSets()) {
      expect(new Set(hrefs).size, `${name} repeats an internal link`).toBe(hrefs.length);
    }
  });

  it("gives every public article at least one commercial destination", () => {
    for (const article of getPublicArticlesForDate(referenceDate)) {
      const reachable = article.links.filter((link) => COMMERCIAL_OWNERS.includes(link.href));

      expect(reachable.length, `${article.slug} reaches no commercial page`).toBeGreaterThan(0);
    }
  });
});
