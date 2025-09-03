"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md content-grid">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Pokédex Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Pokédex</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className={`hover:text-purple-800 ${
                  isActive("/")
                    ? "text-purple-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className={`hover:text-purple-800 ${
                  isActive("/search")
                    ? "text-purple-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Pokedex
              </Link>
            </li>
            <li>
              <Link
                href="/types"
                className={`hover:text-purple-800 ${
                  isActive("/types")
                    ? "text-purple-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Types
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className={`hover:text-purple-800 ${
                  isActive("/favourites")
                    ? "text-purple-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Favourites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
