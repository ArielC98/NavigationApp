import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();


export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: (width >= 768 ? "permanent" : "front") }}
      drawerContent={(props)=><MenuContent {...props}/>}
    >
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const MenuContent = ({navigation}:DrawerContentComponentProps) =>{

  return (
    <DrawerContentScrollView>

      {/*Seccion del avatar*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.menuItem}
        onPress={()=>{navigation.navigate("Tabs")}}
        >
          <Icon name='compass-outline' size={30} color="black"/>
          <Text style={styles.menuItemText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.menuItem}
        onPress={()=>{navigation.navigate("SettingsScreen")}}
        >
          
          <Icon name='settings-outline' size={30} color="black"/>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}