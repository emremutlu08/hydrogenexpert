import type { ReactNode } from "react";

interface StepBadgeProps {
  children: ReactNode;
  className?: string;
}

export function StepBadge({ children, className }: StepBadgeProps) {
  const rootClassName = ["feature-number", className].filter(Boolean).join(" ");

  return <div className={rootClassName}>{children}</div>;
}
