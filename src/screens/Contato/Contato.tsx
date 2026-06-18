import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./StyleContato";
import MemberCard from "../../components/MemberCards/MemberCard";

export default function Contato() {

    const integrantes = [
        {
            nome:"Marcos Paulo",
            foto:"fotoMarcos",
            linkedin:"https://linkedin.com",
            github:"https://github.com"
        },

        {
            nome:"Breno",
            foto:"fotoBreno",
            linkedin:"https://linkedin.com",
            github:"https://github.com"
        }
    ];

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>
                Nosso Esquadrão Pokémon
            </Text>
            <View style={styles.cards}>
                {
                    integrantes.map((integrante)=>(
                        <MemberCard
                            key={integrante.nome}
                            integrante={integrante}
                        />
                    ))
                }
            </View>
        </ScrollView>

)
}