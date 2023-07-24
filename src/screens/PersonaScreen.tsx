import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../routes/StackNavigator'
import { AuthContext } from '../context/AuthContext'

// interface RouteParams{
//   id:number;
//   nombre:string;
// }

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};



export const PersonaScreen = ({navigation,route}:Props) => {
  
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(()=>{
    navigation.setOptions({
      title:params.nombre //forzando a typescript porque no se sabe si viene o no el dato
    })
  },[])

  useEffect(() => {
  
    changeUsername(params.nombre);

  }, [])
  
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.personContent}>
        {
          JSON.stringify(params,null,3)
        }
      </Text>
    </View>
  )
}
