import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import PersonaScreen from '../screens/PersonaScreen';

//Para tipar nuestros parametros 
export type RootStackParam = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: { id: number, nombre: string };
}

const Stack = createNativeStackNavigator<RootStackParam>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    // initialRouteName='Pagina1Screen'
    screenOptions={{
      headerShown: true,
      headerShadowVisible: false,
      contentStyle: { 
        backgroundColor: 'white' ,
      },
    }}
    >
      <Stack.Screen name="Pagina1Screen" component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" component={ Pagina3Screen } />
      <Stack.Screen name="PersonaScreen" component={ PersonaScreen } />
    </Stack.Navigator>
  );
}

export default StackNavigator;