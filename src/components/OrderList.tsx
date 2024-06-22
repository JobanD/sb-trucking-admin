"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getAllOrders } from "@/queries/orders/get-all-orders";
import OrderGrid from "./table/OrderGrid";

export default function OrderList() {
  const supabase = useSupabaseBrowser();
  const { data: orders, error } = useQuery(getAllOrders(supabase));

  if (error) {
    return <div>Error loading orders: {error.message}</div>;
  }

  return (
    <div>
      <OrderGrid rowData={orders || []} />
    </div>
  );
}
