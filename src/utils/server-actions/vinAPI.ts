"use server";
export const fetchVehicleByVIN = async (vin: string) => {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.Error) {
      // Check if the API returned any error message
      throw new Error(data.Error);
    }
    return data.Results;
  } catch (error) {
    console.error("Failed to fetch vehicle details:", error);
    return null; // Return null or appropriate error handling
  }
};
