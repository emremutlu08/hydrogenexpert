import type { ReactNode } from "react";

import { StatCard } from "@/components/StatCard";

interface StatCardGridItem {
  id?: string;
  value: ReactNode;
  label: ReactNode;
  href?: string;
  external?: boolean;
}

interface StatCardGridProps {
  items: readonly StatCardGridItem[];
  className?: string;
  columnsClassName?: string;
}

export function StatCardGrid({
  items,
  className,
  columnsClassName = "grid gap-4 sm:grid-cols-2",
}: StatCardGridProps) {
  return (
    <div className={`${columnsClassName} ${className ?? ""}`.trim()}>
      {items.map((item, index) => (
        <StatCard
          key={item.id || `${index}`}
          value={item.value}
          label={item.label}
          href={item.href}
          external={item.external}
        />
      ))}
    </div>
  );
}
