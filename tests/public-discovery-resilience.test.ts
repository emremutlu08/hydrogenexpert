import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { Article } from "../lib/articles";
import type { PostSummary } from "../lib/posts";

const { getPublicArticlesMock, getPublishedPostsMock } = vi.hoisted(() => ({
  getPublicArticlesMock: vi.fn(),
  getPublishedPostsMock: vi.fn(),
}));

vi.mock("../lib/articles", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/articles")>()),
  getPublicArticles: getPublicArticlesMock,
}));

vi.mock("../lib/posts", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/posts")>()),
  getPublishedPosts: getPublishedPostsMock,
}));

import sitemap from "../app/sitemap";
import { GET as getLlmsFullTxt } from "../app/llms-full.txt/route";
import { buildLlmsFullTxt } from "../lib/llms";

const siteUrl = "https://hydrogenexpert.co";
const article: Article = {
  title: "Repository article",
  slug: "repository-article",
  description: "A repository-backed article used by the discovery resilience tests.",
  category: "SEO",
  status: "published",
  publishAt: "2026-08-01T10:00:00+03:00",
  updatedAt: "2026-08-01T10:00:00+03:00",
  author: "Emre Mutlu",
  metaTitle: "Repository article",
  metaDescription: "A repository-backed article used by the discovery resilience tests.",
  h1: "Repository article",
  intro: ["Repository-backed article intro."],
  sections: [],
  conclusion: "Repository-backed article conclusion.",
  links: [],
};
const post: PostSummary = {
  slug: "database-post",
  title: "Database post",
  metaDescription: "A published database post used by the discovery resilience tests.",
  excerpt: "Database post excerpt.",
  coverImage: null,
  readingTime: 4,
  publishedAt: "2026-08-02T10:00:00.000Z",
};

function sitemapPaths(entries: Awaited<ReturnType<typeof sitemap>>) {
  return entries.map((entry) => new URL(entry.url).pathname || "/");
}

describe("public discovery resilience", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteUrl);
    getPublishedPostsMock.mockReset().mockResolvedValue([]);
    getPublicArticlesMock.mockReset().mockResolvedValue([article]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("keeps static, case-study, and repository article URLs once when posts are unavailable", async () => {
    const paths = sitemapPaths(await sitemap());

    for (const path of [
      "/shopify-hydrogen-experts",
      "/case-studies/eveshop-shopify-hydrogen",
      "/articles/repository-article",
    ]) {
      expect(paths.filter((candidate) => candidate === path)).toHaveLength(1);
    }
    expect(paths).not.toContain("/blog");
    expect(paths.some((path) => path.startsWith("/blog/"))).toBe(false);
  });

  it("keeps the blog index and provided database post when posts are available", async () => {
    getPublishedPostsMock.mockResolvedValue([post]);

    const paths = sitemapPaths(await sitemap());

    expect(paths.filter((path) => path === "/blog")).toHaveLength(1);
    expect(paths.filter((path) => path === "/blog/database-post")).toHaveLength(1);
  });

  it("propagates repository article loader failures from the sitemap", async () => {
    const articleError = new Error("repository article loader failed");
    getPublicArticlesMock.mockRejectedValue(articleError);

    await expect(sitemap()).rejects.toBe(articleError);
  });

  it("builds full AI context without provided posts when the post source is unavailable", async () => {
    const body = await buildLlmsFullTxt();

    expect(body).toContain(
      `- [Shopify Hydrogen Experts](${siteUrl}/shopify-hydrogen-experts):`,
    );
    expect(body).toContain(`- [Repository article](${siteUrl}/articles/repository-article):`);
    expect(body).toContain("- No published posts found.");
  });

  it("keeps database post links in the normal full AI context path", async () => {
    getPublishedPostsMock.mockResolvedValue([post]);

    const body = await buildLlmsFullTxt();

    expect(body).toContain(`- [Database post](${siteUrl}/blog/database-post):`);
    expect(body).not.toContain("- No published posts found.");
  });

  it("returns the normal full AI context response when posts are unavailable", async () => {
    const response = await getLlmsFullTxt();
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, follow");
    expect(body).toContain(
      `- [Shopify Hydrogen Experts](${siteUrl}/shopify-hydrogen-experts):`,
    );
    expect(body).toContain(`- [Repository article](${siteUrl}/articles/repository-article):`);
    expect(body).toContain("- No published posts found.");
  });

  it("keeps the llms-full route generic 503 boundary for unexpected builder failures", async () => {
    getPublicArticlesMock.mockRejectedValue(new Error("unexpected article loader failure"));

    const response = await getLlmsFullTxt();

    expect(response.status).toBe(503);
    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("Cache-Control")).toBe("no-store, max-age=0");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, follow");
    await expect(response.text()).resolves.toBe("llms-full.txt is temporarily unavailable.");
  });
});
