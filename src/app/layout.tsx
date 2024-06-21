import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

// providers
import { ThemeProvider } from "@/styles/theme-provider";
import { TanstackQueryClientProvider } from "@/utils/tanstack/ClientProvider";

// components
import { Sidebar } from "@/components/Sidebar";
// import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from "@/components/SiteFooter";
import { CookieButton } from "@/components/CookieButton";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Network Logistics Manager",
  description: "Manage business operations of Network Logistics",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <TanstackQueryClientProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Sidebar />
              {/* <SiteHeader /> */}
              <div className="ml-[300px] mt-3">{children}</div>
              <SiteFooter />
            </div>
            <CookieButton />
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </TanstackQueryClientProvider>
  );
}
