"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useForm,
  FormProvider,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from "react-hook-form";
import useSupabaseBrowser from "@/utils/supabase-browser";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const orderSchema = z.object({
  truck_id: z.string().uuid().optional(),
  customer_id: z.string().uuid().min(1, "Customer ID is required"),
  delivery_date: z.date({ required_error: "Delivery Date is required" }),
  pickup_date: z.date({ required_error: "Pickup Date is required" }),
  pickup_location: z.string().min(1, "Pickup Location is required"),
  delivery_location: z.string().min(1, "Delivery Location is required"),
  car_details: z.any().optional(),
  price: z.coerce.number().optional(),
  status: z.string().min(1, "Status is required"),
  notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onClose }) => {
  const supabase = useSupabaseBrowser();
  const methods = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      truck_id: "",
      customer_id: "",
      delivery_date: new Date(),
      pickup_date: new Date(),
      pickup_location: "",
      delivery_location: "",
      car_details: "",
      price: undefined,
      status: "",
      notes: "",
    },
  });

  const onSubmit = async (data: OrderFormData) => {
    const { error } = await supabase.from("orders").insert([data]);
    if (error) {
      console.error("Error creating order:", error);
    } else {
      onClose();
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <Form>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={methods.control}
            name="truck_id"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "truck_id">;
            }) => (
              <FormItem>
                <FormLabel>Truck ID</FormLabel>
                <FormControl>
                  <Input placeholder="Truck ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="customer_id"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "customer_id">;
            }) => (
              <FormItem>
                <FormLabel>Customer ID</FormLabel>
                <FormControl>
                  <Input placeholder="Customer ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="delivery_date"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "delivery_date">;
            }) => (
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
            control={methods.control}
            name="pickup_date"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "pickup_date">;
            }) => (
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
            control={methods.control}
            name="pickup_location"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "pickup_location">;
            }) => (
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
            control={methods.control}
            name="delivery_location"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "delivery_location">;
            }) => (
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
            control={methods.control}
            name="car_details"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "car_details">;
            }) => (
              <FormItem>
                <FormLabel>Car Details</FormLabel>
                <FormControl>
                  <Textarea placeholder="Car Details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="price"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "price">;
            }) => (
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
            control={methods.control}
            name="status"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "status">;
            }) => (
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
            control={methods.control}
            name="notes"
            render={({
              field,
            }: {
              field: ControllerRenderProps<OrderFormData, "notes">;
            }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Order</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </form>
      </Form>
    </FormProvider>
  );
};

export default OrderForm;
