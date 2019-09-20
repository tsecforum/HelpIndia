import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import { Button } from "react-native-elements";
// import Input from "../components/Input";
import { Input } from "react-native-elements";
const LoginScreen = props => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandler = () => {
    props.navigation.replace({
      routeName: 'DashboardScreen',
      params: {
        title: 'Helo from login '
      }
    })
  }
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
        <Button title="Login" containerStyle={styles.input} onPress={loginButtonHandler}/>
      </View>
      <TouchableOpacity onPress={
        () => {
          props.navigation.navigate({routeName: 'SignUpScreen'})
        }

      }>
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
    width: "100%",
  },
  input: {
    marginVertical: 10
  },
  buttonContainer: {
    width: "90%",
    justifyContent: 'center',
    paddingTop: 10,

  },
  button: {
    width: '100%', marginLeft: 0
  },
  signupText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

LoginScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Login'
  }
}

export default LoginScreen;
