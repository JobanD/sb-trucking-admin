"use client";

import React, { ReactNode } from "react";
import { useSidebar } from "@/components/new-sidebar/SidebarProvider";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  href: string;
  icon?: ReactNode;
} & { children: ReactNode };

export default function SidebarNavItem(props: Props) {
  const { icon, children, href } = props;

  const {
    narrowSidebarState: [isNarrow],
    showSidebarState: [, setIsShowSidebar],
    showSidebarMdState: [, setIsShowSidebarMd],
  } = useSidebar();

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsShowSidebar(false);
      setIsShowSidebarMd(false);
    }
  };

  return (
    <li className="nav-item">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className={`px-3 py-2 flex items-center transition-all ${
                isNarrow ? "justify-center" : ""
              }`}
              onClick={handleLinkClick}
            >
              {icon ? (
                <span className={`nav-icon ${isNarrow ? "mr-0" : "mr-3"}`}>
                  {icon}
                </span>
              ) : (
                <span className={`nav-icon ${isNarrow ? "mr-0" : "mr-3"}`} />
              )}
              <span
                className={`transition-all ${isNarrow ? "hidden" : "block"}`}
              >
                {children}
              </span>
            </Link>
          </TooltipTrigger>
          {isNarrow && (
            <TooltipContent>
              <p>{children}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </li>
  );
}
