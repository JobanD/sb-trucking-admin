import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";
import { ColDef } from "ag-grid-community";
import { Database } from "@/lib/supabase";

type Order = Database["public"]["Tables"]["orders"]["Row"];

interface OrderGridProps {
  rowData: Order[];
}

const OrderGrid: React.FC<OrderGridProps> = ({ rowData }) => {
  const { theme } = useTheme();
  const [isCssLoaded, setIsCssLoaded] = useState(false);

  useEffect(() => {
    console.log("Theme changed:", theme);
    const loadStyles = async () => {
      console.log("Loading CSS for theme:", theme);
      if (theme === "dark") {
        await import("@/styles/ag-grid-theme-dark.css");
      } else {
        await import("@/styles/ag-grid-theme-light.css");
      }
      setIsCssLoaded(true);
      console.log("CSS loaded for theme:", theme);
    };
    loadStyles();
  }, [theme]);

  const columnDefs: ColDef[] = useMemo(
    () => [
      { headerName: "Truck ID", field: "truck_id" },
      { headerName: "Customer ID", field: "customer_id" },
      { headerName: "Delivery Date", field: "delivery_date" },
      { headerName: "Car Details", field: "car_details" },
      { headerName: "Price", field: "price" },
      { headerName: "Order ID", field: "id" },
      { headerName: "Pickup Date", field: "pickup_date" },
      { headerName: "Pickup Location", field: "pickup_location" },
      { headerName: "Delivery Location", field: "delivery_location" },
      { headerName: "Status", field: "status" },
      { headerName: "Notes", field: "notes" },
    ],
    []
  );

  const defaultColDef = useMemo(() => {
    console.log("Generating default column definitions");
    return {
      filter: "agTextColumnFilter",
      floatingFilter: false,
      sortable: true,
      resizable: true,
    };
  }, []);

  useEffect(() => {
    console.log("Row data updated:", rowData);
  }, [rowData]);

  if (!isCssLoaded) {
    console.log("CSS not yet loaded, displaying loading indicator");
    return <div>Loading...</div>;
  }

  console.log("Rendering AgGridReact component");
  return (
    <div className={`ag-theme-custom`} style={{ height: 600, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={20}
      />
    </div>
  );
};

export default OrderGrid;
