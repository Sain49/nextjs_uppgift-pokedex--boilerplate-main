export const POKEMON_TYPE_COLORS = {
  grass: "#78c850",
  fire: "#f08030",
  water: "#6890f0",
  bug: "#a8b820",
  normal: "#a8a878",
  poison: "#a040a0",
  electric: "#f8d030",
  ground: "#e0c068",
  fairy: "#ee99ac",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  ghost: "#705898",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  steel: "#b8b8d0",
  flying: "#a890f0",
} as const;

export const API_CONFIG = {
  BASE_URL: "https://pokeapi.co/api/v2",
  ENDPOINTS: {
    POKEMON: "pokemon",
    TYPES: "type",
  },
} as const;
