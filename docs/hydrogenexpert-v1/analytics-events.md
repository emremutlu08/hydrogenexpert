# HydrogenExpert V1 Analytics Events

Last updated: May 7, 2026

Central helper: `lib/analytics.ts`

Google Analytics loads only when `getValidGaMeasurementId()` returns a non-placeholder measurement ID. Vercel Analytics and Speed Insights are loaded in `app/layout.tsx`.

| Event name | Trigger | Payload fields | Used by |
| --- | --- | --- | --- |
| `page_view` | Vercel Analytics page view | Vercel-managed | `@vercel/analytics` |
| `cta_click` | External CTA click | `destination`, `source`, `source_path` | `TrackedCTAButton` |
| `cta_click_fit_audit` | Fit review form anchor click | `source`, `source_path`, `target` | `TrackedCTALink`, shared CTA |
| `cta_click_linkedin` | LinkedIn CTA click | `destination`, `source`, `source_path` | `TrackedCTAButton` |
| `cta_click_upwork` | Upwork CTA click | `destination`, `source`, `source_path` | `TrackedCTAButton` |
| `cta_click_email_brief` | Email brief/form CTA click | `source`, `source_path`, `target` | `TrackedCTALink`, footer, quiz |
| `cta_click_case_studies` | Case study CTA click via legacy helper | `source`, `source_path`, `target` | `trackAnchorCTA` |
| `lead_form_view` | Lead form component mounts | `source`, `source_path` | `LeadCaptureForm` |
| `lead_form_start` | Lead form submit begins | `source`, `source_path` | `LeadCaptureForm`, quiz email flow |
| `lead_form_submit` | Lead form submit completes | `source`, `status`, qualification fields | `LeadCaptureForm`, quiz email flow |
| `lead_form_submit_success` | Successful submit | `source`, `status`, qualification fields | `trackLeadSubmit` |
| `lead_form_submit_error` | Failed submit | `source`, `status`, qualification fields | `trackLeadSubmit` |
| `quiz_answer_click` | Quiz answer button click | `question_number`, `answer`, `source_path` | `QuizQuestion` |
| `quiz_result_view` | Quiz result revealed | `score`, `total`, `source_path` | `HydrogenFitQuiz` |
| `blog_card_click` | Blog or article card click | `content_slug`, `content_type`, `source_path` | `TrackedContentLink` |
| `blog_view` | Blog post view | `post_slug` | `BlogAnalytics` |
| `article_read_depth` | 80% blog-post marker intersects | `post_slug`, `depth` | `BlogAnalytics` |

Compatibility events still emitted: `linkedin_click`, `upwork_click`, `audit_cta_click`, `case_study_click`, `cost_page_cta_click`, `service_page_cta_click`, and `blog_read`.

## QA Notes

- `tests/analytics-events.test.ts` covers external CTA events, email brief CTA, quiz events, content-card clicks, and lead success/error split events.
- Event payloads are deliberately low-cardinality and avoid free-form message text.
