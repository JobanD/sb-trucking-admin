"use client";

import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/new-sidebar/SidebarProvider";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isNarrow, setIsNarrow] = useState(false);

  const {
    showSidebarState: [isShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
  } = useSidebar();

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isShowSidebarMd")) {
      setIsShowSidebarMd(localStorage.getItem("isShowSidebarMd") === "true");
    }
  }, [setIsShowSidebarMd]);

  return (
    <div
      className={`flex flex-col h-full border-r transition-all ${
        isNarrow ? "w-20" : "w-64"
      } ${isShowSidebar ? "block" : "hidden md:block"} ${
        !isShowSidebarMd ? "md:hidden" : ""
      }`}
      id="sidebar"
    >
      <div className="flex items-center justify-center h-16">
        <svg className={`h-12 w-12 ${isNarrow ? "hidden" : "block"}`}>
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#full" />
        </svg>
        <svg className={`h-12 w-12 ${isNarrow ? "block" : "hidden"}`}>
          <title>CoreUI Logo</title>
          <use xlinkHref="/assets/brand/coreui.svg#signet" />
        </svg>
      </div>

      <div className="flex-1 border-t">{children}</div>

      <Button
        variant="link"
        className="hidden md:inline-block rounded-none text-right pr-4 font-bold shadow-none border-t"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <ChevronLeft />
      </Button>
    </div>
  );
}
