import Link from "next/link";
import React from "react";
import SignOut from "@/components/sign-out";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
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

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl mb-4">Home Page</h1>
        <div className="mb-4">
          Welcome, <strong>{user?.email ?? "Guest"}</strong>!
        </div>
        <div className="flex gap-2 text-sm mt-1 justify-center">
          {user ? <SignOut /> : <LinkButton href="/login">Login</LinkButton>}
        </div>
        <div className="mt-4">
          <Link
            href="/trucks"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Go to App
          </Link>
        </div>
      </div>
    </main>
  );
}

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <a className="text-white/30 hover:text-white transition duration-100 ease-in-out">
        {children}
      </a>
    </Link>
  );
};
