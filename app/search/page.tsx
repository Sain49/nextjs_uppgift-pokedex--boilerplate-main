import PokemonGrid from "@/components/PokemonGrid";
import { getPokemonByType, getPokemon } from "@/lib/api";
import PokemonCardDisplay from "@/components/PokemonCard";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: { pokemonType?: string; pokemonNameOrId?: string };
}) {
  // Handle individual Pokemon search
  if (searchParams.pokemonNameOrId) {
    try {
      const pokemon = await getPokemon(searchParams.pokemonNameOrId);
      return (
        <main className="flex flex-col flex-grow">
          <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
              Pokemon {pokemon.name}
            </h1>
          </section>
          <section className="flex justify-center p-8">
            <PokemonCardDisplay pokemonData={pokemon} />
          </section>
        </main>
      );
    } catch (error) {
      return (
        <main className="flex flex-col flex-grow">
          <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
              Pokemon Not Found
            </h1>
            <p className="text-center text-white text-xl">
              Could not find Pokemon with name or ID:{" "}
              {searchParams.pokemonNameOrId}
            </p>
          </section>
        </main>
      );
    }
  }

  // Handle Pokemon type search
  const pokemonType = searchParams.pokemonType || "normal";
  const pokemonsByType = (await getPokemonByType(pokemonType)).slice(0, 20); // limits to first 20 items
  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Pokemon Type {pokemonType}
        </h1>
      </section>
      {/* List of Pokemon by type */}
      <PokemonGrid
        pokemonsList={pokemonsByType}
        listTitle={`${pokemonType} Pokemons`}
      />
    </main>
  );
}
