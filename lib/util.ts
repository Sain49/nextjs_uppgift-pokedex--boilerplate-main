import { Pokemon } from "@/lib/interfaces";

export function getPokemonStats(pokemon: Pokemon) {
  const statsMap = pokemon.stats.reduce((acc, stat) => {
    acc[stat.stat.name] = stat.base_stat;
    return acc;
  }, {} as Record<string, number>);

  return {
    hp: statsMap.hp || 0,
    attack: statsMap.attack || 0,
    defense: statsMap.defense || 0,
    speed: statsMap.speed || 0,
    specialAttack: statsMap["special-attack"] || 0,
    specialDefense: statsMap["special-defense"] || 0,
  };
}

export function getPokemonTypes(pokemon: Pokemon): string[] {
  return pokemon.types.map((type) => type.type.name);
}

export function getRandomPokemons<T>(list: T[], count: number): T[] {
  return list.sort(() => 0.5 - Math.random()).slice(0, count);
}

export function getPokemonImg(pokemon: Pokemon): string {
  return pokemon.sprites.other?.["official-artwork"].front_default || "";
}
