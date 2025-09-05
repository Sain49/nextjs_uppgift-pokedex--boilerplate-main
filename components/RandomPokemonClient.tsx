"use client";

import { useState } from "react";
import Image from "next/image";
import PokemonCard from "./PokemonCard";
import { PokemonType } from "@/lib/interfaces";
import { usePokemon } from "@/hooks/usePokemon";

export default function RandomPokemonClient({
  pokemonList,
}: {
  pokemonList: PokemonType[];
}) {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const { pokemon, loading, error } = usePokemon(selectedPokemon);

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    setSelectedPokemon(pokemonList[randomIndex].name);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="btn-primary" onClick={getRandomPokemon}>
        <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
        Random Pokémon
      </button>
      {selectedPokemon && (
        <div className="w-full max-w-xs h-60 flex items-center justify-center">
          {loading && (
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-800"></div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
        </div>
      )}
    </div>
  );
}
