import React from "react";
import { createClient } from "@/utils/supabase/server";
import { columns, Drivers } from "../../utils/columns/driverColumns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "../../components/data-table";

const getDriverData = async (): Promise<Drivers[]> => {
  const supabase = createClient();
  const { data: trucks, error } = await supabase.from("drivers").select("*");

  return trucks || [];
};

const DriverPage = async () => {
  const data = await getDriverData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DriverPage;
