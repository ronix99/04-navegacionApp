import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import styles from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any>{}

const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                // <Button 
                // title="Menu"
                // onPress={ () => navigation.toggleDrawer() }
                // />
                <TouchableOpacity 
                onPress={ () => navigation.toggleDrawer() }>
                    <Icon name="md-menu" size={ 30 } color={ colores.primary} />
                </TouchableOpacity>
            )
        });
    } , []);

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>
            <Button 
                title="Ir a Pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: 'green',
                        flexDirection: 'column',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pedro'})}
                >
                    <Icon name="man" size={ 40 } color="white"/>
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: 'purple',
                        flexDirection: 'column',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Maria'})}
                >
                    <Icon name="woman" size={ 40 } color="white"/>
                    <Text style={ styles.botonGrandeTexto }>
                        Maria
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default Pagina1Screen;