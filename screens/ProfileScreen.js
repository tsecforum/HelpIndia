import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import Card from "../components/Card";
import { Linking } from 'react-native';
const ProfileScreen = props => {
  //   const [dataLoaded, setDataLoaded] = useState({
  //     first_name: "Raj Bohra",
  //     username: "rajbohra10",
  //     "phone number": "+91 8286821375",
  //     "email id": "rajbohra10@gmail.com"
  //   });
  //   const [isLoaded, setisLoaded] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userNameLoaded, setUserNameLoaded] = useState(false);

  const contactButtonHandler = () => {
      Linking.openURL('tel:+123456789');

  }
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) {
        // We have data!!
        console.log("USERRNAME", value);
        setUserName(value);
        setUserNameLoaded(true);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  if (!userNameLoaded) {
    retrieveData();
  }

  if (!isLoaded && userName) {
    //   console.log("INSIDE LOADED", userName);
    const finalUrl =
      "http://serene-brushlands-85477.herokuapp.com/profile/?username=" +
      userName;
    axios
      .get(finalUrl)
      .then(response => {
        // console.log(response.data);
        //   console.log(JSON.stringify(response.data));
        setDataLoaded(response.data);
        setIsLoaded(true);
        //   console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  if (!isLoaded) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  logoutButtonHandler = () => {
    props.navigation.navigate("LoginNavigator");
  };

  const { first_name, username } = dataLoaded;
  console.log(dataLoaded);
  return (
    <View style={styles.screen}>
      <Text style={styles.detailsText}>My Details</Text>
      <Text>{first_name}</Text>
      <Text>{username}</Text>
      <Text>{dataLoaded["phone number"]}</Text>
      <Text>{dataLoaded["email id"]}</Text>
      <Button containerStyle={styles.button} onPress={contactButtonHandler} title="Contact Support" />
      <Button
        containerStyle={styles.button}
        title="Logout"
        onPress={logoutButtonHandler}
      />
    </View>
  );
};

ProfileScreen.navigationOptions = navData => {
  return { headerTitle: "Profile" };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "80%",
    marginVertical: 10
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  detailsText: {
    fontSize: 18,
    textAlign: "left"
  }
});
export default ProfileScreen;
