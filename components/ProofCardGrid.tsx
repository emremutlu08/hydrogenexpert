import type { CSSProperties, ReactNode } from "react";

import { ProofCard } from "@/components/ProofCard";

interface ProofCardGridItem {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  media?: ReactNode;
}

interface ProofCardGridProps {
  items: readonly ProofCardGridItem[];
  className?: string;
  columnsClassName?: string;
}

export function ProofCardGrid({
  items,
  className,
  columnsClassName = "grid gap-5 md:grid-cols-3",
}: ProofCardGridProps) {
  return (
    <div className={`${columnsClassName} ${className ?? ""}`.trim()}>
      {items.map((item, index) => (
        <ProofCard
          key={item.id || `${item.eyebrow}-${index}`}
          eyebrow={item.eyebrow}
          title={item.title}
          body={item.body}
          media={item.media}
          style={{ "--motion-delay": `${index * 55}ms` } as CSSProperties}
        />
      ))}
    </div>
  );
}
