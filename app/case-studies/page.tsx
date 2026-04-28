import { CTASection } from "@/components/CTASection";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyMetricGrid } from "@/components/case-study/CaseStudyMetricGrid";
import { CaseStudyScreenshots } from "@/components/case-study/CaseStudyScreenshots";
import { CaseStudyTechStack } from "@/components/case-study/CaseStudyTechStack";
import { CaseStudyTestimonial } from "@/components/case-study/CaseStudyTestimonial";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SelectedWorkGrid } from "@/components/SelectedWorkGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { CASE_STUDIES } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Case Studies for Shopify Plus Brands",
  description:
    "Production Shopify Hydrogen case studies across retail, luxury ecommerce, and premium DTC with clear pending-approval notes where proof still needs verification.",
  path: "/case-studies",
});

const faqs = [
  {
    question: "Why are some proof points marked as pending verification?",
    answer:
      "Because this page separates business context from proof that still needs client approval or verification. When a client-approved number or testimonial does not exist yet, I would rather label it as pending than guess at precision.",
  },
  {
    question: "Why is EveShop still an important case even if the storefront stack changed later?",
    answer:
      "Because the hard part of a case study is proving you have shipped at real scale. EveShop still proves production Hydrogen experience on a national retail brand, and it also reinforces the commercial truth that custom storefronts only keep paying off when the organization is ready to maintain them.",
  },
  {
    question: "What makes Bayam and Rebel Bunny different from each other as Hydrogen projects?",
    answer:
      "Bayam is a luxury discovery problem with multiple product mindsets inside one premium catalog. Rebel Bunny is a brand, education, and partnership problem where commerce, content, and community all need to live inside one storefront system.",
  },
  {
    question: "Why are there no testimonials on this page yet?",
    answer:
      "Because I am not going to invent quotes or attach weak attribution to something that should be precise. Once a client-approved quote and attribution are available, the testimonial block is already wired to render it.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="page-shell">
        <PageIntroSection
          eyebrow="Proof"
          title="Real stores, real constraints, real engineering decisions"
          description="One proof page, three very different storefront pressures: nationwide retail, luxury ecommerce, and social-first DTC."
          body="Each section below separates business context from proof that is still pending approval or verification. No client quote, performance number, or conversion claim is guessed."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Jump straight to the storefront pressure that looks most like yours."
            description="The preview cards stay as anchor links so you can move directly into EveShop, Bayam Jewelry, or Rebel Bunny Matcha."
          />
          <SelectedWorkGrid />
        </section>

        <section className="grid gap-8">
          {CASE_STUDIES.map((study, index) => (
            <article id={study.id} key={study.id} className="card scroll-mt-32 space-y-8">
              <CaseStudyHero
                clientName={study.clientName}
                tagline={study.tagline}
                role={study.role}
                industry={study.industry}
                liveUrl={study.liveUrl}
                logo={study.logo}
                heroImage={study.heroImage}
              />

              <div className="grid gap-x-8 gap-y-10 xl:grid-cols-2 xl:items-start">
                <div>
                  <p className="eyebrow">Case {index + 1}</p>
                  <h3 className="subsection-title mt-3">Problem</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{study.problem}</p>
                </div>

                <div>
                  <p className="eyebrow">Approach</p>
                  <h3 className="subsection-title mt-3">What I focused on</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{study.approach}</p>
                </div>

                <div className="rounded-[1.5rem] border border-black/8 bg-[#f6f7f7] p-6 md:p-8">
                  <p className="eyebrow">Outcome</p>
                  <h3 className="subsection-title mt-3">What changed and why it matters</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-700">{study.outcome}</p>
                </div>

                <CaseStudyScreenshots screenshots={study.screenshots} />

                <section className="space-y-4">
                  <div>
                    <p className="eyebrow">Metrics</p>
                    <h3 className="subsection-title mt-3">Supported proof points</h3>
                  </div>
                  <CaseStudyMetricGrid metrics={study.metrics} />
                </section>

                <CaseStudyTechStack stack={study.techStack} />
              </div>

              <section className="rounded-[1.5rem] border border-black/8 bg-white p-6 md:p-8">
                <p className="eyebrow">Pending proof</p>
                <h3 className="subsection-title mt-3">To be added after approval</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {study.pendingProof.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1rem] border border-dashed border-black/12 bg-[#f6f7f7] px-4 py-3 text-sm font-medium leading-6 text-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <CaseStudyTestimonial testimonial={study.testimonial} />
            </article>
          ))}
        </section>

        <FaqSection title="Case study questions that usually matter after the first scroll." faqs={faqs} />

        <CTASection
          primaryLink="upwork"
          headline="Your storefront, written honestly on a page"
          subtext="If your store has constraints that rhyme with any of these, I can help you scope the move with a merchant-friendly plan instead of a vague technical pitch."
          sourceKind="case_studies_cta"
        />
      </div>
    </>
  );
}
