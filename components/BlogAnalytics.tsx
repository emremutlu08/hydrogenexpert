"use client";

import { useEffect } from "react";

import { trackBlogView, trackScrollDepth } from "@/lib/analytics";

export function BlogAnalytics({ slug }: { slug: string }) {
  useEffect(() => {
    trackBlogView(slug);
    const cleanup = trackScrollDepth(slug);

    return () => cleanup();
  }, [slug]);

  return null;
}
