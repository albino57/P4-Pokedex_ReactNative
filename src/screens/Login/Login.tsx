//src/screens/Login/Login.tsx
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity} from 'react-native'
import { style } from './StyleLogin';
import { AuthContext } from '../../contexts/AuthContext';
import DefaultLayout from '../../layouts/DefaultLayout';

export default function Login(){
    const auth = useContext(AuthContext);

    return (
        <DefaultLayout>
            <View style={style.container}>
                <TouchableOpacity style={style.button} onPress={() => auth?.login()}>
        
                    <Text style={style.title}> Login Screen </Text>
        
                </TouchableOpacity>
            </View>
        </DefaultLayout>
    )
}