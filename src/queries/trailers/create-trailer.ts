import { TypedSupabaseClient } from "@/utils/typed-supabase-client";
import { TablesInsert } from "@/lib/supabase";

// Define the insert type for the trucks table
type TrailerInsert = TablesInsert<"trailers">;

export function createTrailer(
  client: TypedSupabaseClient,
  trailerData: TrailerInsert
) {
  return client.from("drivers").insert(trailerData).throwOnError();
}
