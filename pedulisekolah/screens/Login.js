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
  TouchableOpacity,
} from 'react-native';

import Svg, {Path, WithLocalSvg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [nisn, setNisn] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusbar}> </StatusBar>
      <View style={styles.top}>
        <View style={styles.box}>
          <Text style={styles.login}>Login</Text>

          <View style={styles.TextInputGroup}>
            <View style={styles.icon}>
              <Icon name="id-card" size={20} color="#bdbdbd" />
            </View>
            <TextInput
              value={nisn}
              style={styles.TextInput}
              placeholder="NISN"
              onChangeText={text => setNisn(text)}></TextInput>
          </View>

          <View style={styles.TextInputGroup}>
            <View style={styles.icon}>
              <Icon name="lock" size={20} color="#bdbdbd" />
            </View>
            <TextInput
              value={password}
              style={styles.TextInput}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}></TextInput>
          </View>

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('TabsNav', {screen: 'Home'});
            }}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>

          <Text
            style={{textAlign: 'center', marginVertical: 20, color: '#FFFFFF'}}>
            Forgot Your Password ?
          </Text>

          <Svg
            height={100}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}>
            <Path
              fill="#4524A3"
              d=" M0,320L7.3,309.3C14.5,299,29,277,44,277.3C58.2,277,73,299,87,266.7C101.8,235,116,149,131,106.7C145.5,64,160,64,175,101.3C189.1,139,
              204,213,218,218.7C232.7,224,247,160,262,133.3C276.4,107,291,117,305,138.7C320,160,335,192,349,208C363.6,224,378,224,393,192C407.3,160,422,96,436,96C450.9,96,
              465,160,480,208C494.5,256,509,288,524,293.3C538.2,299,553,277,567,229.3C581.8,181,596,107,611,80C625.5,53,640,75,655,74.7C669.1,75,684,53,698,42.7C712.7,32,727,
              32,742,64C756.4,96,771,160,785,176C800,192,815,160,829,154.7C843.6,149,858,171,873,160C887.3,149,902,107,916,112C930.9,117,945,171,960,208C974.5,245,989,267,
              1004,261.3C1018.2,256,1033,224,1047,224C1061.8,224,1076,256,1091,272C1105.5,288,1120,288,1135,256C1149.1,224,1164,160,1178,154.7C1192.7,149,1207,203,1222,192C1236.4,
              181,1251,107,1265,90.7C1280,75,1295,117,1309,154.7C1323.6,192,1338,224,1353,240C1367.3,256,1382,256,1396,224C1410.9,192,1425,128,1433,96L1440,64L1440,0L1432.7,
              0C1425.5,0,1411,0,1396,0C1381.8,0,1367,0,1353,0C1338.2,0,1324,0,1309,0C1294.5,0,1280,0,1265,0C1250.9,0,1236,0,1222,0C1207.3,0,1193,0,1178,0C1163.6,0,1149,0,1135,
              0C1120,0,1105,0,1091,0C1076.4,0,1062,0,1047,0C1032.7,0,1018,0,1004,0C989.1,0,975,0,960,0C945.5,0,931,0,916,0C901.8,0,887,0,873,0C858.2,0,844,0,829,0C814.5,0,800,
              0,785,0C770.9,0,756,0,742,0C727.3,0,713,0,698,0C683.6,0,669,0,655,0C640,0,625,0,611,0C596.4,0,582,0,567,0C552.7,0,538,0,524,0C509.1,0,495,0,480,0C465.5,0,451,0,436,
              0C421.8,0,407,0,393,0C378.2,0,364,0,349,0C334.5,0,320,0,305,0C290.9,0,276,0,262,0C247.3,0,233,0,218,0C203.6,0,189,0,175,0C160,0,145,0,131,0C116.4,0,102,0,87,0C72.7,0,58,0,44,0C29.1,0,15,0,7,0L0,0Z"
            />
          </Svg>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            color: '#000000',
            marginTop: 180,
          }}>
          {' '}
          Dont Have Account ?{' '}
          <Text
            style={{textAlign: 'center', marginVertical: 20, color: '#009EFF'}}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statusbar: {
    backgroundColor: '#FFFFFF',
    barStyle: 'dark-content',
  },

  top: {},
  bottom: {},
  box: {
    backgroundColor: '#4524A3',
    height: 450,
  },

  login: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 130,
    marginBottom: 30,
    textAlign: 'center',
  },
  TextInput: {
    backgroundColor: '#FFFFFF',
    // marginHorizontal: 20,
    // borderRadius: 15,
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    paddingLeft: 20,
    paddingVertical: 5,
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 5,
    // marginVertical: 10,
  },

  TextInputGroup: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginVertical: 10,
  },

  TouchableOpacity: {
    backgroundColor: '#009EFF',
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 20,
    elevation: 5,
  },

  button: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
