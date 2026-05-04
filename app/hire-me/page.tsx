import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { FounderCard } from "@/components/FounderCard";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { ProcessStepGrid } from "@/components/ProcessStepGrid";
import { ProofCard } from "@/components/ProofCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SplitFeatureSection } from "@/components/SplitFeatureSection";
import { StatCard } from "@/components/StatCard";
import { UdemyCourseCard } from "@/components/UdemyCourseCard";
import { FOUNDER_STORY } from "@/lib/founder";
import { buildMetadata } from "@/lib/seo";
import { CLIENTS, FOUNDER_IMAGE_PATH, OWNER, UPWORK_PROFILE, absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Hire a Shopify Hydrogen Developer | Emre Mutlu",
  description:
    "Hire Emre Mutlu for senior Shopify Hydrogen audits, Liquid-to-Hydrogen migration, custom storefront builds, performance optimization, and direct launch support.",
  path: "/hire-me",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER.name,
  jobTitle: OWNER.title,
  description: OWNER.headline,
  image: absoluteUrl(FOUNDER_IMAGE_PATH),
  sameAs: [OWNER.linkedIn, OWNER.upwork, OWNER.udemyUrl],
};

const process = [
  {
    title: "Discovery before diagnosis",
    body: "Direct conversation focused on business goals, storefront pressure, and whether Hydrogen is even the right move.",
  },
  {
    title: "Audit the commercial case",
    body: "Storefront review with scope, timeline, decision risk, and a clearer sense of what should ship first.",
  },
  {
    title: "Build with ownership",
    body: "Milestone-based delivery with fewer layers between design intent, implementation detail, and launch reality.",
  },
  {
    title: "Stay available after launch",
    body: "Follow-through after go-live so the storefront is still readable, maintainable, and commercially useful.",
  },
] as const;

const proofCards = [
  {
    titleNode: (
      <Link
        href={OWNER.upwork}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        Top Rated Plus
      </Link>
    ),
    title: "Top Rated Plus",
    body: "External proof that delivery discipline and client trust already exist outside this site.",
    media: null,
  },
  {
    titleNode: (
      <Link
        href={OWNER.upwork}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        100% Job Success Score
      </Link>
    ),
    title: "100% Job Success Score",
    body: "A cleaner signal of reliability for brands making more serious storefront decisions.",
    media: null,
  },
  {
    titleNode: (
      <Link
        href={OWNER.udemyUrl}
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-[#10b981]"
      >
        World&apos;s First in English
      </Link>
    ),
    title: "World's First in English",
    body: "Creator of the world's first English Shopify Hydrogen course on Udemy.",
    media: null,
  },
  {
    titleNode: (
      <Link
        href="/case-studies/rebel-bunny-shopify-hydrogen"
        className="transition hover:text-[#10b981]"
      >
        5.0 Rebel Bunny Feedback
      </Link>
    ),
    title: "5.0 Rebel Bunny Feedback",
    body: "Public Upwork feedback now supports the Rebel Bunny Shopify Hydrogen case study.",
    media: null,
  },
] as const;

const stats: Array<{ value: string; label: string; href?: string }> = [
  { value: UPWORK_PROFILE.totalHoursLabel, label: "hours of Upwork delivery", href: OWNER.upwork },
  { value: "32K+", label: "LinkedIn followers", href: OWNER.linkedIn },
  { value: "First", label: "production Hydrogen storefront in Turkey" },
];

const proofSnapshot = [
  "3 production Shopify Hydrogen storefronts",
  "400K+ users on EveShop",
  "Top Rated Plus on Upwork",
  "1,900+ Upwork hours",
  "5.0 Rebel Bunny feedback on Upwork",
  "32K+ LinkedIn followers",
  "Creator of the first English Shopify Hydrogen course",
] as const;

const faqs = [
  {
    question: "What does working with Emre usually look like?",
    answer:
      "Usually it starts with a direct review of where the storefront is creating drag, then turns into a scoped plan with timeline, commercial fit, and clear delivery ownership. The process stays narrow and practical rather than agency-style.",
  },
  {
    question: "Do you take strategy-only work or only implementation?",
    answer:
      "Both. Some brands need a clean Hydrogen decision and scope before they commit. Others already know they need implementation and want direct senior delivery without extra agency layers between planning and build work.",
  },
  {
    question: "Is this only for full Shopify Hydrogen rebuilds?",
    answer:
      "No. The useful question is whether Hydrogen is the right move at all. If the store would be better served by a stronger Liquid path or a narrower UX fix, that should be the recommendation instead of forcing a rebuild.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Hire Me", href: "/hire-me" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function HireMePage() {
  return (
    <>
      <JsonLd data={asSchemaArray(personSchema, breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Why Emre"
          title="Hire a Shopify Hydrogen developer with real delivery history"
          description="Direct senior delivery for Shopify Plus brands that need sharper storefront systems without agency theatre."
          body="I help brands move from theme limitations to faster, more flexible Shopify Hydrogen storefronts. The work stays grounded in conversion, UX, and launch reality."
        />

        <FounderCard size="lg" showBio showCredentials>
          {FOUNDER_STORY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </FounderCard>

        <section className="card-soft grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">Proof snapshot</p>
            <h2 className="subsection-title mt-3">The short version buyers usually need.</h2>
          </div>
          <ul className="editorial-list">
            {proofSnapshot.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Client proof"
            title="Clear credentials, direct contact, less agency noise."
            description="The point is not to sell complexity. It is to help brands understand what they need and launch with fewer surprises."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofCards.map((card) => (
              <ProofCard
                key={card.title}
                eyebrow="Proven signal"
                title={card.titleNode}
                body={card.body}
                media={card.media}
              />
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Teaching"
            title="A public teaching signal alongside the client work"
            description="The course card makes the educational proof explicit, without pretending missing URL data is already in place."
          />
          <UdemyCourseCard courseUrl={OWNER.udemyUrl} />
        </section>

        <SplitFeatureSection
          leftClassName="rounded-[1.45rem] border border-black/8 bg-[#f6f7f7] p-6"
          rightClassName="grid gap-5"
          left={
            <>
              <p className="eyebrow">About</p>
              <h2 className="subsection-title mt-3">One operator, direct contact, fewer layers.</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                Store owners usually need honest scoping, fast communication, and someone who can explain tradeoffs in business terms. That is exactly how I run projects.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                You do not need to decode technical language to make a smart decision. I keep the conversation focused on risk, payoff, timeline, and launch readiness.
              </p>
            </>
          }
          right={
            <>
              <p className="text-base leading-8 text-neutral-600">
                Your Shopify store works, but every new feature takes 3x longer than last year? That is when I come in. The job is not to sell you complexity. It is to figure out whether the stack is still serving the business.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <StatCard
                    key={item.label}
                    value={item.value}
                    label={item.label}
                    href={item.href}
                    external={Boolean(item.href)}
                  />
                ))}
              </div>
              <div className="card-soft">
                <p className="eyebrow">Clients</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {CLIENTS.map((client) => (
                    <span key={client} className="soft-pill">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </>
          }
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Process"
            title="How working together usually goes"
            description="A clearer decision path first, then implementation. No bloated process layer between the business case and the storefront work."
            className="max-w-5xl"
          />
          <ProcessStepGrid items={process} columnsClassName="grid gap-5 md:grid-cols-2" useCircularBadge />
        </section>

        <FaqSection
          title="Questions that usually come before a real scope."
          faqs={faqs}
        />

        <CTASection
          primaryLink="upwork"
          subtext="If you already know your storefront needs a stronger customer experience, the fastest next step is a direct conversation on Upwork."
          sourceKind="hire_me_cta"
        />
      </div>
    </>
  );
}
