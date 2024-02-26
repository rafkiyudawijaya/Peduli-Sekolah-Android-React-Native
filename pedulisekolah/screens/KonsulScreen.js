import React, {Fragment, Component, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
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
  Pressable,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const navigation = createBottomTabNavigator();
const optionsUser = [
  {image: require('./../src/image/user.png'), value: 'Perundungan'},
  {image: require('./../src/image/user.png'), value: 'Pelecehan'},
  {image: require('./../src/image/user.png'), value: 'Perusakan'},
  {image: require('./../src/image/user.png'), value: 'Peraturan'},
  {image: require('./../src/image/user.png'), value: 'Tawuran'},
  {image: require('./../src/image/user.png'), value: 'Kehilangan'},
  {image: require('./../src/image/user.png'), value: 'Dokumen'},
  {image: require('./../src/image/user.png'), value: 'Fasilitas'},
  {image: require('./../src/image/user.png'), value: 'Pertengkaian'},
  {image: require('./../src/image/user.png'), value: 'Kecurangan'},
  {image: require('./../src/image/user.png'), value: 'Peretasan'},
  {image: require('./../src/image/user.png'), value: 'Perampokan'},
];

const Tab = createBottomTabNavigator();

const buttonTextStyleNext1 = {
  color: '#393939',
  backgroundColor: '#8DAFB4',
  width: '250%',
  borderRadius: 10,
  textAlign: 'center',
  color: 'whitesmoke',
  height: '90%',
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
  paddingTop: '6%',
  width: 130,
  fontSize: 19,
  marginRight: -30,
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
  paddingTop: '6%',
  marginLeft: -25,
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

export default function Camera(props) {
  const [selectedOptionKonsultan, setSelectedOptionKonsultan] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Siang (12.00 WIB - 14.00 WIB)',
      value: 'Siang',
    },
    {
      id: '2',
      label: 'Sore (15.00 WIB - 18.00 WIB)',
      value: 'Sore',
    },
    {
      id: '3',
      label: 'Malam (19.00 WIB - 21.00 WIB)',
      value: 'Malam',
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const optionsKonsultan = [
    {image: require('./../src/image/user.png'), value: 'option1'},
    {image: require('./../src/image/user.png'), value: 'option2'},
    {image: require('./../src/image/user.png'), value: 'option3'},
    {image: require('./../src/image/user.png'), value: 'option4'},
  ];

  function onPressRadioButton(radioButtonsArray) {
    const selectedRadioButton = radioButtonsArray.find(
      e => e.selected === true,
    );
    setSelectedOption(selectedRadioButton ? selectedRadioButton.value : null),
      console.log('Selected option:', selectedOption);
  }

  function generateRandomString(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  function handleSubmit() {
    const id = generateRandomString(10);
    console.log(id);
  }

  return (
    <View style={{flex: 1, marginBottom: 55}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <LinearGradient
        colors={['whitesmoke', 'whitesmoke']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginTop: 40}}>
          <Fragment>
            <ProgressSteps {...progressStepStyles}>
              <ProgressStep
                label="FOTO"
                nextBtnTextStyle={buttonTextStyleNext1}>
                <View style={styles.container}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 30,
                      fontSize: 15,
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginRight: 120,
                      }}>
                      Tulis garis besar masalah *
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
                      style={styles.textinput}
                      placeholder="Tuliskan garis besar masalah yang Anda Hadapi... contoh : Saya mendapatkan bullying oleh teman teman saya disekolah"></TextInput>
                  </View>

                  <Text
                    style={{
                      marginLeft: 30,
                      fontSize: 15,
                      marginBottom: 5,
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                    permasalahan :
                  </Text>
                  <RadioGroup
                    containerStyle={{
                      justifuContent: 'flex-start',
                      alignItems: 'flex-start',
                      backgroundColor: '#7B75C0',
                      elevation: 2,
                      paddingVertical: 10,
                      marginHorizontal: 20,
                      borderRadius: 10,
                    }}
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                  />
                </View>
              </ProgressStep>
              <ProgressStep
                label="DETAIL"
                nextBtnTextStyle={buttonTextStyleNext2}
                previousBtnTextStyle={buttonTextStylePrevious2}>
                <View>
                  <View style={styles.containerKonsultan}>
                    {optionsKonsultan.map((option, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedOptionKonsultan(option.value)}
                        style={[
                          styles.optionContainer,
                          {
                            borderColor:
                              option.value === selectedOptionKonsultan
                                ? '#2F80ED'
                                : '#EAEAEA',
                          },
                        ]}>
                        <Image
                          source={option.image}
                          style={styles.imageKonsultan}
                        />
                        <Text style={styles.textKonsultan}>{option.value}</Text>
                        {option.value === selectedOptionKonsultan && (
                          <Image
                            source={require('./../src/image/check.png')}
                            style={styles.checkImage}
                          />
                        )}
                      </TouchableOpacity>
                    ))}
                    {selectedOption && (
                      <Text style={styles.selectedOptionKonsultan}>
                        Radio button yang terpilih: {selectedOptionKonsultan}
                      </Text>
                    )}
                  </View>
                </View>
              </ProgressStep>
              <ProgressStep
                label="SUMMARY"
                nextBtnTextStyle={buttonTextStyleNext3}
                previousBtnTextStyle={buttonTextStylePrevious3}
                onSubmit={() => {
                  handleSubmit();
                }}>
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
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imageKonsultan: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textKonsultan: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  checkImage: {
    width: 20,
    height: 20,
  },
  selectedOptionKonsultan: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#2F80ED',
  },
});
