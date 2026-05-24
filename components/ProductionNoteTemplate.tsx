import { RelatedLinks } from "@/components/RelatedLinks";
import type { ProductionNoteFrame } from "@/lib/production-notes";

interface ProductionNoteTemplateProps {
  frame: ProductionNoteFrame;
}

const FRAME_ROWS = [
  ["Problem", "problem"],
  ["Symptom", "symptom"],
  ["Root cause", "rootCause"],
  ["Fix", "fix"],
  ["Risk", "risk"],
] as const;

export function ProductionNoteTemplate({ frame }: ProductionNoteTemplateProps) {
  return (
    <section className="card-soft mt-10 space-y-6">
      <div>
        <p className="eyebrow">Production note template</p>
        <h2 className="subsection-title">
          Problem, symptom, root cause, fix, risk, and related links.
        </h2>
      </div>
      <div className="grid gap-4">
        {FRAME_ROWS.map(([label, key]) => (
          <div key={key} className="rounded-[1.1rem] border border-black/8 bg-white p-5">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
              {label}
            </p>
            <p className="mt-3 text-base leading-8 text-neutral-700">{frame[key]}</p>
          </div>
        ))}
      </div>
      <RelatedLinks
        eyebrow="Related paths"
        title="Use the issue library and checklist before the next edit."
        links={frame.relatedLinks}
        className="!mt-0 border-black/8 bg-white shadow-none"
      />
    </section>
  );
}
