import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem Vindo ao Sistema VIO</Text>
      <Button 
        title="Login:" 
        onPress={() => navigation.navigate("Login")} 
      />
      <Button
        title="Cadastro:"
        onPress={() => navigation.navigate("Cadastro")}
      />
      <Button
        title="Cadastro de Eventos:"
        onPress={() => navigation.navigate("CadEventos")}
      />
      <Button
        title="Cadastro de Ingressos:"
        onPress={() => navigation.navigate("CadIngressos")}
      />
      <Button
        title="Cadastro de Organizadores:"
        onPress={() => navigation.navigate("CadOrganizadores")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  titulo: {
    textAlign:'center',
    fontWeight: "bold",
    fontSize: 40,
  },
});
