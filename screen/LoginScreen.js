import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const onSubmit = async() => {
        await AsyncStorage.setItem('token', username)
        if (username === 'Rati' && password === 'rati1234') {
            console.log('authentic user')
            navigation.navigate('RatiHomeScreen')
        }else {
            console.log('user not found')
        }
    }

    const tokenlogin = async() => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            navigation.navigate('RatiHomeScreen')
            console.log('User connected')
        }else {
            console.log('Please Login')
        }
    }

    tokenlogin()

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(value) => setUsername(value)} placeholder="Username" style={styles.text} />
      <Text></Text>
      <TextInput secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Password" style={styles.text}/>
      <Text></Text>
      <Button color="#006666" onPress={onSubmit} title="Login"/>
      <Text font='extra bold'>username : {username}</Text>
      <Text font='extra bold'>password : {password}</Text>
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
    backgroundColor: '#C4DCDC',
    fontWeight: '100',
    fontStyle: 'bold',
    fontSize: 14,
    paddingHorizontal: 10
  }

});