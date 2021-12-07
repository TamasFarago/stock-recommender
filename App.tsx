import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { RootNavigator } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
