import { TRUST_ITEMS } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
        {TRUST_ITEMS.map((item, index) => (
          <span key={item} className="flex items-center gap-3">
            <span>{item}</span>
            {index < TRUST_ITEMS.length - 1 ? (
              <span className="text-blue-600">·</span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
