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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(CommonActions.navigate({name: 'App'}));
    }, 2000);
  }

  render() {
    return (
      <View style={style.container}>
        <Image
          source={require('./src/image/logo1.png')}
          style={{marginTop: 150}}
        />
        <Text style={style.name}>Peduli Sekolah</Text>

        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={style.copyright}>copyright @PeduliSekolah 2023</Text>
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
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
    color: '#ffffff',
    marginTop: -5,
    marginBottom: 150,
    marginHorizontal: 40,
    fontFamily: 'Righteous-Regular',
  },
  copyright: {
    fontSize: 14,
    fontFamily: 'Righteous-Regular',
    color: '#ffffff',
  },
});
