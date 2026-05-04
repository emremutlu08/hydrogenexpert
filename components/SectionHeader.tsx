import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  headingAs?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  headingAs = "h2",
}: SectionHeaderProps) {
  const rootClassName = [
    "section-header",
    align === "center" ? "section-header--center" : "section-header--split",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const HeadingTag = headingAs;

  return (
    <div className={rootClassName}>
      <div className="section-header__content">
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
        <HeadingTag className={titleClassName ?? "section-heading mt-3"}>{title}</HeadingTag>
      </div>
      {description ? <p className="section-header__description">{description}</p> : null}
    </div>
  );
}
