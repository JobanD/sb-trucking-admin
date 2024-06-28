"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/new-sidebar/SidebarProvider";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const {
    showSidebarState: [isShowSidebar, setIsShowSidebar],
    showSidebarMdState: [isShowSidebarMd, setIsShowSidebarMd],
    narrowSidebarState: [isNarrow, setIsNarrow],
  } = useSidebar();

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  useEffect(() => {
    if (localStorage.getItem("isShowSidebarMd")) {
      setIsShowSidebarMd(localStorage.getItem("isShowSidebarMd") === "true");
    }
  }, [setIsShowSidebarMd]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsShowSidebar(false);
      setIsShowSidebarMd(false);
    }
  };

  return (
    <div
      className={`flex flex-col h-screen border-r transition-all ${
        isNarrow ? "w-20" : "w-48"
      } ${isShowSidebar ? "block" : "hidden md:block"} ${
        !isShowSidebarMd ? "md:hidden" : ""
      }`}
      id="sidebar"
    >
      <div className="flex items-center justify-center h-16">
        <Link href="/" className="flex-shrink-0 d-md-none">
          <Image
            src="/NetworkLogisticsLogo.png"
            alt="Network Logistics Logo"
            width={80}
            height={46}
            priority={true}
          />
        </Link>
      </div>

      <div className="flex-1 border-t overflow-hidden">
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, {
            onClick: handleLinkClick,
          })
        )}
      </div>

      <div className="flex-shrink-0 p-4 mt-auto">
        <Button
          variant="link"
          className="w-full flex justify-center items-center rounded-none font-bold shadow-none border-t"
          onClick={toggleIsNarrow}
          type="button"
          aria-label="sidebar toggler"
        >
          <ChevronLeft
            size={24}
            className={`transition-transform ${isNarrow ? "rotate-180" : ""}`}
          />
        </Button>
      </div>
    </div>
  );
}
