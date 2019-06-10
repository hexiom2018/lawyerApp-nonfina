import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList, TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Button,
  Icon,
} from 'native-base';
import * as firebase from 'firebase'

export default class CurrentCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases:[
        {name1:"Mudasir Ali", case1:"The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place "},
        {name2:"Ali Aslam", case2:"Mr M was viciously attacked by unknown assailants following a night out with friends. He suffered a fracture of the orbital bone cavity of his right eye "},
        {name3:"Bilal Khan", case3:"Mr G was the victim of an armed robbery during the course of his employment as a Cash Transit Officer. He suffered from Post Traumatic Stress"},
        {name4:"Hamza Imran", case4:"The client wished to set up a charitable trust to assist with the costs of caring for sick and injured hedgehogs. The client was interested in raising"},
        {name5:"Mudasir Ali", case5:"The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place "},
        {name6:"Mudasir Ali", case6:"The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place "},
        {name7:"Mudasir Ali", case7:"The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place "},
      ],
      data: [
        { id: 1, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Ali Aslam", comment: "Mr M was viciously attacked by unknown assailants following a night out with friends. He suffered a fracture of the orbital bone cavity of his right eye" },
        { id: 2, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Bilal Khan", comment: "Mr G was the victim of an armed robbery during the course of his employment as a Cash Transit Officer. He suffered from Post Traumatic Stress" },
        { id: 3, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Mudassir Ali", comment: "The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place " },
        { id: 4, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Hamza Imran", comment: "The client wished to set up a charitable trust to assist with the costs of caring for sick and injured hedgehogs. The client was interested in raising" },
        { id: 5, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Farhan Azam", comment: "Mrs E is a carer for her brother who has a number of health problems and disabilities. He had applied for Disability Living Allowance" },
        { id: 6, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Bilal Farooq", comment: "Mrs G is an elderly blind woman. She was visited at her home by a sales representative from a bed company. She thought he had come about a prize" },
        { id: 7, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name: "Danish Ali", comment: "Students represented a group of parents of disabled children whose home transport was removed by a local authority. Following a series of " },
      ]
    }
  }
  componentDidMount() {
    let uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("users/Lawyers")
      .child(uid)
      .on("value", snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);
        // this.setState({ items });
        console.log(data,"****************");
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
        languages: data.languages
        })
      });
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator} />
          )
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => { }}>
                <Image style={styles.image} source={{ uri: Notification.image }} />
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>

                  <Text style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>
                    9:58 am
                  </Text>

                </View>
                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
                <TouchableHighlight underlayColor="#CD853F"
                  style={{
                    backgroundColor: 'brown', justifyContent: 'center',
                    alignItems: 'center', width: 200,
                    borderRadius: 30, height: 30
                  }}
                  onPress={() => { }}>
                  <Text>View more</Text>
                </TouchableHighlight>
              </View>
            </View>
          );
        }} />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
