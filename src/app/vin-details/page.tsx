import React from "react";
import { fetchVehicleByVIN } from "@/utils/server-actions/vinAPI";
import VinForm from "@/components/VinForm";

const VinPage = async () => {
  const data = await fetchVehicleByVIN("1NXBR32E85Z505904");

  console.log("DATA: ", data);

  // Ensure you're rendering the fetched data correctly
  return (
    <div>
      <div>
        <VinForm />
      </div>
      {data.length > 0 ? (
        <div>
          <h3>Vehicle Details:</h3>
          <ul>
            {data.map((detail: any, index: any) => (
              <li key={index}>
                {detail.Variable}: {detail.Value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No vehicle data available.</p>
      )}
    </div>
  );
};

export default VinPage;
