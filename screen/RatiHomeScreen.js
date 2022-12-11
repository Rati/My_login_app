import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RatiHomeScreen({navigation}) {

    const logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('LoginScreen')
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Welcome to RatiHome!!</Text>
      <Text></Text>
     <Text font='extra bold'>User connected</Text>
     <Button color="#006666" onPress={logout} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ABABB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
      color: '#000202',
      fontWeight: '200',
      fontStyle: 'italic',
      fontSize: 20
    
  }

});