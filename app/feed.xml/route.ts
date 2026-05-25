import { getPublishedPostListResult } from "@/lib/posts";
import { buildRssFeed } from "@/lib/rss";
import { getSiteUrl } from "@/lib/site";

export async function GET() {
  const postResult = await getPublishedPostListResult();

  if (postResult.status === "source_unavailable") {
    return new Response("RSS feed is temporarily unavailable.", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  const feed = buildRssFeed({
    siteUrl: getSiteUrl(),
    posts: postResult.posts,
  });

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
