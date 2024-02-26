import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import KoranScreen from './KoranScreen';
import KonsulScreen from './KonsulScreen';
import PostScreen from './PostScreen';
import AkunScreen from './AkunScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#6289D6',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: 25,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          // borderRadius: 15,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#6289D6' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#6289D6' : '#748c94',
                  fontSize: 11,
                  fontFamily: 'Righteous-Regular',
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Koran"
        component={KoranScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/suggestion.png')}
                resizeMode="contain"
                style={{
                  width: 29,
                  height: 29,
                  tintColor: focused ? '#6289D6' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#6289D6' : '#748c94',
                  fontSize: 11,
                  fontFamily: 'Righteous-Regular',
                }}>
                KORAN
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/camera.png')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Konsul"
        component={KonsulScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/support2.png')}
                resizeMode="contain"
                style={{
                  width: 29,
                  height: 29,
                  tintColor: focused ? '#6289D6' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#6289D6' : '#748c94',
                  fontSize: 11,
                  fontFamily: 'Righteous-Regular',
                }}>
                KONSUL
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={AkunScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/user.png')}
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused ? '#6289D6' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#6289D6' : '#748c94',
                  fontSize: 11,
                  fontFamily: 'Righteous-Regular',
                }}>
                AKUN
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
