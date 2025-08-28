"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PokemonCardDisplay from "./PokemonCardDisplay";
import { getPokemon } from "@/lib/api";

export default function RandomPokemonClient({
  pokemonList,
}: {
  pokemonList: any[];
}) {
  const [randomPokemonInfo, setRandomPokemonInfo] = useState<any>(null);
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const newRandomPokemon = pokemonList[randomIndex];
    setPokemonData(null);
    setRandomPokemonInfo(newRandomPokemon);
  };

  useEffect(() => {
    if (!randomPokemonInfo) return;

    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const data = await getPokemon(randomPokemonInfo.name);
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch random pokemon data", error);
        setPokemonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [randomPokemonInfo]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="btn-primary" onClick={getRandomPokemon}>
        <Image src="/Dice.svg" width={25} height={25} alt="Dice" />
        Random Pokémon
      </button>
      {randomPokemonInfo && (
        <div className="w-full max-w-xs h-60 flex items-center justify-center">
          {loading && (
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-800"></div>
          )}
          {pokemonData && !loading && (
            <PokemonCardDisplay pokemonData={pokemonData} />
          )}
        </div>
      )}
    </div>
  );
}
