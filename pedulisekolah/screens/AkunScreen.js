import React from 'react';
import {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Akun(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'black',
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 20,
            paddingLeft: 20,
            borderRadius: 20,
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Righteous-Regular',
            }}>
            Akun
          </Text>
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
                color: '#6289D6',
                textAlign: 'left',
                fontFamily: 'Righteous-Regular',
              }}>
              Peduli Sekolah
            </Text>
          </View>
        </View>
        <Image
          source={require('./../src/image/user.png')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            marginTop: 40,
          }}></Image>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            paddingHorizontal: 110,
            paddingVertical: 10,
            paddingBottom: 30,
            color: 'black',
            fontFamily: 'Righteous-Regular',
          }}>
          Muhammad Rafki Yudawija
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginLeft: 20,
          backgroundColor: '#5B8FB9',
          width: '90%',
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
        }}>
        <Image
          source={require('./../src/image/account.png')}
          style={{width: 30, height: 30, marginTop: 4}}></Image>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailAkunScreen');
          }}
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 5,
            marginLeft: 30,
            color: 'black',
            textAlign: 'left',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'left',
            }}>
            Ubah Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginLeft: 20,
          backgroundColor: '#5B8FB9',
          width: '90%',
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
        }}>
        <Image
          source={require('./../src/image/accept.png')}
          style={{width: 30, height: 30, marginTop: 4}}></Image>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SyaratScreen');
          }}
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 5,
            marginLeft: 30,
            color: 'black',
            textAlign: 'left',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'left',
            }}>
            Syarat dan Ketentuan
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginLeft: 20,
          backgroundColor: '#5B8FB9',
          width: '90%',
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
        }}>
        <Image
          source={require('./../src/image/information.png')}
          style={{width: 30, height: 30, marginTop: 4}}></Image>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TentangAppScreen');
          }}
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 5,
            marginLeft: 30,
            color: 'black',
            textAlign: 'left',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'left',
            }}>
            Tentang Aplikasi
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 20,
          backgroundColor: '#000',
          width: '90%',
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          textAlign: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          height: 50,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Kanit-Bold',

            color: '#fff',
            textAlign: 'center',
          }}>
          KELUAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}
