import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { MenuLateralBasico } from './src/routes/MenuLateralBasico';
import { MenuLateral } from './src/routes/MenuLateral';
import { Tabs } from './src/routes/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
      {/* <Tabs/> */}
    </NavigationContainer>
  )
}

export default App;