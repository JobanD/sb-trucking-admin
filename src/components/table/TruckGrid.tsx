import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";
import { ColDef } from "ag-grid-community";

export type Truck = {
  truck_no: string | null;
  plate_no: string | null;
  vin_number: string | null;
  truck_owner: string | null;
  fleet: string | null;
  truck_type: string | null;
  ifta: string | null;
  fuel_type: string | null;
  mmy: string | null;
  drivers_name: string | null;
  status: string | null;
  company: string | null;
};

interface TruckGridProps {
  rowData: Truck[];
}

const TruckGrid: React.FC<TruckGridProps> = ({ rowData }) => {
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
      { headerName: "Truck No.", field: "truck_no" },
      { headerName: "Plate No.", field: "plate_no" },
      { headerName: "Vin Number", field: "vin_number" },
      { headerName: "Truck Owner", field: "truck_owner" },
      { headerName: "Fleet", field: "fleet" },
      { headerName: "Truck Type", field: "truck_type" },
      { headerName: "IFTA", field: "ifta" },
      { headerName: "Fuel Type", field: "fuel_type" },
      { headerName: "MMY", field: "mmy" },
      { headerName: "Driver's Name", field: "drivers_name" },
      { headerName: "Status", field: "status" },
      { headerName: "Company", field: "company" },
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

export default TruckGrid;
