import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HydrogenFitQuiz } from "@/components/quiz/HydrogenFitQuiz";
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
  title: "Should I Use Shopify Hydrogen? Merchant Decision Guide",
  description:
    "Use a practical 5-question Shopify Hydrogen decision guide to decide whether to stay on Liquid, run a fit audit, or plan a custom Hydrogen storefront.",
  path: "/should-i-use-it",
});

const questions = [
  {
    title: "Do customers complain that your site feels slow on mobile?",
    body:
      "If you are losing impatient shoppers during browsing, search, or product-page transitions, Hydrogen can help by creating a faster and more fluid experience.",
  },
  {
    title: "Do you want a more custom shopping journey than your theme allows?",
    body:
      "If merchandising ideas keep dying because the theme cannot support them cleanly, that is a real signal that a custom storefront may be justified.",
  },
  {
    title: "Is your brand positioning getting more premium?",
    body:
      "A higher-end brand often needs a storefront that feels intentional, polished, and differentiated. Hydrogen makes that easier when design quality matters.",
  },
  {
    title: "Are you planning to invest in growth for the next 12 to 24 months?",
    body:
      "Hydrogen makes the most sense when you are building for the next stage of the business, not trying to patch a short-term problem for one campaign.",
  },
  {
    title: "Can the store support a meaningful rebuild budget and timeline?",
    body:
      "Hydrogen is not a quick theme tweak. It is a more serious project, so the upside has to matter enough to justify the spend and launch planning.",
  },
] as const;

const schemaFaqs = [
  {
    question: "What if I answer yes to only 2 questions?",
    answer:
      "Two yes answers usually means Hydrogen is worth discussing, but not yet worth forcing. I would normally inspect the specific friction points, the growth plan, and whether a stronger Liquid implementation could solve the problem more cheaply before recommending a custom storefront.",
  },
  {
    question: "How much does a Hydrogen evaluation cost?",
    answer:
      "That depends on depth. A lightweight evaluation can be a focused advisory conversation with follow-up notes. A deeper evaluation usually includes storefront review, commercial fit, scope pressure points, and implementation risk. The useful output is a decision, not a generic headless presentation.",
  },
  {
    question: "Can Hydrogen improve mobile conversion?",
    answer:
      "Yes, when the current theme is creating friction in browsing, filtering, product discovery, or perceived speed. Hydrogen does not improve conversion automatically. It gives you the control to design a better mobile buying path, which is what can improve conversion when the business case is real.",
  },
  {
    question: "Is Hydrogen overkill for stores under $5M revenue?",
    answer:
      "Often yes, but not always. Revenue alone is not the real test. If the store is still well served by Liquid, Hydrogen is usually unnecessary. If the brand has unusual UX demands, premium positioning, or growth constraints that a theme cannot handle, the conversation becomes more legitimate.",
  },
] as const;

const faqSchema = buildFaqPageSchema(schemaFaqs);
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Should I Use It?", href: "/should-i-use-it" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function ShouldIUseItPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Decision Guide"
          title="Should you use Shopify Hydrogen?"
          description="A short decision framework for brands trying to separate real storefront pressure from headless hype."
          body={
            <>
              <span>
                You do not need a developer debate. You need a practical decision. If you answer
                yes to three or more of the questions below, Hydrogen is probably worth a serious
                evaluation.
              </span>{" "}
              <Link
                href="/when-not-to-use-hydrogen"
                className="font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]"
              >
                Before you take the test, consider the cases where Hydrogen is the wrong move.
              </Link>
            </>
          }
        />

        <HydrogenFitQuiz questions={questions} />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Score interpretation"
            title="How to interpret your Hydrogen fit score"
            description="The quiz result should lead to a practical next move, not a default rebuild."
            className="max-w-5xl"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "0-2 yes answers: stay on Liquid or refactor first",
                body:
                  "Hydrogen is probably not the next move yet. A stronger theme, cleaner app stack, faster product pages, or narrower UX cleanup may create more ROI than a custom storefront rebuild.",
                links: [
                  { href: "/when-not-to-use-hydrogen", label: "Read when Hydrogen is the wrong move" },
                  { href: "/contact", label: "Ask for a lighter recommendation" },
                ],
              },
              {
                title: "3-4 yes answers: run a Fit & Risk Audit",
                body:
                  "Hydrogen may be justified, but the decision needs scope discipline. Before rebuild budget moves, review the current storefront constraint, SEO risk, app stack, analytics, migration complexity, and maintenance readiness.",
                links: [
                  { href: "/shopify-hydrogen-audit", label: "Start with a Fit & Risk Audit" },
                  { href: "/shopify-hydrogen-cost", label: "Review Hydrogen cost ranges" },
                ],
              },
              {
                title: "5 yes answers: Hydrogen deserves serious planning",
                body:
                  "The store is likely running into custom UX, performance, merchandising, or growth-stage limits that a theme may not solve cleanly. The next step is not a rushed rebuild; it is a scoped Hydrogen plan with migration, SEO, data, launch, and maintenance ownership defined.",
                links: [
                  { href: "/liquid-to-hydrogen-migration", label: "Plan a Liquid to Hydrogen migration" },
                  { href: "/contact", label: "Request a Hydrogen Fit Review" },
                ],
              },
            ].map((card) => (
              <article key={card.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                <h2 className="text-lg font-semibold leading-7 text-[#171717]">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{card.body}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {card.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-h-10 items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
