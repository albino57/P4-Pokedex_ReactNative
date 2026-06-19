import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 16,
        height: 250,
        width: 300,
        gap: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
         borderStyle:'dotted',
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
        marginLeft:8,
    },
    pokemonImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 10,
    },txtTipo:{
         fontWeight: 'bold',
          color: '#ffffff',
    },
    pokemonId: {
        fontSize: 12,
        color: 'gold',
        fontWeight: 'bold',
       
    },txtID:{
        justifyContent:'space-between',
        marginLeft: 50,
        marginBottom:20,
    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
         color: '#ffffff',
        textTransform: 'capitalize',
        marginTop: 10,
    },
    pokemonType: {
        fontSize: 13,
        fontWeight:'bold',
        color: '#ffffff',
        textTransform: 'capitalize',
        textAlign:'center',
      
    },
    typesColors: {
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 20,
        width: 60,
        height: 30,
    },tipoContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    },
    buttonContainer: {
       marginTop:25,
       marginLeft:10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        width: 100,
        height: 45,
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
        fontSize: 17,
        textAlign: 'center',
        marginTop: 3
    },
});