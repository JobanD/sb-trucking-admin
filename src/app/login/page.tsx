import React from "react";
import SupabaseLogo from "@/components/logo-supabase";
import { login, signup } from "./action";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white/10 rounded-md p-6 border border-white/5 w-[300px]">
        <div className="flex justify-center mb-6 mt-2">
          <SupabaseLogo />
        </div>

        <form className="flex flex-col gap-2">
          <Label htmlFor="email">Email:</Label>
          <Input id="email" name="email" type="email" required />
          <Label htmlFor="password">Password:</Label>
          <Input id="password" name="password" type="password" required />
          <Separator />
          <Button formAction={login}>Log in</Button>
          <Button formAction={signup}>Sign up</Button>
        </form>
      </div>
    </main>
  );
}
