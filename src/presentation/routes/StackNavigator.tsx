import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductSrcreen';


//estas son las configuraciones que podemos permitir en la navegacion
export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: { id: number, name: string };
  Settings: undefined;
}
//acá estamos tipando el stack con rootstackparams
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  //esto lo hacemos para el navigation, el screenOptions es para que no se muestre el header
  //este tiene varias opciones. ver documentacion
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: true,
        headerStyle: {
          //esta elevacion nos sirve para quitar una linea de separacion
          elevation: 0,
        },
      }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}