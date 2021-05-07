import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen/> */}
      <Post/>
    </SafeAreaView>
  );
}