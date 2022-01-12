import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../theme/appTheme';

const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Pagina 2',
            headerBackTitle: 'Pagina 1',
        });
    } , []);

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>
            <Button 
                title="Ir a Pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen') }
            />
        </View>
    );
}

export default Pagina2Screen;