import Link from "next/link";

export default async function HeaderFeaturedNav() {
  return (
    <nav className="flex space-x-4">
      <Link href="/" className="p-2 text-gray-700 hover:text-gray-900">
        Dashboard
      </Link>
      <Link href="#" className="p-2 text-gray-700 hover:text-gray-900">
        Users
      </Link>
      <Link href="#" className="p-2 text-gray-700 hover:text-gray-900">
        Settings
      </Link>
    </nav>
  );
}
