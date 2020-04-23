import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { View, StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import AllClocks from './src/components/allClocks';
import BottomNav from './src/components/bottomNav';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Fjalla': require('./assets/fjalla.ttf'),
    'Ssans': require('./assets/ssans.ttf'),
  });

  const initArr = ['timer'];
  const [clockArr, setClockArr] = useState(initArr);

  const addTimer = () => {
    const arr = clockArr;
    setClockArr(arr.concat('timer'));
  }

  const addCountdown = () => {

  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.outer}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <AllClocks clockArr={clockArr} />
          </ScrollView>
          <BottomNav addTimer={addTimer} addCountdown={addCountdown} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#121212'
  },
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});
