import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Notif = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <LinearGradient
        colors={['#4524A3', '#0467D5']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#000A2D',
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 20,
            paddingLeft: 20,
            borderRadius: 20,
            top: 40,
            position: 'absolute',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Righteous-Regular',
            }}>
            Lapor
          </Text>
        </View>
        <View style={{position: 'absolute', top: '9.5%'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Righteous-Regular',
            }}>
            Peduli Sekolah
          </Text>
        </View>
        <Image
          source={require('./assets/success-unscreen.gif')}
          resizeMode="contain"
          style={{
            width: 300,
            height: 300,
            top: '3%',
          }}
        />
        <View style={{marginTop: '-1%'}}>
          <Text
            style={{
              fontSize: 32,
              color: '#000A2D',
              paddingTop: 10,
              fontFamily: 'Kanit-SemiBold',
              color: '#4bb543',
              textAlign: 'center',
            }}>
            LAPORAN DITERIMA
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{fontSize: 19, paddingTop: 1, fontFamily: 'Kanit-Regular'}}>
            TOKEN :{' '}
          </Text>
          <TextInput
            style={{
              backgroundColor: '#D9D9D9',
              paddingLeft: 25,
              borderRadius: 15,
              elevation: 2,
              width: 250,
              color: 'black',
              height: 34,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#F9F9F9',
              paddingHorizontal: 20,
              marginLeft: -60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              elevation: 2,
            }}>
            <Image
              source={require('./assets/copy.png')}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image
            source={require('./assets/warning.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: '#FEB600',
              paddingTop: 3,
              paddingLeft: 3,
              fontFamily: 'Kanit-Regular',
            }}>
            DISCLAIMER
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Kanit-Regular',
              fontSize: 13.5,
              paddingLeft: '5%',
              paddingRight: '5%',
            }}>
            Tidak semua laporan akan diterima dengan beberapa alasan. Silahkan
            baca dokumentasi Penggunaan Aplikasi dan melalukan pengecekan status
            secara berkala dengan token. Token wajib disimpan!
            {'\n'}-Peduli Sekolah-{' '}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
