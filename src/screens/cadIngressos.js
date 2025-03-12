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

export default function CadIngressos({navigation}) {
  const [ingresso, setIngresso] = useState({
    preco:"",
    tipo:"",
    fk_id_evento:""
  });

  async function handleCadIngr() {
    await api.postCadIngr(ingresso).then(
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
      <Text style={styles.titulo}> Faça Cadastro do seu Ingresso:</Text>
      <TextInput
        style={styles.inputi}
        placeholder="Digite o preço do Ingresso aqui:"
        value={ingresso.preco}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, preco: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Digite a tipo do Ingresso aqui:"
        value={ingresso.tipo}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, tipo: value });
        }}
      />
      <TextInput
        style={styles.inputi}
        placeholder="Insira o id do Evento-Pai aqui:"
        value={ingresso.fk_id_evento}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, fk_id_evento: value });
        }}
      />
      <TouchableOpacity onPress={handleCadIngr} style={styles.botao}>
        <Text>Cadastre seu Ingresso</Text>
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
  
  