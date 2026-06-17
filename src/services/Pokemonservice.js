import pokeApi from "./PokeAPI/PokeAPI";

export async function getPokemon(limit = 20, offset = 0) {
  const { data } = await pokeApi.get("/pokemon", {
    params: { limit, offset },
  });

  const detalhes = await Promise.all(
    data.results.map((p) => pokeApi.get(p.url))
  );

  return detalhes.map(({ data: d }) => ({
    id: d.id,
    name: d.name,
    sprite: d.sprites.front_default,
    types: d.types.map((t) => t.type.name),
  }));
}

export async function createPokemon(pokemonData) {
  const response = await pokeApi.post('/pokemon', pokemonData);
  return response.data;
}

export async function updatePokemon(id, pokemonData) {
  const response = await pokeApi.put(`/pokemon/${id}`, pokemonData);
  return response.data;
}

export async function deletePokemon(id) {
  const response = await pokeApi.delete(`/pokemon/${id}`);
  return response.data;
}