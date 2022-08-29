import { Login, Register } from '../screens';
import { StyleSheet, Text, View } from 'react-native'

import BottomTabNavigation from './BottomTabNavigation';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Router=()=> {
    const Stack= createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Bottom tab" head component={BottomTabNavigation} options={{headerShown:false}} />
            <Stack.Screen name="Login" head component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({});

export default Router ;