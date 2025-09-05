import { Pokemon, PokemonType } from "./interfaces";
import { API_CONFIG, POKEMON_LIMITS } from "./constants";

class PokemonAPIError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "PokemonAPIError";
  }
}

async function fetchWithErrorHandling<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new PokemonAPIError(
      `API request failed: ${response.statusText}`,
      response.status
    );
  }

  return response.json();
}

export async function getPokemon(nameOrId: string): Promise<Pokemon> {
  return fetchWithErrorHandling<Pokemon>(
    `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.POKEMON}/${nameOrId}`
  );
}

export async function getPokemonList(
  limit = 50,
  offset = 0
): Promise<PokemonType[]> {
  const data = await fetchWithErrorHandling<{ results: PokemonType[] }>(
    `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.POKEMON}?limit=${limit}&offset=${offset}`
  );
  return data.results;
}

export async function getPokemonTypes(): Promise<PokemonType[]> {
  const data = await fetchWithErrorHandling<{ results: PokemonType[] }>(
    `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.TYPES}`
  );
  return data.results;
}

export async function getPokemonByType(type: string): Promise<PokemonType[]> {
  const data = await fetchWithErrorHandling<{
    pokemon: Array<{ pokemon: PokemonType }>;
  }>(`${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.TYPES}/${type}`);

  return data.pokemon.map((p) => p.pokemon);
}
