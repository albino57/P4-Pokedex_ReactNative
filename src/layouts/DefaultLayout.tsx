// src/components/DefaultLayout/DefaultLayout.tsx
import React from 'react';
import { ImageBackground, StyleSheet, Text,TextInput,View,TouchableOpacity,Image } from 'react-native';
import { theme } from '../StyleGlobal';
import background1 from '../../assets/background1.jpg'
import { style } from './Style'
import pokeball from '../../assets/pokeball.png'


interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (

                    <ImageBackground source={background1} style={styles.container} resizeMode="cover">
      <View style={style.inputContainer}>
    
                    <TextInput style={style.input} placeholder="Buscar Pokémon">
                    </TextInput>
    
                    <View style={style.buttonInputContainer}>
                        <TouchableOpacity style={style.buttonInput}>
                            <Image source={pokeball} style={style.buttonInput}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
       {children}
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});