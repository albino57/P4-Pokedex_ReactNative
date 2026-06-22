//src/screens/Login/StyleLogin.ts
import { StyleSheet } from "react-native";
import { theme } from '../../StyleGlobal';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:5
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 150,
        color:'#000'
    },

    button: {
        backgroundColor: theme.colors.secondary,
        marginBottom:-60,
        width:80,
        height:40,
        color:'#000',
        textAlign:'center',
        borderRadius:20,
        borderColor:'#000',
        borderWidth:1.2
    },
    loginContainer: {
        backgroundColor: 'rgba(219, 217, 217, 0.6)',
        width: 350,
        height: 450,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden',
        borderColor: 'rgba(121, 117, 117, 0.62)',
        borderWidth: 1,

    }, input: {
        backgroundColor: '#ffff',
        width: 250,
        borderRadius: 7,
    }, inputBlock: {
        justifyContent: 'center',
        alignItems: 'center',
     
    },imgContainer:{
      justifyContent: 'center',
        alignItems: 'center',
       
    },logo:{
       width:200,
       height:200
    },inputCaixas:{
    gap:5
    },label:{
        fontSize:17,
        fontStyle:'italic',
        fontWeight:'bold'
    }





















});