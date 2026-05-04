import { StepBadge } from "@/components/StepBadge";

interface ProcessStepItem {
  title: string;
  body: string;
}

interface ProcessStepGridProps {
  items: readonly ProcessStepItem[];
  columnsClassName?: string;
  useCircularBadge?: boolean;
}

export function ProcessStepGrid({
  items,
  columnsClassName = "grid gap-5 md:grid-cols-3",
  useCircularBadge = false,
}: ProcessStepGridProps) {
  return (
    <div className={columnsClassName}>
      {items.map((item, index) => (
        <div key={item.title} className="agency-grid-card card-rail">
          {useCircularBadge ? (
            <div className="feature-number">{index + 1}</div>
          ) : (
            <StepBadge className="self-start">{String(index + 1).padStart(2, "0")}</StepBadge>
          )}
          <div className="card-rail__title card-rail__title--compact">
            <h3 className="card-title mt-0">{item.title}</h3>
          </div>
          <p className="card-rail__body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
