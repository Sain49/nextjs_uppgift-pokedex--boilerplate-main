import { getPokemon, getPokemonList, getPokemonByType } from "@/lib/api";
import { getRandomPokemons } from "@/lib/util";
import { Pokemon, PokemonType } from "@/lib/interfaces";

const pokemonTypeLimits = 20;
const pokemonFeauturedCount = 4;

// Service class to handle Pokemon-related operations
export class PokemonService {
  static async getFeaturedPokemon(): Promise<PokemonType[]> {
    const pokemonList = await getPokemonList();
    return getRandomPokemons(pokemonList, pokemonFeauturedCount);
  }

  static async searchPokemon(nameOrId: string): Promise<Pokemon> {
    return getPokemon(nameOrId);
  }

  static async getPokemonsByType(type: string): Promise<PokemonType[]> {
    const pokemonsByType = await getPokemonByType(type);
    return pokemonsByType.slice(0, pokemonTypeLimits);
  }

  static async getAllPokemons(): Promise<PokemonType[]> {
    return getPokemonList();
  }
}
