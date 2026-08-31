# SEO Measurement Setup

`npm run report:traffic` collects the weekly measurement report directly from the
configured services and writes it to `content/internal/reports/`. The report does
not accept manually entered traffic snapshots or substitute zeroes for unavailable
sources.

## Report sources and gates

| Source | Default strict gate | Current configuration |
| --- | --- | --- |
| GA4 Data API | required | Reporting from the production hostname only |
| Google Search Console | required | Reporting from `https://hydrogenexpert.co/` |
| Supabase successful leads | required | Explicitly deferred while the project is unavailable |
| Production public health | required | Core routes required; Supabase-dependent routes may be explicitly deferred |
| PageSpeed / CrUX | deferred | Public quota returns HTTP 429; require it during the performance phase |

GA4 represents consented traffic after the privacy-first analytics release.
Vercel Analytics remains the cookie-free baseline. The generated report also
includes comparable periods, anomaly days, US search visibility, CTR opportunities,
and the canonical consented funnel events.

## Commands

Run the report with its normal core-source gate:

```bash
npm run report:traffic -- --strict
```

When Supabase recovery has been explicitly deferred, make that exception visible
in the command and report:

```bash
npm run report:traffic -- --strict --defer-supabase
```

`--defer-supabase` is the only mode that downgrades the Supabase lead source and
the known `/blog` and `/feed.xml` dependency failures. Without it, those failures
remain blocking.

During the performance phase, require PageSpeed as well:

```bash
npm run report:traffic -- --strict --require-pagespeed
```

Flags can be combined only when the corresponding deferral has been approved.

## Google access

The OAuth token must include both read-only scopes:

- `https://www.googleapis.com/auth/analytics.readonly`
- `https://www.googleapis.com/auth/webmasters.readonly`

The Google Analytics Admin and Data APIs must be enabled for the OAuth project.
Set `GA4_PROPERTY_ID` only when automatic discovery cannot match the production
hostname or `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

`GSC_SITE_URL` defaults to `https://hydrogenexpert.co/`. The URL-prefix property
is currently the verified reporting property; verifying `sc-domain:hydrogenexpert.co`
would extend coverage to protocol and subdomain variants.

## Supabase access

The script reads the configured project URL and server-side service-role key only
to request an aggregate successful-lead count. It does not write leads or include
personal data in the report. A configured source that cannot be queried is blocked
unless `--defer-supabase` is present.

## PageSpeed and Core Web Vitals

Set a PageSpeed Insights API key in `.env.local` when the shared public quota is
exhausted:

```text
GOOGLE_API_KEY=...
```

`PAGESPEED_API_KEY` is also supported. Restrict the key to the PageSpeed Insights
API. A successful HTTP response is accepted only when performance, SEO, and
accessibility category scores are all present and valid; incomplete responses are
reported as unavailable.

## Success criteria

Exit code 0 means no source required by the selected flags is blocked. Always read
the generated **Data Health** section: deferred sources are explicitly labeled and
are not evidence that those services are healthy.
