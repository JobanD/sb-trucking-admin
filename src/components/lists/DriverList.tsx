"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getAllDrivers } from "@/queries/drivers/get-all-drivers";
import DriverGrid from "@/components/table/DriverGrid";

export default function DriverList() {
  const supabase = useSupabaseBrowser();
  const { data: drivers, error } = useQuery(getAllDrivers(supabase));

  if (error) {
    return <div>Error loading drivers: {error.message}</div>;
  }

  return (
    <div>
      <DriverGrid rowData={drivers || []} />
    </div>
  );
}
