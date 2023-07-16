import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }; //Se extiende porque son las propiedades por defecto que tiene un StackScreen, pero tambien se le puede agregar nuevas

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title='Ir a Pagina 2'
        onPress={() => navigation.navigate("Pagina2Screen")}
      />

      <Text>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' , justifyContent:'space-evenly'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:'#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:'#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
