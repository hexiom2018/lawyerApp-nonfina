import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  ListView
} from "react-native";
import { Picker, Icon } from "native-base";
import ModalDropdown from "react-native-modal-dropdown";
// import DropdownMenu from 'react-native-dropdown-menu';
const DEMO_OPTIONS_1 = [
  "Divorse",
  "Bankrupcy",
  "Child Labour",
  "Children Law",
  "Government Law ",
  "Tax Law"
];
const DEMO_OPTIONS_2 = [
  "5000-10000",
  "10000-15000",
  "15000-20000",
  "more than 20000"
];
const DEMO_OPTIONS_3 = [
  "Karachi",
  "Lahore",
  "Multan",
  "Faisalabad",
  "Quetta",
  "Peshawar"
];
export default class DashboardClient extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      text: "",
      dataSource: ds.cloneWithRows([
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Abdul Hafiz Pirzada, Senior Advocate Supreme Court, is one of the premier lawyers of Pakistan. Pirzada, a lawmaker and legal expert, is one of the founding members..."
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Afrasiab Khattak or is a left-wing politician from the State of Pakistan, currently serving as the senator, representing the Kohat Division of the Khyber-Pakhtunkhwa Province for the Pakistan..."
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Aftab Gul Khan is a former Pakistani cricketer who played in 6 Tests from 1969 to 1971. Gul was an opening batsman who represented a number of first-class sides in Pakistan from 1964-65 .."
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Chaudhry Aitzaz Ahsan is a Pakistani barrister, veteran activist-politician, constitutional theorist and a left-wing statesman who serves as the Leader of the Opposition in the Senate"
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Ali Ahmad Kurd, is a Pakistani lawyer who has served as President of the Supreme Court Bar Association of Pakistan and is prominent in the Lawyers' Movement in that country. "
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Dr Amir Ali Majid is a legal scholar and author born in Gojra, Punjab, Pakistan. He was in his second year at University of Agriculture, Faisalabad when he lost his sight.. "
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Ansar Burney is a leading Pakistani human rights and civil rights activist. He is a graduate of Masters and Law from Karachi University and honorary recipient of a PhD. in Philosophy..."
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Asma Jilani Jahangir is a Pakistani lawyer, an award winning human rights and democracy activist. Her work focuses on prevention of persecution of religious minorities, gender equality, "
        },
        {
          icon:
            "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png",
          description:
            "Ch. Muhammad Barjees Tahir is a prominent national politician, parliamentarian, Governor of Gilgit–Baltistan, and a Federal Minister of Kashmir Affairs and Gilgit Baltistan in the 2013"
        }
      ]),
      selected: "key1",
      dropdown_4_options: null,
      dropdown_4_defaultValue: "loading...",
      dropdown_6_icon_heart: true
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    

    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image
              style={[styles.icon, styles.inputIcon]}
              source={{
                uri:
                  "https://cdn4.vectorstock.com/i/1000x1000/84/08/search-flat-brown-color-icon-vector-6078408.jpg"
              }}
            />
            <TextInput
              style={styles.inputs}
              ref={"txtPassword"}
              placeholder="Search"
              underlineColorAndroid="transparent"
              onChangeText={name_address => this.setState({ name_address })}
            />
          </View>

          <TouchableHighlight style={styles.saveButton}>
            <Image
              style={[styles.icon, styles.iconBtnSearch]}
              source={{
                uri: "https://png.icons8.com/search/androidL/100/ffffff"
              }}
            />
          </TouchableHighlight>
        </View>
      
          
            <View style={styles.dropstyle} >
            <ModalDropdown style={styles.dropdown_1} options={DEMO_OPTIONS_1} 
            textStyle={{fontSize:15}} defaultValue="Area of law" />
            <ModalDropdown dropdownStyle={{fontSize:20}} style={styles.dropdown_1} textStyle={{fontSize:15}} options={DEMO_OPTIONS_2} defaultValue="Price"/>
            <ModalDropdown style={styles.dropdown_1} textStyle={{fontSize:15}} options={DEMO_OPTIONS_3} defaultValue="Location"/>
           
          </View>
         
        <ListView
          style={styles.notificationList}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={notification => {
            return (
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate("ViewLawyerProfile")
                }
              >
                <View style={styles.notificationBox}>
                  <Image
                    style={styles.image}
                    source={{ uri: notification.icon }}
                  />

                  <Text style={styles.description}>
                    {notification.description}
                  </Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB"
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  iconBtnSearch: {
    alignSelf: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center"
  },
  saveButton: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: 70,
    alignSelf: "flex-end",
    backgroundColor: "brown",
    borderRadius: 30
  },
  saveButtonText: {
    color: "white"
  },
  notificationList: {
    marginTop: 50,
    padding: 10
  },
  notificationBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
    paddingRight: 50,
    alignItems: "center"
    // justifyContent: 'center',
  },
  image: {
    width: 45,
    height: 45
  },
  description: {
    fontSize: 15,
    color: "black",
    marginLeft: 10
    // alignSelf:'center'
  },
  dropstyle: {
    marginTop:20,
    // height: 10,
    flexDirection:"row",
    width:'80%',
    // borderColor: "black",
    // flex: 1,
    alignItems: "center",
    justifyContent:"space-around",
    marginLeft:60,marginRight:20,
    fontSize:30
    // backgroundColor:"red"
  },
  dropdown_1: {
    flex: 1,
    fontSize:15,
    // backgroundColor: "red",
  },
});
