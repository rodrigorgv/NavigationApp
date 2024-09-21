import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawerContent {...props} />  }
      screenOptions={{
        //esto nos sirve para fijar el menu lateral. el front es el tipo de drawer, una alternativa a slide
        drawerType: dimensions.width >= 758 ? 'permanent' : 'front',
        //es para quitar el menu de hamburguesa
        headerShown: false,
        //es para que el menu se abra de izquierda a derecha y empluje el contenido
        //drawerType: 'slide',
        //para resaltar la pestaña en la que estamos activos
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 10,
        },
      }}
    >
      <Drawer.Screen name="Feed" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View 
      style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
      }}>

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}