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
  TouchableHighlight
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
import EditClientProfile from './EditClientProfile';
import SignUpLawyer from './SignUpLawyer';

export default class Profile extends React.Component {
  // state = {
  //   mapRegion: {
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // };

  // _handleMapRegionChange = mapRegion => {
  //   this.setState({ mapRegion });
  // };
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
              <Text style={styles.name}>Mustafa</Text>
              <Text style={styles.info}>Advocate HighCourt</Text>
              <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
              <Text style={styles.description}>
                Mustafa is an experienced and dedicated trial lawyer who
                focuses his litigation practice on defending employers and
                employees in labor and employment litigation, class action wage
                and hour litigation, commercial litigation and white collar
                criminal defense. He provides advice to employers on various
                wage and hour and employment-related issues, including internal
                and external investigations. He further defends businesses and
                individuals involved in civil, administrative or criminal
                government investigations or proceedings.
              </Text>
              <View style={styles.buttonContainer1}>
            <TouchableHighlight style={[styles.button, styles.buttonMessage]} onPress={() => this.props.navigation.navigate('ChatScreen')}>
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
          </View>
              <View style={styles.card}>
                <Text style={styles.cardTittle}>Areas of Law</Text>
                <Text> - Bankrupcy</Text>
                <Text> - Divorse</Text>
                <Text> - Child Labour</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Education</Text>
                <Text> - Lewis and Clark College Northwestern School of Law, Portland, Oregon, 1993</Text>
                <Text> - Case Western Reserve University, 1977 Master's Degree</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Qualification</Text>
                <Text> - Oregon State Bar, 1993 - Present (Member)</Text>
                <Text> - The Multnomah Bar Association</Text>
                <Text> - Oregon Woman Lawyers</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Languages</Text>
                <Text> - English</Text>
                <Text> - Urdu</Text>
                <Text> - Spanish</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Contact</Text>
                <Text> - Email: abc@gmail.com</Text>
                <Text> - Linkedin: www.linkedin.com/abcOfficial </Text>
                <Text> - Twitter: www.twitter.com/abcOfficial </Text>
                <Text> - Twitter: www.twitter.com/abcOfficial </Text>
                <Text> - Facebook: www.facebook.com/abcOfficial </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTittle}>Languages</Text>
                <Text> - English</Text>
                <Text> - Urdu</Text>
                <Text> - Spanish</Text>
              </View>

              {/* <View style={styles.mapContainer}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View> */}

              {/* <TouchableOpacity style={styles.buttonContainer} 
                  onPress={() => this.props.navigation.navigate('EditClientProfile')}>
                <Text style={styles.buttonText}>Edit profile</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.buttonContainer} 
              onPress={() => {
                alert("case request sent");
                this.props.navigation.navigate('DashboardClient')
                }}>
                <Text style={styles.buttonText}>Case Request</Text>
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
    flexDirection:'row',
    marginTop:20,
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
    paddingBottom:20,
    marginTop: 10,
    width:"100%",
    marginBottom:10
  },
  mapContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
  },
  button: {
    width:60,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonMessage: {
    backgroundColor: "#00BFFF",
  },
  buttonLike: {
    backgroundColor: "#228B22",
  },
  buttonLove: {
    backgroundColor: "#FF1493",
  },
  buttonCall: {
    backgroundColor: "#40E0D0",
  },
  star:{
    width:20,
    height:20
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:10
  },
  icon: {
    width:35,
    height:35,
  }
});
