// src/components/DefaultLayout/DefaultLayout.tsx
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { theme } from '../StyleGlobal';
import background from '../../assets/background.png'

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <ImageBackground source={background} style={styles.container} resizeMode="cover">
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