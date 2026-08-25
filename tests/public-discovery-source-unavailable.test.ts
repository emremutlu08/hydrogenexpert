import { describe, expect, it, vi } from "vitest";

const { getSupabaseClientMock } = vi.hoisted(() => ({
  getSupabaseClientMock: vi.fn(() => null),
}));

vi.mock("../lib/supabase", () => ({
  getSupabaseClient: getSupabaseClientMock,
  getSupabaseAdminClient: vi.fn(() => null),
}));

import sitemap from "../app/sitemap";
import { GET as getLlmsFullTxt } from "../app/llms-full.txt/route";
import { getPublicArticles } from "../lib/articles";
import { getPublishedPostListResult, getPublishedPosts } from "../lib/posts";
import { getSiteUrl } from "../lib/site";

const repositoryArticleSlug = "shopify-hydrogen-nextjs";
const commercialPath = "/shopify-hydrogen-agency";
const caseStudyPath = "/case-studies/eveshop-shopify-hydrogen";

describe("public discovery when the database source is unavailable", () => {
  it("returns the static discovery surfaces while the real post fallback maps to no posts", async () => {
    const articles = await getPublicArticles();
    const repositoryArticle = articles.find(
      (article) => article.slug === repositoryArticleSlug,
    );

    expect(repositoryArticle).toBeDefined();
    await expect(getPublishedPostListResult()).resolves.toMatchObject({
      status: "source_unavailable",
    });
    await expect(getPublishedPosts()).resolves.toEqual([]);

    const entries = await sitemap();
    const urls = entries.map((entry) => entry.url);
    const paths = urls.map((url) => new URL(url).pathname || "/");
    const articlePath = `/articles/${repositoryArticleSlug}`;

    expect(paths).toContain(commercialPath);
    expect(paths).toContain(caseStudyPath);
    expect(paths).toContain(articlePath);
    expect(paths).not.toContain("/blog");
    expect(paths.some((path) => path.startsWith("/blog/"))).toBe(false);
    expect(new Set(urls).size).toBe(urls.length);

    const response = await getLlmsFullTxt();
    const body = await response.text();
    const siteUrl = getSiteUrl();

    expect(response.status).toBe(200);
    expect(body).toContain(`(${siteUrl}${commercialPath}):`);
    expect(body).toContain(`(${siteUrl}${caseStudyPath}):`);
    expect(body).toContain(
      `- [${repositoryArticle?.title}](${siteUrl}${articlePath}):`,
    );
    expect(body).toContain("- No published posts found.");
    expect(getSupabaseClientMock).toHaveBeenCalled();
  });
});
