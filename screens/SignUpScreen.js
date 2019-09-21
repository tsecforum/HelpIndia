import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, AsyncStorage} from 'react-native';
import {Input, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';
const SignUpScreen = props => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);
    const [dataSent, setDataSent] = useState(false);
    const signUpButtonHandler = () => {
        setIsSignUpClicked(true);
        
    }

    storeData = async () => {
        try {
          await AsyncStorage.setItem('username', userName);
          props.navigation.navigate('DashboardNavigator');
        } catch (error) {
          // Error saving data
          console.log(error);
        }
      };

    if(isSignUpClicked){
        let baseUrl = "http://serene-brushlands-85477.herokuapp.com/register?name=" + name + "&email=" + email + "&username=" + userName + "&contact_number=" + phoneNumber + "&password=" + password + "&password2=" + confirmPassword;
        console.log(baseUrl);
        axios.get(baseUrl).then(response => {
            console.log(response)
            
            storeData();
            setDataSent(true);
        }).catch(err => console.log(err));
    }

    if(isSignUpClicked && dataSent){
        props.navigation.navigate('DashboardNavigator');
    }
    return (
        <ScrollView >
        <View style={styles.screen}>
            <Input containerStyle={styles.input} value={name} placeholder="Name" onChangeText={value => setName(value)}/>
            <Input keyboardType="number-pad" value={phoneNumber} containerStyle={styles.input}  placeholder="Mobile Number" onChangeText={value => setPhoneNumber(value)}/>
            <Input containerStyle={styles.input} value={email} onChangeText={(value => setEmail(value))} placeholder="Email"/>
            <Input containerStyle={styles.input} value={userName} onChangeText={value => setUserName(value)} placeholder="Username" />
            <Input containerStyle={styles.input} value={password} onChangeText={value => setPassword(value)} placeholder="Password" secureTextEntry/>
            <Input containerStyle={styles.input} value={confirmPassword} placeholder="Confirm Password" onChangeText={value => setConfirmPassword(value)} secureTextEntry/>
            <Button title="Sign Up" containerStyle={{width: "90%", marginLeft:0}} onPress={signUpButtonHandler} loading={isSignUpClicked}/>
        </View>
        </ScrollView>
    );
}

SignUpScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Sign Up',
    
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    input: {
        marginVertical: 10
    }
})


export default SignUpScreen;