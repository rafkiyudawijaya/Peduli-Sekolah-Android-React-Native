import React, {useEffect, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/native';

class Splash extends Component {
  render() {
    return (
      <View style={style.container}>
        <Image
          source={require('./../src/image/logo2.png')}
          style={{marginTop: 200, marginLeft: 10}}
        />
        <Text
          style={{
            fontSize: 28,
            color: '#ffffff',
            marginBottom: 20,
            textAlign: 'center',
            fontFamily: 'Righteous-Regular',
          }}>
          Versi Aplikasi :
        </Text>

        <Text style={style.name}>1.0.0</Text>

        <View style={{flexDirection: 'row', marginTop: -50, marginRight: 30}}>
          <Image
            source={require('../src/image/instagram.png')}
            style={{width: 20, height: 20, marginLeft: 30, marginRight: 10}}
          />
          <Text style={style.copyright}>@pedulisekolah</Text>
        </View>

        <View style={{flexDirection: 'row', marginRight: 30}}>
          <Image
            source={require('../src/image/gmail.png')}
            style={{width: 20, height: 20, marginLeft: 20, marginRight: 10}}
          />
          <Text style={style.copyright}>pedulisekolah@gmail.com</Text>
        </View>
      </View>
    );
  }
}

export default Splash;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#337bff',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
    fontFamily: 'Righteous-Regular',
    color: '#ffffff',
    marginTop: -10,
    marginBottom: 180,
    textAlign: 'center',
  },
  copyright: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Kanit-Bold',
  },
});
