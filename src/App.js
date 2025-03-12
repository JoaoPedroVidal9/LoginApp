import Login from './screens/login'
import Cad from "./screens/cadastro";
import CadEve from './screens/cadEventos';
import CadIngr from './screens/cadIngressos';
import CadOrg from './screens/cadOrganizadores';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cad} />
        <Stack.Screen name='CadEventos' component={CadEve}/>
        <Stack.Screen name='CadIngressos' component={CadIngr} />
        <Stack.Screen name='CadOrganizadores' component={CadOrg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
