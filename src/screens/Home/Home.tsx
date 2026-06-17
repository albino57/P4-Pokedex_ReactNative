//src/screens/Home/Home.tsx
import { Text , View } from "react-native";
import { style } from './StyleHome';
import React, { useState, useEffect } from "react";
import { PokemonData } from '../../contexts/PokedexContexts';
import pokeApi from '../../services/pokeApi';

export default function Home() {
    const[lista, setLista]  = useState<PokemonData[]>([]);
    const[offset, setOffset] = useState<number>(0);
    const[loading, setLoading]  = useState<boolean>(false);
    const fetchPokemons = async () => { 
        const resposta = await pokeApi.get(`/pokemon?limit=20&offset=${offset}`);
        const pokemonList = resposta.data.results;
        const detalhes = await Promise.all(
         pokemonList.map(async (item) => {
        const res = await pokeApi.get(item.url);
            return {
                id:  res.data.id,
                name: res.data.name,
                tipo: res.data.types[0].type.name
            }
        })
        );
         setLista([...lista, ...detalhes]);
    }

    const loadMore = async () => {
        setOffset(offset+20);
    }

    useEffect(() => {
     fetchPokemons();
    }, [offset]);

    return (
        <View style={style.container}>
            <Text style={style.title}> Home Screen = Pokémon List</Text>
        </View>
    );
}