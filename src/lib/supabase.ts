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
      businesses: {
        Row: {
          address: string
          contact_person: string
          email: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          address: string
          contact_person: string
          email: string
          id?: string
          name: string
          phone: string
        }
        Update: {
          address?: string
          contact_person?: string
          email?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      carriers: {
        Row: {
          Address: string | null
          City: string | null
          CompaniesName: string | null
          Company: string | null
          Country: string | null
          CSA: string | null
          CTPAT: string | null
          Email: string | null
          Name: string | null
          Phone: string | null
          PIP: string | null
          pkey: string
          State: string | null
          Status: string | null
          Type: string | null
          ZipCode: string | null
        }
        Insert: {
          Address?: string | null
          City?: string | null
          CompaniesName?: string | null
          Company?: string | null
          Country?: string | null
          CSA?: string | null
          CTPAT?: string | null
          Email?: string | null
          Name?: string | null
          Phone?: string | null
          PIP?: string | null
          pkey?: string
          State?: string | null
          Status?: string | null
          Type?: string | null
          ZipCode?: string | null
        }
        Update: {
          Address?: string | null
          City?: string | null
          CompaniesName?: string | null
          Company?: string | null
          Country?: string | null
          CSA?: string | null
          CTPAT?: string | null
          Email?: string | null
          Name?: string | null
          Phone?: string | null
          PIP?: string | null
          pkey?: string
          State?: string | null
          Status?: string | null
          Type?: string | null
          ZipCode?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string
          email: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          address: string
          email: string
          id?: string
          name: string
          phone: string
        }
        Update: {
          address?: string
          email?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      drivers: {
        Row: {
          address: string | null
          Address: string | null
          cellular: string | null
          Cellular: string | null
          dob: string | null
          DOB: string | null
          emailid: string | null
          EmailID: string | null
          genderlucode: string | null
          GenderLUCode: string | null
          hireddate: string | null
          HiredDate: string | null
          licenseexpiry: string | null
          LicenseExpiry: string | null
          licenseno: string | null
          LicenseNo: string | null
          name: string
          Name: string | null
          phone: string | null
          Phone: string | null
          pkey: string
          status: string
          Status: string | null
          terminationdate: string | null
          TerminationDate: string | null
        }
        Insert: {
          address?: string | null
          Address?: string | null
          cellular?: string | null
          Cellular?: string | null
          dob?: string | null
          DOB?: string | null
          emailid?: string | null
          EmailID?: string | null
          genderlucode?: string | null
          GenderLUCode?: string | null
          hireddate?: string | null
          HiredDate?: string | null
          licenseexpiry?: string | null
          LicenseExpiry?: string | null
          licenseno?: string | null
          LicenseNo?: string | null
          name: string
          Name?: string | null
          phone?: string | null
          Phone?: string | null
          pkey?: string
          status: string
          Status?: string | null
          terminationdate?: string | null
          TerminationDate?: string | null
        }
        Update: {
          address?: string | null
          Address?: string | null
          cellular?: string | null
          Cellular?: string | null
          dob?: string | null
          DOB?: string | null
          emailid?: string | null
          EmailID?: string | null
          genderlucode?: string | null
          GenderLUCode?: string | null
          hireddate?: string | null
          HiredDate?: string | null
          licenseexpiry?: string | null
          LicenseExpiry?: string | null
          licenseno?: string | null
          LicenseNo?: string | null
          name?: string
          Name?: string | null
          phone?: string | null
          Phone?: string | null
          pkey?: string
          status?: string
          Status?: string | null
          terminationdate?: string | null
          TerminationDate?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          car_details: Json | null
          customer_id: string | null
          delivery_date: string | null
          delivery_location: string
          id: string
          notes: string | null
          pickup_date: string
          pickup_location: string
          price: number | null
          status: string
        }
        Insert: {
          car_details?: Json | null
          customer_id?: string | null
          delivery_date?: string | null
          delivery_location: string
          id?: string
          notes?: string | null
          pickup_date: string
          pickup_location: string
          price?: number | null
          status: string
        }
        Update: {
          car_details?: Json | null
          customer_id?: string | null
          delivery_date?: string | null
          delivery_location?: string
          id?: string
          notes?: string | null
          pickup_date?: string
          pickup_location?: string
          price?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_customer"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
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
          Company: string | null
          Fleet: string | null
          IsThirdParty: string | null
          MMY: string | null
          pkey: string
          PlateNo: string | null
          RegistrationCountry: string | null
          RegistrationState: string | null
          Status: string | null
          TrailerNo: string | null
          TrailerType: string | null
          VIN: string | null
        }
        Insert: {
          Company?: string | null
          Fleet?: string | null
          IsThirdParty?: string | null
          MMY?: string | null
          pkey?: string
          PlateNo?: string | null
          RegistrationCountry?: string | null
          RegistrationState?: string | null
          Status?: string | null
          TrailerNo?: string | null
          TrailerType?: string | null
          VIN?: string | null
        }
        Update: {
          Company?: string | null
          Fleet?: string | null
          IsThirdParty?: string | null
          MMY?: string | null
          pkey?: string
          PlateNo?: string | null
          RegistrationCountry?: string | null
          RegistrationState?: string | null
          Status?: string | null
          TrailerNo?: string | null
          TrailerType?: string | null
          VIN?: string | null
        }
        Relationships: []
      }
      trips: {
        Row: {
          distance_travelled: number | null
          driver_id: string | null
          end_location: string
          end_time: string | null
          fuel_used: number | null
          id: string
          order_id: string | null
          start_location: string
          start_time: string
          status: string
          truck_id: string | null
        }
        Insert: {
          distance_travelled?: number | null
          driver_id?: string | null
          end_location: string
          end_time?: string | null
          fuel_used?: number | null
          id?: string
          order_id?: string | null
          start_location: string
          start_time: string
          status: string
          truck_id?: string | null
        }
        Update: {
          distance_travelled?: number | null
          driver_id?: string | null
          end_location?: string
          end_time?: string | null
          fuel_used?: number | null
          id?: string
          order_id?: string | null
          start_location?: string
          start_time?: string
          status?: string
          truck_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_driver"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["pkey"]
          },
          {
            foreignKeyName: "fk_order"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_truck"
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
          Company: string | null
          driversname: string | null
          DriversName: string | null
          fleet: string | null
          Fleet: string | null
          fueltype: string | null
          FuelType: string | null
          ifta: string | null
          IFTA: string | null
          mmy: string | null
          MMY: string | null
          pkey: string
          plateno: string
          PlateNo: string | null
          status: string
          Status: string | null
          truckno: string
          TruckNo: string | null
          truckowner: string | null
          TruckOwner: string | null
          trucktype: string
          TruckType: string | null
          vinnumber: string
          VinNumber: string | null
        }
        Insert: {
          company?: string | null
          Company?: string | null
          driversname?: string | null
          DriversName?: string | null
          fleet?: string | null
          Fleet?: string | null
          fueltype?: string | null
          FuelType?: string | null
          ifta?: string | null
          IFTA?: string | null
          mmy?: string | null
          MMY?: string | null
          pkey?: string
          plateno: string
          PlateNo?: string | null
          status: string
          Status?: string | null
          truckno: string
          TruckNo?: string | null
          truckowner?: string | null
          TruckOwner?: string | null
          trucktype: string
          TruckType?: string | null
          vinnumber: string
          VinNumber?: string | null
        }
        Update: {
          company?: string | null
          Company?: string | null
          driversname?: string | null
          DriversName?: string | null
          fleet?: string | null
          Fleet?: string | null
          fueltype?: string | null
          FuelType?: string | null
          ifta?: string | null
          IFTA?: string | null
          mmy?: string | null
          MMY?: string | null
          pkey?: string
          plateno?: string
          PlateNo?: string | null
          status?: string
          Status?: string | null
          truckno?: string
          TruckNo?: string | null
          truckowner?: string | null
          TruckOwner?: string | null
          trucktype?: string
          TruckType?: string | null
          vinnumber?: string
          VinNumber?: string | null
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
