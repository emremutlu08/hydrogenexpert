import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/lib/services";

export function AuditScopeOutcomeSections({ service }: { service: ServicePackage }) {
  if (service.slug !== "hydrogen-strategy-fit-audit") {
    return null;
  }

  return (
    <>
      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Review outcome"
          title="What you know after the first pass."
          description="The first-pass review should route the buyer into the right package, paid review, Liquid cleanup, or no rebuild without creating an unnecessary audit gate."
          className="max-w-5xl"
        />
        <ul className="editorial-list">
          {[
            "Whether the project looks like Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
            "Which desired routes, features, and integrations belong in the first fixed-scope launch.",
            "Where SEO, analytics, routing, app-stack, and checkout-handoff risks could change the estimate.",
            "Whether a paid Scope & Risk Review is worth doing before the build.",
          ].map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card-soft space-y-5">
          <p className="eyebrow">Inputs</p>
          <h2 className="subsection-title">What I need before the scope review</h2>
          <ul className="editorial-list">
            {[
              "Current store URL and current storefront stack.",
              "Desired pages, product flow, cart behavior, account needs, and must-have features.",
              "Design source: Figma, existing theme adaptation, simple clean design, or not sure yet.",
              "Approximate product count and required integrations.",
              "Known SEO, analytics, app-stack, migration, or launch risks.",
            ].map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-soft space-y-5">
          <p className="eyebrow">Boundary</p>
          <h2 className="subsection-title">What the review does not include</h2>
          <ul className="editorial-list">
            {[
              "Full storefront implementation.",
              "Full UX redesign.",
              "App replacement project.",
              "Analytics rebuild.",
              "Guaranteed ranking or conversion lift.",
              "A recommendation to use Hydrogen by default.",
            ].map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Review questions"
          title="The review should answer these questions."
          description="A paid memo is only needed when these questions cannot be answered from the first-pass brief."
          className="max-w-5xl"
        />
        <ol className="grid gap-3">
          {[
            "What is the real storefront constraint?",
            "Can Liquid still solve it?",
            "Which Hydrogen package fits the first launch?",
            "What would make the scope more expensive?",
            "What SEO, route, analytics, and data risks matter?",
            "What budget range is realistic?",
            "What is the safest next scope?",
          ].map((item, index) => (
            <li
              key={item}
              className="rounded-[1.1rem] border border-black/8 bg-white p-4 text-sm leading-7 text-neutral-700"
            >
              <span className="mr-3 font-bold text-[#0f8a5d]">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
