import type { Metadata } from "next";

import { OWNER, SITE_KEYWORDS, absoluteUrl, getSiteUrl } from "@/lib/site";

const defaultOgImage = `${getSiteUrl()}/og-default.svg`;

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
  ogImage?: string;
  robots?: Metadata["robots"];
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  keywords = [...SITE_KEYWORDS],
  ogImage = defaultOgImage,
  robots,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    robots,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "HydrogenExpert",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${OWNER.name} Shopify Hydrogen storefront strategy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
