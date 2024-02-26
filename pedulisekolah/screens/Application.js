import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs';
import {createStackNavigator} from '@react-navigation/stack';

const TabsNav = () => {
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>;
};
const Stack = createStackNavigator();
const Application = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TabsNav"
          component={TabsNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="ApplicationScreen" component={Application} />
        <Stack.Screen name="LaporinScreen" component={LaporinScreen} />

        {/* <Stack.Screen name="SignUpScreen" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default function App() {
//   return (
//     <NavigationContainer ref={navigationRef} independent={true}>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="LoginScreen" component={Login} />
//         <Stack.Screen name="ApplicationScreen" component={Application} />
//         <Stack.Screen name="LaporinScreen" component={LaporinScreen} />

//         {/* <Stack.Screen name="SignUpScreen" component={SignUp} /> */}
//       </Stack.Navigator>
//       <Tabs />
//     </NavigationContainer>
//   );
// }

export default Application;
