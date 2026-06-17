import pokeApi from "./PokeAPI/PokeAPI";
 
export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
}
 
export interface PokemonData {
  name: string;
  type: string;
}
 
export async function getPokemon(limit = 20, offset = 0): Promise<Pokemon[]> {
  const { data } = await pokeApi.get("/pokemon", {
    params: { limit, offset },
  });
 
  const detalhes = await Promise.all(
    data.results.map((p: { url: string }) => pokeApi.get(p.url))
  );
 
  return detalhes.map(({ data: d }) => ({
    id: d.id,
    name: d.name,
    sprite: d.sprites.front_default,
    types: d.types.map((t: { type: { name: string } }) => t.type.name),
  }));
}
 
export async function createPokemon(pokemonData: PokemonData): Promise<Pokemon> {
  const response = await pokeApi.post("/pokemon", pokemonData);
  return response.data;
}
 
export async function updatePokemon(id: number, pokemonData: PokemonData): Promise<Pokemon> {
  const response = await pokeApi.put(`/pokemon/${id}`, pokemonData);
  return response.data;
}

export async function deletePokemon(id: number): Promise<void> {
  await pokeApi.delete(`/pokemon/${id}`);
}