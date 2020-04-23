import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Timer from './src/components/timer';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fjalla': require('./assets/fjalla.ttf'),
    'Ssans': require('./assets/ssans.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
