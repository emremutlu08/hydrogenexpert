# HydrogenExpert Operating Rules

This file defines how Codex should work inside this repository. When Emre says "operating rules'a göre yap", follow this file unless a newer direct instruction overrides it.

## Local Project Address

- Canonical local path: `/Users/emremutlu/Apps/Codex/hydrogenexpert`
- If a future Codex session starts elsewhere, use this path first for HydrogenExpert work.
- Terminal command:

```bash
cd "/Users/emremutlu/Apps/Codex/hydrogenexpert"
```

## Default Workflow

1. Inspect before editing.
2. Make only requested or clearly necessary changes.
3. Preserve unrelated worktree changes. Never revert user work unless Emre explicitly asks.
4. Do not invent metrics, testimonials, screenshots, logos, ratings, client quotes, approvals, revenue, conversion numbers, or performance numbers.
5. Keep the solo senior Shopify Hydrogen operator positioning. Do not turn the site into generic agency language.
6. Run `npm run lint` and `npm run build` after code/content-rendering changes.
7. Use a feature branch for every meaningful change.
8. Open a pull request before treating the work as complete.
9. Push the branch and deploy to production after validation unless Emre explicitly says not to.
10. Update `CHANGELOG.md` with the PR number, PR link, deployment note, files changed, and verification summary.
11. Final response should include the PR link, deployment status, commit hash, validation result, and remaining manual tasks.

## Branch And PR Workflow

1. Start from the current main branch unless Emre asks for another base.
2. Create a branch with the `codex/` prefix.
3. Commit focused changes with a clear message.
4. Push the branch to GitHub.
5. Open a pull request into `main`.
6. If the PR number is needed for `CHANGELOG.md`, update the changelog after the PR exists and push that follow-up commit to the same branch.
7. Deploy the validated branch to production.
8. Do not merge the PR unless Emre explicitly asks.

## Blog Publishing Workflow

1. Convert raw notes into public-safe English.
2. Remove private task chats, admin screenshots, Slack/project-management details, internal review notes, AI scores, and draft weaknesses.
3. Use the site structure: SEO title, slug, meta description, TL;DR, H2/H3 flow, FAQ, official references, internal links, and closing CTA.
4. Publish through the Supabase `posts` table.
5. Add public enhancements in `lib/post-enhancements.ts` when useful.
6. Run `npm run lint` and `npm run build`.
7. Deploy to production.
8. Verify the live post, blog index, sitemap, schema-bearing source, and absence of private notes.
9. Update `CHANGELOG.md` with the PR and live URL.

## Design Workflow

1. Match the current visual system before inventing a new pattern.
2. Fix spacing and alignment with grid/layout structure first.
3. Avoid "AI slop", generic SaaS cards, and agency-dashboard layouts.
4. Do not add new claims while improving UI.
5. Verify desktop and mobile behavior.
6. Keep components responsive without hiding important navigation or proof.

## SEO Workflow

1. Check title, H1, description, canonical, robots, sitemap, schema, internal links, and image attributes.
2. Do not keyword-stuff.
3. Prioritize merchant-readable content over SEO filler.
4. Use official Shopify, Google, React, or platform documentation for technical claims.
5. Validate live pages after deploy.
6. External actions such as Google Search Console submit, Medium canonical setup, and third-party profile edits should be reported as manual tasks unless Codex has direct access.

## Safety Rules

1. Missing assets may use safe fallbacks.
2. Missing content must not be invented.
3. Do not publish fake testimonials, fake metrics, fake logos, fake screenshots, or unsupported claims.
4. Keep this positioning sentence unchanged wherever it appears:
   "Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in."
5. Do not auto-merge pull requests.
