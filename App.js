import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import 'react-native-gesture-handler';
import Router from './src/navigations/Router';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config)


function App() {
  return (
    <>
      <Router/>
    </>
  );
}

export default withAuthenticator(App)