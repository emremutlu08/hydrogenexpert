# HydrogenExpert Search Gap Source Translations

Status: Active
Last updated: 2026-05-27
Owner: Agent
Source of truth: Public English sources, Shopify official docs, Google official docs, agent analysis

## Purpose

This note records the Turkish translation and adaptation pass for the search gaps identified on 2026-05-27. The public pages stay in English because the target queries are English. This file keeps the Turkish editorial reasoning inside the repo without copying full third-party articles.

## Confirmed Inputs

- Live sitemap and `llms` output did not expose dedicated pages for the ten search gaps before this work.
- The public implementation uses static `/articles/[slug]` guides, not Supabase-backed blog publishing.
- Source material was adapted from public English articles, vendor docs, Shopify official docs, Google official docs, and HydrogenExpert's existing senior-led fixed-scope positioning.

## Translation Notes

### 1. Shopify Hydrogen vs Next.js

English sources: Flux Hydrogen vs Next.js, Talk Shop Hydrogen vs Next.js, Shopify Hydrogen fundamentals.

Turkish adaptation: Kaynakların ana fikri, kararın "hangi framework daha hızlı" sorusundan çok "hangi işletme hangi bakım modelini taşıyabilir" sorusu olduğuydu. Türkçe editoryal çıkarım: Hydrogen, Shopify merkezli commerce kapsamlarında daha düşük entegrasyon karar yükü verir; Next.js ise storefront daha geniş bir web uygulamasına dönüşüyorsa makul olur.

Public move: `/articles/shopify-hydrogen-nextjs`.

### 2. Hydrogen CMS and Visual Builder

English sources: Builder Hydrogen CMS, Weaverse vs Sanity, Pack Digital docs, Flux Sanity for Shopify Hydrogen, Shopify metaobjects docs.

Turkish adaptation: Kaynaklarda visual builder tarafı pazarlama ekibi kontrolü, Sanity tarafı editoryal model, Metaobjects tarafı ise Shopify-native yapılandırılmış içerik olarak konumlanıyor. Türkçe karar çevirisi: araç seçimi demoya göre değil, editörün ne sıklıkla neyi değiştirdiğine göre yapılmalı.

Public move: `/articles/shopify-hydrogen-cms-visual-builder`.

### 3. Apps in Hydrogen Compatibility

English sources: Yotpo Reviews with Hydrogen, Yotpo Loyalty on headless, Shopify Subscriptions in Hydrogen.

Turkish adaptation: Kaynaklar gösteriyor ki app riski tek parça değil: reviews daha çok frontend render ve veri çekme, loyalty/referral müşteri kimliği ve checkout davranışı, subscriptions ise selling plan, cart line ve checkout uyumu gerektiriyor. Türkçe editorial karar: migration scope başlamadan her app "kalır, değişir, yeniden yapılır, checkout'a taşınır, çıkarılır" diye sınıflanmalı.

Public move: `/articles/shopify-apps-in-hydrogen-compatibility-checklist`.

### 4. Hydrogen Analytics Migration

English sources: Shopify Hydrogen analytics docs, Shopify consent docs, Google Analytics overview.

Turkish adaptation: Liquid'den Hydrogen'a geçişte analytics otomatik taşınmaz; custom frontend page view, commerce events, consent state ve checkout handoff kanıtını açıkça üretir. Türkçe çıkarım: tracking konusu launch sonrası düzeltilecek teknik borç değil, migration scope'un kendisi olmalı.

Public move: `/articles/shopify-hydrogen-analytics-migration`.

### 5. Storefront MCP, UCP, and AI Readiness

English sources: Shopify Storefront Catalog MCP, Shopify Storefront MCP server, Shopify Agentic Commerce.

Turkish adaptation: Kaynakların güçlü tarafı agentic commerce için somut yüzeyleri anlatması: catalog discovery, product detail, cart, checkout ve policy. Türkçe uyarlama: hype yerine ürün verisi kalitesi, SSR product content, schema, policy clarity ve temiz catalog taxonomy öne çıkarıldı.

Public move: `/articles/shopify-storefront-mcp-ucp-ai-readiness`.

### 6. Hydrogen B2B and Wholesale

English sources: Shopify Headless with B2B, Shopify B2B companies help, Customer Account API with Hydrogen.

Turkish adaptation: B2B Hydrogen sadece farklı PDP tasarımı değildir; company, company location, catalog visibility, pricing, payment terms ve customer account state aynı anda değişir. Türkçe editoryal karar: B2B kapsamı fiyat sızıntısı, yanlış company context ve checkout uyuşmazlığı üzerinden risk odaklı anlatılmalı.

Public move: `/articles/shopify-hydrogen-b2b-wholesale-guide`.

### 7. Hydrogen Deployment Checklist

English sources: Shopify Hydrogen deployments, Shopify CLI Hydrogen deploy, Shopify Hydrogen SEO and analytics docs.

Turkish adaptation: Deployment kaynakları preview, production, environment variables ve deploy command yüzeylerini anlatıyor. Türkçe uyarlama: launch QA'yı yalnız deploy komutu değil, robots, sitemap, analytics, checkout, rollback ve production verification olarak genişletmek gerekiyor.

Public move: `/articles/hydrogen-deployment-checklist-oxygen-preview-production-qa`.

### 8. Markets and i18n SEO

English sources: Shopify Hydrogen Markets docs, Google localized versions docs, Shopify Hydrogen SEO docs.

Turkish adaptation: Markets sadece para birimi seçimi değil; route context, locale URL, country, currency, cache ve hreflang birlikte düşünülmeli. Türkçe karar: multi-region Hydrogen'da SEO riski en çok URL ve canonical/hreflang uyumsuzluğundan doğar.

Public move: `/articles/shopify-hydrogen-markets-i18n-seo`.

### 9. Search, Filters, and Product Discovery

English sources: Algolia Hydrogen page, Shopify Search and Discovery filters, Storefront API Collection and ProductFilter docs.

Turkish adaptation: Büyük katalogda search/filter işi sadece UI değildir; index ownership, filter source, SSR collection state, availability, merchandising ve analytics beraber çalışır. Türkçe uyarlama: Algolia gibi dış search katmanları ancak Shopify catalog semantics ile çelişmediğinde anlamlıdır.

Public move: `/articles/shopify-hydrogen-search-filters-product-discovery`.

### 10. Hydrogen SEO Checklist

English sources: Shopify Hydrogen SEO docs, Google structured data docs, Google sitemaps docs.

Turkish adaptation: SEO checklist metadata listesinden ibaret değil; SSR content, canonical URLs, JSON-LD, sitemap, robots, internal links, variant state ve analytics birlikte test edilmelidir. Türkçe karar: mevcut `/shopify-hydrogen-seo` sayfasını destekleyen implementation-focused article gerekir.

Public move: `/articles/shopify-hydrogen-seo-checklist`.

## Re-Verification

- Public source claims should be rechecked when Shopify changes Hydrogen, Oxygen, Storefront MCP, UCP, Markets, Customer Account API, or B2B docs.
- SERP gaps should be rechecked after the new article routes are deployed and indexed.
- The internal source map is implemented in `features/content-sources/index.ts`.
