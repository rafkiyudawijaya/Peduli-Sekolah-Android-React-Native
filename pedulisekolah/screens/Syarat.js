import React, {useEffect, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navig ation/native';

class Syaratkententuan extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state= {};
  // }

  // componentDidMount() {
  //     setTimeout(() => {
  //         this.props.navigation.dispatch(CommonActions.navigate({name: "Login"}));
  //     }, 2000);
  // }

  render() {
    return (
      <View style={style.container}>
        <ScrollView>
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
                Syarat dan Ketentuan
              </Text>
            </View>
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

          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Righteous-Regular',
              color: 'black',
              marginTop: 20,
              marginBottom: 5,
              textAlign: 'center',
            }}>
            KETENTUAN UMUM
          </Text>
          <Text style={style.name}>
            Syarat dan Ketentuan Penggunaan ini adalah perjanjian antara
            pengguna dan Admin selaku Penyelenggara Sistem Elektronik Aplikasi
            PeduliSekolah untuk menanggulangi kenakalan remaja. Dengan
            menyetujui Syarat dan Ketentuan Penggunaan ini, Pengguna juga
            menyetujui ketentuan penggunaan tambahan pada PeduliSekolah dan
            perubahannya yang merupakan bagian yang tidak terpisahkan dari
            Syarat dan Ketentuan Penggunaan ini. Apabila Pengguna tidak setuju
            terhadap salah satu, sebagian, atau seluruh isi yang tertuang dalam
            Syarat dan Ketentuan Penggunaan ini, Pengguna diperkenankan untuk
            menghapus Pedulisekolah dalam perangkat elektronik dan/atau tidak
            menggunakan Pedulisekolah.
          </Text>
          <View
            style={{
              alignItems: 'center',
              width: '85%',
              backgroundColor: '#E3E819',
              paddingRight: 10,
              paddingLeft: 10,
              paddingBottom: 10,
              paddingTop: 5,
              opacity: 0.4,
              borderRadius: 7,
              marginHorizontal: '7%',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={require('../assets/warning.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: -5,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  marginBottom: 5,
                  textAlign: 'center',
                  fontFamily: 'Righteous-Regular',
                }}>
                DISCLAIMER!
              </Text>
            </View>

            <Text
              style={{
                fontSize: 12,
                color: 'red',
                marginBottom: 20,
                textAlign: 'center',
                marginHorizontal: 10,
                fontFamily: 'Kanit-Regular',
                paddingTop: 10,
              }}>
              Tidak semua laporan akan diproses/ditindak lebih lanjut dengan
              beberapa alasan seperti terindikasi laporan palsu, kurangnya bukti
              yang kuat serta penggunaan kata yang tidak baku, mengandung unsur
              SARA (Suku, Agama, Ras, dan Antar golongan) tertentu, kekerasan,
              serta mengandung unsur pornografi.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Syaratkententuan;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginBottom: 20,
  },
  login: {
    fontSize: 25,
    color: 'black',
    marginTop: 25,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
  },
  penjelasan: {
    fontSize: 12,
    color: 'black',
    marginBottom: 10,
    marginHorizontal: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify',
    fontFamily: 'Kanit-SemiBold',
  },

  name: {
    fontSize: 15,
    textAlign: 'justify',
    color: 'black',
    marginBottom: 10,
    marginHorizontal: 30,
    fontFamily: 'Kanit-Regular',
  },
  copyright: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginHorizontal: 100,
  },
});
