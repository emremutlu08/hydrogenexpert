# HydrogenExpert V1 Closure Checklist

Last updated: May 7, 2026

Status values: Done, Failed, Needs manual review

| Area | Check | Result | Notes |
| --- | --- | --- | --- |
| Install | `npm install` | Done | Up to date, 0 vulnerabilities. |
| Typecheck | `npm run typecheck` | Done | `tsc --noEmit` passed. |
| Lint | `npm run lint` | Done | ESLint passed. |
| Tests | `npm run test` | Done | 10 files, 37 tests passed. |
| Shopify claim audit | `npm run audit:shopify-claims` | Done | 0 pages need source review. |
| Build | `npm run build` | Done | Next.js build passed, 51 routes generated. |
| Diff hygiene | `git diff --check` | Done | No whitespace errors. |
| Public copy cleanup | Internal/template phrases search | Done | No public source hits for targeted phrases. |
| Short answer grammar | Bad pattern search | Done | No source hits for targeted broken patterns. |
| Footer taxonomy | Primary service links | Done | Footer links all primary commercial service paths. |
| Email brief CTA | Anchor and event | Done | Uses tracked links to `#fit-review-form` or `/contact#fit-review-form`. |
| Articles empty state | Header nav gating | Done | Header hides Articles until public articles exist; `/articles` remains accessible. |
| Route smoke | Local production fetch | Done | Sampled public routes returned expected statuses. |
| Mobile/desktop browser QA | Playwright probe | Done | Sampled pages had one H1, no horizontal overflow, and no Articles top nav. |
| Quiz QA | Playwright 3/5 interaction | Done | Result rendered correctly. |
| Form QA | API probes | Done | Honeypot, required fields, invalid email, and origin checks passed. |
| Supabase insert | Real production lead insert | Needs manual review | Avoided creating a real lead row during local closure run. |
| Turnstile configured path | Production env behavior | Needs manual review | Requires live env verification. |
| Rate limit | Production IP/window behavior | Needs manual review | Requires controlled production or staging test. |
| Analytics QA | Event helper tests and docs | Done | Dedicated CTA, lead, quiz, card, and read-depth events documented. |
| SEO QA | Route table and smoke checks | Done | Metadata/canonical/sitemap/robots documented and sampled locally. |
| Link audit | Local internal crawl | Done | 40 routes visited, no internal 404s, future article leaks absent. |
| Proof registry | `proof-registry.md` | Done | Claims mapped to source/evidence notes and risk levels. |
| Sales kit | `docs/hydrogenexpert-v1/sales/*` | Done | Response, questions, offer, proposal, and scope boundaries created. |
| Audit template | Fit & Risk Audit template | Done | Client-ready decision memo structure created. |
| Technical checklist | Hydrogen technical audit checklist | Done | Repeatable table format created. |
| Case study consistency | Existing case template review | Done | Shared case-study route already includes proof brief, limitations, relevant paths, and CTA. |
| Legal hygiene | Privacy/cookies/terms pass | Done | Last updated date added; privacy form fields match implementation. |

## Open Manual Items

- Submit one real production test lead and verify Supabase row, source fields, qualification fields, success state, and optional Turnstile behavior.
- Re-run external proof links after deployment; third-party profiles can block automated checks.
- After production deployment, verify live `/sitemap.xml`, `/robots.txt`, `/contact#fit-review-form`, and all primary footer service links.

## Closure Verdict

P0 closure tasks are code-complete and locally verified. Remaining items are production-environment QA, not new feature work.
