import type { ReactNode } from "react";

interface SplitFeatureSectionProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

export function SplitFeatureSection({
  left,
  right,
  className,
  leftClassName,
  rightClassName,
}: SplitFeatureSectionProps) {
  return (
    <section className={`surface-card ${className ?? ""}`.trim()}>
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <div className={leftClassName}>{left}</div>
        <div className={rightClassName}>{right}</div>
      </div>
    </section>
  );
}
