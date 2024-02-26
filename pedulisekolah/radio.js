import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import CheckIcon from './src/image/check.png'; // import icon check

const options = [
  {image: require('./src/image/user.png'), value: 'option1'},
  {image: require('./src/image/user.png'), value: 'option2'},
  {image: require('./src/image/user.png'), value: 'option3'},
  {image: require('./src/image/user.png'), value: 'option4'},
  {image: require('./src/image/user.png'), value: 'option5'},
  {image: require('./src/image/user.png'), value: 'option6'},
  {image: require('./src/image/user.png'), value: 'option7'},
  {image: require('./src/image/user.png'), value: 'option8'},
  {image: require('./src/image/user.png'), value: 'option9'},
  {image: require('./src/image/user.png'), value: 'option10'},
  {image: require('./src/image/user.png'), value: 'option11'},
  {image: require('./src/image/user.png'), value: 'option12'},
];

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View
      style={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
      }}>
      <FlatList
        data={options}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedOption(item.value)}
            style={{
              alignItems: 'center',
              padding: 10,
            }}>
            <View
              style={{
                marginHorizontal: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.image} style={{width: 70, height: 70}} />
                {selectedOption === item.value && (
                  <Image
                    source={CheckIcon}
                    style={{width: 20, height: 20, marginRight: -20}}
                  />
                )}
              </View>

              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {selectedOption && (
        <Text>Radio button yang terpilih: {selectedOption}</Text>
      )}
    </View>
  );
}

export default RadioButton;
