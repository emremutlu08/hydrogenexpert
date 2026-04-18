#!/bin/bash
set -e

echo "Pushing env vars to Vercel..."
for ENV in production preview development; do
  echo "$NEXT_PUBLIC_SUPABASE_URL"      | vercel env add NEXT_PUBLIC_SUPABASE_URL      $ENV --force 2>/dev/null || true
  echo "$NEXT_PUBLIC_SUPABASE_ANON_KEY" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY $ENV --force 2>/dev/null || true
  echo "$NEXT_PUBLIC_SITE_URL"          | vercel env add NEXT_PUBLIC_SITE_URL          $ENV --force 2>/dev/null || true
  echo "$ANTHROPIC_API_KEY"             | vercel env add ANTHROPIC_API_KEY             $ENV --force 2>/dev/null || true
  echo "$NEXT_PUBLIC_GA_MEASUREMENT_ID" | vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID $ENV --force 2>/dev/null || true
  echo "$CRON_SECRET"                   | vercel env add CRON_SECRET                   $ENV --force 2>/dev/null || true
done

echo "Deploying to production..."
vercel deploy --prod
