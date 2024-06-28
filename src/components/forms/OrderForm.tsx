"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import useSupabaseBrowser from "@/utils/supabase-browser";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const orderSchema = z.object({
  carrier_id: z.string().uuid().min(1, "Carrier ID is required"),
  delivery_date: z.date({ required_error: "Delivery Date is required" }),
  pickup_date: z.date({ required_error: "Pickup Date is required" }),
  pickup_location: z.string().min(1, "Pickup Location is required"),
  delivery_location: z.string().min(1, "Delivery Location is required"),
  vehicle_id: z.string().uuid().min(1, "Vehicle ID is required"),
  price: z.coerce.number().optional(),
  status: z.string().min(1, "Status is required"),
  notes: z.string().optional(),
  photos: z.any().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onClose }) => {
  const supabase = useSupabaseBrowser();
  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      carrier_id: "",
      delivery_date: new Date(),
      pickup_date: new Date(),
      pickup_location: "",
      delivery_location: "",
      vehicle_id: "",
      price: undefined,
      status: "",
      notes: "",
      photos: "",
    },
  });

  const [carrierName, setCarrierName] = useState("");
  const [carrierOptions, setCarrierOptions] = useState([]);

  useEffect(() => {
    const fetchCarriers = async () => {
      if (carrierName.length > 2) {
        const { data, error } = await supabase
          .from("carriers")
          .select("id, name")
          .ilike("name", `%${carrierName}%`);

        if (!error) {
          setCarrierOptions(data);
        }
      }
    };

    fetchCarriers();
  }, [carrierName]);

  const onSubmit = async (data: OrderFormData) => {
    // Convert dates to strings in ISO 8601 format
    const formattedData = {
      ...data,
      delivery_date: data.delivery_date.toISOString(),
      pickup_date: data.pickup_date.toISOString(),
    };

    const { error } = await supabase.from("orders").insert([formattedData]);
    if (error) {
      console.error("Error creating order:", error);
    } else {
      onClose();
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="carrier_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carrier Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Carrier Name"
                    value={carrierName}
                    onChange={(e) => setCarrierName(e.target.value)}
                  />
                  {carrierOptions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded mt-1 max-h-48 overflow-auto">
                      {carrierOptions.map((carrier) => (
                        <li
                          key={carrier.id}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            field.onChange(carrier.id);
                            setCarrierName(carrier.name);
                            setCarrierOptions([]);
                          }}
                        >
                          {carrier.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delivery_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pickup_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pickup_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <Input placeholder="Pickup Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="delivery_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Location</FormLabel>
              <FormControl>
                <Input placeholder="Delivery Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicle_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle ID</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="Status" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Notes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="submit">Create Order</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderForm;
