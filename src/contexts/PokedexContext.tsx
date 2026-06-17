import React, { createContext, useState, ReactNode } from 'react';

//---↓ Tipagem do Pokemon ↓---//
export type Pokemon = {
  id: number;
  name: string;
};

//---↓ Tipagem do Contexto ↓---//
export type PokedexContextType = {
  pokedex: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemonId: number) => void;
};

export const PokedexContext = createContext<PokedexContextType | undefined>(undefined);

export const PokedexProvider = ({ children }: { children: ReactNode }) => {

  const [pokedex, setPokedex] = useState<Pokemon[]>([]);

  const addPokemon = (pokemon: Pokemon) => {
    setPokedex((pokemonsAtuais) => [...pokemonsAtuais, pokemon]);
  };

  const removePokemon = (pokemonId: number) => {
    setPokedex((pokemonsAtuais) => pokemonsAtuais.filter(p => p.id !== pokemonId));
  };

  return (
    <PokedexContext.Provider value={{ pokedex, addPokemon, removePokemon }}>
      {children}
    </PokedexContext.Provider>
  );
};