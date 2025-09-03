import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemonData }: { pokemonData: any }) {
  // missing or incomplete data
  if (!pokemonData || !pokemonData.sprites) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-4 border-gray-300 p-4 relative text-center h-full flex items-center justify-center">
        <p className="text-gray-500">Pokémon data is unavailable.</p>
      </div>
    );
  }

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

  const pokemonType = types[0] || "normal";

  return (
    <div className="bg-white rounded-2xl shadow-lg border-4 border-blue-300 p-3 relative flex flex-col items-center">
      <div
        className={`absolute bg-white rounded-full p-2 border-4 image-border-${pokemonType} brightness-[1.2] mt-2`}
      >
        <Image src={imagerUrl} alt={pokemonData.name} width={75} height={75} />
      </div>
      <div className="text-center mt-28">
        <span
          className={`badge-${pokemonType} brightness-[1.2] text-xs rounded-full px-1`}
        >
          {pokemonId}
        </span>
        <h3 className="font-semi-bold text-2xl capitalize">
          {pokemonData.name}
        </h3>
        <div className="flex justify-center gap-2">
          {types.map((type: any) => (
            <Link href={`/search?pokemonType=${type}`} key={type}>
              <span
                key={type}
                className={`badge-${type} px-2 text-xs font-semibold rounded-full`}
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
