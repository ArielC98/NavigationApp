import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {   //Renderizacion condicional
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const AndroidBottomTab = createMaterialBottomTabNavigator();

const TabsAndroid = () => {

  const theme = useTheme();
  // @ts-ignore solo esta vez porque solo asi funciona 
  theme.colors.secondaryContainer = 'transparent';

  return (
    <AndroidBottomTab.Navigator
      activeColor='white'
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({ color }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bulb-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'albums-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }

          return <Icon name={iconName} size={25} color={color}/>
        }
      })}
    >
      <AndroidBottomTab.Screen name="Tab1Screen" options={{ title: 'Icons' }} component={Tab1Screen} />
      <AndroidBottomTab.Screen name="TopTabNavigator" options={{ title: 'Album' }} component={TopTabNavigator} />
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
        tabBarIcon: ({ color }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bulb-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'albums-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }

          return <Icon name={iconName} size={25} color={color} />
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