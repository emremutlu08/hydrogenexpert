import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { INDEXING_RECOVERY_CORE_ROUTES } from "../features/public-discovery/manifest";
import { getPublicArticlesForDate } from "../lib/articles";
import { buildLlmsFullTxt, buildLlmsTxt } from "../lib/llms";

const siteUrl = "https://hydrogenexpert.co";
const publicArticleDate = new Date("2026-05-25T00:00:00.000Z");
const repoRoot = process.cwd();

function readRepoFile(path: string) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("llms files", () => {
  it("includes the evergreen articles index in the short AI context", () => {
    process.env.NEXT_PUBLIC_SITE_URL = siteUrl;
    const llms = buildLlmsTxt();

    expect(llms).toContain(
      `- [Articles](${siteUrl}/articles): Evergreen merchant guides for Hydrogen hiring, cost, SEO, migration, and fit decisions.`,
    );
    expect(llms).toContain(
      `- [News on Shopify Hydrogen](${siteUrl}/news-on-shopify-hydrogen): Monthly official Hydrogen update notes translated into merchant impact and end-user benefit.`,
    );

    for (const route of INDEXING_RECOVERY_CORE_ROUTES) {
      expect(llms).toContain(`${siteUrl}${route}`);
    }
  });

  it("includes public evergreen article routes in the full AI context", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = siteUrl;
    const llmsFull = await buildLlmsFullTxt({ posts: [] });
    const articles = getPublicArticlesForDate(publicArticleDate);

    for (const article of articles) {
      expect(llmsFull).toContain(`- [${article.title}](${siteUrl}/articles/${article.slug}):`);
    }
  });

  it("keeps llms files noindex while allowing canonical link following", () => {
    expect(readRepoFile("app/llms.txt/route.ts")).toContain('"X-Robots-Tag": "noindex, follow"');
    expect(readRepoFile("app/llms-full.txt/route.ts")).toContain(
      '"X-Robots-Tag": "noindex, follow"',
    );
  });
});
