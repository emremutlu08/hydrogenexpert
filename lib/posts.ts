import { cache } from "react";

import type { PostRecord } from "@/lib/database.types";
import { getSupabaseClient } from "@/lib/supabase";

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

export const getPublishedPosts = cache(async (): Promise<PostSummary[]> => {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("posts")
    .select("slug, title, excerpt, meta_description, published_at, reading_time, cover_image")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) {
    return [];
  }

  return data.map(mapSummary);
});

export const getPublishedPostBySlug = cache(
  async (slug: string): Promise<PublishedPost | null> => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return null;
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
      return null;
    }

    return data;
  },
);

export async function getPublishedPostSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((post) => post.slug);
}
