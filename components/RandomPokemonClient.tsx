"use client";

import { useState } from "react";
import Image from "next/image";
import PokemonCard from "./PokemonCard";
import LoadingSpinner from "./ui/LoadingSpinner";
import ErrorMessage from "./ui/ErrorMessage";
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

  const handleRetry = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="btn-primary" onClick={getRandomPokemon}>
        <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
        Random Pokémon
      </button>
      {selectedPokemon && (
        <div className="w-full max-w-xs h-60 flex items-center justify-center">
          {loading && <LoadingSpinner size="md" />}
          {error && (
            <ErrorMessage
              title="Failed to Load Pokemon"
              message={error}
              showRetry
              onRetry={handleRetry}
            />
          )}
          {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
        </div>
      )}
    </div>
  );
}
