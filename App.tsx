import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import RootRouter from './src/routes/RootRouter';
import { PokedexProvider } from './src/contexts/PokedexContext';

export default function App() {
  return (
    <AuthProvider>
      <PokedexProvider>
        <NavigationContainer>
          <RootRouter />
        </NavigationContainer>
      </PokedexProvider>
    </AuthProvider>
  );
}