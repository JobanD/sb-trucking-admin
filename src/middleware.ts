import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // Return just the cookie value or null if not found
          return request.cookies.get(name)?.value || null;
        },
        set(name: string, value: string, options: CookieOptions) {
          // Set the cookie with the correct options
          request.cookies.set({
            name: name,
            value: value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          // Remove the cookie by setting its maxAge to 0
          request.cookies.set({
            name: name,
            value: "",
            maxAge: 0, // Setting maxAge to 0 to effectively delete the cookie
            ...options,
          });
        },
      },
    }
  );

  // Fetch the user to determine authentication status
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Redirect to login page if no user and not already on login page
  if (!user && !request.nextUrl.pathname.startsWith("/login")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("message", "login-required"); // Set a message query parameter
    return NextResponse.redirect(url);
  }

  // Continue with the request if the user is authenticated or if it's a request to login
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
