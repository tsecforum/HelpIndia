import React from 'react';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';

// const LoginNavigator = createStackNavigator({
//   LoginScreen: LoginScreen,
//   DashboardScreen: DashboardScreen
// });

// const SignUpNavigator = createStackNavigator({
//   SignUpScreen: SignUpScreen,
//   DashboardScreen: DashboardScreen
// });


const MainNavigator = createStackNavigator({
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen,
    DashboardScreen: DashboardScreen
})

DashboardScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Home'
  }
}



export default createAppContainer(MainNavigator);