//src/screens/Login/Login.tsx
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image,ImageBackground } from 'react-native'
import { style } from './StyleLogin';
import { AuthContext } from '../../contexts/AuthContext';
import DefaultLayout from '../../layouts/DefaultLayout';
import logoPoke from '../../../assets/logoPoke.png'
import backgroundLogin from '../../../assets/backgroundLogin.jpg'


export default function Login() {
    const auth = useContext(AuthContext);

    return (
        <DefaultLayout>

                <View style={style.inputBlock}>
                <ImageBackground source={backgroundLogin} style={style.containerBack} resizeMode="cover">
                    <View style={style.container}>

                    <View style={style.loginContainer}>
                        <View style={style.imgContainer}>
                            <Image style={style.logo} source={logoPoke} />

                        </View>
                        <View style={style.inputBlock}>
                            <View style={style.inputCaixas}>
                                 <Text style = {style.label}>Email ou Username:</Text>
                            <TextInput style={style.input}>
                            </TextInput>
                           
                              <Text style = {style.label}>Senha:</Text>
                            <TextInput style={style.input}>
                            </TextInput>
                            </View>
                           
                        </View>


                        <View style={style.buttonContainer}>
                            <TouchableOpacity style={style.button} onPress={() => auth?.login()}>
                                <Text style={style.title}> Login </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                </ImageBackground>
            </View>
           
        </DefaultLayout>
    )
}