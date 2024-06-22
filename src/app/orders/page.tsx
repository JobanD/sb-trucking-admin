import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/utils/supabase-server";
import { getAllOrders } from "@/queries/orders/get-all-orders";
import OrderList from "@/components/OrderList";
import OrderFormModal from "@/components/OrderFormModal";
import { cookies } from "next/headers";

export default async function OrdersPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getAllOrders(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>Orders</h1>
        <OrderFormModal />
        <OrderList />
      </div>
    </HydrationBoundary>
  );
}
