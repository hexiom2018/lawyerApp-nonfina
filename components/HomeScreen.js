import React from 'react';
import { Button, View, Text, Image, TouchableHighlight,StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import LoginLawyer from './LoginLawyer'
import LoginClient from './LoginClient'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DEB887',
        }}>
        <TouchableHighlight underlayColor="#CD853F"
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('LoginLawyer')}>
          <Text style={styles.loginText}>Login as Lawyer</Text>
        </TouchableHighlight>
        
        <TouchableHighlight underlayColor="#CD853F"
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('LoginClient')}>
          <Text style={styles.loginText}>Login as Client</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: 'brown',
  },
  loginText: {
    color: 'white',
  },
});