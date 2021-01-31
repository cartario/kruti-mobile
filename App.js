import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  const [loaded, error] = useFonts({
    'open-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!loaded){
    return null;
  }

  // return (
  //   <View style={styles.container}>
  //     <Text style={{fontFamily: 'open-bold'}}>FONTS</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return <MainNavigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
