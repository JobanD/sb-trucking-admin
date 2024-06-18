import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getAllTrucks(client: TypedSupabaseClient) {
  return client.from("trucks").select("*").throwOnError();
}
