import React from "react";
import {
  Button,
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  CheckBox
} from "react-native";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea
} from "native-base";
import LoginLawyer from "./LoginLawyer";
import LoginClient from "./LoginClient";
import * as firebase from "firebase";

export default class EditClientProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      description: "",
      areaoflaw: "",
      education: "",
      qualification: "",
      languages: "",
        Divorse: false,
        Bankrupcy: false,
        Child_Labour: false,
        Government_Law: false,
        Tax_Law: false,
        
      
    };
  }
  updateProfile() {
    let uid = firebase.auth().currentUser.uid;
    profile = {
      username: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      description: "",
      areaoflaw: this.state.areaoflaw.split(","),
      education: "",
      qualification: "",
      languages: this.state.languages.split(","),
      Divorse: false,
        Bankrupcy: false,
        Child_Labour: false,
        Government_Law: false,
        Tax_Law: false,
    };
    firebase
      .database()
      .ref("users/Lawyers")
      .child(uid)
      .update(this.state)
      .then(result => {
        console.log("Profile Updated Successfully", this.state, result);
        this.props.navigation.navigate("Profile");
      })
      .catch(error => {
        console.log(error);
      });
  }
  checkBoxTest1() {
    this.setState({
      Bankrupcy: !this.state.Bankrupcy
    });
    console.log(this.state.Bankrupcy);
  
  }
  checkBoxTest2() {
    this.setState({
      Child_Labour: !this.state.Child_Labour
    });
    console.log(this.state.Child_Labour);
  
  }
  checkBoxTest3() {
    this.setState({
      Government_Law: !this.state.Government_Law
    });
    console.log(this.state.Government_Law);
  
  }
  checkBoxTest4() {
    this.setState({
      Tax_Law: !this.state.Tax_Law
    });
    console.log(this.state.Tax_Law);
  
  }
  checkBoxTest5() {
    this.setState({
      Divorse: !this.state.Divorse
    });
    console.log(this.state.Divorse);
  
  }
  render() {
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.form} enabled>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={{ width: 300, height: 200 }}
              source={require("../images/logo.png")}
            />

            <Text style={styles.labels}>Name: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Mustafa"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            <Text style={styles.labels}>Email: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="Mustafa@gmail.com"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            <Text style={styles.labels}>Password: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="******"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <Text style={styles.labels}>Contact: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="123456789"
                underlineColorAndroid="transparent"
                onChangeText={contact => this.setState({ contact })}
                value={this.state.contact}
              />
            </View>
            <Text style={styles.labels}>Address: </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Tariq Road Karachi"
                underlineColorAndroid="transparent"
                onChangeText={address => this.setState({ address })}
                value={this.state.address}
              />
            </View>
            <Text>Description</Text>
            <View style={styles.card}>
              <Textarea
                placeholder="Mustafa is an experienced and dedicated trial lawyer who
                    focuses his litigation practice on defending employers and
                    employees in "
                value={this.state.description}
                onChangeText={description => this.setState({ description })}
              />
            </View>
            <Text>Areas of Law</Text>
            <View style={styles.card}>
              <CheckBox
              name="Bankrupcy"
              
                value={this.state.Bankrupcy}
                onChange={() => {
                  this.checkBoxTest1();
                }}
              /><Text>Bankrupcy</Text>
              <CheckBox
              name="Child_Labour"
                value={this.state.Child_Labour}
                onChange={() => {
                  this.checkBoxTest2();
                }}
              /><Text>Child_Labour</Text>
              <CheckBox
                value={this.state.Government_Law}
                onChange={() => {
                  this.checkBoxTest3();
                }}
              /><Text>Government_Law</Text>
              <CheckBox
                value={this.state.Tax_Law}
                onChange={() => {
                  this.checkBoxTest4();
                }}
              /><Text>Tax_Law</Text>
              <CheckBox
                value={this.state.Divorse}
                onChange={() => {
                  this.checkBoxTest5();
                }}
              /><Text>Divorse</Text>
              {/* <Textarea
                placeholder="Please use comma separated values (eg.
                  Bankrupcy, Divorse, Child Labour)"
                 value={this.state.areaoflaw}
                 onChangeText={areaoflaw => this.setState({ areaoflaw })}
                 >
              >
              
              </Textarea> */}
            </View>

            <Text>Education</Text>
            <View style={styles.card}>
              <Textarea
                placeholder="- Lewis and Clark College Northwestern School of Law, Portland, Oregon, 1993
                 - Case Western Reserve University, 1977 Master's Degree"
                value={this.state.education}
                onChangeText={education => this.setState({ education })}
              />
            </View>

            <Text>Qualification</Text>
            <View style={styles.card}>
              <Textarea
                placeholder="- Oregon State Bar, 1993 - Present (Member)
                - The Multnomah Bar Association
                - Oregon Woman Lawyers"
                value={this.state.qualification}
                onChangeText={qualification => this.setState({ qualification })}
              />
            </View>

            <Text>Languages</Text>
            <View style={styles.card}>
              <Textarea
                placeholder="Please use comma separated values (eg.
                  English, Urdu, Spanish)"
                value={this.state.languages}
                onChangeText={languages => this.setState({ languages })}
              />
            </View>

            <TouchableHighlight
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={this.updateProfile.bind(this)}
            >
              <Text style={styles.signUpText}>Update Profile</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEB887"
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    marginTop: 10,
    width: 300,
    marginBottom: 10
  },
  labels: {
    marginRight: 120
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 200,
    height: 200,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 200,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  inputs: {
    height: 45,
    marginLeft: 30,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  textareainputs: {
    height: 100,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "brown"
  },
  signUpText: {
    color: "white"
  },
  form: {
    flex: 1,
    justifyContent: "space-between"
  }
});
