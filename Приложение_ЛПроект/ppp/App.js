import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Card from './Card';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Добро пожаловать'}}/>
        <Stack.Screen name="Card" component={Card} options={{title: 'Карточка'}}/>
    </Stack.Navigator>
    
   </NavigationContainer>   
  );
};
