import Link from "next/link";
import type { ReactNode } from "react";

interface WorkCardProps {
  href: string;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  media: ReactNode;
  className?: string;
  mediaFooter?: ReactNode;
  eyebrowClassName?: string;
}

export function WorkCard({
  href,
  eyebrow,
  title,
  body,
  media,
  className,
  mediaFooter,
  eyebrowClassName,
}: WorkCardProps) {
  const rootClassName = ["agency-grid-card", "transition", "hover:-translate-y-0.5", "hover:border-[#10b981]", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={rootClassName}>
      {media}
      <div className="work-card__brand-zone">
        {mediaFooter ? mediaFooter : <span aria-hidden="true" className="block h-7 w-28" />}
      </div>
      <div className="card-rail">
        <p className={["card-label-block", "mt-4", eyebrowClassName].filter(Boolean).join(" ")}>{eyebrow}</p>
        <div className="card-rail__title card-rail__title--compact">
          <p className="card-title">{title}</p>
        </div>
        <p className="card-rail__body">{body}</p>
      </div>
    </Link>
  );
}
