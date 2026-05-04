import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: readonly BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true" className="text-neutral-300">/</span> : null}
              {isLast ? (
                <span aria-current="page" className="text-[#171717]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition hover:text-[#10b981]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
