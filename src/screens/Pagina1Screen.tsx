import React, { useContext, useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
//import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';



//interface Props extends StackScreenProps<any, any> { }; 
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

  const {changeUsername} = useContext(AuthContext);

  useEffect(()=>{

    navigation.setOptions({
      headerLeft:() => (
        <TouchableOpacity
          style={{
            marginLeft:10
          }}
          onPress={()=>navigation.toggleDrawer()}
        >
          <Icon name="menu-outline" size={30} color={colores.primary}/>
        </TouchableOpacity>
      )
    })

  },[])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title='Ir a Pagina 2'
        onPress={() => navigation.navigate("Pagina2Screen")}
      />

      <Text style={{marginVertical:10,fontSize:15, textAlign:'center'}}>Navegar con argumentos</Text>

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
          <Icon name="man-outline" size={30} color="white"/>
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
          
          <Icon name="woman-outline" size={30} color="white"/>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
