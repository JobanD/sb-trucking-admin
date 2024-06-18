import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieButton() {
  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <a href="#" className={cn("yourConsentManager")}>
          <Cookie className="h-5 w-5" />
        </a>
        <span className="sr-only">Cookie Preferences</span>
      </div>
    </div>
  );
}
