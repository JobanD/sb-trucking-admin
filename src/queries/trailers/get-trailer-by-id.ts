import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getTrailerById(client: TypedSupabaseClient, trailerId: string) {
  return client
    .from("trailers")
    .select("*")
    .eq("pkey", trailerId)
    .single()
    .throwOnError();
}
