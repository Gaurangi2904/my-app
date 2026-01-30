import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Sharwari
        </Link>

        {/* LINKS */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-purple-600 transition"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:text-purple-600 transition"
          >
            Shop
          </Link>

          <Link
            href="/contact"
            className="hover:text-purple-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
