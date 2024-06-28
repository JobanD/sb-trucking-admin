"use client";

import SignOut from "@/components/sign-out";

export default function HeaderLogout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SignOut />
    </div>
  );
}
