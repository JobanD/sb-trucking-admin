"use client";
import React, { useState } from "react";
import { fetchVehicleByVIN } from "@/utils/server-actions/vinAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const VinDecoderPage = () => {
  const [vin, setVin] = useState("");
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchVehicleByVIN(vin);
      setVehicleData(data);
    } catch (err) {
      setError("Failed to decode VIN");
    } finally {
      setLoading(false);
    }
  };

  const renderVehicleData = (data: any) => {
    return data.map((item: any) => (
      <div key={item.VariableId} className="mb-2">
        <strong>{item.Variable}:</strong> {item.Value || "N/A"}
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>VIN Decoder</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              placeholder="Enter VIN"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary text-primary-foreground"
            >
              Decode
            </Button>
          </form>
          {loading && <p>Loading...</p>}
          {error && <Alert variant="destructive">{error}</Alert>}
          {vehicleData && (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-foreground">
                Vehicle Data
              </h2>
              <div className="bg-card text-card-foreground p-4 rounded">
                {renderVehicleData(vehicleData)}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VinDecoderPage;
