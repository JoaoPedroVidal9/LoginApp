import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword:true,
    });

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        Alert.alert("Bem Vindo!", response.data.message);
        console.log(response.data.message);
        navigation.navigate('Home')
      },
      (error) => {
        Alert.alert("Erro",error.response.data.error);
        console.log(error.response.error.message);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça login-in:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite seu E-mail aqui:"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <View style={styles.passCont}>
        <TextInput
        style={styles.passwordInput}
          placeholder="Digite sua senha aqui:"
          secureTextEntry={user.showPassword?true:false}
          value={user.password}
          onChangeText={(value) => {
            setUser({ ...user, password: value });
          }}
        />
        <TouchableOpacity onPress={()=> setUser({...user, showPassword : !user.showPassword})}>
        <Ionicons  name={user.showPassword?"eye":"eye-off"} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.botao}>
        <Text>Clique Aqui Para Login-in</Text>
      </TouchableOpacity>

      <Button title='Home' onPress={()=>navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign:'center'
  },
  box1: {
    width: 200,
    height: 200,
    backgroundColor: "#ff0000",
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: "#00ff00",
  },
  box3: {
    width: 200,
    height: 200,
    backgroundColor: "#0000ff",
  },
  box4: {
    width: 200,
    height: 200,
    backgroundColor: "#000000",
    color:'ffffff'
  },
  row:{
    flexDirection:'row'
  },
  texto:{
    fontWeight:'bold',
    fontSize:30
  },
  inputi:{
    width:'80%',
    padding:10,
    marginVertical:10,
    borderBottomWidth:1,
  },
  botao:{
    borderWidth:3,
    backgroundColor:'#2196f3',
    width:'80%',
    padding:10,
    marginVertical:10
},
  passCont:{
    flexDirection:'row',
    alignItems:"center",
    width:"80%",
    paddingRight:"10px",
    borderBottomWidth:1,
  },
  passwordInput:{
    flex:1,
    height:40,
    
  }
});
