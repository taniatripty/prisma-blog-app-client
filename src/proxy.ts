import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.services";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;
  console.log(pathname);
  const { data } = await userServices.getsession();
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role == "ADMIN";
  }
  console.log(data);
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
