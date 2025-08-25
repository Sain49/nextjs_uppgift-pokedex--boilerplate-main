import Image from "next/image";
import PokemonCard from "@/components/PokemonCard";

import { getPokemonList } from "@/lib/api";

export default async function Home() {
  const pokemonList = await getPokemonList();
  const randomPokemon = pokemonList.sort(() => 0.5 - Math.random()).slice(0, 4);

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
        <button className="btn-primary">
          <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
          Random Pokémon
        </button>

        <section className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8 font-stretch-expanded">
            Featured Pokemon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {randomPokemon.map((pokemon: any) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
