import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import SignUp from './SignUp';
import Login from './Login';
import Application from './Application';
import {navigationRef} from './RootNavigation';
import Notif from './screens/Notif';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="ApplicationScreen" component={Application} />
        <Stack.Screen name="Notif" component={Notif} />

        {/* <Stack.Screen name="SignUpScreen" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
