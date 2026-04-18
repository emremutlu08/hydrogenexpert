import type { Metadata } from "next";

import { OWNER, absoluteUrl, getSiteUrl } from "@/lib/site";

const defaultOgImage = `${getSiteUrl()}/og-default.png`;

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
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
          url: defaultOgImage,
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
      images: [defaultOgImage],
    },
  };
}
