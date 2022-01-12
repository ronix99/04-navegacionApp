import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Platform, Text } from 'react-native';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import { colores } from '../theme/appTheme';
import StackNavigator from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

    return Platform.OS === 'ios' 
        // para ios
        ? <TabIOS />
        // para android
        : <TabAndroid />
}

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();


const TabAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{
            backgroundColor: colores.primary,
        }}
        screenOptions={( { route } ) => ({
            tabBarIcon: ( { color, focused } ) => {
                let iconName: string;

                switch ( route.name ) {
                    case 'Tab1Screen':
                        iconName = focused ? 'home' : 'home-outline';                        
                        break;
                    case 'Tab2Screen':
                        iconName = focused ? 'account' : 'account-outline';
                        break;
                    case 'StackNavigator':
                        iconName = focused ? 'settings' : 'settings-outline';
                        break;
                    default:
                        iconName = '';
                        break;
                }
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Top Tab' }} component={ TopTabNavigator } />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
        </BottomTabAndroid.Navigator>
    );
}


const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator

        sceneContainerStyle={{ backgroundColor: 'white' }}
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15,
            },
            // para agregar los iconos 
            tabBarIcon: ( { color, focused, size } ) => {
                let iconName: string;

                switch ( route.name ) {
                    case 'Tab1Screen':
                        iconName = focused ? 'home' : 'home-outline';                        
                        break;
                    case 'Tab2Screen':
                        iconName = focused ? 'copy' : 'copy-outline';
                        break;
                    case 'StackNavigator':
                        iconName = focused ? 'grid' : 'grid-outline';
                        break;
                    default:
                        iconName = '';
                        break;
                }
                return <Icon name={ iconName } color={ color } size={ size }/>
            }
        })
    }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: ( props ) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Inicio' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Top Tab' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}