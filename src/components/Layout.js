import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import useNavigation from '@react-navigation/native';

export default function Layout({ children }) {
  
  return (
    <View style={{flex:1}}>
      <View style={styles.header} onPress={()=>{console.log("Botão Clicado")}}>
        <TouchableOpacity>
            <Icon name="person" size={30} color="white"/>

        </TouchableOpacity>
      </View>
      <View style={styles.container}> 
            {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    width: "100%",
    height: "60",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

});
