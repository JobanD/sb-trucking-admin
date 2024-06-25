"use client";

import React, { ReactNode } from "react";
import { useSidebar } from "@/components/new-sidebar/SidebarProvider";
import Link from "next/link";

type Props = {
  href: string;
  icon?: ReactNode;
} & { children: ReactNode };

export default function SidebarNavItem(props: Props) {
  const { icon, children, href } = props;

  const {
    showSidebarState: [, setIsShowSidebar],
  } = useSidebar();

  return (
    <li className="nav-item">
      <Link
        href={href}
        className="px-3 py-2 flex items-center"
        onClick={() => setIsShowSidebar(false)}
      >
        {icon ? (
          <span className="nav-icon mr-3">{icon}</span>
        ) : (
          <span className="nav-icon mr-3" />
        )}
        {children}
      </Link>
    </li>
  );
}
