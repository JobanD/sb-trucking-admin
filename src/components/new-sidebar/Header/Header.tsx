import Link from "next/link";
import Image from "next/image";
import HeaderSidebarToggler from "@/components/new-sidebar/Header/HeaderSidebarToggler";
import HeaderFeaturedNav from "@/components/new-sidebar/Header/HeaderFeaturedNav";
import HeaderNotificationNav from "@/components/new-sidebar/Header/HeaderNotificationNav";
import HeaderProfileNav from "@/components/new-sidebar/Header/HeaderProfileNav";
import SidebarBreadcrumb from "@/components/new-sidebar/Breadcrumb/SidebarBreadcrumb";

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 py-2 px-2 border-b bg-background text-foreground shadow">
      <div className="container mx-auto flex items-center px-0 sm:px-3">
        <HeaderSidebarToggler />

        <div className="hidden md:flex flex-grow">
          <HeaderFeaturedNav />
        </div>
        <div className="flex ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="flex ms-2">
          <HeaderProfileNav />
        </div>
      </div>
      <div className="border-t my-2 mx-n2 border-border" />
      <div className="container mx-auto">
        <SidebarBreadcrumb />
      </div>
    </header>
  );
}
