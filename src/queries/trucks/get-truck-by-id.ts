import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getTruckById(client: TypedSupabaseClient, truckId: string) {
  return client
    .from("trucks")
    .select("*")
    .eq("pkey", truckId)
    .single()
    .throwOnError();
}
