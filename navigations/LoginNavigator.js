import React from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import { Ionicons, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';



import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
const LoginNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen
})

export default LoginNavigator;