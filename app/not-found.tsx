import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="card mx-auto max-w-2xl text-center">
        <p className="eyebrow">Not Found</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">
          That page is not available
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          The page may have moved, or the blog post has not been published yet.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
        >
          Go back home
        </Link>
      </section>
    </div>
  );
}
