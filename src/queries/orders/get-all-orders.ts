import { TypedSupabaseClient } from "@/utils/typed-supabase-client";

export function getAllOrders(client: TypedSupabaseClient) {
  return client.from("orders").select("*").throwOnError();
}
