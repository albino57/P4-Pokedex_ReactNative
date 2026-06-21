import { Image, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home/Home';
import Pokedex from "../screens/Pokedex/Pokedex";
import PokemonCreator from "../screens/PokemonCreator/PokemonCreator";
import Contato from "../screens/Contato/Contato";
import homeIcon from '../../assets/homeIcon.png';
import pikachu_icon from '../../assets/pikachu_icon.png';
import pokedexIcon from '../../assets/pokedexIcon.png';
import pokemonCreat from '../../assets/pokemonCreat.png';
import logoPokemon from '../../assets/logoPokemon.png';


//---↓ Tipos de Rotas ↓---//
export type TabParamList = {
    Home: undefined;
    Pokedex: undefined;
    PokemonCreator: undefined;
    Contato: undefined;
}
//---↑ Tipos de Rotas ↑---//

const Tab = createBottomTabNavigator<TabParamList>();

//---↓ Rotas ↓---//
export default function TabRouter() {

    function LogoTitle() {
        return (
            <Image
                style={{ width: 300, height: 100, resizeMode: 'contain'}}
                source={logoPokemon}
            />);
    }

    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
               headerTitle: () => <LogoTitle />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#e75014',
                    },
                   
            tabBarActiveTintColor: '#2468B1',
            tabBarInactiveTintColor: 'gray',
             tabBarStyle:{
                        backgroundColor:'#e75014',
                        height:80, 
                    }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ 
                    tabBarIcon: () => <Image
                        style={{ width: 30, height: 30, backgroundColor: '#e7e5e2', borderRadius: 30 }}
                        source={homeIcon}
                    />
                   
                }}
            />

            <Tab.Screen
                name="Pokedex"
                component={Pokedex}
                options={{
                    title: 'Minha Pokedex',
                    tabBarIcon: () => <Image
                        style={{ width: 30, height: 30, }}
                        source={pikachu_icon}
                    />
                }}
            />

            <Tab.Screen
                name="PokemonCreator"
                component={PokemonCreator}
                options={{
                    title: 'Criador de Pokemon',
                    tabBarIcon: () => <Image
                        style={{ width: 30, height: 30, }}
                        source={pokemonCreat}
                    />
                }}
            />

            <Tab.Screen
                name="Contato"
                component={Contato}
                options={{
                    title: 'Contato',
                    tabBarIcon: () => <Image
                        style={{ width: 30, height: 30, }}
                        source={pokedexIcon}
                    />
                }}
            />
        </Tab.Navigator>
    );
}