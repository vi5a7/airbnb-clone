import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../screens/SearchResults';
const Tab = createMaterialTopTabNavigator()


const SearchResultsTabNavigator = () => {
    return (  
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle:{
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name='list' component={SearchResultsScreen}/>
            <Tab.Screen name='map' component={SearchResultsScreen}/>
        </Tab.Navigator>
    );
}
 
export default SearchResultsTabNavigator;