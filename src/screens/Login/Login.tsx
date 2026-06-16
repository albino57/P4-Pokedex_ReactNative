//src/screens/Login/Login.tsx
import React from 'react';
import { View, Text} from 'react-native'
import { style } from './StyleLogin';

export default function Login(){
    return (
        <View style={style.container}>
            <Text style={style.title}> Login Screen </Text>
        </View>
    )
}