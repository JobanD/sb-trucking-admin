import { TypedSupabaseClient } from "@/utils/typed-supabase-client";
import { TablesInsert } from "@/lib/supabase";

// Define the insert type for the trucks table
type CarrierInsert = TablesInsert<"carriers">;

export function createCarrier(
  client: TypedSupabaseClient,
  carrierData: CarrierInsert
) {
  return client.from("carriers").insert(carrierData).throwOnError();
}
