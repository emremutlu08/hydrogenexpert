import type { PublishedPost } from "@/lib/posts";
import type { PostFaqItem, PostReferenceLink } from "@/lib/post-enhancements";

function formatVisibleDate(value: string | null | undefined) {
  if (!value) {
    return "recently";
  }

  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function buildFaqSchema(faq: PostFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

interface MarkdownOptions {
  faq?: PostFaqItem[];
  internalLinks?: PostReferenceLink[];
  externalLinks?: PostReferenceLink[];
  closingPitch?: string;
}

export function buildPostMarkdown(post: PublishedPost, options: MarkdownOptions = {}) {
  const parts: string[] = [];

  parts.push(`# ${post.title}`);
  parts.push("");
  parts.push(
    `By Emre Mutlu, creator of the world's first English Shopify Hydrogen course on Udemy. ${formatVisibleDate(post.published_at)}.`,
  );
  parts.push("");
  parts.push(`Published: ${formatVisibleDate(post.published_at)}`);
  parts.push(`Last updated: ${formatVisibleDate(post.updated_at || post.published_at)}`);

  if (post.reading_time) {
    parts.push(`Reading time: ${post.reading_time} min`);
  }

  if (post.excerpt || post.meta_description) {
    parts.push("");
    parts.push("## TL;DR");
    parts.push("");
    parts.push(post.excerpt || post.meta_description);
  }

  parts.push("");
  parts.push(post.content.trim());

  if (options.faq?.length) {
    parts.push("");
    parts.push("## FAQ");
    parts.push("");

    for (const item of options.faq) {
      parts.push(`### ${item.question}`);
      parts.push("");
      parts.push(item.answer);
      parts.push("");
    }

    parts.push("```json");
    parts.push(JSON.stringify(buildFaqSchema(options.faq), null, 2));
    parts.push("```");
  }

  if (options.internalLinks?.length) {
    parts.push("");
    parts.push("## Internal links");
    parts.push("");
    for (const item of options.internalLinks) {
      parts.push(`- [${item.label}](${item.href})`);
      parts.push(`  ${item.note}`);
    }
  }

  if (options.externalLinks?.length) {
    parts.push("");
    parts.push("## External references");
    parts.push("");
    for (const item of options.externalLinks) {
      parts.push(`- [${item.label}](${item.href})`);
      parts.push(`  ${item.note}`);
    }
  }

  if (options.closingPitch) {
    parts.push("");
    parts.push(options.closingPitch);
  }

  return parts.join("\n").trim() + "\n";
}
