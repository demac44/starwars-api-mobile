import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import CharactersScreen from './src/Screens/CharactersScreen';
import PlanetsScreen from './src/Screens/PlanetsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Characters' component={CharactersScreen}/>
        <Stack.Screen name='Planets' component={PlanetsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
