import React, {Fragment, Component, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CheckIcon from './src/image/check.png'; // import icon check

const optionskategori = [
  {image: require('./src/image/user.png'), value: 'Perundungan'},
  {image: require('./src/image/user.png'), value: 'Pelecehan'},
  {image: require('./src/image/user.png'), value: 'Perusakan'},
  {image: require('./src/image/user.png'), value: 'Peraturan'},
  {image: require('./src/image/user.png'), value: 'Tawuran'},
  {image: require('./src/image/user.png'), value: 'Kehilangan'},
  {image: require('./src/image/user.png'), value: 'Dokumen'},
  {image: require('./src/image/user.png'), value: 'Fasilitas'},
  {image: require('./src/image/user.png'), value: 'Pertengkaian'},
  {image: require('./src/image/user.png'), value: 'Kecurangan'},
  {image: require('./src/image/user.png'), value: 'Peretasan'},
  {image: require('./src/image/user.png'), value: 'Perampokan'},
];

const Tab = createBottomTabNavigator();
const buttonTextStyleNext1 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '250%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '120%',
  paddingTop: '10%',
};

const buttonTextStyleNext2 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '500%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '130%',
  paddingTop: '11%',
  width: 130,
  fontSize: 19,
  marginRight: -50,
};

const buttonTextStylePrevious2 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '130%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '130%',
  fontSize: 19,
  paddingTop: '11%',
  marginLeft: -45,
  width: 130,
};

const buttonTextStyleNext3 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '500%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '130%',
  paddingTop: '10%',
  width: 130,
  fontSize: 19,
  marginRight: -35,
};

const buttonTextStylePrevious3 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '130%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '130%',
  fontSize: 19,
  paddingTop: '8%',
  marginLeft: -30,
  width: 130,
};

const progressStepStyles = {
  progressBarColor: '#C4C4C4',
  activeStepIconColor: '#8DAFB4',
  activeStepIconBorderColor: '#8DAFB4',
  disabledStepIconColor: '#C4C4C4',
  labelFontFamily: 'Kanit-Medium',
  labelColor: '#C4C4C4',
  labelFontSize: 14,
  activeLabelColor: 'black',
  activeLabelFontSize: 15,
  completedLabelColor: '#4bb543',
  activeStepNumColor: 'white',
  completedStepNumColor: 'blue',
  disabledStepNumColor: 'black',
};

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
      selectedOption: null,
    };
  }

  setSelectedOption(option) {
    this.setState({selectedOption: option});
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        // alert(JSON.stringify(response.data));
        // console.log('Response2 = ', response.assets[0].uri);
        this.setState({
          filePath: response,
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image source={require('./assets/dummy.png')} style={styles.images} />
      );
    }
  }

  onPressLaunhCamera = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Example App Camera Permission',
          message: 'Example App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        this.launchCamera();
      } else {
        // Permission Denied
        alert('CAMERA Permission Denied');
      }
    }
  };

  onPresslaunchImageLibrary = async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Example App Camera Permission',
          message: 'Example App needs access to your camera',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        this.launchImageLibrary();
      } else {
        // Permission Denied
        alert('CAMERA Permission Denied');
      }
    }
  };

  onSubmit = () => {};

  render() {
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
          colors={['#e0eafc', '#cfdef3']}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginTop: 35}}>
            <Fragment>
              <ProgressSteps {...progressStepStyles}>
                <ProgressStep
                  label="FOTO"
                  nextBtnTextStyle={buttonTextStyleNext1}>
                  <View
                    style={{width: Dimensions.get('screen').width, flex: 1}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontSize: 16,
                        paddingBottom: 7,
                        color: 'black',
                        marginLeft: '5%',
                        fontFamily: 'Kanit-Regular',
                      }}>
                      Ambil foto laporan (opsional) *
                    </Text>
                    <View elevation={12} style={styles.ImageSections}>
                      {/* <View>
                            {this.renderFileData()}
                            <Text  style={{textAlign:'center'}}>Base 64 String</Text>
                          </View> */}
                      <View>
                        {this.renderFileUri()}
                        {/* <Text style={{textAlign:'center'}}>File Uri</Text> */}
                      </View>
                    </View>

                    <View style={styles.btnParentSection}>
                      <TouchableOpacity
                        onPress={this.onPressLaunhCamera}
                        style={styles.btnSection}>
                        <Image
                          source={require('./assets/camera.png')}
                          resizeMode="contain"
                          style={{
                            width: 38,
                            height: 38,
                          }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={this.onPresslaunchImageLibrary}
                        style={styles.btnSection}>
                        <Image
                          source={require('./assets/upload.png')}
                          resizeMode="contain"
                          style={{
                            width: 38,
                            height: 38,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="KATEGORI"
                  nextBtnTextStyle={buttonTextStyleNext2}
                  previousBtnTextStyle={buttonTextStylePrevious2}>
                  <View
                    style={{
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontSize: 16,
                        paddingBottom: 7,
                        color: 'black',
                        marginLeft: '5%',
                        fontFamily: 'Kanit-SemiBold',
                      }}>
                      Pilih kategori laporan
                    </Text>
                    <FlatList
                      horizontal={false}
                      data={optionskategori}
                      numColumns={3}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => this.setSelectedOption(item.value)}
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
                              {this.state.selectedOption === item.value && (
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
                    {this.state.selectedOption && (
                      <Text style={{fontFamily: 'Kanit-Regular'}}>
                        Kategori yang terpilih : {this.state.selectedOption}
                      </Text>
                    )}
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="DETAIL"
                  nextBtnTextStyle={buttonTextStyleNext3}
                  previousBtnTextStyle={buttonTextStylePrevious3}
                  onSubmit={this.onSubmit}>
                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                    }}>
                    Ceritakan laporan *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.placeholder}>
                      <Text style={{fontWeight: 'bold', color: 'black'}}>
                        Detail permasalahan dapat memuat info berupa waktu
                        kejadian, jenis penlanggaran, dsb.
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-Regular',
                      fontFamily: 'Kanit-Regular',
                      color: 'grey',
                    }}>
                    Permasalahan :
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.textinput}
                      placeholder="Contoh: Terjadi pembuangan sampah ke sungai yang sudah dilakukan dalam waktu seminggu oleh oknum yang tidak dikenal. "
                      placeholderTextColor="black"></TextInput>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                    }}>
                    Tulis lokasi secara lengkap *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.placeholder}>
                      <Text style={{fontWeight: 'bold', color: 'black'}}>
                        Lokasi dapat memuat info berupa nama jalan, nama gedung,
                        ciri khusus di sekitar, dll.
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-Regular',
                      color: 'grey',
                    }}>
                    Lokasi :
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.textinput}
                      placeholder="Contoh: Contoh: Gg. Rafki Jl. Raya Lenteng Agung, Jakarta Selatan. "
                      placeholderTextColor="black"></TextInput>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                    }}>
                    Keterangan tambahan *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.placeholder}>
                      <Text style={{fontWeight: 'bold', color: 'black'}}>
                        Keterangan tambahan dapat berupa hal-hal yang perlu
                        petugas kami ketahui, agar tindak lanjut berjalan dengan
                        baik.
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-Regular',
                      color: 'grey',
                    }}>
                    Keterangan tambahan :
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.textinput}
                      placeholder="Masukan keterangan tambahan... "
                      placeholderTextColor="black"></TextInput>
                  </View>
                </ProgressStep>
              </ProgressSteps>
            </Fragment>
          </View>
        </LinearGradient>
      </View>
      // </Tab.Navigator>
      // </NavigationContainer>
    );
  }
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
