import React, {Component, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  Pressable,
} from 'react-native';

export default function radiobutton() {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectedData = [
    {value: 'cricket', imageLink: require('./src/image/accept.png')},
    {value: 'soccer', imageLink: require('./src/image/accept.png')},
    {value: 'basketball', imageLink: require('./src/image/accept.png')},
    {value: 'kasti', imageLink: require('./src/image/accept.png')},
  ];
  return (
    <View style={styles.Container}>
      <Text style={styles.topHeading}>Pick A Sports</Text>
      <View style={styles.radioImageRow}>
        <ScrollView flexWrap="wrap">
          {selectedData.map(item => {
            return (
              <Pressable
                key={item.value}
                onPress={() => setSelectedItem(item.value)}
                style={styles.imageMain}>
                {selectedItem === item.value ? (
                  <View style={styles.imageFontMain}>
                    <Image
                      source={require('./src/image/check.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 19,
                        paddingRight: 10,
                        paddingTop: 10,
                        marginTop: 10,
                      }}></Image>
                  </View>
                ) : null}
                <Image source={item.imageLink} style={styles.imageStyle} />
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      {selectedItem && (
        <View style={styles.SelectedItemMain}>
          <Text style={styles.selectedText}>
            You Have Selected : {selectedItem}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'red',
  },
  topHeading: {
    fontSize: 20,
  },
  imageMain: {
    marginVertical: 10,
    backgroundColor: 'blue',
    width: 80,
    marginLeft: 90,
  },
  radioImageRow: {
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'green',
    width: 100,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 20,
  },
  imageFontMain: {
    position: 'absolute',
    width: 20,
    height: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
    right: 1,
    borderRadius: 50,
  },
  SelectedItemMain: {
    marginVertical: 30,
    backgroundColor: 'black',
  },
  selectedText: {
    fontSize: 18,
    color: 'gray',
  },
});
