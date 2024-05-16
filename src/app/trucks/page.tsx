import React from "react";
import { createClient } from "@/utils/supabase/server";
import { columns, Trucks } from "../../utils/columns/truckColumns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../components/table/data-table";

const getTruckData = async (): Promise<Trucks[]> => {
  const supabase = createClient();
  const { data: trucks, error } = await supabase.from("trucks").select("*");

  return trucks || [];
};

// const insertTruckData = async (): Promise<Trucks[]> => {
//   const supabase = createClient()

// const { data, error } = await supabase.from('carriers').insert([
//   { some_column: 'someValue', other_column: 'otherValue' },
// ]).select()

// }

const TruckPage = async () => {
  const data = await getTruckData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TruckPage;
