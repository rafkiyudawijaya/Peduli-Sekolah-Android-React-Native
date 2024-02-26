import React, {Fragment, Component, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CheckIcon from './../src/image/check.png'; // import icon check
import {useNavigation} from '@react-navigation/native';
const optionskategori = [
  {
    image: require('./../src/image/perundungan.png'),
    value: 'Perundungan',
  },
  {image: require('./../src/image/pelecehan.png'), value: 'Pelecehan'},
  {image: require('./../src/image/perusakan.png'), value: 'Perusakan'},
  {image: require('./../src/image/peraturan.png'), value: 'Peraturan'},
  {image: require('./../src/image/tawuran.png'), value: 'Tawuran'},
  {
    image: require('./../src/image/kehilangan.png'),
    value: 'Kehilangan',
  },
  {image: require('./../src/image/documents.png'), value: 'Dokumen'},
  {image: require('./../src/image/fasilitas.png'), value: 'Fasilitas'},
  {
    image: require('./../src/image/pertikaian.png'),
    value: 'Pertikaian',
  },
  {image: require('./../src/image/merokok.png'), value: 'Merokok'},
  {image: require('./../src/image/kekerasan.png'), value: 'Kekerasan'},
  {image: require('./../src/image/pencurian.png'), value: 'Pencurian'},
];

export default function Camera(props) {
  const navigation = useNavigation();
  const [filepath, setFilepath] = useState({data: '', uri: ''});
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    // <NavigationContainer>

    // <Tab.Navigator>
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <LinearGradient
        colors={['whitesmoke', 'whitesmoke']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginTop: 5}}>
          <Fragment>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  paddingTop: 6,
                  paddingBottom: 6,
                  paddingRight: 20,
                  paddingLeft: 20,
                  borderRadius: 20,
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
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 16,
                    paddingBottom: 7,
                    color: 'black',
                    marginLeft: '5%',
                    fontFamily: 'Kanit-SemiBold',
                    marginTop: 10,
                  }}>
                  Pilih kategori laporan *
                </Text>
              </View>
              <FlatList
                horizontal={false}
                data={optionskategori}
                numColumns={3}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedOption(item.value);
                    }}
                    style={{
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingTop: 10,
                        width: 90,
                        borderRadius: 8,
                        backgroundColor: '#91D8E4',
                        opacity: 0.4,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Image
                          source={item.image}
                          style={{width: 60, height: 60}}
                        />
                        {selectedOption === item.value && (
                          <Image
                            source={CheckIcon}
                            style={{
                              width: 17,
                              height: 17,
                              position: 'absolute',
                              marginLeft: 55,
                              marginTop: -5,
                            }}
                          />
                        )}
                      </View>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Kanit-Regular',
                        }}>
                        {item.value}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              {selectedOption && (
                <Text style={{fontFamily: 'Kanit-Regular'}}>
                  Kategori yang terpilih : {selectedOption}
                </Text>
              )}
            </View>
            <View
              style={{
                marginTop: '-33%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#5B8FB9',
                  width: '95%',
                  paddingVertical: 8,
                  borderRadius: 10,
                  shadowOpacity: 80,
                  elevation: 15,
                  textAlign: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  height: 50,
                }}
                onPress={() => {
                  navigation.navigate('LaporinScreen', {
                    selected: selectedOption,
                  });
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Kanit-Bold',

                    color: '#91D8E4',
                    textAlign: 'center',
                  }}>
                  BUAT LAPORAN
                </Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        </View>
      </LinearGradient>
    </View>
    // </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    borderRadius: 25,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  images: {
    height: 396,
    flex: 1,
    borderWidth: 1,
    // marginHorizontal: 3,
    width: Dimensions.get('screen').width,
  },
  btnParentSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSection: {
    width: 55,
    height: 55,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 100,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  placeholder: {
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#91D8E4',
    borderRadius: 10,
    marginBottom: 20,
    opacity: 0.4,
  },
  textinput: {
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 20,
    opacity: 0.5,
    color: 'black',
  },
});
