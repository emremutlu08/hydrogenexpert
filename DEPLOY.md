# Deploy hydrogenexpert.co

1. Buy the `hydrogenexpert.co` domain through Spaceship (roughly $9.32/year at the time of writing).
2. Run the Supabase migrations in order from [supabase/migrations](/Users/emremutlu/Documents/New project/hydrogenexpert/supabase/migrations).
3. Fill in [.env.local](/Users/emremutlu/Documents/New project/hydrogenexpert/.env.local) with real values for Supabase, including `SUPABASE_SERVICE_ROLE_KEY`, plus Anthropic, GA4, Search Console, and the cron secret.
4. Run `bash scripts/deploy.sh`.
5. Add the custom domain in the Vercel dashboard and point it to `hydrogenexpert.co`.
6. Verify Google Search Console using the `GOOGLE_SITE_VERIFICATION` meta tag value.
7. Create a GA4 property, copy the Measurement ID, and update `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.
8. Mark the `cta_click` GA4 event as a conversion.
