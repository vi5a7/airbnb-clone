import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const post1 = feed[0]

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen/> */}
      {/* <SearchResultsScreen/> */}
      {/* <DestinationSearchScreen/> */}
      <GuestsScreen/>
    </SafeAreaView>
  );
}