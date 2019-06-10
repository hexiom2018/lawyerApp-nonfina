import React from 'react';
import { Button, View, Text, Image, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Icon from '@expo/vector-icons/Ionicons'

import { ThemeProvider } from 'react-native-elements';
import SignUpClient from './components/SignUpClient'
import DashboardClient from './components/DashboardClient'
import SignUpLawyer from './components/SignUpLawyer'
import DashboardLawyer from './components/DashboardLawyer'
import Splash from './components/Splash'
import HomeScreen from './components/HomeScreen'
import LoginClient from './components/LoginClient'
import LoginLawyer from './components/LoginLawyer'
import NewCaseRequest from './components/NewCaseRequest'
import CurrentCases from './components/CurrentCases'
import Profile from './components/Profile'
import EditClientProfile from './components/EditClientProfile'
import ViewLawyerProfile from './components/ViewLawyerProfile'
import ChatScreen from './components/ChatScreen'

import * as firebase from 'firebase'



const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: () => ({
        header: null,
      }),
    },
    LoginClient: {
      screen: LoginClient,
      navigationOptions: () => ({
        title: 'LoginClient',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    LoginLawyer: {
      screen: LoginLawyer,
      navigationOptions: () => ({
        title: 'LoginLawyer',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    SignUpClient: {
      screen: SignUpClient,
      navigationOptions: () => ({
        title: 'SignUpClient',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    SignUpLawyer: {
      screen: SignUpLawyer,
      navigationOptions: () => ({
        title: 'SignUpLawyer',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    ViewLawyerProfile: {
      screen: ViewLawyerProfile,
      navigationOptions: () => ({
        title: 'Lawyer Profile',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      })
    },
    ChatScreen: {
      screen: ChatScreen,
      navigationOptions: () => ({
        title: 'Chat Lawyer',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      })
    },
    DashboardClient: {
      screen: DashboardClient,
      navigationOptions: () => ({
        title: 'DashboardClient',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    EditClientProfile: {
      screen: EditClientProfile,
      navigationOptions: () => ({
        title: 'Edit Profile',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    DashboardLawyer: {
      screen: createBottomTabNavigator({
      CurrentCases: {
        screen: CurrentCases,
        navigationOptions: () => ({
          tabBarLabel:'CurrentCases',
          tabBarIcon:({tintColor})=>(
            <Icon name='md-briefcase' color={tintColor} size={24}/>
          )
        })
      },
      NewCaseRequest: {
        screen: NewCaseRequest,
        navigationOptions: () => ({
          tabBarLabel:'NewCaseRequest',
          tabBarIcon:({tintColor})=>(
            <Icon name='ios-briefcase' color={tintColor} size={24}/>
          )
        })
      },
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
          tabBarLabel:'Profile',
          tabBarIcon:({tintColor})=>(
            <Icon name='md-man' color={tintColor} size={24}/>
          )
        })
      },
      
      
    },{
      tabBarOptions:{
        activeTintColour:'dark brown',
        inactiveTintColor:'grey'
      }
    }
    ),
      navigationOptions: () => ({
        title: 'DashboardLawyer',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
      }),
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home',
        headerStyle: { backgroundColor: 'brown' },
        headerTintColor: '#fff',
        headerLeft: null,
      }),
    },
    
  },
  {
    initialRouteName: 'Splash',
  },
);

var config = {
  apiKey: "AIzaSyDNycJkuQESPFPErnxF2-BrcQvk2pffIAQ",
  authDomain: "sample01-af774.firebaseapp.com",
  databaseURL: "https://sample01-af774.firebaseio.com",
  projectId: "sample01-af774",
  storageBucket: "sample01-af774.appspot.com",
  messagingSenderId: "189232521973"
  };
    firebase.initializeApp(config);
    
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
    <ThemeProvider><AppContainer /></ThemeProvider>
    )
  }
}