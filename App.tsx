import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { MenuLateralBasico } from './src/routes/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateralBasico/>
    </NavigationContainer>
  )
}

export default App;