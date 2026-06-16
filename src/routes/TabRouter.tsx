import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login/Login";
import Home from '../screens/Home/Home';
import Pokedex from "../screens/Pokedex/Pokedex";
import PokemonCreator from "../screens/PokemonCreator/PokemonCreator";

//---↓ Tipos de Rotas ↓---//
export type TabParamList = {
    Login: undefined;
    Home: undefined;
    Pokedex: undefined;
    PokemonCreator: undefined;
}
//---↑ Tipos de Rotas ↑---//

const Tab = createBottomTabNavigator<TabParamList>();

//---↓ Rotas ↓---//
export default function TabRouter() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#2468B1',
            tabBarInactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login Screen'}}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{ title: 'Login Screen'}}
            />

            <Tab.Screen
                name="Pokedex"
                component={Pokedex}
                options={{ title: 'Minha Pokedex'}}
            />

            <Tab.Screen
                name="PokemonCreator"
                component={PokemonCreator}
                options={{ title: 'Criador de Pokemon'}}
            />
        </Tab.Navigator>
    );
}