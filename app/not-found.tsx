import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="card mx-auto max-w-2xl text-center">
        <p className="eyebrow">Not Found</p>
        <h1 className="page-title mt-4">That page is not available</h1>
        <p className="page-intro mt-4 max-w-none">
          The page may have moved, or the blog post has not been published yet.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
        >
          Go back home
        </Link>
      </section>
    </div>
  );
}
