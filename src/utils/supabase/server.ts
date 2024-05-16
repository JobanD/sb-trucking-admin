import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  user_role?: string;
}

export function createClient() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {}
        },
      },
    }
  );

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      const jwt = jwtDecode<CustomJwtPayload>(session.access_token);
      const userRole = jwt.user_role;
      console.log("User role:", userRole);
      // Handle the userRole as needed, e.g., set in request context
    }
  });

  return supabase;
}
