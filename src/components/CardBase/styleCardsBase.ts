import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 16,
        height : 200,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardImg:{
         justifyContent: 'center',
         alignItems: 'center',
         width: 120,
         height:120,
    },
    pokemonImg:{
        width:'100%',
        height: '100%',
         resizeMode: 'contain',
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 20,
        marginLeft:20,
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