import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../theme/appTheme';

const ContactsScreen = () => {

    const { signIn, signOut, authState } = useContext(AuthContext);

    return (
        <View style={ styles.globalMargin}>
            <Text style={ styles.title }>ContactsScreen</Text>
            { authState.isLoggedIn ? (
                <Button 
                title='Sign Out'
                onPress={signOut}
                />
            ) : (
                <Button 
                title='Sign In'
                onPress={signIn}
                />
            )}
            
            
        </View>
    );
}

export default ContactsScreen;