import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {   //Renderizacion condicional
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const AndroidBottomTab = createMaterialBottomTabNavigator();

const TabsAndroid = () => {

  return (
    <AndroidBottomTab.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'TT';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text> //solo se pone el color porque es igual a color: color(props) pero se pone asi para que en EM6 no sea redundante
        }
      })}
    >
      <AndroidBottomTab.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <AndroidBottomTab.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
      <AndroidBottomTab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </AndroidBottomTab.Navigator>
  );
}



const IOSBottomTab = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <IOSBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'TT';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text> //solo se pone el color porque es igual a color: color(props) pero se pone asi para que en EM6 no sea redundante
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon:(props)=><Text style={{color:props.color}}>Icon</Text>}} component={Tab1Screen} /> */}
      <IOSBottomTab.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <IOSBottomTab.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
      <IOSBottomTab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </IOSBottomTab.Navigator>
  );
}