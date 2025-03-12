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

export default function CadEventos({navigation}) {
  const [event, setEvent] = useState({
    nome:"",
    descricao:"",
    data_hora:"",
    local:"",
    fk_id_organizador:""
  });

  async function handleCadEve() {
    await api.postCadEve(event).then(
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
      <Text style={styles.titulo}> Faça Cadastro do seu Evento:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite o nome do Evento aqui:"
        value={event.nome}
        onChangeText={(value) => {
          setEvent({ ...event, nome: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite a descrição do Evento aqui:"
        value={event.descricao}
        onChangeText={(value) => {
          setEvent({ ...event, descricao: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Insira a data e hora do Evento aqui:"
        value={event.data_hora}
        onChangeText={(value) => {
          setEvent({ ...event, data_hora: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite o local do Evento aqui:"
        value={event.local}
        onChangeText={(value) => {
          setEvent({ ...event, local: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite o id do organizador aqui:"
        value={event.fk_id_organizador}
        onChangeText={(value) => {
          setEvent({ ...event, fk_id_organizador: value });
        }}
      />
      <TouchableOpacity onPress={handleCadEve} style={styles.botao}>
        <Text>Cadastre seu Evento</Text>
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
  
  