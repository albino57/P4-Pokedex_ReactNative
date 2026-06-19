import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { usePokedex } from '../../contexts/PokedexContext';
import { useState } from 'react';
import { styles } from './styleCardsBase'

export interface PokemonData {
    id: number;
    name: string;
    tipo: string;
    sprite?: string,
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
            <View style={styles.cardImg}>
                <Image
                    source={{
                        uri:
                            pokemon.sprite
                    }}
                    style={styles.pokemonImg}
                />

            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.pokemonId}>#{pokemon.id}</Text>
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <Text style={styles.pokemonType}>Tipo: {pokemon.tipo}</Text>



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

           
        </View>
    );
};
