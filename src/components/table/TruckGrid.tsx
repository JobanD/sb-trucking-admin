import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@/styles/ag-grid-theme.css";
import { ColDef, ModuleRegistry } from "ag-grid-community";

export type Truck = {
  TruckType: string | null;
  TruckNo: string | null;
  PlateNo: string | null;
  VinNumber: string | null;
  TruckOwner: string | null;
  Fleet: string | null;
  Company: string | null;
  IFTA: string | null;
  FuelType: string | null;
  MMY: string | null;
  DriversName: string | null;
  Status: string | null;
  pkey: string;
};

interface TruckGridProps {
  rowData: Truck[];
}

const TruckGrid: React.FC<TruckGridProps> = ({ rowData }) => {
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "Truck Type", field: "TruckType" },
    { headerName: "Truck No.", field: "TruckNo" },
    { headerName: "Plate No.", field: "PlateNo" },
    { headerName: "Vin Number", field: "VinNumber" },
    { headerName: "Truck Owner", field: "TruckOwner" },
    { headerName: "Fleet", field: "Fleet" },
    { headerName: "Company", field: "Company" },
    { headerName: "IFTA", field: "IFTA" },
    { headerName: "Fuel Type", field: "FuelType" },
    { headerName: "MMY", field: "MMY" },
    { headerName: "Driver's Name", field: "DriversName" },
    { headerName: "Status", field: "Status" },
    { headerName: "PKEY", field: "pkey" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      sortable: true,
      resizable: true,
    };
  }, []);

  return (
    <div className="ag-theme-custom" style={{ height: 600, width: "100%" }}>
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
