import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container flex flex-col items-center mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <Image src="/Logo.png" alt="Pokedex logo" width={40} height={40} />
          <span className="text-2x1 font-bold">Pokédex</span>
        </div>
        <p className="mt-4">Explore the world of Pokemon</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/Facebook.svg" alt="Facebook" width={24} height={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
