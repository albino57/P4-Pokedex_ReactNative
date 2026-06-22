// src/components/DefaultLayout/DefaultLayout.tsx
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text,TextInput,View,TouchableOpacity,Image, Alert } from 'react-native';
import { theme } from '../StyleGlobal';
import background1 from '../../assets/background1.jpg'
import { style } from './Style'
import pokeball from '../../assets/pokeball.png'
import { usePokedex } from '../contexts/PokedexContext';
import pokeApi from '../services/PokeAPI/PokeAPI';


interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  const [searchText, setSearchText] = useState('');
  const { setPokeSearch } = usePokedex();

  const onSearchHandle = async () => {
    if (searchText.trim() === "") {
        setPokeSearch(null);
        return;
    }
    try {
      const results = await pokeApi.get(`/pokemon/${searchText.toLowerCase().trim()}`);
      setPokeSearch(results.data);
    } catch (error) {
      Alert.alert("Ops!", "Pokémon não encontrado!");
      setPokeSearch(null);
    }
  };

  return (
    <ImageBackground source={background1} style={styles.container} resizeMode="cover">
      <View style={style.inputContainer}>
        
        <TextInput 
          style={style.input} 
          placeholder="Buscar Pokémon"
          value={searchText}
          onChangeText={(texto) => {
              setSearchText(texto);
              if(texto === "") setPokeSearch(null);
          }}
        />

        <View style={style.buttonInputContainer}>
          <TouchableOpacity style={style.buttonInput} onPress={onSearchHandle}>
            <Image source={pokeball} style={style.buttonInput} />
          </TouchableOpacity>
        </View>

      </View>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
});