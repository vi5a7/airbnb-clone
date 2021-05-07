import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
