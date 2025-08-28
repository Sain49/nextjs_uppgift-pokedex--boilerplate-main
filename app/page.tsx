import { getPokemonList } from "@/lib/api";
import RandomPokemon from "@/components/RandomPokemon";
import FeaturedPokemon from "@/components/FeaturedPokemon";

export default async function Home() {
  const pokemonList = await getPokemonList();
  const randomPokemons = pokemonList
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Gotta catch 'em all!
        </h1>
        <p className="text-center text-white text-xl">
          Discover, search and explore the amazing world of Pokémon. Find
          <br /> your favourite and learn about their stats.
        </p>
        <div className="mt-8">
          <RandomPokemon pokemonList={pokemonList} />
        </div>
      </section>

      {/* Serach from */}

      {/* Featured Pokemon */}
      <FeaturedPokemon randomPokemons={randomPokemons} />
    </main>
  );
}
