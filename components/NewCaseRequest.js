import React from 'react';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,TouchableHighlight} from 'react-native';
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
} from 'native-base';



export default class NewCaseRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Mudassir Ali", text:"Students represented a group of parents of disabled children whose home transport was removed by a local authority. Following a series of", attachment:""},
        {id:2, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Farhan Azam",     text:"Mrs G is an elderly blind woman. She was visited at her home by a sales representative from a bed company. She thought he had come about a prize.", attachment:""},
        {id:4, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Danish Ali",  text:"Mrs E is a carer for her brother who has a number of health problems and disabilities. He had applied for Disability Living Allowance", attachment:""},
        {id:5, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Ali Aslam",  text:"The client wished to set up a charitable trust to assist with the costs of caring for sick and injured hedgehogs. The client was interested in raising", attachment:""},
        {id:1, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Bilal Khan",    text:"The students in the Student Law Office drafted a management agreement for a client who was concerned that there was nothing in place ", attachment:""},
        {id:6, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Sufyan Ashraf", text:"Mr G was the victim of an armed robbery during the course of his employment as a Cash Transit Officer. He suffered from Post Traumatic Stress", attachment:""},
        {id:7, image: "http://icons.iconarchive.com/icons/dapino/people/512/brown-man-icon.png", name:"Sohail Khan",      text:"Mr M was viciously attacked by unknown assailants following a night out with friends. He suffered a fracture of the orbital bone cavity of his right eye", attachment:""},
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            <View style={styles.container}>
              <Image source={{uri:Notification.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>
                    2 hours ago
                  </Text>
                  <TouchableHighlight underlayColor="#CD853F"
                  style={{
                    backgroundColor: 'brown', justifyContent: 'center',
                    alignItems: 'center', width: 200,
                    borderRadius: 30, height: 30,marginBottom: 20
                  }}
                  onPress={() => { }}>
                  <Text>Accept</Text>
                </TouchableHighlight><TouchableHighlight underlayColor="#CD853F"
                  style={{
                    backgroundColor: 'brown', justifyContent: 'center',
                    alignItems: 'center', width: 200,
                    borderRadius: 30, height: 30,marginBottom: 20
                  }}
                  onPress={() => { }}>
                  <Text>Reject</Text>
                </TouchableHighlight>
                </View>
                {attachment}
              </View>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"brown"
  }
});