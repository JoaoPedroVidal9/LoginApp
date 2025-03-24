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
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation();
    const [user, setUser] = useState({
    name: "",
    cpf: "",
    data_nascimento: "",
    email: "",
    password: "",
  });

  async function handleSignIn() {
    await api.postCadas(user).then(
      (response) => {
        Alert.alert("Bem Vindo!", response.data.message);
        console.log(response.data.message);
        navigation.navigate('Home')
      },
      (error) => {
        Alert.alert("Erro,", error.response.data.error);
        console.log(error.response.error.message);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça Cadastro:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite seu nome aqui:"
        value={user.name}
        onChangeText={(value) => {
          setUser({ ...user, name: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite seu CPF aqui:"
        value={user.cpf}
        onChangeText={(value) => {
          setUser({ ...user, cpf: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite seu E-mail aqui:"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Insira sua data de nascimento aqui:"
        value={user.data_nascimento}
        onChangeText={(value) => {
          setUser({ ...user, data_nascimento: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite sua senha aqui:"
        secureTextEntry={true}
        value={user.password}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
      />
      <TouchableOpacity onPress={handleSignIn} style={styles.botao}>
        <Text>Cadastre-se</Text>
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
      borderWidth:3,
      borderColor:'black',
      width:'80%',
      padding:10,
      marginVertical:10
    },
    botao:{
      borderWidth:3,
      backgroundColor:'#2196f3',
      width:'80%',
      padding:10,
      marginVertical:10
  }
  });
  
  