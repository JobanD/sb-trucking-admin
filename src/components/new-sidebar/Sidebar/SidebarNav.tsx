import {
  BookUser,
  Bell,
  FileText,
  Star,
  Bug,
  Calculator,
  PieChart,
  Code,
  Droplet,
  Gauge,
  Layers,
  MapPin,
  Pencil,
  Puzzle,
  LogIn,
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

export default async function SidebarNav() {
  return (
    <ul className="list-none p-0">
      <SidebarNavItem icon={<Gauge size={20} />} href="/">
        Dashboard
        <small className="ml-auto">
          <Badge variant="info">NEW</Badge>
        </small>
      </SidebarNavItem>
      <SidebarNavTitle>Components</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={<Puzzle size={20} />} toggleText="Assets">
        <SidebarNavItem href="/trucks">Trucks</SidebarNavItem>
        <SidebarNavItem href="/drivers">Drivers</SidebarNavItem>
        <SidebarNavItem href="/carriers">Carriers</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={<MapPin size={20} />} toggleText="Buttons">
        <SidebarNavItem href="#">Buttons</SidebarNavItem>
        <SidebarNavItem href="#">Button Group</SidebarNavItem>
        <SidebarNavItem href="#">Dropdowns</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={<PieChart size={20} />} href="#">
        Charts
      </SidebarNavItem>

      <SidebarNavGroup toggleIcon={<FileText size={20} />} toggleText="Forms">
        <SidebarNavItem href="#">Form Control</SidebarNavItem>
        <SidebarNavItem href="#">Select</SidebarNavItem>
        <SidebarNavItem href="#">Checks and Radios</SidebarNavItem>
        <SidebarNavItem href="#">Range</SidebarNavItem>
        <SidebarNavItem href="#">Input Group</SidebarNavItem>
        <SidebarNavItem href="#">Floating Labels</SidebarNavItem>
        <SidebarNavItem href="#">Layout</SidebarNavItem>
        <SidebarNavItem href="#">Validation</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={<Star size={20} />} toggleText="Icons">
        <SidebarNavItem href="#">CoreUI Icons</SidebarNavItem>
        <SidebarNavItem href="#">CoreUI Icons Brand</SidebarNavItem>
        <SidebarNavItem href="#">CoreUI Icons Flag</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup
        toggleIcon={<Bell size={20} />}
        toggleText="Notifications"
      >
        <SidebarNavItem href="#">Alerts</SidebarNavItem>
        <SidebarNavItem href="#">Badge</SidebarNavItem>
        <SidebarNavItem href="#">Modals</SidebarNavItem>
        <SidebarNavItem href="#">Toasts</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={<Calculator size={20} />} href="#">
        Widgets
        <small className="ml-auto">
          <Badge variant="info">NEW</Badge>
        </small>
      </SidebarNavItem>

      <SidebarNavTitle>Extras</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={<Star size={20} />} toggleText="Pages">
        <SidebarNavItem icon={<LogIn size={20} />} href="login">
          Login
        </SidebarNavItem>
        <SidebarNavItem icon={<BookUser size={20} />} href="register">
          Register
        </SidebarNavItem>
        <SidebarNavItem icon={<Bug size={20} />} href="#">
          Error 404
        </SidebarNavItem>
        <SidebarNavItem icon={<Bug size={20} />} href="#">
          Error 500
        </SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={<FileText size={20} />} href="#">
        Docs
      </SidebarNavItem>
      <SidebarNavItem icon={<Layers size={20} />} href="https://coreui.io/pro/">
        Try CoreUI PRO
      </SidebarNavItem>
    </ul>
  );
}
