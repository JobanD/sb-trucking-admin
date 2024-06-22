"use client";

import { useEffect, useState } from "react";
import { SidebarButton } from "./SidebarButton";
import { SidebarItems } from "@/types";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { createClient } from "@/utils/supabase/client";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

interface User {
  id: string;
  email: string;
  name?: string;
  [key: string]: any; // To allow other user properties
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const supabase = createClient();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        console.log("Fetched user:", user);
        setUser(user as User);
      }
    };

    getUser();
  }, []);

  const getInitials = (nameOrEmail: string | undefined) => {
    if (!nameOrEmail) return "U"; // Default fallback
    const [firstName, lastName] = nameOrEmail.split(" ");
    if (lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase();
    } else {
      return nameOrEmail.slice(0, 2).toUpperCase();
    }
  };

  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <div className="flex gap-2">
          <h3 className="mx-3 text-lg font-semibold text-foreground">
            Network Logistics
          </h3>
          <ThemeToggle />
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                  className="w-full"
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {props.sidebarItems.extras}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        {/* Assuming user has a `name` property */}
                        <AvatarFallback>
                          {user ? getInitials(user.name || user.email) : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <span>{user ? user.email : "User"}</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href="/">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
