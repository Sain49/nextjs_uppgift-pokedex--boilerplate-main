// hooks/usePokemon.ts
import { useState, useEffect } from "react";
import { getPokemon } from "@/lib/api";
import { Pokemon } from "@/lib/interfaces";

export function usePokemon(pokemonNameOrId: string | null) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pokemonNameOrId) return;

    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemon(pokemonNameOrId);
        setPokemon(data);
      } catch (err) {
        setError("Failed to fetch Pokemon data");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonNameOrId]);

  return { pokemon, loading, error };
}
