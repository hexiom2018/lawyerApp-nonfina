import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  StyleSheet,KeyboardAvoidingView
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

import SignUpLawyer from './SignUpLawyer';
import DashboardLawyer from './DashboardLawyer';
import * as firebase from 'firebase'

export default class LoginLawyer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  onLogin(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(r => {
        let db = firebase
          .database()
          .ref('/')
          .child(`users/Lawyers/${r.uid}`);
        db.on('value', user => {
          // console.log('Account Create Successfully', user.val());
          this.props.navigation.navigate('DashboardLawyer');
        });
      }).catch(error => {
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
      });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.form} enabled>

      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 200 }}
          source={require('../images/logo.png')}
        />
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../images/email.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder={'Email'}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../images/password.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder={'Password'}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <TouchableHighlight
          underlayColor="#CD853F"
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onLogin.bind(this)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="white"
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('SignUpLawyer')}>
          <Text style={{ color: 'blue' }}>Register</Text>
        </TouchableHighlight>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEB887',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
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
  form: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
