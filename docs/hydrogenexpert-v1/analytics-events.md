# HydrogenExpert V1 Analytics Events

Status: Active
Last updated: 2026-09-01
Owner: Agent
Source of truth: `lib/analytics.ts`, `components/AnalyticsConsent.tsx`

Central helper: `lib/analytics.ts`

Google Analytics loads only on the Vercel production deployment, after `hydrogenexpert.analyticsConsent.v1` is explicitly set to `granted`, and when a valid measurement ID is configured. Vercel Analytics and Speed Insights remain the cookie-free baseline in `app/layout.tsx`.

| Event name | Trigger | Payload fields | Used by |
| --- | --- | --- | --- |
| `page_view` | Vercel Analytics page view | Vercel-managed | `@vercel/analytics` |
| `scope_review_cta_click` | Internal scope-review or package CTA click | `source_kind`, `source_path`, `cta_destination`, `package_name`, static CTA context | shared tracked links |
| `external_contact_click` | LinkedIn or Upwork CTA click | `source_kind`, `source_path`, `cta_destination`, static CTA label | `TrackedCTAButton` |
| `package_browse_click` | Navigation to the packages overview without contact intent | `source_kind`, `source_path`, `cta_destination`, `package_name`, static CTA context | homepage package link |
| `lead_form_view` | The lead form enters the visible reading area, once | `source_kind`, `source_path` | `LeadCaptureForm` |
| `lead_form_start` | First real focus/change/submit interaction, once | `source_kind`, `source_path` | `LeadCaptureForm`, quiz email flow |
| `lead_form_submit_success` | Successful submit | `source_kind`, `source_path`, non-identifying qualification categories | `trackLeadSubmit` |
| `lead_form_submit_error` | Failed submit | `source_kind`, `source_path`, non-identifying qualification categories | `trackLeadSubmit` |
| `quiz_answer_click` | Quiz answer button click | `question_number`, `answer`, `source_path` | `QuizQuestion` |
| `quiz_result_view` | Quiz result revealed | `score`, `total`, `source_path` | `HydrogenFitQuiz` |
| `blog_card_click` | Blog or article card click | `content_slug`, `content_type`, `source_path` | `TrackedContentLink` |
| `blog_view` | Blog post view | `post_slug` | `BlogAnalytics` |
| `article_read_depth` | 80% blog-post marker intersects | `post_slug`, `depth` | `BlogAnalytics` |

`lead_form_submit_success` is the primary GA4 key event. Scope-review and external-contact clicks are micro-conversions. Package browsing remains a separate navigation event and is not counted as scope-review intent. Legacy duplicate CTA and lead-submit event names are not emitted.

When consent is already granted but the GA runtime is still loading, canonical CTA and terminal lead events wait for the analytics-ready signal and flush once. CTA interactions are not queued before consent.

## QA Notes

- `tests/analytics-consent.test.ts` covers fail-closed consent storage.
- `tests/analytics-events.test.ts` covers consent gating, canonical CTA events, quiz/content events, and lead success/error split events.
- Event payloads avoid names, emails, store URLs, message text, and other direct identifiers.
- Preview and local deployments do not receive a Google Analytics measurement ID.
