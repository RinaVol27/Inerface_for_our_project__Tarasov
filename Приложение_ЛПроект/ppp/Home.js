import React from 'react'
//import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, StyleSheet, Image, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/but.png")} />
      <Text  style={styles.textart} >Бисуслес</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль" 
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Card', {name: 'Card'})}>
        <Text style={styles.forgot_button}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Card', {name: 'Card'})}>
        <Text style={styles.loginText}>ВОЙТИ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Card', {name: 'Card'})}>
        <Text style={styles.loginText}>ЗАРЕГЕСТРИРОВАТЬСЯ</Text>
      </TouchableOpacity>
    </View>
   
  ) 
    
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2B48C",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: -90,
    marginRight: 5,
    marginBottom: 30,
    width: '90%',
    height: '25%',
  },

  textart:{
    marginBottom: 50,
    marginTop: -40,
    fontSize: 70,
    color: "#008B8B",
    fontWeight: 'bold',
  },
  inputView: {
    backgroundColor: "#F0FFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: -20,
    backgroundColor: "#B0E0E6",
  },
});

