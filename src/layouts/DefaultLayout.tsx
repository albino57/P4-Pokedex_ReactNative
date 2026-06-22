// src/components/DefaultLayout/DefaultLayout.tsx
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { theme } from '../StyleGlobal';
import background1 from '../../assets/background1.jpg'

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <ImageBackground source={background1} style={styles.container} resizeMode="cover">
      {children}
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});