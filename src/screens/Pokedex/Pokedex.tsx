import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, TextStyle } from 'react-native';
import { usePokedex } from '../../contexts/PokedexContext';
import DefaultLayout from '../../layouts/DefaultLayout';
import { style } from './StylePokedex';
import DefaultLayout from "../../layouts/DefaultLayout";

const combinedStyle = {
  ...style,
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignSelf: 'stretch' as const,
    alignItems: 'center' as const,
  },
  sprite: {
    width: 96,
    height: 96,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  deleteButton: {
    marginTop: 12,
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default function Pokedex() {
  const { backpack, releasePokemon, loadingBackpack } = usePokedex();

  const handleDelete = (id: number, name: string) => {
    Alert.alert(
      "Excluir Pokémon",
      `Deseja realmente excluir ${name}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await releasePokemon(id);
              Alert.alert('Sucesso!', `${name} foi excluído da Pokédex.`);
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir o Pokémon.');
            }
          }
        }
      ]
    );
  };

  return (
    <DefaultLayout>
      <View style={combinedStyle.container}>
        <Text style={combinedStyle.title}>Minha Pokédex</Text>

        {loadingBackpack ? (
          <Text>Carregando sua Pokédex...</Text>
        ) : backpack.length === 0 ? (
          <Text>Você ainda não capturou nenhum Pokémon.</Text>
        ) : (
          <FlatList
            data={backpack}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={combinedStyle.card}>
                {item.sprite && (
                  <Image source={{ uri: item.sprite }} style={combinedStyle.sprite} />
                )}
                <Text style={combinedStyle.name as TextStyle}>{item.name}</Text>
                <Text>Tipo: {item.type}</Text>
                
                <TouchableOpacity 
                  onPress={() => handleDelete(item.id, item.name)}
                  style={combinedStyle.deleteButton}
                >
                  <Text style={combinedStyle.deleteText as TextStyle}>Excluir</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </DefaultLayout>
  );
}