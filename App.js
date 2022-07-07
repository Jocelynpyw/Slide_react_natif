/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Login,Onboarding} from './components';



const  Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
   
    <NavigationContainer >
      <Stack.Navigator     screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Onboarding' component={Onboarding} />
      </Stack.Navigator>

    </NavigationContainer>
    );
}



export default App;
