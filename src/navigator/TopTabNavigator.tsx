import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {
    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            paddingTop: top,
        }}
        tabBarOptions={{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary,
            },
            style: {
                borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0,
            },
        }}
        screenOptions={ ({ route }) => ({
            tabBarIcon: ( { color, focused } ) => {
                let iconName: string;

                switch ( route.name ) {
                    case 'Chat':
                        iconName = focused ? 'chatbubble' : 'chatbubble-outline';                        
                        break;
                    case 'Contactos':
                        iconName = focused ? 'people' : 'people-outline';
                        break;
                    case 'Albums':
                        iconName = focused ? 'albums' : 'albums-outline';
                        break;
                    default:
                        iconName = '';
                        break;
                }
                return <Icon name={ iconName } color={ color } size={ 25 }/>
            }
        })}
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contactos" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}