import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./StyleContato";
import MemberCard from "../../components/MemberCards/MemberCard";
import fotoBnVitor from "../../../assets/foto-bnvitor.png"
import fotoBreno from "../../../assets/foto-breno.jpeg"
import fotoMarcos from "../../../assets/foto-marcos.jpeg"
import fotoMario from "../../../assets/foto-mario.jpeg"
import fotoPaulo from "../../../assets/foto-paulo.jpeg"
import fotoRafael from "../../../assets/foto-rafael.jpeg"
import fotoSilva from "../../../assets/foto-silva.jpg"

export default function Contato() {

    const integrantes = [
        {
        nome: "Breno",
        foto: fotoBreno,
        linkedin: "https://www.linkedin.com/in/breno-fran%C3%A7a-032390208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/brenofranca2000"
    },

    {
        nome: "Bruno da Silva",
        foto: fotoSilva,
        linkedin: "https://www.linkedin.com/in/bruno-freitas-709ba23a4",
        github: "https://github.com/Brun0Fr3itas"
    },

    {
        nome: "Bruno Vitor",
        foto: fotoBnVitor,
        linkedin: "https://www.linkedin.com/in/bruno-vitor-25b4ab393",
        github: "https://github.com/brunovitor-git05"
    },

    {
        nome: "Marcos Paulo",
        foto: fotoMarcos,
        linkedin: "https://www.linkedin.com/in/marcos-paulo-mello-6b87ab375/",
        github: "https://github.com/marcospmelloo"
    },

    {
        nome: "Mário",
        foto: fotoMario,
        linkedin: "https://www.linkedin.com/in/mjpraun/",
        github: "https://github.com/MJPraun"
    },

    {
        nome: "Paulo",
        foto: fotoPaulo,
        linkedin: "https://www.linkedin.com/in/paulo-vale-neto-b3a8b6286/",
        github: "https://github.com/paulocesar-neto"
    },

    {
        nome: "Rafael",
        foto: fotoRafael,
        linkedin: "https://www.linkedin.com/in/rafaelalbino57",
        github: "https://github.com/albino57"
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