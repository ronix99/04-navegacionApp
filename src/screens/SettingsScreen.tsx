import React, { useContext } from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

  const { authState } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.globalMargin}>
      <ScrollView>
          <View style={ styles.ajustesContainerHeader }>
            <Text style={styles.ajustesTitle}>Ajustes</Text>
            <Image source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png',
            }}
            style={ styles.ajustesAvatar }/>
          </View>

        <View style={styles.ajustesContainer}>
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>
              { JSON.stringify(authState) }
            </Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
        </View>

        <View style={styles.ajustesContainer}>
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
        </View>

        <View style={styles.ajustesContainer}>
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
          <View style={styles.ajusteItemLine} />
          <View style={ styles.ajustesItemContainer }>
            <Icon name="cog-outline" size={ 30 } color="black" style={{ marginBottom: 5}}/>
            <Text style={styles.ajusteItem}>Ajuste 1</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
