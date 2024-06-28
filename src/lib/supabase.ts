export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      carriers: {
        Row: {
          address: string | null
          city: string | null
          companies_name: string | null
          company: string | null
          country: string | null
          csa: string | null
          ctpat: string | null
          email: string | null
          name: string | null
          phone: string | null
          pip: string | null
          pkey: string
          state: string | null
          status: string | null
          type: string | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          companies_name?: string | null
          company?: string | null
          country?: string | null
          csa?: string | null
          ctpat?: string | null
          email?: string | null
          name?: string | null
          phone?: string | null
          pip?: string | null
          pkey?: string
          state?: string | null
          status?: string | null
          type?: string | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          companies_name?: string | null
          company?: string | null
          country?: string | null
          csa?: string | null
          ctpat?: string | null
          email?: string | null
          name?: string | null
          phone?: string | null
          pip?: string | null
          pkey?: string
          state?: string | null
          status?: string | null
          type?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      delivery_images: {
        Row: {
          category: string
          id: string
          image_url: string
          notes: string | null
          order_id: string | null
          trip_id: string | null
          uploaded_at: string | null
        }
        Insert: {
          category: string
          id?: string
          image_url: string
          notes?: string | null
          order_id?: string | null
          trip_id?: string | null
          uploaded_at?: string | null
        }
        Update: {
          category?: string
          id?: string
          image_url?: string
          notes?: string | null
          order_id?: string | null
          trip_id?: string | null
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_images_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_images_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          address: string | null
          cellular: string | null
          dob: string | null
          email_id: string | null
          gender_lu_code: string | null
          hired_date: string | null
          license_expiry: string | null
          license_no: string | null
          name: string | null
          phone: string | null
          pkey: string
          status: string | null
          termination_date: string | null
        }
        Insert: {
          address?: string | null
          cellular?: string | null
          dob?: string | null
          email_id?: string | null
          gender_lu_code?: string | null
          hired_date?: string | null
          license_expiry?: string | null
          license_no?: string | null
          name?: string | null
          phone?: string | null
          pkey?: string
          status?: string | null
          termination_date?: string | null
        }
        Update: {
          address?: string | null
          cellular?: string | null
          dob?: string | null
          email_id?: string | null
          gender_lu_code?: string | null
          hired_date?: string | null
          license_expiry?: string | null
          license_no?: string | null
          name?: string | null
          phone?: string | null
          pkey?: string
          status?: string | null
          termination_date?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          customer_id: string | null
          delivery_date: string | null
          delivery_location: string
          id: string
          notes: string | null
          photos: Json | null
          pickup_date: string
          pickup_location: string
          price: number | null
          status: string
          vehicle_id: string | null
        }
        Insert: {
          customer_id?: string | null
          delivery_date?: string | null
          delivery_location: string
          id?: string
          notes?: string | null
          photos?: Json | null
          pickup_date: string
          pickup_location: string
          price?: number | null
          status: string
          vehicle_id?: string | null
        }
        Update: {
          customer_id?: string | null
          delivery_date?: string | null
          delivery_location?: string
          id?: string
          notes?: string | null
          photos?: Json | null
          pickup_date?: string
          pickup_location?: string
          price?: number | null
          status?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_carrier_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "carriers"
            referencedColumns: ["pkey"]
          },
          {
            foreignKeyName: "orders_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: never
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: never
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      trailers: {
        Row: {
          company: string | null
          fleet: string | null
          is_third_party: string | null
          mmy: string | null
          pkey: string
          plate_no: string | null
          registration_country: string | null
          registration_state: string | null
          status: string | null
          trailer_no: string | null
          trailer_type: string | null
          vin: string | null
        }
        Insert: {
          company?: string | null
          fleet?: string | null
          is_third_party?: string | null
          mmy?: string | null
          pkey?: string
          plate_no?: string | null
          registration_country?: string | null
          registration_state?: string | null
          status?: string | null
          trailer_no?: string | null
          trailer_type?: string | null
          vin?: string | null
        }
        Update: {
          company?: string | null
          fleet?: string | null
          is_third_party?: string | null
          mmy?: string | null
          pkey?: string
          plate_no?: string | null
          registration_country?: string | null
          registration_state?: string | null
          status?: string | null
          trailer_no?: string | null
          trailer_type?: string | null
          vin?: string | null
        }
        Relationships: []
      }
      trip_orders: {
        Row: {
          order_id: string
          trip_id: string
        }
        Insert: {
          order_id: string
          trip_id: string
        }
        Update: {
          order_id?: string
          trip_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trip_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trip_orders_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      trip_vehicles: {
        Row: {
          trip_id: string
          vehicle_id: string
        }
        Insert: {
          trip_id: string
          vehicle_id: string
        }
        Update: {
          trip_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trip_vehicles_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trip_vehicles_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      trips: {
        Row: {
          distance_travelled: number | null
          driver_id: string | null
          end_location: string | null
          end_time: string | null
          fuel_used: number | null
          id: string
          start_location: string | null
          start_time: string | null
          status: string | null
          truck_id: string | null
        }
        Insert: {
          distance_travelled?: number | null
          driver_id?: string | null
          end_location?: string | null
          end_time?: string | null
          fuel_used?: number | null
          id?: string
          start_location?: string | null
          start_time?: string | null
          status?: string | null
          truck_id?: string | null
        }
        Update: {
          distance_travelled?: number | null
          driver_id?: string | null
          end_location?: string | null
          end_time?: string | null
          fuel_used?: number | null
          id?: string
          start_location?: string | null
          start_time?: string | null
          status?: string | null
          truck_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trips_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["pkey"]
          },
          {
            foreignKeyName: "trips_truck_id_fkey"
            columns: ["truck_id"]
            isOneToOne: false
            referencedRelation: "trucks"
            referencedColumns: ["pkey"]
          },
        ]
      }
      trucks: {
        Row: {
          company: string | null
          drivers_name: string | null
          fleet: string | null
          fuel_type: string | null
          ifta: string | null
          mmy: string | null
          pkey: string
          plate_no: string | null
          status: string | null
          truck_no: string | null
          truck_owner: string | null
          truck_type: string | null
          vin_number: string | null
        }
        Insert: {
          company?: string | null
          drivers_name?: string | null
          fleet?: string | null
          fuel_type?: string | null
          ifta?: string | null
          mmy?: string | null
          pkey?: string
          plate_no?: string | null
          status?: string | null
          truck_no?: string | null
          truck_owner?: string | null
          truck_type?: string | null
          vin_number?: string | null
        }
        Update: {
          company?: string | null
          drivers_name?: string | null
          fleet?: string | null
          fuel_type?: string | null
          ifta?: string | null
          mmy?: string | null
          pkey?: string
          plate_no?: string | null
          status?: string | null
          truck_no?: string | null
          truck_owner?: string | null
          truck_type?: string | null
          vin_number?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: never
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: never
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles: {
        Row: {
          condition: string | null
          created_at: string | null
          id: string
          make: string | null
          model: string | null
          notes: string | null
          order_id: string | null
          updated_at: string | null
          vin: string | null
          year: number | null
        }
        Insert: {
          condition?: string | null
          created_at?: string | null
          id?: string
          make?: string | null
          model?: string | null
          notes?: string | null
          order_id?: string | null
          updated_at?: string | null
          vin?: string | null
          year?: number | null
        }
        Update: {
          condition?: string | null
          created_at?: string | null
          id?: string
          make?: string | null
          model?: string | null
          notes?: string | null
          order_id?: string | null
          updated_at?: string | null
          vin?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
        }
        Returns: boolean
      }
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
    }
    Enums: {
      app_permission:
        | "channels.delete"
        | "messages.delete"
        | "carriers.select"
        | "carriers.insert"
        | "carriers.update"
        | "carriers.delete"
        | "drivers.select"
        | "drivers.insert"
        | "drivers.update"
        | "drivers.delete"
        | "orders.select"
        | "orders.insert"
        | "orders.update"
        | "orders.delete"
        | "profiles.select"
        | "profiles.insert"
        | "profiles.update"
        | "profiles.delete"
        | "trailers.select"
        | "trailers.insert"
        | "trailers.update"
        | "trailers.delete"
        | "trucks.select"
        | "trucks.insert"
        | "trucks.update"
        | "trucks.delete"
      app_role: "admin" | "moderator" | "customer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
