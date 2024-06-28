"use client";

import useSupabaseBrowser from "@/utils/supabase-browser";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { getAllCarriers } from "@/queries/carriers/get-all-carriers";
import CarrierGrid from "@/components/table/CarrierGrid";

export default function CarrierList() {
  const supabase = useSupabaseBrowser();
  const { data: carriers, error } = useQuery(getAllCarriers(supabase));

  if (error) {
    return <div>Error loading carriers: {error.message}</div>;
  }

  return (
    <div>
      <CarrierGrid rowData={carriers || []} />
    </div>
  );
}
