import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/utils/supabase-server";
import { getAllTrucks } from "@/queries/trucks/get-all-trucks";
import TruckList from "@/components/lists/TruckList";
import { cookies } from "next/headers";

export default async function TruckPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getAllTrucks(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TruckList />
    </HydrationBoundary>
  );
}
