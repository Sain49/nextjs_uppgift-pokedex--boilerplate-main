import { getPokemon } from "@/lib/api";
import PokemonCard from "./PokemonCard";
import { PokemonType } from "@/lib/interfaces";

//  To render PokemonCard
export default async function PokemonCardContainer({
  pokemon,
}: {
  pokemon: PokemonType;
}) {
  const pokemonData = await getPokemon(pokemon.name);
  return <PokemonCard pokemon={pokemonData} />;
}
