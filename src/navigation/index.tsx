import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Details} from '../screens';
import React from 'react'

const Stack = createNativeStackNavigator();


export function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false}}/>
        </Stack.Group>
      </Stack.Navigator>
    );
  }

