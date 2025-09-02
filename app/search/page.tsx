import PokemonGrid from "@/components/PokemonGrid";
import { getPokemonByType } from "@/lib/api";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: { pokemonType?: string };
}) {
  console.log("Search params:", searchParams);
  const pokemomType = searchParams.pokemonType || "normal";
  const pokemonsByType = (await getPokemonByType(pokemomType)).slice(0, 20); // limits to first 20 items
  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Pokemon Type {pokemomType}
        </h1>
      </section>
      {/* List of Pokemon by type */}
      <PokemonGrid
        pokemonsList={pokemonsByType}
        listTitle={`${pokemomType} Pokemons`}
      />
    </main>
  );
}
