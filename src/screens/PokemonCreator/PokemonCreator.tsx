//src/screens/PokemonCreator/PokemonCreator.tsx
import React from "react";
import { View, Text } from 'react-native';
import { style } from './StylePokemonCreator';

export default function PokedexCreator() {
    return (
    <View style={style.container}>
        <Text style={style.title}>Pokemon Creator Screen</Text>
    </View>
    );
}