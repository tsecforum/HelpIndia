import React from 'react';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DonationScreen from '../screens/DonationsScreen';
import ProfileScreen from '../screens/ProfileScreen';


// const LoginNavigator = createStackNavigator({
//   LoginScreen: LoginScreen,
//   DashboardScreen: DashboardScreen
// });

// const SignUpNavigator = createStackNavigator({
//   SignUpScreen: SignUpScreen,
//   DashboardScreen: DashboardScreen
// });

const DashboardNavigator = createStackNavigator({
  DashboardScreen: {
    screen: DashboardScreen
  }
}, { headerMode: 'screen' })

const tabScreenConfig = {
  Home: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Entypo name="home" size={25} color={tabInfo.tintColor} />
        );
      },
      // tabBarColor: Colors.primaryColor
    }
  },
  Donations: {
    screen: DonationScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome name="money" size={25} color={tabInfo.tintColor} />;
      },
      // tabBarColor: Colors.accentColor
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialIcons name="account-circle" size={25} color={tabInfo.tintColor} />
        );
      },
      // tabBarColor: Colors.primaryColor
    }
  },
};

const MainTabNavigator = createBottomTabNavigator(tabScreenConfig, { headerMode: 'screen' })


const MainNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen,
  MainTabNavigator: MainTabNavigator
})

  export default createAppContainer(MainNavigator);