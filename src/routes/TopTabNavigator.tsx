import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
          tabBarPressColor: colores.primary,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colores.primary
          },
          tabBarStyle: {
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarIcon: ({ color, focused }) => {

            let iconName: string = '';
            switch (route.name) {
              case 'Chat':
                iconName = 'Ch';
                break;
              case 'Contacts':
                iconName = 'Co';
                break;
              case 'Album':
                iconName = 'Al';
                break;
            }
  
            return <Text style={{ color }}>{iconName}</Text> //solo se pone el color porque es igual a color: color(props) pero se pone asi para que en EM6 no sea redundante
          }
        })
      }

    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );

}