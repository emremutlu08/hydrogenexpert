# Project Brief

Status: Active
Last updated: 2026-05-28
Owner: Agent
Source of truth: Current repo, `package.json`, production positioning docs, agent analysis

## Purpose

This file gives agents the product, stack, and business context for HydrogenExpert.

## Product

HydrogenExpert is the marketing and lead-generation site for `hydrogenexpert.co`.

The site positions Emre Mutlu as a senior Shopify Hydrogen operator for fixed-scope Shopify Hydrogen storefront builds, audits, migration reviews, SEO/performance cleanup, and support.

## Positioning

- Keep the site senior-led, direct, proof-led, and commercially honest.
- Do not turn it into a generic full-service agency site.
- Use fixed-scope Shopify Hydrogen package language for package-led pages.
- Keep Liquid or no rebuild as valid recommendations when Hydrogen is not the safer business move.
- Do not invent proof, metrics, testimonials, partner badges, local office claims, or team capacity.

## Stack

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS through `app/globals.css`.
- Vercel for hosting.
- Supabase for public blog posts, lead submissions, and durable rate limiting.
- Vercel Analytics and Speed Insights.
- Cloudflare Turnstile when both public and secret keys are configured.

Use `package.json` for exact versions and scripts.

## Public Surfaces

- Main commercial pages under `app/`.
- Service registry and commercial service data.
- Case studies and proof surfaces.
- Blog and article surfaces.
- `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/llms.txt`, and `/llms-full.txt`.
- Lead capture API and form.

## Canonical Proof Rules

Use only approved public or explicitly approved proof:

- Upwork Top Rated Plus and 100% JSS when currently supported.
- Upwork hours and public Rebel Bunny feedback when verified.
- LinkedIn and Udemy proof when currently supported.
- Approved case studies and real site assets.

Re-verify drift-prone proof values before increasing or restating exact numbers.
