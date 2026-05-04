import Link from "next/link";

const recoveryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/hire-me", label: "Hire Me" },
] as const;

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="surface-card">
        <p className="eyebrow">404</p>
        <h1 className="page-title mt-4">This page is not part of the storefront plan.</h1>
        <p className="page-intro mt-6">
          The URL may have moved, or it may not exist yet. Start with one of the
          main decision paths below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {recoveryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
