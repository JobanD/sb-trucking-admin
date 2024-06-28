"use client";

import { useSidebar } from "@/components/new-sidebar/SidebarProvider";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeaderSidebarToggler() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
  } = useSidebar();

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
    setIsShowSidebarMd(!isShowSidebarMd);
  };

  return (
    <Button
      variant="link"
      className="px-0 me-3 rounded-0 shadow-none"
      type="button"
      onClick={toggleSidebar}
    >
      <Menu size={24} />
    </Button>
  );
}
