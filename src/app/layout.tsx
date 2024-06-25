import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// providers
import { ThemeProvider } from "@/styles/theme-provider";
import { TanstackQueryClientProvider } from "@/utils/tanstack/ClientProvider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={cn("flex font-sans antialiased", fontSans.variable)}>
            {children}
          </body>
        </ThemeProvider>
      </html>
    </TanstackQueryClientProvider>
  );
}
