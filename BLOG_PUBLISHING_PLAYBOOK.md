# Blog Publishing Playbook

This playbook defines how raw notes become public HydrogenExpert blog posts. It exists to keep future posts useful, SEO-aware, and safe for production.

## Public Content Rules

- Public pages may include reader-facing content only: article body, TL;DR, FAQ, internal links, official references, diagrams, code examples, schema, and CTA.
- Never publish internal review notes, self-scores, draft weaknesses, missing-material notes, AI citation scores, or private editorial commentary.
- If a fact is missing, either omit it or show a clear public placeholder only when the page intentionally needs it. Never invent metrics, testimonials, client quotes, ratings, or unsupported claims.
- Keep the positioning direct: senior solo Shopify Hydrogen operator, business-first, anti-hype, and honest about when Hydrogen is not the right move.

## Post Structure

- Use an English SEO title, clean lowercase slug, 140-155 character meta description, concise excerpt, and a strong TL;DR.
- Structure the article with H2/H3 sections that match real search intent and likely follow-up questions.
- For technical posts, include practical evidence when available: TypeScript snippets, variant matrices, before/after tables, diagrams, screenshots, or test cases.
- Add FAQ items when they answer questions people would realistically search for.
- Add official references for technical claims, especially Shopify docs, React docs, GitHub issues, or changelogs.
- Add or update internal source metadata in `lib/content-sources.ts` for Shopify-related posts.
- Add internal links to the strongest related HydrogenExpert pages and end with the standard direct CTA.

## SEO Checklist

- Confirm the primary query and the long-tail query before publishing.
- Decide whether the post is a pillar page or a supporting cluster article.
- Include Article schema and FAQPage schema when FAQ exists.
- Confirm canonical URL, sitemap inclusion, blog index visibility, metadata, OG image, and readable published/updated dates.
- Do not expect one post to rank for broad "Shopify Hydrogen" terms alone. Build topical clusters around variants, SEO, performance, B2B, caching, migration, and production gotchas.

## Priority Cluster Queue

These are the next Supabase-backed posts to publish. They should be inserted or updated in `posts`, then paired with `lib/post-enhancements.ts` entries when a public article exists.

| Slug | Primary query | Role |
| --- | --- | --- |
| `shopify-hydrogen-vs-liquid` | `shopify hydrogen vs liquid` | Decision-stage comparison |
| `shopify-hydrogen-nextjs` | `shopify hydrogen nextjs` | Technical comparison |
| `liquid-to-hydrogen-migration-checklist` | `liquid to hydrogen migration` | Migration support article |
| `shopify-hydrogen-performance-checklist` | `shopify hydrogen performance` | Optimization support article |
| `shopify-hydrogen-seo-checklist` | `shopify hydrogen seo checklist` | SEO support article |
| `shopify-plus-hydrogen` | `shopify plus hydrogen` | Plus-brand commercial article |
| `shopify-hydrogen-developer-vs-agency` | `shopify hydrogen agency` | Buyer-intent comparison |

## Hydrogen Freshness Checklist

- Check current Shopify Hydrogen docs before publishing technical guidance.
- Use Shopify Dev MCP as the primary check for Shopify platform facts.
- Check the latest Hydrogen changelog or release notes before publishing API-specific guidance.
- Look for deprecations, especially around `VariantSelector`, `getProductOptions`, `getAdjacentAndFirstAvailableVariants`, Storefront API fields, SEO helpers, and routing behavior.
- Prefer "what the official docs do not explain in production" positioning over trying to outrank Shopify's official docs directly.
- If a post depends on a specific Hydrogen version or API pattern, say so clearly.

## Publishing Workflow

1. Convert raw notes into public-safe English copy in the site voice.
2. Separate private editorial comments from public article content before writing to Supabase.
3. Insert or update the Supabase `posts` row with title, slug, content, excerpt, meta description, tags, reading time, cover image, published date, and `published` status.
4. Add internal source metadata in `lib/content-sources.ts`, including `sourceMap`, `lastVerified`, claim classification, target keyword, search intent, reviewed-by owner, and content type where available.
5. Add optional public enhancements in `lib/post-enhancements.ts`: hero visual, FAQ, internal links, official external links, OG image, and closing pitch.
6. Do not add editorial scoring or review notes to `PostEnhancement`.
7. Run `npm run audit:shopify-claims`, `npm run lint`, `npm run typecheck`, and `npm run build`.
8. Deploy to production.
9. Verify the live article, blog index, sitemap, schema-bearing source, and absence of private notes.

## Reference Principles From Prior Reviews

- Public trust is damaged by showing internal scoring, draft weaknesses, or self-rated AI citation potential.
- The best position is not "I outrank Shopify docs"; it is "I solve the production edge cases official docs do not cover."
- Technical authority improves when posts include code, tables, diagrams, current API names, and concrete tests.
- SEO should be treated as a cluster strategy, not a single-post bet.
