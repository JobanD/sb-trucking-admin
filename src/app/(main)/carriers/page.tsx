import React from "react";
import { createClient } from "@/utils/supabase/server";
import { columns, Carriers } from "../../utils/columns/carrierColumns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../components/table/data-table";

const getCarrierData = async (): Promise<Carriers[]> => {
  const supabase = createClient();
  const { data: trucks, error } = await supabase.from("carriers").select("*");

  return trucks || [];
};

const CarriersPage = async () => {
  const data = await getCarrierData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CarriersPage;
