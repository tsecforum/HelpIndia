import React from "react";
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons
} from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";

import NGODescriptionScreen from "../screens/NGODescriptionScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DonationScreen from "../screens/DonationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NGOScreen from '../screens/NGOScreen';
import SearchModal from '../screens/SearchModal';
import SearchResultScreen from '../screens/SearchResultScreen';

import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  DashboardScreen: DashboardScreen,
  NGODescriptionScreen: NGODescriptionScreen,
  NGOScreen: NGOScreen,
  SearchModal: {screen:SearchModal, mode: 'modal'},
  SearchResultScreen: SearchResultScreen
});

const DonationStack = createStackNavigator({
  DonationScreen: DonationScreen
});

const ProfileStack = createStackNavigator({
  ProfileScreen: ProfileScreen
});

const tabScreenConfig = {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Entypo name="home" size={25} color={tabInfo.tintColor} />;
      }
      // tabBarColor: Colors.primaryColor
    }
  },
  Donations: {
    screen: DonationStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome name="money" size={25} color={tabInfo.tintColor} />;
      }
      // tabBarColor: Colors.accentColor
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <MaterialIcons
            name="account-circle"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      }
      // tabBarColor: Colors.primaryColor
    }
  }
};

const MainTabNavigator = createBottomTabNavigator(tabScreenConfig, {
  headerMode: "screen"
});
export default MainTabNavigator;
