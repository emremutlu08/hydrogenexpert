import { describe, expect, it } from "vitest";

import { getPostEnhancement, POST_ENHANCEMENTS } from "../features/post-enhancements";
import { getPublicArticlesForDate } from "../lib/articles";
import { CANONICAL_HIRING_PAGE, isRedirectSource } from "../lib/legacy-redirects";

const referenceDate = new Date("2026-07-29T00:00:00.000Z");

describe("internal link consolidation", () => {
  it("gives every public article exactly one link to the canonical hiring page", () => {
    for (const article of getPublicArticlesForDate(referenceDate)) {
      const hrefs = article.links.map((link) => link.href);
      const canonicalCount = hrefs.filter((href) => href === CANONICAL_HIRING_PAGE).length;

      expect(canonicalCount, `${article.slug} should link to the canonical hiring page once`).toBe(
        1,
      );
    }
  });

  it("gives every enhanced post exactly one link to the canonical hiring page", () => {
    for (const slug of Object.keys(POST_ENHANCEMENTS)) {
      const hrefs = getPostEnhancement(slug).internalLinks.map((link) => link.href);
      const canonicalCount = hrefs.filter((href) => href === CANONICAL_HIRING_PAGE).length;

      expect(canonicalCount, `${slug} should link to the canonical hiring page once`).toBe(1);
    }
  });

  it("never repeats the same internal href inside one page", () => {
    const sources: [string, readonly string[]][] = [
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

    for (const [name, hrefs] of sources) {
      expect(new Set(hrefs).size, `${name} repeats an internal link`).toBe(hrefs.length);
    }
  });

  it("never points an internal link at a URL that only redirects", () => {
    const sources: [string, readonly string[]][] = [
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

    for (const [name, hrefs] of sources) {
      const redirecting = hrefs.filter((href) => isRedirectSource(href));

      expect(redirecting, `${name} links to a redirect instead of the final URL`).toEqual([]);
    }
  });
});
