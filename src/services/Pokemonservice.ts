import mockApi from './mockApi';

export interface Pokemon {
    id: number;
    name: string;
    type: string;
    sprite?: string;
}

export interface PokemonData {
    name: string;
    type: string;
}

export async function getMyPokemons(): Promise<Pokemon[]> {
    try {
        const response = await mockApi.get('/pokemon');
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
        return [];
    }
}

export async function createPokemon(pokemonData: PokemonData): Promise<Pokemon> {
    try {
        const response = await mockApi.post('/pokemon', pokemonData);
        console.log('Pokémon criado:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Erro ao criar:', error.response?.status);
        throw error;
    }
}
export async function deletePokemon(id: number | string): Promise<void> {
    try {
        await mockApi.delete(`/pokemon/${id}`);
        console.log(`Pokémon ${id} deletado com sucesso`);
    } catch (error: any) {
        if (error.response?.status === 404) {
            console.warn(`Pokémon ${id} não encontrado na API (pode já ter sido deletado)`);
            return;
        }
        console.error('Erro ao deletar:', error.response?.status, error.message);
        throw error;
    }
}