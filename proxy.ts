import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const url = request.nextUrl.clone();

  if (url.pathname === "/agency" || url.pathname === "/agency/") {
    url.pathname = "/services";

    if (host === "www.hydrogenexpert.co") {
      url.host = "hydrogenexpert.co";
    }

    return NextResponse.redirect(url, 301);
  }

  if (host === "www.hydrogenexpert.co") {
    url.host = "hydrogenexpert.co";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)"],
};
