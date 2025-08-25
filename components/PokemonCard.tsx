import Link from "next/link";
import Image from "next/image";
import { getPokemon } from "@/lib/api";

export default async function PokemonCard({
  pokemon,
}: {
  pokemon: { name: string; url: string };
}) {
  const pokemonData = await getPokemon(pokemon.name);
  const imagerUrl = pokemonData.sprites.other["official-artwork"].front_default;
  const types = pokemonData.types.map((typeInfo: any) => typeInfo.type.name);

  const formatId = (id: number) => `#${String(id).padStart(3, "0")}`;
  const pokemonId = formatId(pokemonData.id);

  const stats = {
    hp: pokemonData.stats.find((s: any) => s.stat.name === "hp")?.base_stat,
    attack: pokemonData.stats.find((s: any) => s.stat.name === "attack")
      ?.base_stat,
    defense: pokemonData.stats.find((s: any) => s.stat.name === "defense")
      ?.base_stat,
  };

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div>
        <div>
          <Image src={imagerUrl} alt={pokemon.name} width={100} height={100} />
        </div>
      </div>
    </Link>
  );
}
