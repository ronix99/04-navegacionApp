import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import styles from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen');
    }, []);

    return (
        <View style= { [styles.globalMargin, { marginTop: top + 10 }] }>
            <Text style={ styles.title }>Iconos</Text>
            <Text>
                <Icon name='airplane-outline' size={80} color={ colores.primary }/>
                <Icon name='alarm-outline' size={80} color={ colores.primary }/>
                <Icon name='at-circle-outline' size={80} color={ colores.primary }/>
                <Icon name='backspace-outline' size={80} color={ colores.primary }/>
                <Icon name='battery-full-outline' size={80} color={ colores.primary }/>
                <Icon name='beaker-outline' size={80} color={ colores.primary }/>
                <Icon name='alert-circle-outline' size={80} color={ colores.primary }/>
                <Icon name='battery-charging-outline' size={80} color={ colores.primary }/>
            </Text>
        </View>
    );
}

export default Tab1Screen;