import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { PostVisual } from "@/components/PostVisual";
import { TrackedContentLink } from "@/components/TrackedInternalLink";
import { buildMetadata } from "@/lib/seo";
import { getPostEnhancement } from "@/features/post-enhancements";
import { getPublishedPostListResult } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Blog | Production Notes by Emre Mutlu",
  description:
    "Personal production notes, implementation lessons, and first-hand Shopify Hydrogen observations from real storefront work.",
  path: "/blog",
});

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

function getSafeCoverVisual(coverImage: string | null) {
  if (!coverImage) {
    return null;
  }

  const isApproved =
    coverImage.startsWith("/curated-images/") || coverImage.startsWith("/brand/case-studies/");

  if (!isApproved) {
    return null;
  }

  return {
    type: "code-card" as const,
    src: coverImage,
    alt: "Blog article cover image selected from the approved technical visual library.",
    title: "Blog article cover image selected from the approved technical visual library.",
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const postResult = await getPublishedPostListResult();

  if (postResult.status === "source_unavailable") {
    throw new Error(postResult.error);
  }

  const posts = postResult.posts;

  if (posts.length === 0) {
    notFound();
  }

  const postsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const clampedPage = Math.min(currentPage, totalPages);
  const startIndex = (clampedPage - 1) * postsPerPage;
  const pagePosts = posts.slice(startIndex, startIndex + postsPerPage);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Production notes"
          title="Shopify Hydrogen Blog"
          description="Personal production notes, implementation lessons, and first-hand Shopify Hydrogen observations from real storefront work."
          body={
            <>
              <span>
                For evergreen merchant guides, hiring advice, cost breakdowns, and Hydrogen decision
                frameworks, read the Articles section.
              </span>{" "}
              <Link
                href="/articles"
                className="font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]"
              >
                Read Shopify Hydrogen Articles
              </Link>
            </>
          }
        />

      <section className="grid gap-6">
        {pagePosts.length > 0 ? (
          pagePosts.map((post, index) => {
            const enhancement = getPostEnhancement(post.slug);
            const previewVisual =
              enhancement.heroVisual.type !== "none"
                ? enhancement.heroVisual
                : getSafeCoverVisual(post.coverImage);

            return (
              <article key={post.slug} className="card blog-article-card">
                <div className="blog-article-card__meta">
                  <div className="feature-number">{index + 1}</div>
                  <p className="blog-article-card__date">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Coming soon"}
                  </p>
                </div>
                <div className="card-rail">
                  {previewVisual ? <PostVisual visual={previewVisual} compact /> : null}
                  <div className="card-rail__title">
                    <h2 className="subsection-title mt-0">
                      <TrackedContentLink
                        href={`/blog/${post.slug}`}
                        contentType="blog"
                        slug={post.slug}
                        className="transition hover:text-[#10b981]"
                      >
                        {post.title}
                      </TrackedContentLink>
                    </h2>
                  </div>
                  <p className="max-w-3xl text-base leading-8 text-neutral-600">
                    {post.excerpt || post.metaDescription}
                  </p>
                  {post.readingTime ? (
                    <p className="mt-3 text-sm font-medium text-neutral-500">{post.readingTime} min read</p>
                  ) : null}
                  <div className="card-rail__footer">
                    <TrackedContentLink
                      href={`/blog/${post.slug}`}
                      contentType="blog"
                      slug={post.slug}
                      className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#10b981]"
                    >
                      Read Production Notes
                    </TrackedContentLink>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="card">
            <h2 className="subsection-title mt-0">
              Fresh posts will appear here automatically
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
              Once Supabase is connected, merchant-focused articles generated by the publishing workflow will show up here.
            </p>
          </div>
        )}
      </section>

      <section className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-black/12 bg-[#f7f7f7] px-6 py-5">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-600">
          Page {clampedPage} of {totalPages}
        </p>
        <div className="flex gap-3">
          {clampedPage > 1 ? (
            <Link
              href={`/blog?page=${clampedPage - 1}`}
              className="inline-flex min-h-11 items-center rounded-full border border-black/12 px-4 py-2 text-sm font-semibold text-black transition-colors hover:border-[#10b981] hover:text-[#10b981]"
            >
              Previous
            </Link>
          ) : null}
          {clampedPage < totalPages ? (
            <Link
              href={`/blog?page=${clampedPage + 1}`}
              className="inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
            >
              Next
            </Link>
          ) : null}
        </div>
      </section>

        <CTASection
          subtext="If an article sounds close to your situation, send me the link and I’ll tell you what it would look like for your store specifically."
          sourceKind="blog_index_cta"
        />
      </div>
    </>
  );
}
