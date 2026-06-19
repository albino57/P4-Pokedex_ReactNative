import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 16,
        height: 350,
        width: 250,
        gap: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    pokemonImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 10,

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
        marginTop: 10,
    },
    pokemonType: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 4,
        textTransform: 'capitalize',
        textAlign:'center',
        marginBottom:3,
    },
    typesColors: {
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 20,
        width: 60,

    },
    buttonContainer: {

    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        width: 80,
        height: 40,

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
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5
    },
});