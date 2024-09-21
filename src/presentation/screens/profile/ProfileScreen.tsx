import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../../shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';



export const ProfileScreen = () => {

  const navigation = useNavigation();

  const {top} = useSafeAreaInsets();
//esto nos sirve para renderizar contenido en la parte superior de la pantalla, sin que afecte el notch
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>
        <Text style={{
          marginBottom: 20,
        }}>ProfileScreen</Text>

        <PrimaryButton
        label='Abrir menu'
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}  
        />
    </View>
  )
}
