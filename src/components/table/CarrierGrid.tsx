import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";
import { ColDef } from "ag-grid-community";

export type Carrier = {
  pkey: string | null;
  type: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  name: string | null;
  status: string | null;
  company: string | null;
  ctpat: string | null;
  csa: string | null;
  pip: string | null;
  companies_name: string | null;
  zip_code: string | null;
};

interface CarrierGridProps {
  rowData: Carrier[];
}

const CarrierGrid: React.FC<CarrierGridProps> = ({ rowData }) => {
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
      { headerName: "PKey", field: "pkey" },
      { headerName: "Type", field: "type" },
      { headerName: "Phone", field: "phone" },
      { headerName: "Email", field: "email" },
      { headerName: "Address", field: "address" },
      { headerName: "Country", field: "country" },
      { headerName: "State", field: "state" },
      { headerName: "City", field: "city" },
      { headerName: "Name", field: "name" },
      { headerName: "Status", field: "status" },
      { headerName: "Company", field: "company" },
      { headerName: "CTPAT", field: "ctpat" },
      { headerName: "CSA", field: "csa" },
      { headerName: "PIP", field: "pip" },
      { headerName: "Companies Name", field: "companies_name" },
      { headerName: "Zip Code", field: "zip_code" },
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

export default CarrierGrid;
