# HydrogenExpert Planning

## Stack Findings

- Framework: Next.js 16.2.4 with App Router
- React: 19.2.4
- Styling: Tailwind CSS v4 via `app/globals.css` and `postcss.config.mjs`
- Shared layout: `app/layout.tsx`
- Shared nav/footer: `components/Header.tsx`, `components/Footer.tsx`
- Blog source: Supabase `posts` table via `lib/posts.ts`
- Package manager: npm (`package-lock.json`)
- Local runtime verified: Node v22.18.0, npm v11.9.0
- Build command: `npm run build`
- Other checks available: `npm run lint`
- Deployment hints: Vercel + Supabase + GA + Turnstile in `DEPLOY.md`, `vercel.json`, and `scripts/deploy.sh`

## File Map

| Route | Actual file |
| --- | --- |
| `/` | `app/page.tsx` |
| `/hire-me` | `app/hire-me/page.tsx` |
| `/case-studies` | `app/case-studies/page.tsx` |
| `/cost` | `app/cost/page.tsx` |
| `/should-i-use-it` | `app/should-i-use-it/page.tsx` |
| `/what-is-hydrogen` | `app/what-is-hydrogen/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/agency` | `app/agency/page.tsx` |

## Component Map

- Root layout: `app/layout.tsx`
- Header and main navigation: `components/Header.tsx`
- Footer and footer navigation: `components/Footer.tsx`
- Shared CTA block: `components/CTASection.tsx`
- Shared lead form: `components/LeadCaptureForm.tsx`
- Shared intro/section primitives:
  - `components/PageIntroSection.tsx`
  - `components/SectionHeader.tsx`
  - `components/FaqSection.tsx`
  - `components/SelectedWorkGrid.tsx`

## Phase Plan

| Phase | Summary | Pre-conditions | Expected effort |
| --- | --- | --- | --- |
| Phase 0 | Route, nav, footer, CTA, blog, and documentation hygiene | Plan approved | 1 session |
| Phase 1 | Founder card, teaching proof, clickable social proof | None, but asset fallbacks allowed | 1 session |
| Phase 2.1 | Single strong case studies page with structured sections | Real content inventory required | 1-2 sessions |
| Phase 2.3 | Logo wall with real logos or neutral chips | Logo assets optional, chip fallback allowed | 1 session |
| Phase 3.1 | Interactive Hydrogen-fit quiz | Earlier phases approved | 1 session |
| Phase 3.2 | Long-form “when not to use Hydrogen” SEO page | Earlier phases approved | 1 session |

## Open Questions

- No blocking questions remain for Phase 0.
- Future dependency: real engagement package copy is still needed before `/services` can be promoted into the main nav.
- Future dependency: Phase 2.1 still requires real case study content for metrics, testimonials, and outcome copy.

## Risks Identified

- The repo is in a dirty worktree, so unrelated in-flight changes must be preserved.
- Blog visibility depends on Supabase content, not local markdown files.
- `/agency` appears in multiple route/data references and needs a clean transition to `/services`.
- Several later-phase assets are not yet present in `public/`, so those phases must rely on safe fallbacks instead of invented proof.
