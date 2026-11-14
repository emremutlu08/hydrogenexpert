import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getLegacyPermanentRedirect } from "./lib/legacy-redirects";

export { getLegacyPermanentRedirect };

// Moves a www request to the apex. Setting only URL.host keeps the internal server port when the app
// runs behind a reverse proxy, so the port is cleared explicitly.
export function toCanonicalHost(url: URL) {
  url.host = "hydrogenexpert.co";
  url.port = "";
  return url;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const url = request.nextUrl.clone();
  const legacyRedirectPath = getLegacyPermanentRedirect(url.pathname);

  if (legacyRedirectPath) {
    url.pathname = legacyRedirectPath;
    url.search = "";

    if (host === "www.hydrogenexpert.co") {
      toCanonicalHost(url);
    }

    return NextResponse.redirect(url, 301);
  }

  if (url.pathname === "/agency" || url.pathname === "/agency/") {
    url.pathname = "/services";

    if (host === "www.hydrogenexpert.co") {
      toCanonicalHost(url);
    }

    return NextResponse.redirect(url, 301);
  }

  if (host === "www.hydrogenexpert.co") {
    toCanonicalHost(url);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)"],
};
