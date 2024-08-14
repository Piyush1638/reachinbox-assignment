import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isLoginPage = pathName === "/login";
  const isGoogleLoginPage = pathName === "/google-login";

  // Parse cookies from the request
  const token = request.cookies.get("token")?.value;

  if (!token && !isLoginPage && !isGoogleLoginPage) {
    // Redirect to login if the user is not authenticated and not on a login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && (isLoginPage || isGoogleLoginPage)) {
    // Redirect to home if the user is authenticated and tries to access login pages
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to continue if no redirects are necessary
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/", "/google-login"],
};
