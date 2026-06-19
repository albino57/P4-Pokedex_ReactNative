//src/screens/Pokedex/Pokedex.tsx

import React from "react";
import { View, Text } from 'react-native';
import { style } from './StylePokedex';
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Pokedex() {
    return (
        <DefaultLayout>
            <View style={style.container}>
                <Text style={style.title}>Pokedex Screen</Text>
            </View>
        </DefaultLayout>
    );
}