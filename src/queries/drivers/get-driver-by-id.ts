import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getDriverById(client: TypedSupabaseClient, driverId: string) {
  return client
    .from("drivers")
    .select("*")
    .eq("pkey", driverId)
    .single()
    .throwOnError();
}
