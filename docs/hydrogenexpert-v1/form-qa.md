# HydrogenExpert V1 Form QA

Last updated: May 7, 2026

## Implementation

- Public form component: `components/LeadCaptureForm.tsx`
- API route: `app/api/lead-capture/route.ts`
- Storage table: Supabase `lead_submissions`
- Spam controls: trusted origin check, honeypot field `company`, durable rate limit, optional Cloudflare Turnstile
- Anchor: `/contact#fit-review-form`

## Required Env Vars

| Variable | Required for | Expected behavior |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase storage | Missing value returns a safe 503 from the API route. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase client setup | Missing value returns a safe 503 from the API route. |
| `SUPABASE_SERVICE_ROLE_KEY` | Lead insert and durable rate limit | Missing value returns a safe 503 from the API route. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget | Missing value hides the widget and keeps the page usable. |
| `TURNSTILE_SECRET_KEY` | Turnstile verification | Verification is active only when both the secret and public site key are configured; partial env keeps the form usable. |

## Test Cases

| Case | How to test | Expected result | Status |
| --- | --- | --- | --- |
| Required fields | Submit empty form. | Browser blocks required `name`, `email`, `storeUrl`, and `mainProblem`; API also returns `400` if bypassed. | Done |
| Invalid email | Submit malformed email. | Browser type validation blocks it; API returns `400` if bypassed. | Done |
| Partial submit | Submit without store URL or main problem from non-quiz source. | API returns `Please fill out the required fields.` | Done |
| Success state | Submit valid payload with Supabase configured. | Form resets and shows success copy. | Needs manual production review |
| Supabase insert | Inspect `lead_submissions`. | Name, email, store URL, message, source path, source kind, and qualification fields persist. | Needs manual production review |
| Source tracking | Submit from `/contact`. | `source_path=/contact`, `source_kind=contact_page`. | Done |
| Honeypot | Submit with `company` populated. | API returns `{ ok: true }` without storing a lead. | Done |
| Rate limit | Submit more than 5 times in 15 minutes from one IP. | API returns `429`. | Needs manual production review |
| Turnstile configured | Set both Turnstile env vars and submit without token. | API returns bot verification error. | Needs manual production review |
| Turnstile missing | Remove Turnstile env vars. | Site renders, form posts, server treats verification as optional. | Done |
| Low-budget lead | Select `under_1500`. | Stored as `budget_range=under_1500` so it can be filtered or redirected later. | Done |

## Local API Probe

Production-mode local server on `http://localhost:3100`:

| Probe | Result |
| --- | --- |
| Honeypot populated | `200`, `{ "ok": true }` |
| Missing required fields | `400`, `Please fill out the required fields.` |
| Invalid email | `400`, `Please enter a valid email address.` |
| Missing trusted origin | `403`, `Origin not allowed.` |

## Manual Production QA

1. Open `https://hydrogenexpert.co/contact#fit-review-form`.
2. Confirm the form scroll target lands on the lead form.
3. Submit a real test lead with a test email and budget `under_1500`.
4. Confirm Supabase row exists and has source fields plus qualification fields.
5. Confirm success state appears and form clears.
6. Repeat one intentionally invalid submission and confirm user-facing error.
7. Confirm Turnstile appears only when the public site key is configured.
8. Confirm no email notification is promised unless a notification integration is added.
