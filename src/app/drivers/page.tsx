import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseServer from "@/utils/supabase-server";
import { getAllDrivers } from "@/queries/drivers/get-all-drivers";
import DriverList from "@/components/DriverList";
import { cookies } from "next/headers";

export default async function TruckPage() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await prefetchQuery(queryClient, getAllDrivers(supabase));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DriverList />
    </HydrationBoundary>
  );
}
