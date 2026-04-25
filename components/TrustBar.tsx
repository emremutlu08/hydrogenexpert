import Link from "next/link";

import { TRUST_ITEMS } from "@/lib/site";
import { OWNER } from "@/lib/site";

const TRUST_LINKS: Partial<Record<(typeof TRUST_ITEMS)[number], string | null>> = {
  "Top Rated Plus": OWNER.upwork,
  "100% JSS": OWNER.upwork,
  "1,666+ hours on Upwork": OWNER.upwork,
  "32K+ LinkedIn followers": OWNER.linkedIn,
  "World's first in English": OWNER.udemyUrl,
};

export function TrustBar() {
  const firstRow = TRUST_ITEMS.slice(0, 3);
  const secondRow = TRUST_ITEMS.slice(3, 6);

  function renderTrustItem(item: (typeof TRUST_ITEMS)[number]) {
    const href = TRUST_LINKS[item];

    if (!href) {
      return <span className="text-center">{item}</span>;
    }

    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-center transition hover:text-[#10b981]"
      >
        {item}
      </Link>
    );
  }

  return (
    <div className="rounded-[1.6rem] border border-black/8 bg-white shadow-[0_24px_60px_-42px_rgba(15,23,42,0.14)]">
      <div className="mx-auto grid max-w-6xl gap-y-3 px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
        <div className="grid gap-3 md:grid-cols-3">
          {firstRow.map((item) => (
            <div key={item}>{renderTrustItem(item)}</div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {secondRow.map((item) => (
            <div key={item}>{renderTrustItem(item)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
