import React from "react";
import { createClient } from "@/utils/supabase/server";
import { columns, Trucks } from "../../utils/columns/truckColumns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../components/data-table";

const getTruckData = async (): Promise<Trucks[]> => {
  const supabase = createClient();
  const { data: trucks, error } = await supabase.from("trucks").select("*");

  return trucks || [];
};

const TruckPage = async () => {
  const data = await getTruckData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TruckPage;
