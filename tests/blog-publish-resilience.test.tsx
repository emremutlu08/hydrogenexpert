import {
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { PostSummary, PublishedPostListResult } from "../lib/posts";

const { getPublishedPostListResultMock, notFoundMock } = vi.hoisted(() => ({
  getPublishedPostListResultMock: vi.fn<() => Promise<PublishedPostListResult>>(),
  notFoundMock: vi.fn(),
}));

vi.mock("../lib/posts", () => ({
  getPublishedPostListResult: getPublishedPostListResultMock,
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
}));

import BlogPage, { generateMetadata } from "../app/blog/page";
import { GET as getFeed } from "../app/feed.xml/route";
import { buildMetadata } from "../lib/seo";

const post: PostSummary = {
  slug: "database-post",
  title: "Database post",
  metaDescription: "A published database post used by the blog resilience tests.",
  excerpt: "Database post excerpt.",
  coverImage: null,
  readingTime: 4,
  publishedAt: "2026-08-02T10:00:00.000Z",
};

function findElements(
  node: ReactNode,
  predicate: (element: ReactElement<Record<string, unknown>>) => boolean,
) {
  const matches: ReactElement<Record<string, unknown>>[] = [];

  function visit(value: ReactNode) {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }

    if (!isValidElement<Record<string, unknown>>(value)) {
      return;
    }

    if (predicate(value)) {
      matches.push(value);
    }

    visit(value.props.children as ReactNode);
  }

  visit(node);
  return matches;
}

function getVisibleText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getVisibleText).join(" ");
  }

  if (!isValidElement<Record<string, unknown>>(node)) {
    return "";
  }

  return getVisibleText(node.props.children as ReactNode);
}

describe("blog publish resilience", () => {
  beforeEach(() => {
    getPublishedPostListResultMock.mockReset();
    notFoundMock.mockReset().mockImplementation(() => {
      throw new Error("NEXT_NOT_FOUND");
    });
  });

  it("renders the marked outage fallback without post cards or pagination", async () => {
    getPublishedPostListResultMock.mockResolvedValue({
      status: "source_unavailable",
      error: "database unavailable",
    });

    const page = await BlogPage({ searchParams: Promise.resolve({}) });
    const fallback = findElements(
      page,
      (element) => element.props["data-blog-fallback"] === "source-unavailable",
    );

    expect(fallback).toHaveLength(1);
    expect(getVisibleText(fallback[0])).toContain("Blog post index temporarily unavailable");
    expect(getVisibleText(fallback[0])).toContain("The blog is temporarily unavailable.");
    expect(
      findElements(fallback[0], (element) => element.props.href === "/articles"),
    ).not.toHaveLength(0);
    expect(
      findElements(page, (element) =>
        String(element.props.className ?? "").includes("blog-article-card"),
      ),
    ).toHaveLength(0);
    expect(getVisibleText(page)).not.toMatch(/Page\s+\d+\s+of\s+\d+/);
    expect(notFoundMock).not.toHaveBeenCalled();
  });

  it("adds noindex only to outage fallback metadata", async () => {
    getPublishedPostListResultMock.mockResolvedValue({
      status: "source_unavailable",
      error: "database unavailable",
    });

    await expect(generateMetadata()).resolves.toMatchObject({
      robots: { index: false, follow: true },
    });

    getPublishedPostListResultMock.mockResolvedValue({ status: "ok", posts: [post] });

    await expect(generateMetadata()).resolves.toEqual(
      buildMetadata({
        title: "Shopify Hydrogen Blog | Production Notes by Emre Mutlu",
        description:
          "Personal production notes, implementation lessons, and first-hand Shopify Hydrogen observations from real storefront work.",
        path: "/blog",
      }),
    );
  });

  it("preserves normal post rendering and ok plus empty notFound behavior", async () => {
    getPublishedPostListResultMock.mockResolvedValue({ status: "ok", posts: [post] });

    const page = await BlogPage({ searchParams: Promise.resolve({}) });

    expect(
      findElements(
        page,
        (element) => element.props["data-blog-fallback"] === "source-unavailable",
      ),
    ).toHaveLength(0);
    expect(findElements(page, (element) => element.props.href === "/blog/database-post")).not
      .toHaveLength(0);
    expect(getVisibleText(page).replace(/\s+/g, " ")).toContain("Page 1 of 1");

    getPublishedPostListResultMock.mockResolvedValue({ status: "ok", posts: [] });

    await expect(BlogPage({ searchParams: Promise.resolve({}) })).rejects.toThrow(
      "NEXT_NOT_FOUND",
    );
    expect(notFoundMock).toHaveBeenCalledOnce();
  });

  it("keeps the feed's explicit degraded response and healthy non-empty RSS path", async () => {
    getPublishedPostListResultMock.mockResolvedValue({
      status: "source_unavailable",
      error: "database unavailable",
    });

    const degradedResponse = await getFeed();

    expect(degradedResponse.status).toBe(503);
    expect(degradedResponse.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(degradedResponse.headers.get("Cache-Control")).toBe("no-store, max-age=0");
    await expect(degradedResponse.text()).resolves.toBe("RSS feed is temporarily unavailable.");

    getPublishedPostListResultMock.mockResolvedValue({ status: "ok", posts: [post] });

    const healthyResponse = await getFeed();
    const healthyBody = await healthyResponse.text();

    expect(healthyResponse.status).toBe(200);
    expect(healthyResponse.headers.get("Content-Type")).toBe(
      "application/rss+xml; charset=utf-8",
    );
    expect(healthyBody).toContain("<item>");
    expect(healthyBody).toContain("<title>Database post</title>");
    expect(healthyBody).toContain("/blog/database-post</link>");
  });

  it("returns the exact degraded feed instead of an empty healthy 200", async () => {
    getPublishedPostListResultMock.mockResolvedValue({ status: "ok", posts: [] });

    const response = await getFeed();

    expect(response.status).toBe(503);
    expect(response.headers.get("Content-Type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("Cache-Control")).toBe("no-store, max-age=0");
    await expect(response.text()).resolves.toBe("RSS feed is temporarily unavailable.");
  });
});
