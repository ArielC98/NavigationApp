import React, { useContext } from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {

  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginTop: 15, marginBottom: 250 }}>Contacts Screen</Text>
      {!authState.isLoggedIn && <Button title='Sign In' onPress={signIn} />}
    </View>
  )
}
