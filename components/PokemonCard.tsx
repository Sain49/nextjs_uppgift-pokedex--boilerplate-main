import { getPokemon } from "@/lib/api";
import PokemonCardDisplay from "./PokemonCardDisplay";

export default async function PokemonCard({
  pokemon,
}: {
  pokemon: { name: string; url: string };
}) {
  const pokemonData = await getPokemon(pokemon.name);
  return <PokemonCardDisplay pokemonData={pokemonData} />;
}
