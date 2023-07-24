import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

  const {authState,signOut} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={{fontSize:25, fontWeight:'bold',textAlign:'center', marginTop:10, marginBottom:250}}>Album Screen</Text>
      {authState.isLoggedIn && <Button color={'red'} title='Sign Out' onPress={signOut} />}
    </View>
  )
}