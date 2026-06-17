import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, } from "react-native";
import mockApi from "../../services/mockApi";

function PokemonCreator() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCriar() {
    if (!nome.trim() || !tipo.trim()) {
      Alert.alert("Atenção", "Preencha o nome e o tipo antes de criar.");
      return;
    }

    setLoading(true);
    try {
      const novoPokemon = { name: nome.trim(), type: tipo.trim() };
      const { data } = await mockApi.post("/pokemons", novoPokemon);

      Alert.alert("Sucesso!", `${data.name} foi criado com o ID ${data.id}!`);
      setNome("");
      setTipo("");
    } catch (e) {
      Alert.alert("Erro", "Não foi possível criar o Pokémon. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
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
        placeholder="Tipo (ex: fire, water...)"
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
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "white" },
    titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 24, textAlign: "center" },
    input: { borderWidth: 1, borderColor: "white", borderRadius: 8, padding: 12, fontSize: 16, marginBottom: 16 },
    botao: { backgroundColor: "red", padding: 14, borderRadius: 8, alignItems: "center" },
    botaoTexto: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PokemonCreator;