import Layout from "./components/Layout";
import Login from "./screens/login";
import Cad from "./screens/cadastro";
import CadEve from "./screens/cadEventos";
import CadIngr from "./screens/cadIngressos";
import CadOrg from "./screens/cadOrganizadores";
import Home from "./screens/home";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
        <Stack.Screen name="Login" component={()=>(
          <Layout><Login /></Layout>
        )} />
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout><Cad /></Layout>
        )} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadEventos" component={CadEve} />
        <Stack.Screen name="CadIngressos" component={CadIngr} />
        <Stack.Screen name="CadOrganizadores" component={CadOrg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
