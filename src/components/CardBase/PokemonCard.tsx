import React from 'react';
import { Text, View, TouchableOpacity, Image , ImageBackground} from 'react-native';
import { usePokedex } from '../../contexts/PokedexContext';
import { useState } from 'react';
import { styles } from './styleCardsBase'
import { typeColors } from '../../utils/typeColors';
import { typesBackground } from '../../utils/typesBackground';


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
    
    const backgroundType = typesBackground[pokemon.tipo as keyof typeof typesBackground] || typesBackground.normal;
   
    return (
       <ImageBackground 
            source={backgroundType} 
            style={styles.card}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 , borderColor: 'gold', borderWidth:1.8 }}>
            <View style={styles.cardImg}>
                <Image
                    source={{
                        uri:
                            pokemon.sprite
                    }}
                    style={styles.pokemonImg}
                />
            </View>
            <View style = {styles.infoContainer}>
                 <View style = {styles.txtID}>
                    <Text style={styles.pokemonId}>ID: #{pokemon.id}</Text>
                 </View>
                   <View style={styles.infoContainer}>

                    <Text style={styles.pokemonName}>{pokemon.name}</Text>

                </View>
                 <View style = {styles.tipoContainer}>
                       <Text style = {styles.txtTipo}>
                    Tipo:
                  </Text>
             <View style={[styles.typesColors, {
                        backgroundColor: typeColors[pokemon.tipo as keyof typeof typeColors]
                    }]}>         
                        <Text style={styles.pokemonType}>{pokemon.tipo}</Text>
                    </View>
                 </View>
                 

                    <View style={styles.buttonContainer}>

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
             
        </ImageBackground>
    );
};
