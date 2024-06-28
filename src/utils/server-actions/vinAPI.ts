"use server";

export const fetchVehicleByVIN = async (vin: string) => {
  // Define the URL for the NHTSA VIN Decoder API
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;

  try {
    // Make the API call
    const response = await fetch(url);

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();

    // Check if there is an error message in the response data
    if (data.Error) {
      throw new Error(data.Error);
    }

    // Return the Results array from the response data
    return data.Results;
  } catch (error) {
    // Log any errors to the console
    console.error("Failed to fetch vehicle details:", error);

    // Return null or handle the error appropriately
    return null;
  }
};

// VariableId	Variable Name
// 5	Make
// 7	Model
// 9	Model Year
// 10	Body Class
// 14	Series
// 26	Fuel Type - Primary
// 28	Engine Model
// 29	Engine Displacement (L)
// 33	Engine Configuration
// 49	Plant Country
// 60	Plant State
// 63	Manufacturer Name
// 77	Gross Vehicle Weight Rating
// 82	Other Restraint System Info
// 83	Battery Type
// 84	Battery Voltage (V)
// 85	Battery Cells
// 86	Drive Type
// 94	Traction Control
// 105	Trailer Type Connection
// 110	Number of Seats
// 137	Air Bag Loc Front
// 138	Air Bag Loc Side
// 139	Air Bag Loc Knee
// 142	NCSA Body Type
// 143	NCSA Make
// 144
