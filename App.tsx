import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { MenuLateralBasico } from './src/routes/MenuLateralBasico';
import { MenuLateral } from './src/routes/MenuLateral';
import { Tabs } from './src/routes/Tabs';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral />
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => { //El tipo es un objeto con una propiedad children que tiene asignado un elemento JSX
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;