import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  CreditCard,
  MailOpen,
  File,
  MessageSquare,
  User,
  ListChecks,
  Settings,
  Lock,
  Power,
} from "lucide-react";
import HeaderLogout from "@/components/new-sidebar/Header/HeaderLogout";
import { createClient } from "@/utils/supabase/server";

type ItemWithIconProps = {
  icon: React.ReactNode;
} & PropsWithChildren;

interface User {
  id: string;
  email: string;
  name?: string;
  [key: string]: any; // To allow other user properties
}

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props;

  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{children}</span>
    </div>
  );
};

export default async function HeaderProfileNav() {
  const supabase = createClient();
  // Get the user object by verifying it with the server
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // Check if there's an error and handle it
  if (error) {
    if (error.message === "Auth session missing!") {
      // Handle scenarios where there is no logged-in user
      // For example, redirect to login or show a specific UI
      console.error("No user is logged in.");
    } else {
      console.error("Failed to fetch user:", error.message);
    }
  }

  console.log("USER NAV: ", user);

  return (
    <nav className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="py-0 px-2 rounded-0">
          <div className="avatar relative">
            {user && (
              <Image
                src={user?.avatar_url || "/default-avatar.png"}
                alt={user?.email}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <DropdownMenuLabel className="font-bold p-2">
            Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<Bell size={16} />}>
                Updates
                <Badge className="ml-2 bg-blue-500 text-white rounded-full">
                  42
                </Badge>
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<MailOpen size={16} />}>
                Messages
                <Badge className="ml-2 bg-green-500 text-white rounded-full">
                  42
                </Badge>
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<ListChecks size={16} />}>
                Tasks
                <Badge className="ml-2 bg-red-500 text-white rounded-full">
                  42
                </Badge>
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<MessageSquare size={16} />}>
                Comments
                <Badge className="ml-2 bg-yellow-500 text-white rounded-full">
                  42
                </Badge>
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuLabel className="font-bold p-2">
            Settings
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<User size={16} />}>Profile</ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<Settings size={16} />}>
                Settings
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<CreditCard size={16} />}>
                Payments
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<File size={16} />}>Files</ItemWithIcon>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />
          <Link href="#" className="block">
            <DropdownMenuItem>
              <ItemWithIcon icon={<Lock size={16} />}>
                Lock Account
              </ItemWithIcon>
            </DropdownMenuItem>
          </Link>
          <HeaderLogout>
            <DropdownMenuItem>
              <ItemWithIcon icon={<Power size={16} />}>Logout</ItemWithIcon>
            </DropdownMenuItem>
          </HeaderLogout>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
