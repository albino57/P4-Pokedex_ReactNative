import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import mockApi from "../../services/mockApi";
import DefaultLayout from "../../layouts/DefaultLayout";
import { usePokedex } from "../../contexts/PokedexContext";

function PokemonCreator() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [loading, setLoading] = useState(false);

  const { catchPokemon } = usePokedex();

  async function handleCriar() {
    if (!nome.trim() || !tipo.trim()) {
      Alert.alert("Atenção", "Preencha o nome e o tipo antes de criar.");
      return;
    }

    setLoading(true);
    try {
      const novoPokemon = { name: nome.trim(), type: tipo.trim() };
      const response = await mockApi.post('/pokemon', novoPokemon);

      const created = response.data;

      await catchPokemon({
      id: created.id,
      name: created.name,
      type: created.type || tipo.trim(),
      sprite: created.sprite,
      });


      Alert.alert("Sucesso!", `${created.name} foi criado com o ID ${created.id}!`);
      
      setNome("");
      setTipo("");
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível criar o Pokémon. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar Pokémon</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do Pokémon"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo (ex: fire, water, grass...)"
          value={tipo}
          onChangeText={setTipo}
        />

        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <TouchableOpacity style={styles.botao} onPress={handleCriar}>
            <Text style={styles.botaoTexto}>Criar Pokémon</Text>
          </TouchableOpacity>
        )}
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 24, textAlign: "center" },
  input: { 
    borderWidth: 1, 
    borderColor: "white", 
    borderRadius: 8, 
    padding: 12, 
    fontSize: 16, 
    marginBottom: 16,
    backgroundColor: "#fff"
  },
  botao: { backgroundColor: "red", padding: 14, borderRadius: 8, alignItems: "center" },
  botaoTexto: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PokemonCreator;