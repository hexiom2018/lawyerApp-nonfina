import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  scrollEnabled,
  MapView,
  TouchableHighlight,
  CheckBox
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import EditClientProfile from "./EditClientProfile";
import SignUpLawyer from "./SignUpLawyer";
import * as firebase from "firebase";

export default class Profile extends React.Component {
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
      Tax_Law: false
    };
  }
  componentDidMount() {
    let uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users/Lawyers")
      .child(uid)
      .on("value", snapshot => {
        let data = snapshot.val();
        // let items = Object.values(data);
        // this.setState({ items });
        console.log(data, "****************");
        this.setState({
          username: data.username,
          email: data.email,
          password: data.password,
          contact: data.contact,
          address: data.address,
          description: data.description,
          areaoflaw: data.areaoflaw,
          education: data.education,
          qualification: data.qualification,
          languages: data.languages,
          Divorse: data.Divorse,
          Bankrupcy: data.Bankrupcy,
          Child_Labour: data.Child_Labour,
          Government_Law: data.Government_Law,
          Tax_Law: data.Tax_Law
        });
      });
  }
  deleteUser() {
    let uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users/Lawyers")
      .child(uid)
      .remove();
    this.props.navigation.navigate("SignUpLawyer");
    // .then(result => {
    //   console.log("Profile deleted Successfully");
    //   this.props.navigation.navigate("SignUpLawyer");
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
      >
        <View style={styles.container}>
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={require("../images/profileLogo.png")}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>
                {!this.state.username ? "Mustafa" : this.state.username}
              </Text>
              <Text style={styles.info}>Advocate HighCourt</Text>
              <View style={styles.starContainer}>
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png"
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png"
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png"
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png"
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png"
                  }}
                />
              </View>
              <Text style={styles.description}>
                {!this.state.description
                  ? `Mustafa is an experienced and dedicated trial lawyer who focuses his litigation practice on defending employers and employees in labor and employment litigation, class action wage and hour litigation, commercial litigation and white collar criminal defense. He provides advice to employers on various wage and hour and employment-related issues, including internal and external investigations. He further defends businesses and individuals involved in civil, administrative or criminal government investigations or proceedings.`
                  : this.state.description}
              </Text>
              {/* <View style={styles.buttonContainer1}>
            <TouchableHighlight style={[styles.button, styles.buttonMessage]} onPress={() => alert('message')}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/message/win8/100/ffffff'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLike]} onPress={() => alert('like')}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/win10/100/ffffff'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonLove]} onPress={() => alert('love')}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/heart/androidL/100/ffffff'}}/>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.button, styles.buttonCall]} onPress={() => alert('phone')}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/phone/win8/100/ffffff'}}/>
            </TouchableHighlight>
          </View> */}
              <View style={styles.card}>
                <Text style={styles.cardTittle}>Areas of Law</Text>
                <Text>
                  {!this.state.areaoflaw
                    ? `- Bankrupcy - Divorse  - Child Labour`
                    : this.state.areaoflaw}
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Education</Text>
                <Text>
                  {!this.state.education
                    ? `- Lewis and Clark College Northwestern School of Law,Portland, Oregon, 1993 \n- Lewis and Clark College Northwestern School of Law, Portland, Oregon, 1993 \n- Case Western Reserve University, 1977 Master's Degree`
                    : this.state.education}
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Qualification</Text>

                <Text>
                  {" "}
                  {!this.state.qualification
                    ? `- Oregon State Bar, 1993 - Present (Member) \n- The Multnomah Bar Association \n- Oregon Woman Lawyers`
                    : this.state.qualification}
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Languages</Text>
                <Text>
                  {!this.state.languages
                    ? `- English - Urdu - Spanish`
                    : this.state.languages}
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Contact</Text>
                <Text>
                  {" "}
                  {!this.state.contact
                    ? `- Email: abc@gmail.com \n- Linkedin: www.linkedin.com/abcOfficial \n- Twitter: www.twitter.com/abcOfficial \n- Facebook: www.facebook.com/abcOfficial `
                    : `${
                        this.state.contact
                      } - Email: abc@gmail.com \n- Linkedin: www.linkedin.com/abcOfficial \n- Twitter: www.twitter.com/abcOfficial \n- Facebook: www.facebook.com/abcOfficial `}
                </Text>
              </View>

              {/* <View style={styles.mapContainer}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View> */}

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  this.props.navigation.navigate("EditClientProfile")
                }
              >
                <Text style={styles.buttonText}>Edit profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                  // alert("profile deleted");
                  // this.props.navigation.navigate("SignUpLawyer");
                  this.deleteUser();
                }}
              >
                <Text style={styles.buttonText}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#DEB887" },
  header: {
    backgroundColor: "#A0522D",
    height: 100
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 40
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 30
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "brown",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "brown",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    textAlign: "center"
  },
  buttonText: {
    color: "white"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "brown"
  },
  buttonContainer1: {
    flexDirection: "row",
    marginTop: 20
  },
  cardTittle: {
    color: "#808080",
    fontSize: 22,
    marginBottom: 5
  },
  card: {
    // backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    marginTop: 10,
    width: "100%",
    marginBottom: 10
  },
  mapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  button: {
    width: 60,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 30,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4
  },
  buttonMessage: {
    backgroundColor: "#00BFFF"
  },
  buttonLike: {
    backgroundColor: "#228B22"
  },
  buttonLove: {
    backgroundColor: "#FF1493"
  },
  buttonCall: {
    backgroundColor: "#40E0D0"
  },
  star: {
    width: 20,
    height: 20
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 10
  },
  icon: {
    width: 35,
    height: 35
  }
});
