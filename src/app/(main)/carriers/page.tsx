import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/utils/supabase-server";
import { getAllCarriers } from "@/queries/carriers/get-all-carriers";
import CarrierList from "@/components/lists/CarrierList";
import { cookies } from "next/headers";

export default async function CarrierPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getAllCarriers(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarrierList />
    </HydrationBoundary>
  );
}
