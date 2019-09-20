import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigations/MainNavigator";

import DonationScreen from "./screens/DonationsScreen";
export default function App() {
  // return <DonationScreen />;
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
