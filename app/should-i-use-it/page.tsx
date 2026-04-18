import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Should I Use Shopify Hydrogen? 5 Questions to Ask First",
  description:
    "Use these five practical questions to decide if Shopify Hydrogen matches your store, budget, growth plan, and customer experience goals now.",
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

export default function ShouldIUseItPage() {
  return (
    <div className="page-shell">
      <section className="max-w-4xl space-y-6">
        <p className="eyebrow">Decision Guide</p>
        <h1 className="font-display text-5xl leading-tight text-slate-900 md:text-6xl">
          Should You Use Shopify Hydrogen?
        </h1>
        <p className="text-xl leading-9 text-slate-600">
          You do not need a developer debate. You need a practical decision. If
          you answer “yes” to three or more of the questions below, Hydrogen is
          probably worth a serious evaluation.
        </p>
      </section>

      <section className="grid gap-6">
        {questions.map((question, index) => (
          <div key={question.title} className="card grid gap-4 md:grid-cols-[0.18fr_1fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-lg font-black text-blue-600">
              {index + 1}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {question.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {question.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="card bg-blue-50">
        <p className="eyebrow">How to read your score</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">
          Three or more yes answers usually means Hydrogen deserves a real plan
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Below that threshold, a stronger theme strategy may still be the
          smarter move. Above that threshold, the store is often bumping into UX
          and performance ceilings that a custom storefront can remove.
        </p>
      </section>

      <CTASection
        primaryLink="upwork"
        subtext="If you scored three or more yes answers, I can help you map the scope, timeline, and ROI before you commit to a full rebuild."
      />
    </div>
  );
}
