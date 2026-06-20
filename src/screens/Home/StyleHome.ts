import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 30,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainer:{
      backgroundColor:'#ffa927',
      justifyContent:'center',
      alignItems:'center',
       height: 55,
       flexDirection:'row',
    },
    input:{
       width: 200,
       height:40,
       backgroundColor:'white',
       borderRadius:20,
    
       
    },buttonInput:{
        width:40,
        height:40,
        
    },buttonInputContainer:{
         backgroundColor:'#e7e5e2',
         borderRadius:25
    }
});