import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

import { getApiHeaders, getClientIp, isRateLimitedDurable, safeCompare } from "@/lib/security";
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

const ANTHROPIC_MODELS = [
  process.env.ANTHROPIC_MODEL?.trim(),
  "claude-haiku-4-5-20251001",
  "claude-sonnet-4-20250514",
  "claude-3-haiku-20240307",
].filter((model): model is string => Boolean(model));
const GENERATION_ATTEMPTS = 3;

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

function sanitizeJsonResponse(input: string): string {
  const trimmed = input.trim();

  if (trimmed.startsWith("```")) {
    return trimmed.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  }

  return trimmed;
}

function stripHtml(input: string): string {
  return input.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function buildExcerpt(content: string, fallback: string): string {
  const plainText = stripHtml(content);

  if (plainText.length >= 140) {
    return `${plainText.slice(0, 157).trimEnd()}...`;
  }

  return fallback;
}

function calculateReadingTime(content: string): number {
  const wordCount = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.ceil(wordCount / 200));
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

  const contentWordCount = stripHtml(payload.content).split(/\s+/).filter(Boolean).length;

  if (contentWordCount < 800 || contentWordCount > 1200) {
    throw new Error("Generated article is outside the required word count.");
  }
}

async function generateCandidate(
  anthropic: Anthropic,
  topic: string,
  feedback?: string,
): Promise<{ rawText: string; model: string }> {
  for (const model of ANTHROPIC_MODELS) {
    try {
      const response = await anthropic.messages.create({
        model,
        max_tokens: 2400,
        temperature: 0.7,
        system:
          'You are a content writer for a Shopify development agency. Write a blog post for non-technical Shopify store owners — no code, plain English, merchant perspective. Format: JSON with fields title (max 60 chars), slug (lowercase-hyphenated), content (full HTML article, 800–1200 words), meta_description (140–155 chars). Return JSON only with no markdown fences.',
        messages: [
          {
            role: "user",
            content: [
              `Topic: ${topic}. Keep the tone direct, useful, and easy for a US Shopify store owner to follow.`,
              feedback,
            ]
              .filter(Boolean)
              .join("\n\n"),
          },
        ],
      });

      return {
        model,
        rawText: sanitizeJsonResponse(extractTextContent(response)),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : "";

      if (message.includes("not_found_error") || message.includes("model:")) {
        continue;
      }

      throw error;
    }
  }

  throw new Error("No supported Anthropic model was available for this account.");
}

export async function POST(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const expectedAuth = cronSecret ? `Bearer ${cronSecret}` : "";
  const authorization = request.headers.get("authorization");
  const ip = getClientIp(request);
  const supabase = getSupabaseClient();
  const supabaseAdmin = getSupabaseAdminClient();

  if (!cronSecret || !authorization || !safeCompare(authorization, expectedAuth)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401, headers: getApiHeaders() },
    );
  }

  if (
    await isRateLimitedDurable({
      supabase: supabaseAdmin,
      scope: "generate-post",
      identifier: ip,
      limit: 10,
      windowMs: 60 * 60 * 1000,
    })
  ) {
    return NextResponse.json(
      { success: false, error: "Too many generation attempts." },
      { status: 429, headers: getApiHeaders() },
    );
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (!anthropicKey || !supabase || !supabaseAdmin) {
    return NextResponse.json(
      { success: false, error: "Missing Anthropic or Supabase configuration." },
      { status: 500, headers: getApiHeaders() },
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
      { status: 500, headers: getApiHeaders() },
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
    }, { headers: getApiHeaders() });
  }

  const anthropic = new Anthropic({ apiKey: anthropicKey });
  let payload: GeneratedPostPayload | null = null;
  let selectedModel = ANTHROPIC_MODELS[0];
  let lastValidationError = "Unknown generation failure.";

  try {
    for (let attempt = 1; attempt <= GENERATION_ATTEMPTS; attempt += 1) {
      const feedback =
        attempt === 1
          ? undefined
          : `The previous draft failed validation: ${lastValidationError}. Fix every issue exactly. Keep title at 60 chars or fewer, meta description between 140 and 155 chars, slug lowercase hyphenated, and article body between 800 and 1200 words.`;
      const candidate = await generateCandidate(anthropic, topic, feedback);

      selectedModel = candidate.model;

      try {
        const parsed = JSON.parse(candidate.rawText) as unknown;

        if (!isGeneratedPostPayload(parsed)) {
          throw new Error("Response JSON did not match the expected shape.");
        }

        validatePayload(parsed);
        payload = parsed;
        break;
      } catch (error) {
        lastValidationError =
          error instanceof Error ? error.message : "Generated post validation failed.";

        if (attempt === GENERATION_ATTEMPTS) {
          throw error;
        }
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate a valid post.",
        topic,
        model: selectedModel,
      },
      { status: 500, headers: getApiHeaders() },
    );
  }

  if (!payload) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate a valid post after multiple attempts.",
        topic,
        model: selectedModel,
      },
      { status: 500, headers: getApiHeaders() },
    );
  }

  const { error: insertError } = await supabaseAdmin.from("posts").insert({
    title: payload.title,
    slug: payload.slug,
    content: payload.content,
    excerpt: buildExcerpt(payload.content, payload.meta_description),
    meta_description: payload.meta_description,
    tags: ["Shopify Hydrogen", "Store Owner Guide"],
    reading_time: calculateReadingTime(payload.content),
    status: "published",
  });

  if (insertError) {
    return NextResponse.json(
      { success: false, error: insertError.message },
      { status: 500, headers: getApiHeaders() },
    );
  }

  return NextResponse.json(
    { success: true, slug: payload.slug, model: selectedModel },
    { headers: getApiHeaders() },
  );
}
