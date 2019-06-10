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
import LoginClient from './LoginClient';
import * as firebase from 'firebase'

export default class SignUpClient extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      email: null,
      password: null,
      contact:null,
      address:null
    };
  }
  onSubmit(e) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(r => {
        let db = firebase
          .database()
          .ref('/')
          .child(`users/Clients/${r.uid}`);
        db.set(this.state).then(result => {
          console.log('Account Create Successfully');
          this.props.navigation.navigate('LoginClient');
        });
      })
      .catch(error => {
        var errorMessage = error.message;
        console.log(error);
        return error.code;
      });
    // console.log(this.state)
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
            source={require('../images/username.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../images/email.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
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
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../images/contact.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Contact"
            underlineColorAndroid="transparent"
            onChangeText={contact => this.setState({ contact })}
          />
        </View>
         <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../images/home.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Address"
            underlineColorAndroid="transparent"
            onChangeText={address => this.setState({ address })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={this.onSubmit.bind(this)}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="white"
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('LoginClient')}>
          <Text style={{ color: 'blue' }}>Already have account.Click here</Text>
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
  signupButton: {
    backgroundColor: 'brown',
  },
  signUpText: {
    color: 'white',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
