import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

interface StatCardProps {
  value: ReactNode;
  label: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  style?: CSSProperties;
}

export function StatCard({
  value,
  label,
  className,
  href,
  external = false,
  style,
}: StatCardProps) {
  const rootClassName = [
    "stat-card",
    href ? "transition hover:-translate-y-0.5 hover:border-[#10b981]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <div className="card-rail">
      <div className="stat-card__value-wrap">
        <p className="stat-card__value">{value}</p>
      </div>
      {label ? <p className="stat-card__label">{label}</p> : null}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={rootClassName}
        style={style}
        data-animate="fade-up"
        data-tilt
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={rootClassName} style={style} data-animate="fade-up" data-tilt>
      {content}
    </div>
  );
}
