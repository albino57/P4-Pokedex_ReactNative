import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { usePokedex } from '../../contexts/PokedexContext';
import { useState } from 'react';

export interface PokemonData {
    id: number;
    name: string;
    tipo: string;
}

interface PokemonCardProps {
    pokemon: PokemonData;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { backpack, catchPokemon, releasePokemon } = usePokedex();

    const isCaught = backpack.some((p) => p.id === pokemon.id);

    const handlePress = async () => {
        if (isCaught) {
            await releasePokemon(pokemon.id);
        } else {
            handleCapturar();
        }
    };

    const [status, setStatus] = useState('idle');
    function handleCapturar() {
    setStatus('capturando');

    setTimeout(() => {
        catchPokemon(pokemon);
        setStatus('capturado');
    }, 1500);

    setTimeout(() => {
        setStatus('idle');
    }, 3000);
}

    return (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.pokemonId}>#{pokemon.id}</Text>
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <Text style={styles.pokemonType}>Tipo: {pokemon.tipo}</Text>
            </View>

            {status === 'idle' && (
            <TouchableOpacity 
                style={[styles.button, isCaught ? styles.releaseButton : styles.catchButton]} 
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>
                    {isCaught ? 'Soltar' : 'Capturar'}
                </Text>
            </TouchableOpacity>
            )}
            {status === 'capturando' && <Text>Capturando...</Text>}
            {status === 'capturado' && <Text>Capturado!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    infoContainer: {
        flexDirection: 'column',
    },
    pokemonId: {
        fontSize: 12,
        color: '#666',
        fontWeight: 'bold',
    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'capitalize',
    },
    pokemonType: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    catchButton: {
        backgroundColor: '#3B4CCA',
    },
    releaseButton: {
        backgroundColor: '#CC0000',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
});