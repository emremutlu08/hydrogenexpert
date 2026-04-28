import type { CaseStudyMetric } from "@/data/caseStudies";

interface CaseStudyMetricGridProps {
  metrics: readonly CaseStudyMetric[];
}

export function CaseStudyMetricGrid({ metrics }: CaseStudyMetricGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric) => (
        <article
          key={`${metric.label}-${metric.value ?? metric.valueAfter ?? metric.valueBefore ?? "metric"}`}
          className="rounded-[1.2rem] border border-black/8 bg-white p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {metric.label}
          </p>
          {metric.valueBefore && metric.valueAfter ? (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-neutral-500">Before: {metric.valueBefore}</p>
              <p className="text-xl font-semibold text-[#171717]">After: {metric.valueAfter}</p>
            </div>
          ) : (
            <p className="mt-4 text-base font-semibold leading-7 text-[#171717]">
              {metric.value ?? "Verified before/after metrics pending."}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
