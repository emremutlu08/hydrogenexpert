import { cache } from "react";

import type { PostRecord } from "./database.types";
import { getSupabaseClient } from "./supabase";

export interface PostSummary {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  coverImage: string | null;
  readingTime: number | null;
  publishedAt: string | null;
}

export type PublishedPost = Pick<
  PostRecord,
  | "id"
  | "title"
  | "slug"
  | "content"
  | "excerpt"
  | "meta_description"
  | "published_at"
  | "updated_at"
  | "reading_time"
  | "cover_image"
  | "status"
>;

export type PublishedPostListResult =
  | { status: "ok"; posts: PostSummary[] }
  | { status: "source_unavailable"; error: string };

export type PublishedPostDetailResult =
  | { status: "ok"; post: PublishedPost }
  | { status: "not_found" }
  | { status: "source_unavailable"; error: string };

function mapSummary(
  post: Pick<
    PostRecord,
    "slug" | "title" | "excerpt" | "meta_description" | "published_at" | "reading_time" | "cover_image"
  >,
): PostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.cover_image,
    readingTime: post.reading_time,
    metaDescription:
      post.meta_description ||
      "Plain-English Shopify Hydrogen guidance for store owners comparing speed, cost, and migration fit.",
    publishedAt: post.published_at,
  };
}

export const getPublishedPostListResult = cache(async (): Promise<PublishedPostListResult> => {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      status: "source_unavailable",
      error: "Supabase is not configured for published post reads.",
    };
  }

  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, excerpt, meta_description, published_at, reading_time, cover_image")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) {
    return {
      status: "source_unavailable",
      error: error?.message || "Published post reads returned no data.",
    };
  }

  return {
    status: "ok",
    posts: data.map(mapSummary),
  };
});

export const getPublishedPosts = cache(async (): Promise<PostSummary[]> => {
  const result = await getPublishedPostListResult();

  return result.status === "ok" ? result.posts : [];
});

export const getPublishedPostBySlugResult = cache(
  async (slug: string): Promise<PublishedPostDetailResult> => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return {
        status: "source_unavailable",
        error: "Supabase is not configured for published post reads.",
      };
    }

    const { data, error } = await supabase
      .from("posts")
      .select(
        "id, title, slug, content, excerpt, meta_description, published_at, updated_at, reading_time, cover_image, status",
      )
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) {
      return {
        status: "source_unavailable",
        error: error.message,
      };
    }

    if (!data) {
      return { status: "not_found" };
    }

    return { status: "ok", post: data };
  },
);

export const getPublishedPostBySlug = cache(
  async (slug: string): Promise<PublishedPost | null> => {
    const result = await getPublishedPostBySlugResult(slug);

    return result.status === "ok" ? result.post : null;
  },
);

export async function getPublishedPostSlugs(): Promise<string[]> {
  const result = await getPublishedPostListResult();

  return result.status === "ok" ? result.posts.map((post) => post.slug) : [];
}
