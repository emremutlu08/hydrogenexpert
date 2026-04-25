import { NextResponse } from "next/server";

import { buildLlmsFullTxt } from "@/lib/llms";

export async function GET() {
  return new NextResponse(await buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
