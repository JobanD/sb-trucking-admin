"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
