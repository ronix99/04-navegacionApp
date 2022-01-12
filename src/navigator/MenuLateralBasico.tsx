import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () =>  {

    const { width } = useWindowDimensions();

  return (
      <Drawer.Navigator 
        initialRouteName="StackNavigator"
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
          }}
      >
        <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={ StackNavigator} />
        <Drawer.Screen name="Notifications" options={{ title: 'Settings'}} component={ SettingsScreen } />
      </Drawer.Navigator>
  );
}