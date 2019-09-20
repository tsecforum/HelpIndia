import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableOpacityComponent,
  AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";
// import Input from "../components/Input";
import { Input } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { LOGIN, TEST } from "../api";
import axios from "axios";

const LoginScreen = props => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clicked, setclicked] = useState(false)
  // const { navigation } = props;
  // console.log(navigation.getParams('title'));

  storeData = async () => {
    try {
      await AsyncStorage.setItem('username', userName);
      props.navigation.navigate('DashboardNavigator');
    } catch (error) {
      // Error saving data
    }
  };
  if (isLoggedIn) {
   console.log("INSIDE LOGGED IN")
   storeData();
  }
  const loader = 'loading';
  if(!clicked){loading = null}


  // Local Storage code
  

  const loginButtonHandler = () => {

     
    // props.navigation.replace({
    //   routeName: 'DashboardNavigator',
    //   params: {
    //     title: 'Helo from login '
    //   }
    // })
    //   props.navigation.reset([NavigationActions.navigate({ routeName: 'DashboardNavigator' }, {
    // })], 0);
    // props.navigation.navigate('DashboardNavigator');

    // fetch('http://serene-brushlands-85477.herokuapp.com/ngo/')
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));
    // axios
    //   .get("/user?ID=12345")
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    setclicked(true)
    console.log(userName);
    console.log(password);

    var formData = new FormData();

    formData.append("username", userName);
    formData.append("password", password);
    const loginUrl = "http://serene-brushlands-85477.herokuapp.com/login";
    // const finalUrl = loginUrl + "?username=" + "test" + "&password=" + "test@123";
    if (!isLoggedIn) {
      fetch(loginUrl)
        .then(function(response) {
          console.log(response);
          console.log("STTATUS", response.status)
          if(response.status === 200){
            setIsLoggedIn(true);
          }
        })
        .catch(err => {console.log(err)});
    }
  };
  return (
    <View style={styles.screen}>
      <Input
        placeholder="Email"
        onChangeText={value => setuserName(value)}
        containerStyle={styles.input}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={value => setPassword(value)}
        containerStyle={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          containerStyle={styles.input}
          onPress={loginButtonHandler}
          loading={clicked==true ? true: false}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({ routeName: "SignUpScreen" });
        }}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%"
  },
  input: {
    marginVertical: 10
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    paddingTop: 10
  },
  button: {
    width: "100%",
    marginLeft: 0
  },
  signupText: {
    color: "blue",
    textDecorationLine: "underline"
  }
});

LoginScreen.navigationOptions = navData => {
  return {
    headerTitle: "Login"
  };
};

export default LoginScreen;
