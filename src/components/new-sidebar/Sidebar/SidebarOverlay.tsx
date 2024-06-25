"use client";

import React from "react";
import { useSidebar } from "@/components/new-sidebar/SidebarProvider";

export default function SidebarOverlay() {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
  } = useSidebar();

  const hideSidebar = () => {
    setIsShowSidebar(false);
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={`sidebar-overlay fixed inset-0 bg-dark opacity-50 transition-opacity ${
        isShowSidebar ? "block" : "hidden"
      }`}
      onClick={hideSidebar}
    />
  );
}
