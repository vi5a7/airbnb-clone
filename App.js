import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/navigations/Router';

export default function App() {
  return (
    <>
      <Router/>
    </>
  );
}