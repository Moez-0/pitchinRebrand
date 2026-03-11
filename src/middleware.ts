import { NextRequest, NextResponse } from "next/server";

const TRACKING_PARAMS = [
  "gclid",
  "fbclid",
  "msclkid",
  "mc_cid",
  "mc_eid",
];

function hasTrackingParams(url: URL) {
  const keys = [...url.searchParams.keys()];
  return keys.some(
    (key) => key.startsWith("utm_") || TRACKING_PARAMS.includes(key)
  );
}

function stripTrackingParams(url: URL) {
  const keys = [...url.searchParams.keys()];
  for (const key of keys) {
    if (key.startsWith("utm_") || TRACKING_PARAMS.includes(key)) {
      url.searchParams.delete(key);
    }
  }
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  if (url.pathname.startsWith("/apod.nasa.gov/")) {
    return new NextResponse("Gone", { status: 410 });
  }

  if (url.hostname === "www.pitchin.mobi") {
    url.hostname = "pitchin.mobi";
    shouldRedirect = true;
  }

  if (hasTrackingParams(url)) {
    stripTrackingParams(url);
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};