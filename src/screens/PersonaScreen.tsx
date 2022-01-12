import React from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RootStackParam } from '../navigator/StackNavigator';
import styles from '../theme/appTheme';

// interface RouteParams {
//     id: number;
//     nombre: string;
// }

interface Props extends NativeStackScreenProps<RootStackParam, 'PersonaScreen'>{};

const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        });
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>PersonaScreen</Text>
            <Text style={ styles.title }>{JSON.stringify(params,null, 3)}</Text>
        </View>
    );
}

export default PersonaScreen;