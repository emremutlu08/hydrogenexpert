import { NextResponse } from "next/server";

import { buildLlmsFullTxt } from "@/lib/llms";

export async function GET() {
  try {
    return new NextResponse(await buildLlmsFullTxt(), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  } catch {
    return new NextResponse("llms-full.txt is temporarily unavailable.", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }
}
