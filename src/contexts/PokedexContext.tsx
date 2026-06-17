import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const POKEDEX_STORAGE_KEY = '@pokedex:mochila';

export interface PokemonData {
    id: number;
    name: string;
    tipo: string;
}

interface PokedexContextType {
    backpack: PokemonData[];
    catchPokemon: (pokemon: PokemonData) => Promise<void>;
    releasePokemon: (id: number) => Promise<void>;
    loadingBackpack: boolean;
    loadingRequests: boolean; 
    setLoadingRequests: (loading: boolean) => void; 
}

const PokedexContext = createContext<PokedexContextType>({} as PokedexContextType);

export const PokedexProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [backpack, setBackpack] = useState<PokemonData[]>([]);
    const [loadingBackpack, setLoadingBackpack] = useState<boolean>(true);
    const [loadingRequests, setLoadingRequests] = useState<boolean>(false); 

    useEffect(() => {
        async function loadStoredBackpack() {
            try {
                const storedData = await AsyncStorage.getItem(POKEDEX_STORAGE_KEY);
                if (storedData) {
                    setBackpack(JSON.parse(storedData));
                }
            } catch (error) {
                console.error('Erro ao carregar os dados do AsyncStorage:', error);
            } finally {
                setLoadingBackpack(false);
            }
        }

        loadStoredBackpack();
    }, []);

    const catchPokemon = async (pokemon: PokemonData) => {
        try {
            const isAlreadyCaught = backpack.some((p) => p.id === pokemon.id);

            if (!isAlreadyCaught) {
                const newBackpack = [...backpack, pokemon];
                setBackpack(newBackpack);

                await AsyncStorage.setItem(POKEDEX_STORAGE_KEY, JSON.stringify(newBackpack));
            }
        } catch (error) {
            console.error('Erro ao salvar pokemon capturado:', error);
        }
    };

    const releasePokemon = async (id: number) => {
        try {
            const newBackpack = backpack.filter((p) => p.id !== id);
            setBackpack(newBackpack);

            await AsyncStorage.setItem(POKEDEX_STORAGE_KEY, JSON.stringify(newBackpack));
        } catch (error) {
            console.error('Erro ao remover pokemon do AsyncStorage:', error);
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
                setLoadingRequests 
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