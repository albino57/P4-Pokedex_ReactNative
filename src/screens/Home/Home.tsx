import { Text, View, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from './StyleHome';
import React, { useState, useEffect } from "react";
import PokeApi from '../../services/PokeAPI/PokeAPI';
import { PokemonCard } from "../../components/CardBase/PokemonCard";
import { ActivityIndicator } from "react-native";
import DefaultLayout from "../../layouts/DefaultLayout";
import pokeball from '../../../assets/pokeball.png';

export default function Home() {
    const [lista, setLista] = useState<any[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchPokemons = async (currentOffset: number) => {
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
                        type: res.data.types[0]?.type.name || 'unknown',
                        sprite: res.data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default ||
                                `https://play.pokemonshowdown.com/sprites/ani/${res.data.name}.gif`,
                    };
                })
            );

            setLista(prev => [...prev, ...detalhes]);
        } catch (error) {
            console.log("Erro ao carregar pokemons:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        const newOffset = offset + 20;
        setOffset(newOffset);
        fetchPokemons(newOffset);
    };

    useEffect(() => {
        fetchPokemons(0);
    }, []);

    return (
        <DefaultLayout>
            <View style={style.inputContainer}>
                <TextInput style={style.input} placeholder="Buscar Pokémon" />
                <View style={style.buttonInputContainer}>
                    <TouchableOpacity style={style.buttonInput}>
                        <Image source={pokeball} style={style.buttonInput} />
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