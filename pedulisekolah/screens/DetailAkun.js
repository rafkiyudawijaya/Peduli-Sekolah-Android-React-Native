import React from 'react';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';

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

import Svg, {Path, WithLocalSvg} from 'react-native-svg';

export default function Forggotpw() {
  const [email, setEmail] = useState('');

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#5b34d3'}}>
      <View style={{marginTop: 60}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../src/image/user.png')}
            style={{
              width: 75,
              height: 75,
              borderRadius: 100,
            }}></Image>
        </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 10,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/draw.png')}
            style={{width: 20, height: 20, marginTop: 10}}></Image>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              paddingVertical: 10,
              paddingHorizontal: 10,
              paddingBottom: 30,
              color: '#fff',
              fontFamily: 'Righteous-Regular',
            }}>
            Edit Password{' '}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: '#fff',
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/id-card.png')}
            style={{width: 28, height: 28, marginTop: 4}}></Image>
          <Text
            style={{
              fontSize: 17,
              paddingVertical: 5,
              marginLeft: 30,
              color: '#000',
              textAlign: 'left',
              fontFamily: 'Kanit-SemiBold',
            }}>
            Nama Lengkap
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: '#fff',
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/user.png')}
            style={{width: 26, height: 26, marginTop: 4}}></Image>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Kanit-SemiBold',
              paddingVertical: 5,
              marginLeft: 30,
              color: '#000',
              textAlign: 'left',
            }}>
            Username
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: '#fff',
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/email.png')}
            style={{width: 27, height: 27, marginTop: 4}}></Image>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Kanit-SemiBold',
              paddingVertical: 5,
              marginLeft: 30,
              color: '#000',
              textAlign: 'left',
            }}>
            Email
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: '#fff',
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/telephone.png')}
            style={{width: 24, height: 24, marginTop: 5}}></Image>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Kanit-SemiBold',
              paddingVertical: 5,
              marginLeft: 30,
              color: '#000',
              textAlign: 'left',
            }}>
            No. Telp
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: '#fff',
            width: '90%',
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
          }}>
          <Image
            source={require('../src/image/password.png')}
            style={{width: 26, height: 26, marginTop: 4}}></Image>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Kanit-SemiBold',
              paddingVertical: 5,
              marginLeft: 30,
              color: '#000',
              textAlign: 'left',
            }}>
            Password
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: '#000',
            width: '90%',
            paddingVertical: 8,
            borderRadius: 25,
            shadowOpacity: 80,
            elevation: 15,
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: 125,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontFamily: 'Kanit-Bold',
              paddingVertical: 5,
              color: '#fff',
            }}>
            KELUAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
