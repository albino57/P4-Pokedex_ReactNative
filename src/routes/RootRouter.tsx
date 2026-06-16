import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../contexts/AuthContext';
import Login from '../screens/Login/Login';
import TabRouter from './TabRouter';

export type RootStackParamList = {
  LoginScreen: undefined;
  AppApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootRouter() {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!auth.isAuthenticated ? 
      (<Stack.Screen name="LoginScreen" component={Login} />) 
      : 
      (<Stack.Screen name="AppApp" component={TabRouter} />)
      }
    </Stack.Navigator>
  );
}