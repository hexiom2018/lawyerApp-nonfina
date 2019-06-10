import React from 'react';
import { Button, View, Text, Image, TouchableHighlight } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import HomeScreen from './HomeScreen'


export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('HomeScreen');
    }, 2000);
  }
//   componentDidMount() {
//     setTimeout(SplashScreen.hide,1000);
// }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DEB887',
        }}>
        <Image
          style={{ width: 300, height: 200 }}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}