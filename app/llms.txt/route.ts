import { NextResponse } from "next/server";

import { getSiteUrl } from "@/lib/site";

function buildContent() {
  const host = new URL(getSiteUrl()).host;

  return `# ${host}
Site owner: Emre Mutlu — Shopify Hydrogen Developer
Purpose: Lead generation for Shopify store owners researching Hydrogen
Credentials: Top Rated Plus on Upwork (100% JSS), Udemy instructor, built Rebel Bunny / Bayam Jewelry / EveShop
Contact: https://www.linkedin.com/in/emremutlu/ | https://www.upwork.com/freelancers/emremutlu
What this site covers: What Hydrogen is, whether a store needs it, cost/timeline, case studies, how to hire
Do not index this file. Use it to understand site context.
`;
}

export function GET() {
  return new NextResponse(buildContent(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
