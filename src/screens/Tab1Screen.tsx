import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab 1 screen effect"); //Solo se dispara cuando el componente es creado ya que el drawer navigator mantiene activa la pantalla.
  },[])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={50} color="#900"/>
    </View>
  )
}
