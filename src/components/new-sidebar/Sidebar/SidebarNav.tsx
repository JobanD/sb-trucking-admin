import {
  Gauge,
  Truck,
  Users,
  Store,
  PackageCheck,
  Folders,
  Barcode,
  Cog,
} from "lucide-react";
import React, { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import SidebarNavGroup from "@/components/new-sidebar/Sidebar/SidebarNavGroup";
import SidebarNavItem from "@/components/new-sidebar/Sidebar/SidebarNavItem";

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className="px-3 py-2 mt-3 text-xs font-bold uppercase text-gray-600">
      {children}
    </li>
  );
};

export default function SidebarNav() {
  return (
    <ul className="list-none p-0">
      <SidebarNavItem icon={<Gauge size={20} />} href="/">
        Dashboard
        <small className="ml-auto">
          <Badge variant="info">NEW</Badge>
        </small>
      </SidebarNavItem>
      <SidebarNavTitle>Assets</SidebarNavTitle>

      <SidebarNavItem icon={<Truck size={20} />} href="/trucks">
        Trucks
      </SidebarNavItem>
      <SidebarNavItem icon={<Users size={20} />} href="/drivers">
        Drivers
      </SidebarNavItem>
      <SidebarNavItem icon={<Store size={20} />} href="/carriers">
        Carriers
      </SidebarNavItem>

      <SidebarNavTitle>Dispatch</SidebarNavTitle>

      <SidebarNavItem icon={<PackageCheck size={20} />} href="/orders">
        Orders
      </SidebarNavItem>
      <SidebarNavItem icon={<Folders size={20} />} href="/trips">
        Trips
      </SidebarNavItem>

      <SidebarNavTitle>Utilities</SidebarNavTitle>

      <SidebarNavItem icon={<Barcode size={20} />} href="/vin-details">
        VIN Decoder
      </SidebarNavItem>

      <SidebarNavTitle>Extras</SidebarNavTitle>

      <SidebarNavItem icon={<Cog size={20} />} href="/settings">
        Settings
      </SidebarNavItem>
    </ul>
  );
}
