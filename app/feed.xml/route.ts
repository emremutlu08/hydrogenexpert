import { getPublishedPosts } from "@/lib/posts";
import { buildRssFeed } from "@/lib/rss";
import { getSiteUrl } from "@/lib/site";

export async function GET() {
  const feed = buildRssFeed({
    siteUrl: getSiteUrl(),
    posts: await getPublishedPosts(),
  });

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
