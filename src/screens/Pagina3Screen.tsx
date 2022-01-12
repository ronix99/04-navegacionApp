import React from 'react'
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{}

const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina3Screen</Text>
            <Button 
                title="Regresar"
                onPress={() => navigation.pop()}
            />
            <Button 
                title="Regresar"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}


export default Pagina3Screen;