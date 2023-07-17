import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab 1 screen effect"); //Solo se dispara cuando el componente es creado ya que el drawer navigator mantiene activa la pantalla.
  },[])

  return (
    <View>
      <Text>
        Tab 1 Screen
      </Text>
    </View>
  )
}
