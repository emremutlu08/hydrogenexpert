# Cannibalization Map

Status: Active
Last updated: 2026-09-05
Owner: Emre
Source of truth: Search Console, current code, issue #132

## 2026-09-05 decision

The approved September 5 gate returned CONSOLIDATE on the 90-day window ending September 3. The canonical hiring destination is `/shopify-hydrogen-experts`, which leads both the experts and agency queries. This replaces the singular destination proposed in PR #99.

| Query | Competing URLs | Impressions | Leading URL |
| --- | ---: | ---: | --- |
| shopify hydrogen experts | 35 | 275 | /shopify-hydrogen-experts |
| shopify hydrogen agency | 12 | 510 | /shopify-hydrogen-experts |
| hire shopify hydrogen developers | 14 | 729 | /articles/shopify-hydrogen-developer-vs-agency |
| shopify hydrogen development experts | 25 | 531 | /shopify-hydrogen-expert |
| headless shopify agency | 1 | 439 | /headless-shopify-agency |

Agency URL count increased from 10 to 12 and the former agency owner remains absent. Retire developer, singular expert, agency, and agency-usa with direct permanent redirects. Keep the broader headless architecture page and educational guides separate. The older storefront-api-developer redirect must reach the final owner without a chain.

The remaining sections are historical observations, not current execution instructions. Track release and follow-up in [issue #132](https://github.com/emremutlu08/hydrogenexpert/issues/132). Preserve the July baseline and compare URL counts, owner presence, impressions, clicks, and positions at 7, 14, and 28 days; no ranking outcome is guaranteed.

## 2026-09-01 checkpoint

The 90-day window ending 2026-08-30 was compared with the 2026-07-28 baseline.
The measurement gate is still closed, so this checkpoint authorizes no redirect
or consolidation.

| Query | Baseline URLs | Current URLs | Intended owner | Status |
|---|---:|---:|---|---|
| `shopify hydrogen agency` | 10 | 12 | `/shopify-hydrogen-agency` | Owner absent; `/shopify-hydrogen-experts` leads. |
| `hydrogen shopify agency` | 7 | 8 | `/shopify-hydrogen-agency` | Owner absent; `/headless-shopify-agency` leads. |
| `shopify hydrogen agentur` | 6 | 6 | `/shopify-hydrogen-agency` | Owner absent. |
| `shopify hydrogen services company` | 3 | 3 | `/shopify-hydrogen-agency` | Owner absent; `/services` leads. |
| `headless shopify agency` | 1 | 1 | `/headless-shopify-agency` | Healthy control remains the sole owner. |

If the same main-query result persists when the gate opens on 2026-09-05, it
matches the consolidation condition: the intended agency owner is absent and
the competing-URL count has not fallen by 30%. Any resulting consolidation must
be a separate PR prepared from current `main`; old PR #99 remains reference only.
The executable decision rule now lives in
`features/search-intent/cannibalization-gate.ts` and is reported by
`npm run seo:cannibalization`.

## The open question

Two incompatible strategies address the same problem, and one of them is currently live.

**Distinct owners (#97, merged 2026-07-25).** Keep `/shopify-hydrogen-agency`,
`/shopify-hydrogen-experts`, `/shopify-hydrogen-expert`, and `/shopify-hydrogen-developer`
as separate pages, and route internal links so each intent has one clear owner.
Explicitly no redirects and no canonical consolidation.

**Consolidation (PR #99, open, not merged).** Over this 90-day window Search Console
rotates 36 distinct URLs for `shopify hydrogen experts`, 26 for `shopify hydrogen
development experts`, and 14 for `hire shopify hydrogen developers`, and the same URLs
recur across `agency`, `expert`, `developer`, and `services company`. That pattern says
Google reads these as one intent, so the pages should be one page.

(Earlier notes quoted 20 and 8 for the first two. Those were the 28-day figures; the
90-day window used throughout this document is worse.)

The data in this document **cannot settle it**: the window ends 2026-07-26 and #97
merged 2026-07-25, so these numbers show the site essentially before #97 took effect.

**Give #97 until roughly 2026-09-05 before judging it.** Acting on any cluster below
in the meantime changes two variables at once and makes both unreadable. The one metric
that answers the question is the competing-URL count per query, not clicks.

Measure it with `npm run seo:cannibalization`, which diffs against the baseline in
`content/internal/cannibalization-baseline.json`. It needs the local Google token, so it
cannot run in CI or a cloud session.

## Priority 1: agency

**501 impressions at stake.** Queries: `shopify hydrogen agency` (372), `shopify hydrogen agency "` (68), `hydrogen shopify agency` (34), `shopify hydrogen agentur` (27).

Ten distinct URLs compete on the main query. Excluding the two that PR #99 would retire,
so the table reads the same under either strategy:

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

**The equity for agency queries currently sits on `/shopify-hydrogen-experts`** (184 impressions at position 16.7), not on the agency page. Under #97 that page keeps its equity and routes visitors onward; under PR #99 it hands that equity to `/shopify-hydrogen-expert`. Either way, `/shopify-hydrogen-agency` is not where the agency signal lives today.

That reframes the question. Google treats `agency`, `expert`, `developer`, and `services company` as one intent: the same URLs rotate across all of them. The site currently answers that one intent with a hiring page, an agency page, a US agency page, and a services hub.

**Recommendation: decide once #97 has been measured.** Three outcomes, three different actions.

- If `/shopify-hydrogen-agency` starts appearing for agency queries, #97 worked. Leave the cluster alone and apply the same link-routing treatment to the next cluster.
- If the competing-URL count stays near ten and `/shopify-hydrogen-agency` stays absent, link routing was not enough. Consolidate, and PR #99 becomes the template.
- If `/shopify-hydrogen-agency` stays absent but the count drops, keep the page and rewrite it as a real answer to "agency or individual" rather than a keyword variant of the hiring page.

Building out `/shopify-hydrogen-agency` before that signal exists repeats the mistake this whole exercise is correcting.

`/shopify-hydrogen-agency-usa` is retirable either way: 21 impressions at position 76 is a geo variant splitting a term, not reaching a US audience.

**Do not touch `/headless-shopify-agency`.** It is the only single-URL intent on the site (115 impressions, position 17.6) and it is the evidence that single ownership works, whichever way that ownership is enforced. It also holds position 7.5 on `shopify hydrogen agency`, the best of any URL, which suggests it is the page Google trusts for agency wording even though it rarely surfaces.

Stop `/services` and `/` from targeting agency wording, the same metadata fix already applied to `/articles`.

## Priority 2: definitional and decision

**294 impressions at stake.** Queries: `hydrogen shopify` (102), `shopify hydrogen` (61), `what is shopify hydrogen` (55), `shopify hydrogen vs liquid` (30), `shopify hydrogen consultancy` (16), `hydrogen ecommerce` (15), `hydrogen shopify consultancy` (15).

| URL | Role today | Best position |
| --- | --- | --- |
| `/what-is-hydrogen` | leads every definitional query | 25.5 to 27.4 |
| `/should-i-use-it` | shadows all of them, never wins | 26.5 to 92.4 |
| `/shopify-hydrogen-vs-liquid` | own term only | 27.3 |
| `/when-not-to-use-hydrogen` | own angle | 65.4 |

`/what-is-hydrogen` is consistently the strongest and should stay canonical for definitional intent. PR #98 (merged 2026-07-28) formalised that and assigned `/should-i-use-it` the adoption intent, enforced by `tests/what-is-hydrogen-intent.test.ts`.

**Correction, 2026-07-30.** An earlier draft of this section recommended retiring `/should-i-use-it` into `/shopify-hydrogen-vs-liquid`. Measuring the page directly shows that is wrong on three counts.

**There is no adoption search demand to own.** Across 90 days the property returns no query of the form "should I use", "is it worth it", or "do I need". The only near matches are `what is hydrogen shopify` (10 impressions) and `what is hydrogen in shopify` (1), both definitional and both already owned by `/what-is-hydrogen`. #98 assigned an owner to an intent nobody searches.

**This page is not in the definitional cluster; it is in the hiring cluster.** Of its 463 impressions, 127 come from `shopify hydrogen experts` (77, position 65.8) and `shopify hydrogen development experts` (50, position 59.0). `/when-not-to-use-hydrogen` behaves the same way: 201 impressions, and its single largest query is `shopify hydrogen experts` at position 93.3. Acting on either page changes the hiring cluster and confounds the #97 measurement.

**Nothing at the page level explains it.** `/should-i-use-it` contains the word "expert" zero times, "hire" zero times, and "agency" zero times. It still surfaces for `shopify hydrogen experts`. That is not a targeting error that metadata can fix; it is Google rotating through 36 URLs because no page clearly owns the query. The `/articles` metadata fix worked because that hub really did carry "Hiring" in its title. There is no equivalent lever here.

**Recommendation.** Leave both pages alone. Their hiring-query appearances are a symptom of the unresolved hiring cluster and should disappear when that cluster gets a single owner, whichever way the #97 versus #99 question is settled. Re-measure them after that, not before. If a genuine adoption query cluster ever appears, revisit whether `/should-i-use-it` earns its place.

## Priority 3: services and solutions

**158 impressions at stake.** Queries: `shopify hydrogen development` (63), `shopify hydrogen services` (62), `shopify hydrogen solutions` (33).

**Done 2026-07-30, metadata only.** Measuring the page first showed its 500 impressions split three ways:

| Source | Impressions | Note |
| --- | --- | --- |
| Hiring queries | 306 | symptom of the unresolved hiring cluster |
| Agency queries | 79 | poached from `/shopify-hydrogen-agency` |
| Its own terms | 73 | `shopify hydrogen services`, `shopify hydrogen solutions` |

The title read "Shopify Hydrogen Services and Agency Alternative", which is why the page appeared for `shopify hydrogen agency` and three variants against the owner #97 designated. The title now reads "Shopify Hydrogen Services | Audit, Migration, Build, Support" and targets only the page's own term. This supports #97 rather than conflicting with it.

Body copy was left alone deliberately. Of the four remaining mentions, two are differentiating position ("this is not a broad Shopify agency service list", "how this differs from a generic agency page") and two are navigation labels routing agency intent to its owner. All four are wanted under #97's model.

The 306 hiring-query impressions are not fixable here. They are the same rotation across 36 URLs described above, and they should resolve when the hiring cluster gets a single owner.

## No action needed

**Cost.** `shopify hydrogen pricing` sits at **position 5.9**, the best commercial position on the site, and `/shopify-hydrogen-cost` owns it with 53 of 54 impressions. `/cost` and `/shopify-hydrogen-maintenance-cost` draw about 1 impression each in 90 days, so they are not splitting anything. Leave this cluster alone.

**SEO and audit pages.** `/shopify-hydrogen-seo` versus `/shopify-hydrogen-seo-guide`, and `/shopify-hydrogen-audit` versus `/shopify-hydrogen-fit-audit`, produce no query above the 15-impression threshold. There is not enough demand to be worth a migration.

**Vertical pages.** `/shopify-hydrogen-for-beauty-brands` (6 impressions in 90 days), `-for-luxury-jewelry` (3), `-for-large-catalog-retail` (1), `-for-dtc-education-brands` (0 observed). Weak, but they cannibalize nothing measurable. They are dead weight rather than active harm, so removing them is a content-strategy call and not an SEO fix.

## Sequencing

One cluster at a time, each with 4 to 6 weeks of observation. Two consolidations in flight cannot be told apart in the data.

1. #97, agency intent via link routing. Merged 2026-07-25, under observation until roughly 2026-09-05.
2. Resolve the strategy question above using that result.
3. Definitional and decision, 294 impressions.
4. Services metadata, 158 impressions.

Success is measured by competing-URL count per query, not clicks. At an average position near 19, second-page CTR is zero, so click movement will lag position movement by weeks.
