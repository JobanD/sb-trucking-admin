// Supabase Client for Client Side
import { createBrowserClient } from "@supabase/ssr";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  user_role?: string;
}

export function createClient() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      const jwt = jwtDecode<CustomJwtPayload>(session.access_token);
      const userRole = jwt.user_role;
      // console.log("User role:", userRole);
      // You can store the userRole in your state management system if needed
    }
  });

  return supabase;
}
