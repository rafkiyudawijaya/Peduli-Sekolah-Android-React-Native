import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  CreatenativeStackNavigator,
} from '@react-navigation/native-stack';
import App from './SignUp';
import Splash from './splash';

const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SplashScreen;
