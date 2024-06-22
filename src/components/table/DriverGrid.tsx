import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";
import { ColDef } from "ag-grid-community";

export type Driver = {
  name: string | null;
  email_id: string | null;
  cellular: string | null;
  status: string | null;
  dob: string | null;
  license_no: string | null;
  license_expiry: string | null;
  address: string | null;
  hired_date: string | null;
  termination_date: string | null;
  gender_lu_code: string | null;
  phone: string | null;
};

interface DriverGridProps {
  rowData: Driver[];
}

const DriverGrid: React.FC<DriverGridProps> = ({ rowData }) => {
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
      { headerName: "Name", field: "name" },
      { headerName: "Email", field: "email_id" },
      { headerName: "Cell #", field: "cellular" },
      { headerName: "Status", field: "status" },
      { headerName: "DOB", field: "dob" },
      { headerName: "License No.", field: "license_no" },
      { headerName: "License Expiry", field: "license_expiry" },
      { headerName: "Address", field: "address" },
      { headerName: "Hired Date", field: "hired_date" },
      { headerName: "Termination Date", field: "termination_date" },
      { headerName: "Gender LU Code", field: "gender_lu_code" },
      { headerName: "Phone", field: "phone" },
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

export default DriverGrid;
