//src/screens/Home/Home.tsx
import React from "react";
import { Text , View } from "react-native";
import { style } from './StyleHome';

export default function Home() {
    return (
        <View style={style.container}>
            <Text style={style.title}> Home Screen = Pokémon List</Text>
        </View>
    );
}