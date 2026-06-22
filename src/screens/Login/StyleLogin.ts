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
    },

    button: {
        backgroundColor: theme.colors.secondary,
    },
});