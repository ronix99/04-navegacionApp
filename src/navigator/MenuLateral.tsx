import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import styles from '../theme/appTheme';
import { Tabs } from './Tabs';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () =>  {

    const { width } = useWindowDimensions();

  return (
      <Drawer.Navigator 
        initialRouteName="StackNavigator"
        screenOptions={{
          headerShown: false,
            drawerType: width >= 768 ? 'permanent' : 'front',
            headerShadowVisible: false,
          }}
          drawerContent={ ( props ) => <MenuInterno { ...props }/> }
      >
        <Drawer.Screen name="Tabs" options={{ title: 'Inicio'}} component={ Tabs } />
        <Drawer.Screen name="SettingsScreen" options={{ title: 'Ajustes'}} component={ SettingsScreen } />
      </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* contenedor del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png',
          }}
          style={ styles.avatar }
        />
      </View>

      {/* opciones de menu  */}
      <View style={ styles.menuContainer }>
        <TouchableOpacity
          style={{
            ...styles.botonMenu,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Icon name="md-home" size={ 30 } color={ colores.primary }/>
          <Text style={{
            ...styles.textoMenu,
            marginLeft: 10,
          }}>
            Inicio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonMenu,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Icon name="md-settings" size={ 30 } color={ colores.primary }/>
          <Text style={{
            ...styles.textoMenu,
            marginLeft: 10,
          }}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );

}