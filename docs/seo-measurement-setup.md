# SEO Measurement Setup

`npm run report:traffic` writes a weekly report to `content/internal/reports/`.
Its **Data Health** section states, per source, whether the numbers below it are
real. Two sources are currently not reporting, and both need an action in a
Google console that cannot be scripted from this repo.

Run `npm run report:traffic -- --strict` in CI to fail when any source is down.

## Current state

| Source | Status | Cause |
| --- | --- | --- |
| Google Search Console | reporting | `webmasters.readonly` scope granted, `https://hydrogenexpert.co/` owned |
| GA4 / Vercel Analytics | not configured | Analytics Admin API disabled for the OAuth project |
| PageSpeed / Core Web Vitals | blocked | no API key, so calls hit the shared unkeyed quota and return HTTP 429 |

Core Web Vitals have never been captured in a report. Every owned-analytics slot
has rendered as `manual` since the first report.

## 1. Enable the Analytics Admin API

The OAuth token already carries `https://www.googleapis.com/auth/analytics.readonly`,
so no re-consent is needed. The API itself is off for the project:

```
Google Analytics Admin API has not been used in project 956889074498 before or it is disabled.
```

Enable it here, then wait a few minutes for propagation:

https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=956889074498

Also enable the Analytics **Data** API, which serves the session and page rows:

https://console.developers.google.com/apis/api/analyticsdata.googleapis.com/overview?project=956889074498

### Fallback without the API

Write `content/internal/traffic-snapshot.json` from a GA4 export. The report
reads this shape:

```json
{
  "last7Days": { "sessions": 0, "users": 0, "topPages": [{ "label": "/", "value": 0 }] },
  "last30Days": { "sessions": 0, "users": 0 }
}
```

## 2. Add a PageSpeed API key

Create an API key in the same project, restrict it to the PageSpeed Insights API,
and put it in `.env.local`:

```
GOOGLE_API_KEY=...
```

The script reads `GOOGLE_API_KEY` or `PAGESPEED_API_KEY`. Without a key the call
shares a small public quota, which is why it has returned 429 on every run rather
than failing transiently.

## 3. Verify the Search Console domain property

`sc-domain:hydrogenexpert.co` is currently `siteUnverifiedUser`. Only the URL-prefix
property `https://hydrogenexpert.co/` is owned, so it is the one reporting. Verifying
the domain property would also capture `www`, `http`, and any subdomain variants in
one place.

## Checking it worked

```bash
npm run report:traffic -- --strict
```

Exit code 0 and a Data Health section reading `All 3 data sources reported.`
