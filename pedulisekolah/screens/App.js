import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import SignUp from './SignUp';
import Login from './Login';
import Application from './Application';
import {navigationRef} from './RootNavigation';
import LaporinScreen from './Laporin';
import TentangAppScreen from './Tentang';
import DetailAkunScreen from './DetailAkun';
import SyaratScreen from './Syarat';
import Tabs from './tabs';

const Stack = createStackNavigator();

export function TabsNav() {
  return <Tabs />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TabsNav"
          component={TabsNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="LoginScreen" component={Login} />
        {/* <Stack.Screen name="ApplicationScreen" component={Application} /> */}
        <Stack.Screen
          name="LaporinScreen"
          component={LaporinScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TentangAppScreen"
          component={TentangAppScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailAkunScreen"
          component={DetailAkunScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SyaratScreen"
          component={SyaratScreen}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="SignUpScreen" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
