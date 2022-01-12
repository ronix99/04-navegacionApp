import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                {/* <Tabs /> */}
                <MenuLateral />
            </AppState>
        </NavigationContainer>
    );
}

const AppState = ({ children }: any) => {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    );
}

export default App;