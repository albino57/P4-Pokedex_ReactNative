//src/screens/Home/Home.tsx
import { Text , View, FlatList } from "react-native";
import { style } from './StyleHome';
import React, { useState, useEffect } from "react";
import { PokemonData } from '../../contexts/PokedexContext';
import PokeApi from '../../services/PokeAPI/PokeAPI';
import { PokemonCard } from "../../components/CardBase/PokemonCard";

export default function Home() {
    const[lista, setLista]  = useState<PokemonData[]>([]);
    const[offset, setOffset] = useState<number>(0);
    const[loading, setLoading]  = useState<boolean>(false);
    const fetchPokemons = async () => { 
        const resposta = await PokeApi.get(`/pokemon?limit=20&offset=${offset}`);
        const pokemonList = resposta.data.results;
        const detalhes = await Promise.all(
         pokemonList.map(async (item: { name: string; url: string }) => {
        const res = await PokeApi.get(item.url);
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
           <FlatList
             data={lista}
             keyExtractor={(item) => item.id.toString()}
             onEndReached={loadMore}
             renderItem={({ item }) => (
             <PokemonCard pokemon={item} />
            )}
           />

        </View>
    );
}