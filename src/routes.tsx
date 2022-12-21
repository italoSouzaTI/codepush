import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Ajuste from './ajuste';

export function Routes () {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Ajuste" component={Ajuste} />
        </Stack.Navigator>
    )
}
