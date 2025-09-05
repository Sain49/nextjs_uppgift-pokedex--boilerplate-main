import { getPokemonList } from "@/lib/api";
import RandomPokemonClient from "@/components/RandomPokemonClient";
import PokemonGrid from "@/components/PokemonGrid";
import SearchForm from "@/components/SearchForm";
import { getRandomPokemons } from "@/lib/util";
import { PokemonType } from "@/lib/interfaces";

export default async function Home() {
  const pokemonList = await getPokemonList();
  // const randomPokemons = pokemonList
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 4);
  const randomPokemons: PokemonType[] = getRandomPokemons(pokemonList, 4);

  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Gotta catch &apos;em all!
        </h1>
        <p className="text-center text-white text-xl">
          Discover, search and explore the amazing world of Pokémon. Find
          <br /> your favourite and learn about their stats.
        </p>
        <div className="mt-8">
          <RandomPokemonClient pokemonList={pokemonList} />
        </div>
      </section>

      {/* Serach from */}
      <SearchForm />

      {/* Featured Pokemon */}
      <PokemonGrid pokemonsList={randomPokemons} title={"Featured Pokemon"} />
    </main>
  );
}
