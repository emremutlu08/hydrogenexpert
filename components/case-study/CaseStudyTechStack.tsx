interface CaseStudyTechStackProps {
  stack: readonly string[];
}

export function CaseStudyTechStack({ stack }: CaseStudyTechStackProps) {
  return (
    <section className="space-y-4">
      <div>
        <p className="eyebrow">Tech stack</p>
        <h3 className="subsection-title mt-3">What the implementation sat on</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
