import { describe, expect, it } from "vitest";

import {
  getAllArticles,
  getPublicArticleBySlugForDate,
  getPublicArticleSlugsForDate,
  getPublicArticlesForDate,
} from "../lib/articles";

describe("scheduled articles", () => {
  const beforeFirstPublish = new Date("2026-05-06T10:00:00+03:00");
  const afterFirstPublish = new Date("2026-05-08T10:01:00+03:00");

  it("keeps future scheduled articles hidden from public article lists", () => {
    const publicArticles = getPublicArticlesForDate(beforeFirstPublish);
    const publicSlugs = publicArticles.map((article) => article.slug);

    expect(publicSlugs).toContain("shopify-hydrogen-experts-production-experience");
    expect(publicSlugs).not.toContain("how-to-hire-shopify-hydrogen-developer");
    expect(getPublicArticleSlugsForDate(beforeFirstPublish)).toEqual(publicSlugs);
  });

  it("publishes scheduled articles after publishAt", () => {
    const publicArticles = getPublicArticlesForDate(afterFirstPublish);

    expect(publicArticles.map((article) => article.slug)).toContain(
      "how-to-hire-shopify-hydrogen-developer",
    );
  });

  it("returns null for future article direct access before publishAt", () => {
    expect(
      getPublicArticleBySlugForDate("how-to-hire-shopify-hydrogen-developer", beforeFirstPublish),
    ).toBeNull();
  });

  it("keeps article source files separate from Supabase-backed blog posts", () => {
    expect(getAllArticles().every((article) => article.slug.length > 0)).toBe(true);
    expect(getAllArticles().every((article) => ["published", "scheduled"].includes(article.status))).toBe(true);
  });
});
