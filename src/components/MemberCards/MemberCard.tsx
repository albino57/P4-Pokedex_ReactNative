import React from "react";
import { styles } from "./StyleMemberCard";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Linking
} from "react-native";

interface Integrante {
    nome:string;
    foto:any;
    linkedin:string;
    github:string;
}

interface Props {
    integrante: Integrante;
}

export default function MemberCard({integrante}: Props){

return(
    <View style={styles.card}>
    <Image
        source={integrante.foto}
        style={styles.foto}
    />
    <Text style={styles.nome}>
        {integrante.nome}
    </Text>
    <TouchableOpacity
        onPress={()=>Linking.openURL(integrante.linkedin)}
    >
    <Text style={styles.link}>
        LinkedIn
    </Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={()=>Linking.openURL(integrante.github)}
    >
    <Text style={styles.link}>
        GitHub
    </Text>
    </TouchableOpacity>
    </View>
)
}