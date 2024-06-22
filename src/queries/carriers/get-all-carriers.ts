import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getAllCarriers(client: TypedSupabaseClient) {
  return client.from("carriers").select("*").throwOnError();
}
