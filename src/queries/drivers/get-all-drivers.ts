import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getAllDrivers(client: TypedSupabaseClient) {
  return client.from("drivers").select("*").throwOnError();
}
