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
      <div className="bg-white rounded-2xl shadow-lg border-4 border-blue-300 p-4 relative text-center">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 border-4 border-blue-300">
          <Image src={imagerUrl} alt={pokemon.name} width={400} height={400} />
        </div>
        <div className="mt-20">
          <p className="text-gray-500">{pokemonId}</p>
          <h3 className="font-bold text-2xl capitalize mt-2">{pokemon.name}</h3>
          <div>
            {types.map((type: string) => (
              <span key={type}>{type}</span>
            ))}
          </div>
          <div>
            <div>
              <p>{stats.hp}</p>
              <p>HP</p>
            </div>
            <div>
              <p>{stats.attack}</p>
              <p>Attack</p>
            </div>
            <div>
              <p>{stats.defense}</p>
              <p>Defense</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
