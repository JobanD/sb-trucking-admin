import { TypedSupabaseClient } from "@/utils/typed-supabase-client";
import { TablesInsert } from "@/lib/supabase";

// Define the insert type for the trucks table
type DriverInsert = TablesInsert<"drivers">;

export function createDriver(
  client: TypedSupabaseClient,
  driverData: DriverInsert
) {
  return client.from("drivers").insert(driverData).throwOnError();
}
