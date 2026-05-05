# Deployment QA Checklist

Use this before production deployment and again after the live deployment is available.

## Required Validation

- [ ] Pull request exists before production deployment.
- [ ] `npm run lint` passed.
- [ ] `npm run typecheck` passed.
- [ ] `npm run build` passed.
- [ ] `npm run audit:shopify-claims` passed or all review flags are explained.
- [ ] `npm run validate:content` passed when content validation is in scope.
- [ ] Sitemap works locally or in preview.
- [ ] Robots works locally or in preview.
- [ ] Metadata and canonical tags are present on touched pages.
- [ ] JSON-LD matches visible page content.
- [ ] Lead form renders and submits in the expected environment.
- [ ] CTA links work.
- [ ] Mobile layout has no horizontal overflow on touched pages.
- [ ] No draft, TODO, placeholder source notes, or private editorial notes are visible.

## Production Verification

- [ ] Live URL returns HTTP 200.
- [ ] Apex canonical URL is used.
- [ ] `/sitemap.xml` returns expected URLs.
- [ ] `/robots.txt` references the sitemap.
- [ ] Touched pages are indexable unless intentionally noindexed.
- [ ] Schema-bearing source is present in rendered HTML.
- [ ] Form submission path is still protected by Turnstile/rate limiting.
- [ ] PR is merged or closed after deployment verification.
- [ ] Remote branch is deleted after merge/close unless Emre requests otherwise.

## PR Summary Notes

Include the deployment URL, commit hash, validation commands, claim audit result, and any manual follow-up such as Search Console submission.
