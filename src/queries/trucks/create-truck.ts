import { TypedSupabaseClient } from "@/utils/typed-supabase-client";
import { TablesInsert } from "@/lib/supabase";

// Define the insert type for the trucks table
type TruckInsert = TablesInsert<"trucks">;

export function createTruck(
  client: TypedSupabaseClient,
  truckData: TruckInsert
) {
  return client.from("trucks").insert(truckData).throwOnError();
}
