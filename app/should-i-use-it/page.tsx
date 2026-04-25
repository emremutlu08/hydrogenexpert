import Link from "next/link";

import { HydrogenFitQuiz } from "@/components/quiz/HydrogenFitQuiz";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { buildMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Should I Use Shopify Hydrogen? A Merchant Decision Guide",
  description:
    "Use five merchant-focused questions to decide whether Shopify Hydrogen fits your store, budget, mobile UX goals, and growth plan.",
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

export default function ShouldIUseItPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="page-shell">
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
      </div>
    </>
  );
}
