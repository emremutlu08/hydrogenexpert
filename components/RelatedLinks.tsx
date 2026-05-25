import Link from "next/link";

import type { TrafficLink } from "../features/traffic-foundation";

interface RelatedLinksProps {
  eyebrow?: string;
  title?: string;
  links: readonly TrafficLink[];
  className?: string;
}

export function RelatedLinks({
  eyebrow = "Related links",
  title = "Keep moving through this topic.",
  links,
  className,
}: RelatedLinksProps) {
  const rootClassName = ["card-soft space-y-5", className].filter(Boolean).join(" ");

  return (
    <section className={rootClassName}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="subsection-title">{title}</h2>
      </div>
      <div className="authority-links">
        {links.map((item) => {
          const cardContent = (
            <>
              <p className="authority-link-card__label">
                {item.external ? "External source" : "HydrogenExpert"}
              </p>
              <h3 className="authority-link-card__title">{item.label}</h3>
              <p className="authority-link-card__body">{item.note}</p>
            </>
          );

          return item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="authority-link-card"
            >
              {cardContent}
            </a>
          ) : (
            <Link key={item.href} href={item.href} className="authority-link-card">
              {cardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
