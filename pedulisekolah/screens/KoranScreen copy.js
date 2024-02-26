import React, {Fragment, Component, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
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
  ImageBackground,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const buttonTextStyleNext1 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: 200,
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: 40,
  marginTop: -150,
  paddingVertical: 6,
  textAlign: 'center',
};

const buttonTextStyleNext2 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '500%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: 40,
  paddingVertical: 5,
  width: 130,
  fontSize: 19,
  marginRight: -30,
  marginTop: -100,
};

const buttonTextStylePrevious2 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '130%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: 40,
  fontSize: 19,
  marginLeft: -25,
  width: 130,
  marginTop: -100,
  paddingVertical: 5,
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
  marginRight: -60,
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
  marginLeft: -55,
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
export default function Camera({navigation}) {
  const [filepath, setFilepath] = useState({data: '', uri: ''});
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const [Koran, setKoran] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Kritik',
      value: 'Option 1',
    },
    {
      id: '2',
      label: 'Saran',
      value: 'Option 2',
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setKoran(radioButtonsArray);
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

  function renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image
          source={require('./../assets/dummy.png')}
          style={styles.images}
        />
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
        <View style={{marginTop: 35}}>
          <Fragment>
            <ProgressSteps {...progressStepStyles}>
              <ProgressStep
                label="DETAIL"
                nextBtnTextStyle={buttonTextStyleNext1}>
                <View style={styles.container1}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Kanit-SemiBold',
                        color: 'grey',
                        marginRight: 190,
                      }}>
                      Masukan untuk *
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#ffffff',
                      }}>
                      Next
                    </Text>
                  </View>

                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.placeholder}
                      placeholder="Kepada siapa masukan ini ditujukan..."
                      placeholderTextColor="black"></TextInput>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                      marginRight: 190,
                    }}>
                    Tulis masukan *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.textinput}
                      placeholder="Detail Masukan dapat memuat info berupa kejadian atau bukti."
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
                    Keterangan tambahan *{' '}
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={1}
                      style={styles.placeholder}
                      placeholder="Keterangan tambahan dapat berupa hal-hal yang perlu petugas kami ketahui, agar tindak lanjut  berjalan dengan baik."
                      placeholderTextColor="black"></TextInput>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      marginHorizontal: 10,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                    }}>
                    Tentukan kategori masukan*
                  </Text>
                  <RadioGroup
                    containerStyle={{
                      flexDirection: 'row',
                      backgroundColor: '#7B75C0',
                      elevation: 2,
                      marginHorizontal: 20,
                      borderRadius: 10,
                      paddingRight: 5,
                      paddingVertical: 5,
                      marginBottom: 30,
                      paddingBottom: 10,
                      paddingTop: 10,
                      justifyContent: 'center',
                    }}
                    radioButtons={Koran}
                    onPress={onPressRadioButton}
                  />
                </View>
              </ProgressStep>
              <ProgressStep
                label="SUMMARY"
                nextBtnTextStyle={buttonTextStyleNext2}
                previousBtnTextStyle={buttonTextStylePrevious2}>
                <View style={styles.container1}>
                  <Text
                    style={{
                      marginHorizontal: 30,
                      marginBottom: 5,
                      fontSize: 15,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                      marginRight: 190,
                    }}>
                    Masukan untuk *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.placeholder}>
                      <Text style={{fontWeight: 'bold'}}>Guru Matematika</Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                      marginRight: 190,
                    }}>
                    Masukan *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.textinput}>
                      <Text style={{fontWeight: 'bold'}}>
                        Saran saya, guru perlu beradaptasi dengan teknologi yang
                        dapat mendukung kegiatan belajar-mengajar, sehingga
                        penyampaian materi lebih segar dan optimal.
                      </Text>
                    </View>
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
                      <Text style={{fontWeight: 'bold'}}>
                        Guru kurang mengikuti perkembangan teknologi yang
                        seharusnya berguna dalam proses belajar mengajar.
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      fontFamily: 'Kanit-SemiBold',
                      color: 'grey',
                      marginRight: 190,
                    }}>
                    Kategori masukan *
                  </Text>
                  <View style={{marginHorizontal: 10}}>
                    <View style={styles.textinput}>
                      <Text style={{fontWeight: 'bold'}}>Saran</Text>
                    </View>
                  </View>
                </View>
              </ProgressStep>
              <ProgressStep
                label="INFO"
                nextBtnTextStyle={buttonTextStyleNext3}
                previousBtnTextStyle={buttonTextStylePrevious3}
                onSubmit={this.onSubmit}>
                <View
                  style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'brokenwhite',
                  }}>
                  <View
                    style={{
                      paddingTop: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 28,
                    }}>
                    <Text
                      style={{
                        color: '#0A2647',
                        fontFamily: 'Kanit-Bold',
                        fontSize: 20,
                      }}>
                      Pembullyan Siswa
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Kanit-Regular',
                        fontSize: 13,
                      }}>
                      (Perundungan)
                    </Text>
                  </View>

                  <View elevation={12} style={styles.ImageSections}>
                    <Image
                      source={require('./../assets/dummy.png')}
                      style={{
                        width: 220,
                        height: 280,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('./../assets/location.png')}
                      style={{
                        width: 19,
                        height: 19,
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Kanit-Regular',
                        fontSize: 12,
                      }}>
                      Masjid Hijau
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('./../assets/datetime.png')}
                      style={{
                        width: 18,
                        height: 18,
                        marginRight: 3,
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Kanit-Regular',
                        fontSize: 12,
                      }}>
                      20 Oktober 2004, 20.00 WIB
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      width: '80%',
                      marginTop: '6%',
                      backgroundColor: '#5B8FB9',
                      paddingRight: 10,
                      paddingLeft: 10,
                      paddingBottom: 10,
                      paddingTop: 5,
                      opacity: 0.4,
                      borderRadius: 7,
                    }}>
                    <Text
                      style={{
                        color: '#0A2647',
                        fontFamily: 'Kanit-SemiBold',
                        fontSize: 20,
                      }}>
                      Detail Laporan
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Kanit-Regular',
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      Terjadi kehilangan laptop saat sholat ashar berjamaah
                      dengan dugaan sementara ditukar oleh orang dari luar 24
                    </Text>
                  </View>
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

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    height: '100%',
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
    backgroundColor: '#7B75C0',
    borderRadius: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
  ImageSections: {
    elevation: 10,
    marginBottom: 10,
    marginTop: 20,
  },
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
