"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getAllTrucks } from "@/queries/trucks/get-all-trucks";
import TruckGrid from "./table/TruckGrid";

export default function TruckList() {
  const supabase = useSupabaseBrowser();
  const { data: trucks, error } = useQuery(getAllTrucks(supabase));

  if (error) {
    return <div>Error loading trucks: {error.message}</div>;
  }

  return (
    <div>
      <TruckGrid rowData={trucks || []} />
    </div>
  );
}
