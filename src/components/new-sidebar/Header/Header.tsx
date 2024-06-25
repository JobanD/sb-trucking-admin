import Link from "next/link";
import HeaderSidebarToggler from "@/components/new-sidebar/Header/HeaderSidebarToggler";
import HeaderFeaturedNav from "@/components/new-sidebar/Header/HeaderFeaturedNav";
import HeaderNotificationNav from "@/components/new-sidebar/Header/HeaderNotificationNav";
import HeaderProfileNav from "@/components/new-sidebar/Header/HeaderProfileNav";
import SidebarBreadcrumb from "@/components/new-sidebar/Breadcrumb/SidebarBreadcrumb";

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 py-2 px-2 border-b bg-white shadow">
      <div className="container mx-auto flex items-center px-0 sm:px-3">
        <HeaderSidebarToggler />
        <Link href="/" className="flex-shrink-0 d-md-none">
          <svg width="80" height="46">
            <title>CoreUI Logo</title>
            <use xlinkHref="/assets/brand/coreui.svg#full" />
          </svg>
        </Link>
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
      <div className="border-t my-2 mx-n2" />
      <div className="container mx-auto">
        <SidebarBreadcrumb />
      </div>
    </header>
  );
}
