import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import styles from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen');
    }, []);

    return (
        <View style= { [styles.globalMargin, { marginTop: top + 10 }] }>
            <Text style={ styles.title }>Iconos</Text>
            <Text>
                <TouchableIcon iconName='airplane-outline' />
                <TouchableIcon iconName='alarm-outline' />
                <TouchableIcon iconName='at-circle-outline' />
                <TouchableIcon iconName='backspace-outline' />
                <TouchableIcon iconName='battery-full-outline'/>
                <TouchableIcon iconName='beaker-outline' />
                <TouchableIcon iconName='alert-circle-outline' />
                <TouchableIcon iconName='battery-charging-outline' />
            </Text>
        </View>
    );
}

export default Tab1Screen;