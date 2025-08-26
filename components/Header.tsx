import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Pokédex Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Pokédex</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-purple-800">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="text-grey-600 hover:text-purple-800"
              >
                Pokedex
              </Link>
            </li>
            <li>
              <Link
                href="/types"
                className="text-grey-600 hover:text-purple-800"
              >
                Types
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className="text-grey-600 hover:text-purple-800"
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
