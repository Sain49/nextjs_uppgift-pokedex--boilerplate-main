import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "@/lib/interfaces";
import { getPokemonStats, getPokemonTypes, getPokemonImg } from "@/lib/util";
import { POKEMON_TYPE_COLORS } from "@/lib/constants";

export default function PokemonCard({
  pokemon: pokemon,
}: {
  pokemon: Pokemon;
}) {
  // missing or incomplete data
  if (!pokemon || !pokemon.sprites) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-4 border-gray-300 p-4 relative text-center h-full flex items-center justify-center">
        <p className="text-gray-500">Pokémon data is unavailable.</p>
      </div>
    );
  }

  const imagerUrl = getPokemonImg(pokemon);
  const stats = getPokemonStats(pokemon);

  const formatId = (id: number) => `#${String(id).padStart(3, "0")}`;
  const pokemonId = formatId(pokemon.id);

  const types = getPokemonTypes(pokemon);
  const pokemonType = types[0] || "normal";

  // Get colors from constants
  const getTypeColor = (type: string) => {
    return (
      POKEMON_TYPE_COLORS[type as keyof typeof POKEMON_TYPE_COLORS] ||
      POKEMON_TYPE_COLORS.normal
    );
  };

  const primaryTypeColor = getTypeColor(pokemonType);

  return (
    <div className="bg-white rounded-2xl shadow-lg border-4 border-blue-300 p-3 relative flex flex-col items-center">
      <div
        className="absolute bg-white rounded-full p-2 border-4 brightness-[1.1] mt-2"
        style={{ borderColor: primaryTypeColor }}
      >
        <Image src={imagerUrl} alt={pokemon.name} width={75} height={75} />
      </div>
      <div className="text-center mt-28">
        <span
          className="text-xs rounded-full px-1 text-white font-semibold brightness-[1.1]"
          style={{ backgroundColor: primaryTypeColor }}
        >
          {pokemonId}
        </span>
        <h3 className="font-semi-bold text-2xl capitalize">{pokemon.name}</h3>
        <div className="flex justify-center gap-2">
          {types.map((type: string) => (
            <Link href={`/search?pokemonType=${type}`} key={type}>
              <span
                className="px-2 text-xs font-semibold rounded-full text-white"
                style={{ backgroundColor: getTypeColor(type) }}
              >
                {type}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-1 pt-1">
        <div className="flex justify-between gap-30">
          <p className="font-bold text-sm">HP</p>
          <p className="font-bold text-sm">{stats.hp}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">Attack</p>
          <p className="font-bold text-sm">{stats.attack}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">Defense</p>
          <p className="font-bold text-sm">{stats.defense}</p>
        </div>
      </div>
    </div>
  );
}
