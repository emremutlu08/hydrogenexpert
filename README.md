# HydrogenExpert

Marketing site for `hydrogenexpert.co`, focused on Shopify Hydrogen strategy, lead generation, and merchant-friendly educational content.

## Accessibility Rule

All images in this project must include meaningful alt text.

- Use descriptive alt text for logos, content images, and interface graphics.
- Add a meaningful `title` attribute for every non-decorative image.
- If an image is truly decorative, use an empty alt value (`alt=""`).
- Keep this rule in mind for any future `next/image`, `img`, OG image, or CMS-driven media usage.

See [AGENTS.md](/Users/emremutlu/Documents/New project/hydrogenexpert/AGENTS.md) for the project rule that AI agents should follow.

## Layout System And DRY Rule

Repeated layout and styling patterns in this project must be implemented through shared components or shared CSS contracts, not duplicated page-local code.

- Use shared primitives such as `SectionHeader`, `MediaFrame`, `ProofCard`, `StatCard`, and shared form classes before introducing page-specific wrappers.
- Repeated page intro sections and FAQ sections must use shared wrappers such as `PageIntroSection` and `FaqSection` instead of re-copying the same section shell and details markup per page.
- Repeated proof/stat grids should use shared renderers such as `ProofCardGrid` and `StatCardGrid` so page files mostly own data, not duplicated mapping markup.
- Repeated two-column feature shells should use a shared wrapper such as `SplitFeatureSection` instead of copying the same section + grid structure with local spacing tweaks.
- FAQ JSON-LD should be generated through shared helpers such as `buildFaqPageSchema` instead of repeating schema object assembly in each page.
- Repeated process/step card rows should use `ProcessStepGrid` so numbering style and card rhythm stay in one place.
- When a page needs multiple JSON-LD entries, compose them through shared helpers such as `asSchemaArray` instead of hand-building ad hoc arrays in each page.
- Keep media sizing family-based:
  - selected work / preview cards use one shared preview ratio
  - technical figures use one shared figure ratio
  - compact post visuals use one shared compact ratio
- If a spacing, alignment, or sizing issue appears in multiple places, fix the shared primitive instead of adding one-off `mt-*`, `min-h-*`, or wrapper overrides inside a single page.
- Repeated pill navigation, card shells, and lead-form field rhythm should stay on the same shared contract so future visual updates only need one code change.
- Selected-work cards must share one media family, one brand/footer zone, and one label/title/body rhythm. Do not special-case a single brand card locally when the same family primitive can be updated once.
- Green uppercase labels for repeated card families must use a component-level shared block height so title rows stay aligned.

This DRY rule is permanent for future UI work on `hydrogenexpert.co`.

## Security Baseline

This project should keep a conservative security baseline in production.

- Keep security headers enabled in `next.config.ts`.
- API routes must return `no-store` cache headers unless there is a specific reason not to.
- Repeated public write endpoints should use shared security helpers from `lib/security.ts`, not ad hoc validation.
- Lead capture and cron-style endpoints should use durable rate limiting where available, with in-memory fallback only as a backup.
- If Cloudflare Turnstile is enabled, configure both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
- Do not deploy `.env*`, local QA scripts, or temporary files. Keep `.vercelignore` strict.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
