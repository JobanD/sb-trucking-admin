"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border-t px-4 py-2">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/" className="text-blue-600 hover:underline">
            Network Logistics
          </Link>
          <Link
            href="https://jobandhindsa.com"
            className="text-blue-600 hover:underline"
          >
            Freight Management
          </Link>{" "}
          © 2024 Joban&apos;s IT Solutions.
        </div>
      </div>
    </footer>
  );
}
