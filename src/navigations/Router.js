import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestinationSearch';
import HomeScreen from '../screens/Home';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen/index';



const Stack = createStackNavigator()

const Router = () => {
    return (  
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeTabNavigator}
                    options= {{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Destination Search'
                    component={DestinationSearchScreen}
                    options={{
                        title: 'Search your destination'
                    }}
                />
                <Stack.Screen
                    name='Guests'
                    component={GuestsScreen}
                    options={{
                        title: 'How many people?'
                    }}
                />
                <Stack.Screen
                    name='Post'
                    component={PostScreen}
                    options={{
                        title: 'Accommodation'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
export default Router;