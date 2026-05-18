import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LEGACY_PERMANENT_REDIRECTS = new Map([
  ["/blog/shopify-hydrogen-v2-setup-guide", "/what-is-hydrogen"],
]);

function normalizePathname(pathname: string) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getLegacyPermanentRedirect(pathname: string) {
  return LEGACY_PERMANENT_REDIRECTS.get(normalizePathname(pathname)) ?? null;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const url = request.nextUrl.clone();
  const legacyRedirectPath = getLegacyPermanentRedirect(url.pathname);

  if (legacyRedirectPath) {
    url.pathname = legacyRedirectPath;
    url.search = "";

    if (host === "www.hydrogenexpert.co") {
      url.host = "hydrogenexpert.co";
    }

    return NextResponse.redirect(url, 301);
  }

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
