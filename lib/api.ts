const Api_url = "https://pokeapi.co/api/v2";

export async function getPokemon(nameOrId: string) {
  const res = await fetch(`${Api_url}/pokemon/${nameOrId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon");
  }

  return res.json();
}

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(`${Api_url}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon list");
  }

  const data = await res.json();
  return data.results;
}

export async function getPokemonTypes() {
  const res = await fetch(`${Api_url}/type`);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon types");
  }

  const data = await res.json();
  return data.results;
}

export async function getPokemonByType(type: string) {
  const res = await fetch(`${Api_url}/type/${type}`);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon by type");
  }

  const data = await res.json();
  return data.pokemon.map((p: any) => p.pokemon);
}
