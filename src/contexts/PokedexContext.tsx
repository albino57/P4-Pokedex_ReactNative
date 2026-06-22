import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createPokemon, getMyPokemons, deletePokemon } from '../services/Pokemonservice';

const POKEDEX_STORAGE_KEY = '@pokedex:mochila';

export interface PokemonData {
    id: number;
    name: string;
    type: string;
    sprite?: string;
}

interface PokedexContextType {
    backpack: PokemonData[];
    catchPokemon: (pokemon: PokemonData) => Promise<void>;
    releasePokemon: (id: number) => Promise<void>;
    loadingBackpack: boolean;
    loadingRequests: boolean; 
    setLoadingRequests: (loading: boolean) => void;
    pokeSearch: any;
    setPokeSearch: (data: any) => void;
}

const PokedexContext = createContext<PokedexContextType>({} as PokedexContextType);

export const PokedexProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [backpack, setBackpack] = useState<PokemonData[]>([]);
    const [loadingBackpack, setLoadingBackpack] = useState<boolean>(true);
    const [loadingRequests, setLoadingRequests] = useState<boolean>(false); 
    const [pokeSearch, setPokeSearch] = useState<any>(null);

    useEffect(() => {
        loadBackpack();
    }, []);

    const loadBackpack = async () => {
        try {
            setLoadingBackpack(true);
            const apiPokemons = await getMyPokemons();
            
            if (apiPokemons && apiPokemons.length > 0) {
                setBackpack(apiPokemons);
            } else {
                const storedData = await AsyncStorage.getItem(POKEDEX_STORAGE_KEY);
                if (storedData) {
                    setBackpack(JSON.parse(storedData));
                }
            }
        } catch (error) {
            console.error('Erro ao carregar Pokédex:', error);
            try {
                const storedData = await AsyncStorage.getItem(POKEDEX_STORAGE_KEY);
                if (storedData) setBackpack(JSON.parse(storedData));
            } catch (e) {}
        } finally {
            setLoadingBackpack(false);
        }
    };

    const catchPokemon = async (pokemon: any) => {
    try {
        setLoadingRequests(true);

        const tipoPokemon = pokemon.tipo || pokemon.type || '';

        const isAlreadyCaught = backpack.some((p) => p.id === pokemon.id);
        if (isAlreadyCaught) return;

        const savedPokemon = await createPokemon({
            name: pokemon.name,
            type: tipoPokemon,
        });

        const newPokemon = {
            id: savedPokemon.id,
            name: savedPokemon.name,
            type: savedPokemon.type || tipoPokemon,
            sprite: pokemon.sprite || savedPokemon.sprite,
        };

        const newBackpack = [...backpack, newPokemon];
        setBackpack(newBackpack);

        await AsyncStorage.setItem(POKEDEX_STORAGE_KEY, JSON.stringify(newBackpack));
    } catch (error) {
        console.error('Erro ao capturar pokemon:', error);
    } finally {
        setLoadingRequests(false);
    }
};

    const releasePokemon = async (id: number) => {
        try {
            setLoadingRequests(true);
            
            await deletePokemon(id);

            const newBackpack = backpack.filter((p) => p.id !== id);
            setBackpack(newBackpack);

            await AsyncStorage.setItem(POKEDEX_STORAGE_KEY, JSON.stringify(newBackpack));
        } catch (error) {
            console.error('Erro ao soltar pokemon:', error);
            const newBackpack = backpack.filter((p) => p.id !== id);
            setBackpack(newBackpack);
            await AsyncStorage.setItem(POKEDEX_STORAGE_KEY, JSON.stringify(newBackpack));
        } finally {
            setLoadingRequests(false);
        }
    };

    return (
        <PokedexContext.Provider
            value={{
                backpack,
                catchPokemon,
                releasePokemon, 
                loadingBackpack,
                loadingRequests, 
                setLoadingRequests,
                pokeSearch,
                setPokeSearch
            }}
        >
            {children}
        </PokedexContext.Provider>
    );
};

export const usePokedex = () => {
    const context = useContext(PokedexContext);
    if (!context) {
        throw new Error('usePokedex deve ser usado dentro de um PokedexProvider');
    }
    return context;
};