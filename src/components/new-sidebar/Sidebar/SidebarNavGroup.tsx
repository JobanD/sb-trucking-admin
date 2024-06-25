"use client";

import { ChevronUp } from "lucide-react";
import React, { PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SidebarNavGroupProps = {
  toggleIcon: React.ReactNode;
  toggleText: string;
} & PropsWithChildren;

export default function SidebarNavGroup(props: SidebarNavGroupProps) {
  const { toggleIcon, toggleText, children } = props;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="rounded-none nav-link px-3 py-2 flex items-center w-full cursor-pointer">
          <span className="nav-icon mr-3">{toggleIcon}</span>
          {toggleText}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-none pl-0">{children}</ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
