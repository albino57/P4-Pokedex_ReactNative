import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
import RootRouter from './src/routes/RootRouter';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </AuthProvider>
  );
}