//src/screens/Home/Home.tsx
import { Text, View, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from './StyleHome';
import React, { useState, useEffect } from "react";
import { PokemonData } from '../../contexts/PokedexContext';
import PokeApi from '../../services/PokeAPI/PokeAPI';
import { PokemonCard } from "../../components/CardBase/PokemonCard";
import { ActivityIndicator } from "react-native";
import DefaultLayout from "../../layouts/DefaultLayout";
import pokeball from '../../../assets/pokeball.png'

export default function Home() {
    const [lista, setLista] = useState<PokemonData[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    
    const fetchPokemons = async(currentOffset: number) => {

        try {
            setLoading(true);
            const resposta = await PokeApi.get(`/pokemon?limit=20&offset=${currentOffset}`);
            const pokemonList = resposta.data.results;
            const detalhes = await Promise.all(
                pokemonList.map(async (item: { name: string; url: string }) => {
                    const res = await PokeApi.get(item.url);
                    return {
                        id: res.data.id,
                        name: res.data.name,
                        tipo: res.data.types[0].type.name,

                        sprite: res.data.sprites?.versions?.[
                            "generation-v"
                        ]?.["black-white"]?.animated?.front_default ||

                            `https://play.pokemonshowdown.com/sprites/ani/${res.data.name}.gif`,

                    }
                })
            );
            setLista([...lista, ...detalhes]);
        } catch (error) {
            console.log("Erro ao carregar pokemons:", error);
        } finally {
            setLoading(false);
        }
    }

    const loadMore = async () => {
        const newOffset = offset + 20;
        setOffset(newOffset);
        fetchPokemons(newOffset);

    }

    useEffect(() => {
        fetchPokemons(0);
    },[]);

    return (
        <DefaultLayout>
            <View style={style.inputContainer}>
               
                    <TextInput style={style.input} placeholder="Buscar Pokémon">
                    </TextInput>
                
                    <View style={style.buttonInputContainer}>
                    <TouchableOpacity style={style.buttonInput}>
                        <Image source={pokeball} style={style.buttonInput}>
                        </Image>
                    </TouchableOpacity>
                </View>
                

            </View>
            <View style={style.container}>
                {loading && lista.length === 0 ? (
                    <View>
                        <ActivityIndicator size="large" />
                        <Text>Aguarde, carregando lista de pokemons...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={lista}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={loadMore}
                        renderItem={({ item }) => (
                            <PokemonCard pokemon={item} />
                        )}
                    />
                )}
            </View>
        </DefaultLayout>
    );
}