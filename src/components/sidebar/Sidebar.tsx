"use client";

import {
  Bell,
  Bookmark,
  Car,
  Home,
  List,
  Mail,
  MoreHorizontal,
  Truck,
  Newspaper,
  ScrollText,
  CircleDollarSign,
  LineChart,
  User,
  Users,
} from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarItems } from "@/types";
import { SidebarButton } from "./SidebarButton";
import { SidebarMobile } from "./SidebarMobile";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    {
      href: "/trucks",
      icon: Truck,
      label: "Trucks",
    },
    {
      href: "/drivers",
      icon: Users,
      label: "Drivers",
    },
    {
      href: "/orders",
      icon: Newspaper,
      label: "Orders",
    },
    {
      href: "/trips",
      icon: ScrollText,
      label: "Trips",
    },
    {
      href: "/invoices",
      icon: CircleDollarSign,
      label: "Invoices",
    },
    {
      href: "/reports",
      icon: LineChart,
      label: "Reports",
    },
    {
      href: "/vin-details",
      icon: Car,
      label: "VIN Decoder",
    },
    {
      href: "/profile",
      icon: User,
      label: "Profile",
    },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton>
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
