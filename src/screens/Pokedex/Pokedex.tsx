//src/screens/Pokedex/Pokedex.tsx

import React from "react";
import { View, Text } from 'react-native';
import { style } from './StylePokedex';

export default function Pokedex() {
    return (
    <View style={style.container}>
        <Text style={style.title}>Pokedex Screen</Text>
    </View>
    );
}