import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getCarrierById(client: TypedSupabaseClient, carrierId: string) {
  return client
    .from("carriers")
    .select("*")
    .eq("pkey", carrierId)
    .single()
    .throwOnError();
}
