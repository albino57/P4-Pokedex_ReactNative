import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRouter from './src/routes/TabRouter';

export default function App() {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
}