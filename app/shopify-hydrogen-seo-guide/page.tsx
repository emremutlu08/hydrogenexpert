import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen SEO Guide for Custom Storefronts | Emre Mutlu",
  description:
    "A practical Shopify Hydrogen SEO guide covering metadata, canonical URLs, JSON-LD, variant URLs, sitemaps, robots, performance, and crawl consistency.",
  path: "/shopify-hydrogen-seo-guide",
});

const checklist = [
  {
    title: "Metadata is route-owned",
    body:
      "Every important route needs a clear title, description, canonical URL, Open Graph image, and Twitter card. Product and collection routes should use the most specific Shopify data available instead of generic site defaults.",
  },
  {
    title: "Canonical decisions are deliberate",
    body:
      "Hydrogen stores often use search params for product options, filters, and merchandising state. Decide which URLs should be indexable and which should canonicalize back to the base product or collection.",
  },
  {
    title: "JSON-LD matches the rendered state",
    body:
      "If a product page renders a selected variant, the structured data should not describe a conflicting price, availability, image, or product state. Search engines and shoppers should see the same reality.",
  },
  {
    title: "Sitemap and robots are maintained",
    body:
      "Hydrogen does not remove the basics. Make sure sitemap.xml exposes the routes that deserve discovery, and robots.txt does not accidentally block the storefront paths you want indexed.",
  },
  {
    title: "Performance supports crawl and conversion",
    body:
      "Server-render the buying-critical content, cache intentionally, and avoid pushing primary product or collection content behind client-only effects. SEO and UX usually fail together here.",
  },
] as const;

const variantRules = [
  "Preserve the clicked option before choosing a fallback variant.",
  "Keep URL search params aligned with the selected variant shoppers actually see.",
  "Use getProductOptions and adjacent variant data for the modern Hydrogen product-option flow.",
  "Test out-of-stock fallbacks so they do not send shoppers back to an option they did not choose.",
] as const;

const references = [
  {
    href: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
    label: "Shopify Hydrogen SEO docs",
  },
  {
    href: "https://hydrogen.shopify.dev/update/april-2025",
    label: "Hydrogen April 2025 update",
  },
  {
    href: "https://shopify.dev/docs/api/hydrogen/latest/utilities/getproductoptions",
    label: "getProductOptions utility docs",
  },
] as const;

const faqs = [
  {
    question: "Is Shopify Hydrogen good for SEO?",
    answer:
      "Hydrogen can be good for SEO when the storefront is server-rendered, metadata is route-specific, canonical URLs are intentional, JSON-LD matches the visible product state, and performance is treated as part of the SEO system. Hydrogen is not automatically better for SEO just because it is headless.",
  },
  {
    question: "Do Shopify Hydrogen variant URLs need to be indexed?",
    answer:
      "Not always. Some variant URLs deserve indexable, shareable URLs when they represent meaningful product states. Others should canonicalize to the base product. The decision depends on demand, duplicate-content risk, and whether the rendered page state is stable.",
  },
  {
    question: "What is the biggest Hydrogen SEO mistake?",
    answer:
      "The biggest mistake is treating SEO as metadata only. In Hydrogen, the product data, selected variant, canonical URL, structured data, cache strategy, and rendered HTML all need to agree.",
  },
  {
    question: "Does Hydrogen replace normal Shopify SEO work?",
    answer:
      "No. It changes where the work happens. Shopify still manages products and checkout, but the custom storefront owns routing, metadata, crawlable HTML, performance patterns, and the details that connect variant state to SEO.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Shopify Hydrogen SEO Guide", href: "/shopify-hydrogen-seo-guide" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Hydrogen SEO Guide for Custom Storefronts",
  description:
    "A practical Shopify Hydrogen SEO guide covering metadata, canonical URLs, JSON-LD, variant URLs, sitemaps, robots, performance, and crawl consistency.",
  author: {
    "@type": "Person",
    name: "Emre Mutlu",
  },
  publisher: {
    "@type": "Organization",
    name: "HydrogenExpert",
  },
  mainEntityOfPage: "https://hydrogenexpert.co/shopify-hydrogen-seo-guide",
};

export default function ShopifyHydrogenSeoGuidePage() {
  return (
    <>
      <JsonLd data={asSchemaArray(articleSchema, breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="SEO Guide"
          title="Shopify Hydrogen SEO Guide for Custom Storefronts"
          description="A practical framework for making Hydrogen storefronts crawlable, stable, and commercially useful."
          body="Hydrogen SEO is not only title tags. The storefront has to render the right content, expose the right canonical URLs, keep product state consistent, and stay fast enough that shoppers and crawlers both get the page you intended."
        />

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hero-card space-y-5">
            <p className="dna-kicker text-[#8df1cb]">Core principle</p>
            <h2 className="font-display text-[2.4rem] leading-[0.95] tracking-[-0.055em] text-white md:text-[3.5rem]">
              The URL, rendered product state, and structured data must agree.
            </h2>
            <p className="text-base leading-8 text-neutral-300">
              If a shopper lands on a variant URL, the selected options, product availability,
              JSON-LD, canonical choice, and visible product page should tell the same story.
              That is where Hydrogen SEO becomes engineering work, not just copywriting.
            </p>
          </div>

          <div className="card-soft space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
              What this guide covers
            </p>
            <ul className="editorial-list">
              <li><span>Metadata, canonical URLs, sitemap.xml, and robots.txt basics</span></li>
              <li><span>Variant URLs, search params, and crawl consistency</span></li>
              <li><span>Product schema and JSON-LD alignment</span></li>
              <li><span>Performance patterns that keep important content server-rendered</span></li>
              <li><span>Modern Hydrogen product-option flow after the April 2025 update</span></li>
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Checklist"
            title="The Hydrogen SEO system I check first"
            description="These are the parts that usually decide whether a custom Shopify storefront feels search-ready or fragile."
            className="max-w-4xl"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {checklist.map((item) => (
              <article key={item.title} className="card">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#171717]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Variant URLs"
            title="Variant SEO is where Hydrogen gets easy to break"
            description="Product option state is one of the most common places where UX, SEO, and analytics quietly drift apart."
            className="max-w-4xl"
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-4 text-base leading-8 text-neutral-600">
              <p>
                Shopify&apos;s April 2025 Hydrogen update moved product-option work away from
                the deprecated <code>VariantSelector</code> component and toward utilities such as{" "}
                <code>getProductOptions</code>, encoded variant availability data, adjacent variants,
                and selected-or-first-available variant state.
              </p>
              <p>
                The implementation details changed, but the storefront rule did not: when a shopper
                clicks an option, keep that option locked first. Only then should the storefront choose
                a fallback value for another dimension such as length, metal, size, or color.
              </p>
              <p>
                For a technical proof article on this exact edge case, read{" "}
                <Link
                  href="/blog/shopify-hydrogen-variant-selection-fallback"
                  className="font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]"
                >
                  Shopify Hydrogen variant URLs and fallback bugs
                </Link>
                .
              </p>
            </div>

            <div className="card bg-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
                Rules for variant URLs
              </p>
              <ul className="editorial-list mt-5">
                {variantRules.map((rule) => (
                  <li key={rule}><span>{rule}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">Index or canonicalize?</p>
            <h2 className="subsection-title">Not every Hydrogen URL deserves its own search result.</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              A meaningful variant URL can help when shoppers search for a specific product state.
              A noisy filter URL can create duplicate-content drag. The right answer is not to index
              everything or canonicalize everything. It is to decide which URL states carry real search intent.
            </p>
          </div>

          <div className="card">
            <p className="eyebrow">How to test</p>
            <h2 className="subsection-title">Use Search Console and no-JavaScript checks.</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Inspect the final HTML, canonical tag, structured data, and selected product state for
              the URLs you care about. Then test the same route with JavaScript disabled. If important
              product or collection content disappears, the SEO problem is architectural.
            </p>
          </div>
        </section>

        <section className="card-soft space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            Official references
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {references.map((reference) => (
              <Link
                key={reference.href}
                href={reference.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.1rem] border border-black/8 bg-white p-4 text-sm font-medium text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                {reference.label}
              </Link>
            ))}
          </div>
        </section>

        <FaqSection
          title="Shopify Hydrogen SEO questions merchants usually ask."
          faqs={faqs}
        />

        <CTASection
          primaryLink="linkedin"
          subtext="If your Hydrogen storefront has fragile product URLs, inconsistent metadata, or performance issues hiding behind a custom build, send the store URL and I will tell you what I would check first."
          sourceKind="hydrogen_seo_guide_cta"
        />
      </div>
    </>
  );
}
