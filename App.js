import React, {useState} from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
// import MainNavigator from "./navigations/MainNavigator";
import MainTabNavigator from './navigations/DashboardNavigator';
import LoginNavigator from './navigations/LoginNavigator';
import DonationScreen from "./screens/DonationsScreen";
import MainNavigator from './navigations/MainNavigator';

const API = 'serene-brushlands-85477.herokuapp.com/ngo';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <MainNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
