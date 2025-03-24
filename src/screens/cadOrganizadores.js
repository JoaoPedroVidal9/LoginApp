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

export default function CadOrganizadores() {
  const navigation = useNavigation();
    const [org, setOrg] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleCadOrg() {
    await api.postCadOrg(org).then(
      (response) => {
        Alert.alert("Cadastro Bem Sucedido!", response.data.message);
        console.log(response.data.message);
        navigation.navigate('Home')
      },
      (error) => {
        console.log(error.response.error.message);
        Alert.alert("Erro,", error.response.data.error);
        console.log(error.response.error.message);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Faça Cadastro como Organizador:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite o nome do Organizador aqui:"
        value={org.nome}
        onChangeText={(value) => {
          setOrg({ ...org, nome: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite o E-mail do Organizador aqui:"
        value={org.email}
        onChangeText={(value) => {
          setOrg({ ...org, email: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Insira a senha do Organizador aqui:"
        value={org.senha}
        onChangeText={(value) => {
          setOrg({ ...org, senha: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Insira o telefone do Organizador aqui:"
        value={org.telefone}
        onChangeText={(value) => {
          setOrg({ ...org, telefone: value });
        }}
      />
      <TouchableOpacity onPress={handleCadOrg} style={styles.botao}>
        <Text>Cadastre-se como Organizador</Text>
      </TouchableOpacity>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
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
    color: "ffffff",
  },
  row: {
    flexDirection: "row",
  },
  texto: {
    fontWeight: "bold",
    fontSize: 30,
  },
  inputi: {
    borderWidth: 3,
    borderColor: "black",
    width: "80%",
    padding: 10,
    marginVertical: 10,
  },
  botao: {
    borderWidth: 3,
    backgroundColor: "#2196f3",
    width: "80%",
    padding: 10,
    marginVertical: 10,
  },
});
