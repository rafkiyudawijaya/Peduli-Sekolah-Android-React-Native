import React, {Fragment, Component, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  Modal,
  Alert,
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
  const [isError, setIsError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [Koran, setKoran] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Kritik',
      value: 'Kritik',
      borderColor: 'black',
    },
    {
      id: '2',
      label: 'Saran',
      value: 'Saran',
      borderColor: 'black',
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    const selectedRadioButton = radioButtonsArray.find(
      e => e.selected === true,
    );
    setSelectedOption(selectedRadioButton ? selectedRadioButton.value : null);
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
    const formData = {
      radioButton: selectedOption,
    };
    console.log(formData);
    const id = generateRandomString(10);
    console.log(id);
  }

  return (
    // <NavigationContainer>

    // <Tab.Navigator>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <LinearGradient
        colors={['whitesmoke', 'whitesmoke']}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Fragment>
            <View style={styles.container1}>
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
                    Kotak Saran
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
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 30,
                  fontSize: 15,
                  marginBottom: 5,
                  marginTop: 20,
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
                  style={styles.textinput}
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
                  style={styles.placeholder}
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
                  style={styles.textinput}
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
                  backgroundColor: '#91D8E4',
                  elevation: 2,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  paddingRight: 5,
                  paddingVertical: 5,
                  marginBottom: 30,
                  paddingBottom: 10,
                  paddingTop: 10,
                  justifyContent: 'center',
                  opacity: 0.4,
                }}
                radioButtons={Koran}
                onPress={onPressRadioButton}
              />
              <View
                style={{
                  marginHorizontal: 5,
                  justifyContent: 'center',
                  alignContent: 'center',
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
                    handleSubmit();
                    setIsError(true);
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      fontFamily: 'Kanit-Bold',

                      color: '#91D8E4',
                      textAlign: 'center',
                    }}>
                    BUAT MASUKAN
                  </Text>
                </TouchableOpacity>
              </View>
              <Modal
                isVisible={false}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 250,
                    height: 250,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <Icon name="warning-outline" size={80} color="#900"></Icon>
                  <Text
                    style={{
                      color: '#3c466a',
                      fontWeight: 'bold',
                      fontSize: 28,
                      marginTop: 30,
                    }}>
                    Warning!
                  </Text>
                  <Text style={{color: '#3c466a', fontSize: 18, marginTop: 10}}>
                    An Error Occured While {'\n'}creating an error report
                  </Text>

                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
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
    backgroundColor: '#8fcbbc',
    borderRadius: 10,
    marginBottom: 20,
    opacity: 0.5,
    color: 'black',
  },
});
