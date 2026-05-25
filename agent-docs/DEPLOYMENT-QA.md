# Deployment QA

Status: Active
Last updated: 2026-05-25
Owner: Agent
Source of truth: Current repo, Vercel workflow, deployment QA checklist

1. Create a pull request for deployment changes before taking them live.
2. Run the planned validation for the change: `npm run audit:shopify-claims` when Shopify-related content changed, `npm run lint`, `npm run typecheck`, and `npm run build`.
3. Use [docs/DEPLOYMENT_QA_CHECKLIST.md](/Users/emremutlu/Apps/Codex/hydrogenexpert/docs/DEPLOYMENT_QA_CHECKLIST.md) for pre-deploy and live verification.
4. Buy the `hydrogenexpert.co` domain through Spaceship (roughly $9.32/year at the time of writing) if the domain is not already owned.
5. Run the Supabase migrations in order from [supabase/migrations](/Users/emremutlu/Apps/Codex/hydrogenexpert/supabase/migrations).
6. Fill in [.env.local](/Users/emremutlu/Apps/Codex/hydrogenexpert/.env.local) with real values for Supabase, including `SUPABASE_SERVICE_ROLE_KEY`, plus Anthropic, GA4, Search Console, and the cron secret.
7. Optional but recommended: add Cloudflare Turnstile keys:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
8. Run `bash scripts/deploy.sh`.
9. Add the custom domain in the Vercel dashboard and point it to `hydrogenexpert.co`.
10. Verify Google Search Console using the `GOOGLE_SITE_VERIFICATION` meta tag value.
11. Create a GA4 property, copy the Measurement ID, and update `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.
12. Mark the `cta_click` GA4 event as a conversion.
13. Apply the latest Supabase migration for durable request rate limiting before production traffic.
14. After deployment is live and verified, merge or close the pull request and delete the corresponding remote branch unless Emre explicitly asks for a different release flow.

## Required Validation

- Pull request exists before production deployment.
- `git diff --check` passes.
- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run test` passes when code behavior or guardrails changed.
- `npm run validate:content` passes when content, docs routing, or public copy is in scope.
- `npm run audit:shopify-claims` passes after Shopify-related content changes.
- `NEXT_PUBLIC_SITE_URL=https://hydrogenexpert.co npm run build` passes after code/content-rendering changes.
- `npm run verify:internal-links` passes against preview, local production server, or live URL when routes/internal links changed.

## Production Verification

- Live URL returns HTTP 200.
- Apex canonical URL is used.
- `/sitemap.xml` returns expected URLs.
- `/robots.txt` references the sitemap.
- Touched pages are indexable unless intentionally noindexed.
- Schema-bearing source is present in rendered HTML when schema changed.
- Form submission path remains protected by Turnstile/rate limiting.
- PR is merged or closed after deployment verification.
- Remote branch is deleted after merge/close unless Emre requests otherwise.

## PR Summary Notes

Include the deployment URL, commit hash, validation commands, claim audit result, touched public URLs, and any manual follow-up such as Search Console submission.
