"use client";

import { useState } from "react";
import Imag from "next/image";
import PokemonCard from "@/components/PokemonCard";

export default function RandomPokemon({ pokemonList }: { pokemonList: any[] }) {
  const [randomPokemon, setRandomPokemon] = useState<any>(null);

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setRandomPokemon(pokemonList[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="btn-primary" onClick={getRandomPokemon}>
        <Imag src="/Dice.svg" width={25} height={25} alt="Dice" />
        Random Pokémon
      </button>
      {randomPokemon && (
        <div>
          <PokemonCard key={randomPokemon.name} pokemon={randomPokemon} />
        </div>
      )}
    </div>
  );
}
