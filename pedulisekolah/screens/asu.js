import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const garisbesar = () => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Siang (12.00 WIB - 14.00 WIB)',
      value: 'Option 1',
    },
    {
      id: '2',
      label: 'Sore (15.00 WIB - 18.00 WIB)',
      value: 'Option 2',
    },
    {
      id: '3',
      label: 'Malam (19.00 WIB - 21.00 WIB',
      value: 'Option 3',
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={style.container}>
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
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#ffffff'}}>
          Next
        </Text>
      </View>

      <View style={{marginHorizontal: 10}}>
        <TextInput
          multiline={true}
          numberOfLines={1}
          style={style.textinput}
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
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#337bff',
  },
  placeholder: {
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#5951BA',
    borderRadius: 10,
    marginBottom: 20,
  },
  textinput: {
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#5951BA',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default garisbesar;
