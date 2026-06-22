import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 16,
        height: 160,
        width: 305,
        gap: 20,
        flex:1,
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
    },
    infoContainer2:{
        flexDirection: 'row',
        gap:10,
        marginTop:30,
    },
    txtTipo:{
         fontWeight: 'bold',
          color: '#ffffff',
    },
    pokemonId: {
        fontSize: 10,
        color: 'gold',
        fontWeight: 'bold',
    },
    txtID:{
        justifyContent:'space-between',
        marginLeft: 50,
        marginBottom:10,
    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
         color: '#ffffff',
        textTransform: 'capitalize',
    },
    pokemonType: {
        fontSize: 10,
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
        height: 25,
    },tipoContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    },
    buttonContainer: {
       marginTop:20,
       marginLeft:30,
       marginBottom:30,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        width: 95,
        height: 35,
          borderColor:'#000000ce',
          borderWidth:1.8
    },
    catchButton: {
        backgroundColor: '#f3f709',
        
    },
    releaseButton: {
        backgroundColor: '#CC0000',
    },
    buttonText: {
        color: '#000000c4',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        
      
    },
});