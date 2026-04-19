import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

import { getSupabaseAdminClient, getSupabaseClient } from "@/lib/supabase";

const TOPICS = [
  "How much does a Hydrogen storefront cost",
  "Hydrogen vs Liquid speed comparison for store owners",
  "Is Hydrogen worth it for a $2M Shopify store",
  "When a Shopify theme is no longer enough",
  "How long does a Hydrogen migration take",
  "What store owners should fix before moving to Hydrogen",
  "Signs your mobile shopping experience needs Hydrogen",
  "How Hydrogen can help premium brands sell online",
  "What makes a Shopify storefront feel fast to shoppers",
  "Do you need Hydrogen for better conversion rate",
  "How to budget a custom Shopify storefront rebuild",
  "What merchants should know before leaving a Shopify theme",
  "Is Hydrogen only for enterprise Shopify brands",
  "How Hydrogen affects merchandising and storytelling",
  "Questions to ask before hiring a Hydrogen developer",
  "What can go wrong in a Hydrogen migration",
  "When Hydrogen helps subscription and loyalty experiences",
  "Can Hydrogen improve large-catalog shopping experiences",
  "How to explain Hydrogen to a non-technical team",
  "Should fast-growing Shopify brands plan for Hydrogen now",
] as const;

interface GeneratedPostPayload {
  title: string;
  slug: string;
  content: string;
  meta_description: string;
}

function normalizeText(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateSimilarity(a: string, b: string): number {
  const aTokens = new Set(normalizeText(a).split(" "));
  const bTokens = new Set(normalizeText(b).split(" "));
  const overlap = [...aTokens].filter((token) => bTokens.has(token)).length;
  const union = new Set([...aTokens, ...bTokens]).size;

  return union === 0 ? 0 : overlap / union;
}

function selectTopic(): string {
  const daysSinceEpoch = Math.floor(Date.now() / 86_400_000);
  return TOPICS[daysSinceEpoch % TOPICS.length];
}

function extractTextContent(response: Anthropic.Messages.Message): string {
  return response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
}

function isGeneratedPostPayload(value: unknown): value is GeneratedPostPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.title === "string" &&
    typeof candidate.slug === "string" &&
    typeof candidate.content === "string" &&
    typeof candidate.meta_description === "string"
  );
}

function validatePayload(payload: GeneratedPostPayload) {
  if (payload.title.length > 60) {
    throw new Error("Generated title is too long.");
  }

  if (
    payload.meta_description.length < 140 ||
    payload.meta_description.length > 155
  ) {
    throw new Error("Generated meta description is outside the required range.");
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(payload.slug)) {
    throw new Error("Generated slug is invalid.");
  }

  const contentWordCount = payload.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;

  if (contentWordCount < 800 || contentWordCount > 1200) {
    throw new Error("Generated article is outside the required word count.");
  }
}

export async function POST(request: Request) {
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  const authorization = request.headers.get("authorization");

  if (!process.env.CRON_SECRET || authorization !== expectedAuth) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const supabase = getSupabaseClient();
  const supabaseAdmin = getSupabaseAdminClient();

  if (!anthropicKey || !supabase || !supabaseAdmin) {
    return NextResponse.json(
      { success: false, error: "Missing Anthropic or Supabase configuration." },
      { status: 500 },
    );
  }

  const topic = selectTopic();
  const { data: existingPosts, error: existingError } = await supabase
    .from("posts")
    .select("title")
    .eq("status", "published");

  if (existingError) {
    return NextResponse.json(
      { success: false, error: existingError.message },
      { status: 500 },
    );
  }

  const similarPost = existingPosts.find(
    (post) => calculateSimilarity(post.title, topic) >= 0.7,
  );

  if (similarPost) {
    return NextResponse.json({
      success: true,
      skipped: true,
      reason: `Similar post already exists: ${similarPost.title}`,
    });
  }

  const anthropic = new Anthropic({ apiKey: anthropicKey });
  const response = await anthropic.messages.create({
    model: "claude-3-5-haiku-20241022",
    max_tokens: 2400,
    temperature: 0.7,
    system:
      'You are a content writer for a Shopify development agency. Write a blog post for non-technical Shopify store owners — no code, plain English, merchant perspective. Format: JSON with fields title (max 60 chars), slug (lowercase-hyphenated), content (full HTML article, 800–1200 words), meta_description (140–155 chars).',
    messages: [
      {
        role: "user",
        content: `Topic: ${topic}. Keep the tone direct, useful, and easy for a US Shopify store owner to follow.`,
      },
    ],
  });

  const rawText = extractTextContent(response);

  let payload: GeneratedPostPayload;

  try {
    const parsed = JSON.parse(rawText) as unknown;

    if (!isGeneratedPostPayload(parsed)) {
      throw new Error("Response JSON did not match the expected shape.");
    }

    payload = parsed;
    validatePayload(payload);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to parse generated post.",
      },
      { status: 500 },
    );
  }

  const { error: insertError } = await supabaseAdmin.from("posts").insert({
    title: payload.title,
    slug: payload.slug,
    content: payload.content,
    meta_description: payload.meta_description,
    status: "published",
  });

  if (insertError) {
    return NextResponse.json(
      { success: false, error: insertError.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, slug: payload.slug });
}
