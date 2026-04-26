import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { FounderCard } from "@/components/FounderCard";
import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { ProcessStepGrid } from "@/components/ProcessStepGrid";
import { ProofCardGrid } from "@/components/ProofCardGrid";
import { SelectedWorkGrid } from "@/components/SelectedWorkGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { SplitFeatureSection } from "@/components/SplitFeatureSection";
import { StatCardGrid } from "@/components/StatCardGrid";
import { TrustBar } from "@/components/TrustBar";
import { UdemyCourseCard } from "@/components/UdemyCourseCard";
import { UpworkTopRatedBadge } from "@/components/UpworkTopRatedBadge";
import { clientLogos } from "@/data/clientLogos";
import { FOUNDER_STORY } from "@/lib/founder";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl } from "@/lib/site";
import { asSchemaArray, buildFaqPageSchema } from "@/lib/structured-data";

const LAST_UPDATED = "2026-04-21";

export const metadata = buildMetadata({
  title: "Hire a Shopify Hydrogen Developer for Shopify Plus Brands | Emre Mutlu",
  description:
    "Hire Emre Mutlu for Shopify Hydrogen strategy, cost planning, case studies, and custom storefront delivery for Shopify Plus brands in the US market.",
  path: "/",
  ogImage: absoluteUrl("/og-home.svg"),
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER.name,
  jobTitle: OWNER.title,
  description: OWNER.headline,
  image: absoluteUrl("/emre-mutlu.webp"),
  sameAs: [OWNER.linkedIn, OWNER.upwork, OWNER.udemyUrl],
  knowsAbout: ["Shopify Hydrogen", "Shopify storefront performance", "Shopify migration planning"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HydrogenExpert",
  url: absoluteUrl("/"),
  founder: {
    "@type": "Person",
    name: OWNER.name,
  },
  sameAs: [OWNER.linkedIn, OWNER.upwork, OWNER.udemyUrl],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HydrogenExpert",
  url: absoluteUrl("/"),
  description:
    "Lead generation site for Shopify store owners researching Hydrogen strategy, migration fit, pricing, and case studies.",
  publisher: {
    "@type": "Person",
    name: OWNER.name,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Hydrogen Developer for Growing Brands",
  description:
    "Merchant-friendly guidance on Shopify Hydrogen strategy, speed, migration fit, cost ranges, and launch planning for growing brands.",
  author: {
    "@type": "Person",
    name: OWNER.name,
    sameAs: [OWNER.linkedIn, OWNER.upwork, OWNER.udemyUrl],
  },
  publisher: {
    "@type": "Organization",
    name: "HydrogenExpert",
  },
  mainEntityOfPage: absoluteUrl("/"),
  dateModified: LAST_UPDATED,
  datePublished: LAST_UPDATED,
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shopify Hydrogen evaluation checklist",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Audit storefront friction and system drag" },
    { "@type": "ListItem", position: 2, name: "Scope the commercial case for Hydrogen" },
    { "@type": "ListItem", position: 3, name: "Ship a production-grade storefront with launch control" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to evaluate whether Shopify Hydrogen is right for your store",
  description:
    "A three-step merchant-friendly process for deciding whether a Shopify Hydrogen storefront is worth scoping.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit the storefront pressure points",
      text: "Review where speed, browsing friction, and maintainability issues are slowing growth or hurting conversion.",
      url: absoluteUrl("/#process"),
    },
    {
      "@type": "HowToStep",
      name: "Define the business case",
      text: "Estimate scope, timing, and whether the upside is strong enough to justify a custom storefront.",
      url: absoluteUrl("/#process"),
    },
    {
      "@type": "HowToStep",
      name: "Launch with control",
      text: "Move forward with QA, analytics, and a launch plan that gives the operating team confidence after go-live.",
      url: absoluteUrl("/#process"),
    },
  ],
};

const faqs = [
  {
    question: "What is Shopify Hydrogen in plain English?",
    answer:
      "Shopify Hydrogen is Shopify’s framework for building a custom storefront on top of Shopify’s commerce engine. It matters when a theme starts limiting speed, mobile UX, merchandising flexibility, or the premium buying experience a growing brand wants customers to feel.",
  },
  {
    question: "How much does a Shopify Hydrogen project usually cost?",
    answer:
      "Most Shopify Hydrogen projects land between $15K and $80K. The real number depends on design complexity, catalog behavior, integrations, migration scope, analytics requirements, and how much custom UX the storefront needs before launch.",
  },
  {
    question: "When does Hydrogen make sense for a growing brand?",
    answer:
      "Hydrogen makes sense when the current storefront is holding back growth ideas, mobile UX, or brand expression, and when the business is ready to maintain a custom surface after launch. If a stronger theme can still do the job, Liquid is often enough.",
    linkHref: "/when-not-to-use-hydrogen",
    linkLabel: "Read the cases where Hydrogen is the wrong move.",
  },
  {
    question: "How long does a Hydrogen migration usually take?",
    answer:
      "A lean Hydrogen project may take around 6 weeks, while more complex storefronts can take closer to 16 weeks. Timelines expand when integrations, content readiness, or wider launch planning add more moving parts.",
  },
  {
    question: "Is Hydrogen ready for AI agent commerce in 2026?",
    answer:
      "Yes, if the storefront is structured well. Hydrogen gives you a stronger path for AI-readable routing, custom data flows, and agent-friendly surface logic. That still does not mean every store needs it. The business case matters first.",
  },
  {
    question: "What's the ongoing maintenance difference between Hydrogen and Liquid?",
    answer:
      "Hydrogen gives you more control, but it also creates a real application to maintain. Liquid is usually cheaper to operate long-term. Hydrogen pays back when the store keeps needing custom UX and feature velocity that a theme no longer supports cleanly.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);

const proofCards = [
  {
    id: "upwork",
    eyebrow: "Upwork",
    media: <UpworkTopRatedBadge size="lg" />,
    title: (
      <Link
        href={OWNER.upwork}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        Top Rated Plus
      </Link>
    ),
    body:
      "A practical trust signal when you want a specialist who can deliver without turning the project into agency theatre.",
  },
  {
    id: "jss",
    eyebrow: "Reputation",
    title: (
      <Link
        href={OWNER.upwork}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        100% Job Success Score
      </Link>
    ),
    body:
      "Proof of follow-through for merchants making a more serious storefront investment.",
  },
  {
    id: "teaching",
    eyebrow: "Teaching",
    title: (
      <Link
        href={OWNER.udemyUrl}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        World&apos;s First in English
      </Link>
    ),
    body:
      "Creator of the world's first English Shopify Hydrogen course on Udemy (110+ ratings).",
  },
  {
    id: "turkey",
    eyebrow: "Shipped work",
    title: "Turkey's first production Hydrogen storefront",
    body:
      "Frontend Team Lead on Turkey's first production Shopify Hydrogen storefront.",
  },
] as const;

const homepageMetrics = [
  { id: "stores", value: "3", label: "production Shopify Plus Hydrogen storefronts shipped" },
  { id: "scale", value: "400K+", label: "users on EveShop at production scale" },
  {
    id: "hours",
    value: "1,666+",
    label: "hours of Upwork production delivery",
    href: OWNER.upwork,
    external: true,
  },
  {
    id: "linkedin",
    value: "32K+",
    label: "LinkedIn followers",
    href: OWNER.linkedIn,
    external: true,
  },
  {
    id: "jss",
    value: "100%",
    label: "Job Success Score on Upwork",
    href: OWNER.upwork,
    external: true,
  },
  { id: "timeline", value: "6-16", label: "weeks for many scoped Hydrogen builds" },
] as const;

const processSteps = [
  {
    title: "Audit the pressure points",
    body: "I look at what is actually slowing growth, feature velocity, or mobile UX, not what sounds trendy in a kickoff deck.",
  },
  {
    title: "Define the commercial case",
    body: "You get a merchant-friendly answer on scope, cost, timing, and whether Hydrogen is really the right move.",
  },
  {
    title: "Ship with launch control",
    body: "If the case is strong, the storefront ships with clearer ownership, QA discipline, and fewer surprises after go-live.",
  },
] as const;

const references = [
  {
    label: "Hydrogen official site",
    href: "https://hydrogen.shopify.dev/",
    note: "Shopify describes Hydrogen as its headless stack for building custom storefronts.",
  },
  {
    label: "Shopify Hydrogen getting started docs",
    href: "https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started",
    note: "Official documentation for setup, capabilities, and implementation path.",
  },
] as const;

const technicalResources = [
  {
    title: "Shopify Hydrogen SEO Guide",
    href: "/shopify-hydrogen-seo-guide",
    body:
      "A practical guide to metadata, canonical URLs, JSON-LD, variant URLs, sitemaps, robots, and crawl consistency in custom Hydrogen storefronts.",
  },
  {
    title: "Variant URLs and fallback bugs",
    href: "/blog/shopify-hydrogen-variant-selection-fallback",
    body:
      "A technical article on keeping clicked options locked, preserving stable variant URLs, and avoiding UX or SEO mismatch on product pages.",
  },
  {
    title: "Hydrogen performance case note",
    href: "/blog/cut-homepage-load-time-from-5s-to-2s-shopify-hydrogen",
    body:
      "A real-world note on restoring server-rendered product data and cutting a Shopify Hydrogen homepage from roughly 5s to 2s.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={asSchemaArray(
          websiteSchema,
          personSchema,
          organizationSchema,
          articleSchema,
          itemListSchema,
          faqSchema,
          howToSchema,
        )}
      />
      <div className="page-shell">
        <section className="space-y-8">
          <div className="mx-auto max-w-5xl space-y-7 text-center">
            <p className="eyebrow justify-center">Senior Shopify Hydrogen development and advisory</p>
            <div className="space-y-3">
              <h1 className="hero-statement">
                Your Shopify store works, but every new feature takes 3x longer than last year?
              </h1>
              <p className="hero-response">{"That's when I come in."}</p>
            </div>
            <p className="mx-auto max-w-3xl page-intro">
              I help growth-minded Shopify Plus brands decide when Hydrogen is worth it, scope the
              right move, and ship production-grade storefronts without agency noise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/hire-me"
                className="rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
              >
                {"Let's Get Started"}
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                See The Proof
              </Link>
            </div>
          </div>

          <TrustBar />
        </section>

        <LogoWall
          logos={clientLogos}
          title="Selected work across 7 ecommerce brands"
          subtitle="Current Shopify Plus Hydrogen clients highlighted."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Three production Shopify Plus Hydrogen storefronts, including Turkey's first (400K+ users on EveShop)."
            description="Real stores, real constraints, and the kind of implementation detail that only shows up once a storefront is live."
          />
          <SelectedWorkGrid />
        </section>

        <ProofCardGrid items={proofCards} columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-4" />

        <SplitFeatureSection
          leftClassName="rounded-[1.45rem] border border-black/8 bg-[#f6f7f7] p-6"
          rightClassName=""
          left={
            <>
              <p className="eyebrow">Results</p>
              <h2 className="section-heading mt-3">Results built for real business decisions.</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                The useful outcome is not more tech. It is a storefront that is easier to scale,
                easier to trust, and easier to improve after launch.
              </p>
            </>
          }
          right={<StatCardGrid items={homepageMetrics} columnsClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" />}
        />

        <section id="process" className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Process"
            title="How working together usually goes"
            description="The point is not to push Hydrogen. It is to figure out whether your current stack is still enough, and if it is not, how to move without turning the project into a mess."
            className="max-w-5xl"
          />
          <ProcessStepGrid items={processSteps} />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="About Emre"
            title="Direct operator, direct context, direct accountability"
            description="The point is not to sell a headless rebuild. It is to help founders and ecommerce leads make the right commercial call, then ship the work without agency layers."
          />
          <FounderCard size="lg" showBio showCredentials>
            {FOUNDER_STORY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FounderCard>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Teaching"
            title="Teaching Hydrogen because the English-language path did not exist when I started"
            description="A visible proof layer for how the work gets communicated: direct, merchant-friendly, and grounded in real implementation."
          />
          <UdemyCourseCard courseUrl={OWNER.udemyUrl} />
        </section>

        <FaqSection
          title="Frequently asked questions about Shopify Hydrogen."
          faqs={faqs}
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Technical resources"
            title="Start with the pages Google and merchants should understand first."
            description="The core commercial pages explain fit, cost, and proof. These technical resources support the same positioning with practical Hydrogen SEO, URL, and performance detail."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {technicalResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-[1.3rem] border border-black/8 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#10b981]"
              >
                <h3 className="text-lg font-semibold text-[#171717]">{resource.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{resource.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <div className="max-w-3xl">
            <p className="eyebrow">Sources</p>
            <h2 className="section-heading mt-3">Authority should be grounded in real references.</h2>
            <p className="body-copy mt-4">
              These are the official sources behind the technical framing on this site. They support the plain-English guidance rather than replacing it.
            </p>
          </div>
          <div className="grid gap-4">
            {references.map((reference) => (
              <article key={reference.href} className="agency-grid-card">
                <h3 className="text-lg font-semibold text-[#171717]">
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#10b981]"
                  >
                    {reference.label}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{reference.note}</p>
              </article>
            ))}
          </div>
        </section>

        <CTASection
          primaryLink="upwork"
          subtext="If your brand has outgrown a theme-based storefront, I can help you decide whether Hydrogen is the right next move and what that should look like commercially."
          sourceKind="homepage_cta"
        />
      </div>
    </>
  );
}
