import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Image src="/Logo.png" alt="Pokedex logo" width={40} height={40} />
          <span>Pokédex</span>
        </div>
        <p>Explore the world of Pokemon</p>
        <div>
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
