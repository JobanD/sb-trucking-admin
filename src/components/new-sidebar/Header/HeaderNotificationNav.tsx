import React, { PropsWithChildren } from "react";
import Link from "next/link";
import {
  Bell,
  Inbox,
  List,
  UserPlus,
  UserMinus,
  BarChart,
  ShoppingCart,
  Gauge,
} from "lucide-react";
import HeaderTheme from "@/components/new-sidebar/Header/HeaderTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ItemWithIconProps = {
  icon: React.ReactNode;
} & PropsWithChildren;

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props;

  return (
    <div className="flex items-center">
      <span className="mr-2">{icon}</span>
      {children}
    </div>
  );
};

const notifications = [
  { href: "#", icon: <UserPlus size={16} />, text: "New User" },
  { href: "#", icon: <UserMinus size={16} />, text: "Deleted User" },
  { href: "#", icon: <BarChart size={16} />, text: "Sales Report" },
];

const tasks = [
  { href: "#", label: "Task 1", progress: 0, variant: "bg-blue-500" },
  { href: "#", label: "Task 2", progress: 25, variant: "bg-red-500" },
  { href: "#", label: "Task 3", progress: 50, variant: "bg-yellow-500" },
];

const messages = [
  {
    href: "#",
    user: "User 1",
    time: "Just now",
    title: "New message",
    description: "You have a new message from User 1.",
    status: "bg-green-500",
  },
  {
    href: "#",
    user: "User 2",
    time: "5 minutes ago",
    title: "Server down",
    description: "The server is down. Please check.",
    status: "bg-yellow-500",
  },
];

export default async function HeaderNotificationNav() {
  return (
    <nav className="flex space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="relative px-2 mx-1 sm:px-3 sm:mx-0">
          <Bell size={24} />
          <span className="absolute top-0 right-0 px-1 sm:px-2 bg-red-500 text-white rounded-full text-xs">
            3
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <DropdownMenuLabel className="font-bold p-2">
            You have 3 notifications
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              <DropdownMenuItem>
                <ItemWithIcon icon={item.icon}>{item.text}</ItemWithIcon>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="relative px-2 mx-1 sm:px-3 sm:mx-0">
          <List size={24} />
          <span className="absolute top-0 right-0 px-1 sm:px-2 bg-yellow-500 text-white rounded-full text-xs">
            3
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <DropdownMenuLabel className="font-bold p-2">
            You have 3 tasks
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {tasks.map((task, index) => (
            <Link
              key={index}
              href={task.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              <DropdownMenuItem>
                <div className="flex justify-between text-xs">
                  <div>{task.label}</div>
                  <div>{task.progress}%</div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-full rounded-full ${task.variant}`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="relative px-2 mx-1 sm:px-3 sm:mx-0">
          <Inbox size={24} />
          <span className="absolute top-0 right-0 px-1 sm:px-2 bg-blue-500 text-white rounded-full text-xs">
            2
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <DropdownMenuLabel className="font-bold p-2">
            You have 2 messages
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {messages.map((message, index) => (
            <Link
              key={index}
              href={message.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              <DropdownMenuItem>
                <div className="flex items-start">
                  <div className="relative w-10 h-10 mr-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <span
                      className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full border border-white ${message.status}`}
                    ></span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{message.user}</div>
                    <div className="text-xs text-gray-500 float-right mt-1">
                      {message.time}
                    </div>
                    <div className="font-bold text-sm">{message.title}</div>
                    <div className="text-xs text-gray-500">
                      {message.description}
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <HeaderTheme currentPreferredTheme="dark" />
      </div>
    </nav>
  );
}
