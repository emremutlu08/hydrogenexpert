# SEO Keyword Opportunity Automation

Status: Active
Last updated: 2026-09-11
Owner: Emre
Source of truth: `scripts/seo-keyword-opportunities.ts`, `features/seo-intelligence/keyword-opportunities.ts`, Google Search Console, Google Ads Keyword Planner

## Purpose

The weekly opportunity run combines observed HydrogenExpert Search Console behavior with directional Keyword Planner demand. It produces a review queue without creating advertisements, publishing content, changing indexation, or deciding that a new URL is required.

## Run

```bash
npm run seo:opportunities
```

The default command prints a Markdown report and does not write into the repository. Add `-- --json` for machine-readable output or `-- --write` for dated Markdown and JSON files under `content/internal/reports/`.

Use a manually downloaded English Keyword Planner export when Google Ads API access is unavailable:

```bash
npm run seo:opportunities -- --planner-csv /absolute/path/to/keyword-planner.csv
```

Raw Keyword Planner exports belong under `content/internal/keyword-planner/` only when a local stable path is useful. That directory's CSV files are ignored and must not be committed.

Google Trends is reported as blocked until HydrogenExpert receives supported access to the limited official Trends API alpha. The Gemini web interface is not automated because it is experimental, interactive, and does not provide a stable unattended data contract.

## Required Access

Search Console uses the existing local Google OAuth token and requires `https://www.googleapis.com/auth/webmasters.readonly`.

Automated Keyword Planner reads require:

- `GOOGLE_ADS_CUSTOMER_ID`, a 10-digit Google Ads customer ID;
- an OAuth token containing `https://www.googleapis.com/auth/adwords`, optionally at `GOOGLE_ADS_TOKEN_PATH`;
- Google Cloud project approval for Google Ads API keyword research;
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` when access is through a manager account;
- `GOOGLE_ADS_DEVELOPER_TOKEN` only while the selected Google Ads API access path still requires the legacy header.

The implementation defaults to Google Ads API `v25`; override with `GOOGLE_ADS_API_VERSION` only after verifying the selected version in current official documentation.

## Targeting

The API run uses English, Google Search only, and these separate markets:

- United States;
- United Kingdom;
- Canada;
- Australia.

The report preserves market-level rows and labels their sum as combined target-market volume. It does not claim that Keyword Planner volume is exact organic demand.

Search Console action decisions use pages that each hold at least 10% of exact-query impressions, with a five-impression floor. Reported position is weighted across that material page set so incidental one-impression URLs do not distort the recommendation.

## Decision Contract

- `resolve_cannibalization`: multiple pages each receive at least 10% of exact-query impressions, with a five-impression floor; confirm the intended owner before changing URLs.
- `refresh_existing`: one observed owner ranks between positions 4 and 20 with at least 10 impressions; improve that page first.
- `protect_existing`: an observed owner ranks above position 4 with at least 10 impressions; avoid a competing URL.
- `validate_new_intent`: Keyword Planner reports demand but GSC has no exact-query evidence; inspect the live SERP and existing content before proposing a page.
- `hold`: evidence is insufficient for a content decision.

Google Ads competition and bid fields are commercial-demand signals, not SEO difficulty. No action in the report bypasses HydrogenExpert content governance or article-specific publication approval.
