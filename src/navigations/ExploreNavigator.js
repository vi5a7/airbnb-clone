import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator()

const ExploreNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Search Results'
                component={SearchResultsScreen}
                options={{
                    title: 'Search Your Destination',
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator