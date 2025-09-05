import PokemonGrid from "@/components/PokemonGrid";
import { getPokemonByType, getPokemon } from "@/lib/api";
import PokemonCard from "@/components/PokemonCard";

interface SearchPageProps {
  searchParams: Promise<{
    pokemonType?: string;
    pokemonNameOrId?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  // Handle individual Pokemon search
  if (params.pokemonNameOrId) {
    try {
      const pokemon = await getPokemon(params.pokemonNameOrId);
      return (
        <main className="flex flex-col flex-grow">
          <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
              {pokemon.name}
            </h1>
          </section>
          <section className="flex justify-center p-8">
            <PokemonCard pokemon={pokemon} />
          </section>
        </main>
      );
    } catch (_error) {
      return (
        <main className="flex flex-col flex-grow">
          <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
              Pokemon Not Found
            </h1>
            <p className="text-center text-white text-xl">
              Could not find Pokemon with name or ID: {params.pokemonNameOrId}
            </p>
          </section>
        </main>
      );
    }
  }

  // Handle Pokemon type search
  const pokemonType = params.pokemonType || "normal";
  const pokemonsByType = (await getPokemonByType(pokemonType)).slice(0, 20);

  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          {pokemonType} Type Pokemon
        </h1>
      </section>
      <PokemonGrid
        pokemonsList={pokemonsByType}
        title={`${pokemonType} Pokemon`}
      />
    </main>
  );
}
