# Cannibalization Map

Source: Search Console, 90 days to 2026-07-26, queries with at least 15 impressions.
Baseline is the **live site**, so `/shopify-hydrogen-developer` and `/shopify-hydrogen-experts`
still appear. PR #99 retires both, and they participate in almost every cluster below,
so each cluster is smaller than the raw numbers suggest.

Do not act on this before PR #99 has been live for 4 to 6 weeks. Consolidating a second
cluster while the first is still being reprocessed makes the result unreadable.

## Priority 1: agency

**501 impressions at stake.** Queries: `shopify hydrogen agency` (372), `shopify hydrogen agency "` (68), `hydrogen shopify agency` (34), `shopify hydrogen agentur` (27).

Ten distinct URLs compete on the main query. After PR #99 removes two of them:

| URL | Impressions | Best position |
| --- | --- | --- |
| `/articles/shopify-hydrogen-developer-vs-agency` | 109 | **9.6** |
| `/services` | 75 | 9.5 |
| `/articles/shopify-hydrogen-development-cost-developer-agency-audit` | 31 | 15.1 |
| `/` | 27 | 32.2 |
| `/shopify-hydrogen-agency-usa` | 21 | 16.5 |
| `/headless-shopify-agency` | 9 | 16.5 |
| `/shopify-hydrogen-agency` | **0** | never appears |

Two findings, and the second changes the obvious answer.

**The page named `/shopify-hydrogen-agency` does not appear among the ten URLs ranking for `shopify hydrogen agency`.** Across all 90 days it draws 10 impressions in total, at position 79, and both of its queries are `shopify hydrogen experts` variants rather than agency wording. It has no equity to consolidate into.

**The equity for agency queries currently sits on `/shopify-hydrogen-experts`** (184 impressions at position 16.7), which PR #99 retires into `/shopify-hydrogen-expert`. So the hiring page is likely to absorb agency queries on its own, without a second migration.

That reframes the question. Google treats `agency`, `expert`, `developer`, and `services company` as one intent: the same URLs rotate across all of them. The site currently answers that one intent with a hiring page, an agency page, a US agency page, and a services hub.

**Recommendation: decide after PR #99, not before.** Two outcomes are possible and they call for opposite actions.

- If `/shopify-hydrogen-expert` starts ranking for agency queries, retire `/shopify-hydrogen-agency` and `/shopify-hydrogen-agency-usa` into it. One page owns "who do I hire", which is what the query data actually describes.
- If it does not, rebuild `/shopify-hydrogen-agency` as a genuinely distinct answer to "should I use an agency or an individual" rather than a keyword variant of the hiring page.

Building out `/shopify-hydrogen-agency` now, before that signal exists, repeats the mistake this whole exercise is correcting.

`/shopify-hydrogen-agency-usa` is retirable either way: 21 impressions at position 76 is a geo variant splitting a term, not reaching a US audience.

**Do not touch `/headless-shopify-agency`.** It is the only single-URL intent on the site (115 impressions, position 17.6) and it is the evidence consolidation works. It also holds position 7.5 on `shopify hydrogen agency`, the best of any URL, which suggests it is the page Google trusts for agency wording even though it rarely surfaces.

Stop `/services` and `/` from targeting agency wording, the same fix applied to `/articles` in PR #99.

## Priority 2: definitional and decision

**294 impressions at stake.** Queries: `hydrogen shopify` (102), `shopify hydrogen` (61), `what is shopify hydrogen` (55), `shopify hydrogen vs liquid` (30), `shopify hydrogen consultancy` (16), `hydrogen ecommerce` (15), `hydrogen shopify consultancy` (15).

| URL | Role today | Best position |
| --- | --- | --- |
| `/what-is-hydrogen` | leads every definitional query | 25.5 to 27.4 |
| `/should-i-use-it` | shadows all of them, never wins | 26.5 to 92.4 |
| `/shopify-hydrogen-vs-liquid` | own term only | 27.3 |
| `/when-not-to-use-hydrogen` | own angle | 65.4 |

`/what-is-hydrogen` is consistently the strongest and should stay canonical for definitional intent.

`/should-i-use-it` is the problem. It appears in six separate queries and wins none of them, always trailing a better page. It is a generalist that shadows three more specific pages.

**Recommendation.** Retire `/should-i-use-it` into `/shopify-hydrogen-vs-liquid`, which is the decision framework with its own query. Keep `/when-not-to-use-hydrogen`: it is nav-linked, holds a distinct contrarian angle, and is a genuine differentiator against agencies that recommend a rebuild by default.

## Priority 3: services and solutions

**158 impressions at stake.** Queries: `shopify hydrogen development` (63), `shopify hydrogen services` (62), `shopify hydrogen solutions` (33).

`/services` (position 36 to 57) competes with `/articles/shopify-hydrogen-development-cost-developer-agency-audit` (position 34) and `/articles/shopify-hydrogen-nextjs` (position 72.8).

This is a hub problem, not a duplicate-page problem. `/services` is an index that also targets commercial wording, exactly what `/articles` was doing before PR #99.

**Recommendation.** Metadata only. No redirects. Decide whether `/services` is an index or a commercial page and let it target one of the two.

## No action needed

**Cost.** `shopify hydrogen pricing` sits at **position 5.9**, the best commercial position on the site, and `/shopify-hydrogen-cost` owns it with 53 of 54 impressions. `/cost` and `/shopify-hydrogen-maintenance-cost` draw about 1 impression each in 90 days, so they are not splitting anything. Leave this cluster alone.

**SEO and audit pages.** `/shopify-hydrogen-seo` versus `/shopify-hydrogen-seo-guide`, and `/shopify-hydrogen-audit` versus `/shopify-hydrogen-fit-audit`, produce no query above the 15-impression threshold. There is not enough demand to be worth a migration.

**Vertical pages.** `/shopify-hydrogen-for-beauty-brands` (6 impressions in 90 days), `-for-luxury-jewelry` (3), `-for-large-catalog-retail` (1), `-for-dtc-education-brands` (0 observed). Weak, but they cannibalize nothing measurable. They are dead weight rather than active harm, so removing them is a content-strategy call and not an SEO fix.

## Sequencing

One cluster at a time, each with 4 to 6 weeks of observation. Two consolidations in flight cannot be told apart in the data.

1. PR #99, hiring cluster. Merged, observing.
2. Agency, 501 impressions.
3. Definitional and decision, 294 impressions.
4. Services metadata, 158 impressions.

Success is measured by competing-URL count per query, not clicks. At an average position near 19, second-page CTR is zero, so click movement will lag position movement by weeks.
