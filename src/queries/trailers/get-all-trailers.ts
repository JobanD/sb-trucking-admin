import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getAllTrailers(client: TypedSupabaseClient) {
  return client.from("trailers").select("*").throwOnError();
}
