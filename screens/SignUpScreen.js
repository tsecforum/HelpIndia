import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Input, Button } from 'react-native-elements';
const SignUpScreen = props => {
    
    const signUpButtonHandler = () => {
        props.navigation.replace({
            routeName: 'DashboardScreen',
            params: {
                title: 'Hello from sign up'
            }
        })
    }
    return (
        <ScrollView >
        <View style={styles.screen}>
            <Input containerStyle={styles.input} placeholder="Name"/>
            <Input containerStyle={styles.input} placeholder="Mobile Number"/>
            <Input containerStyle={styles.input} placeholder="Email"/>
            <Input containerStyle={styles.input} placeholder="Username" />
            <Input containerStyle={styles.input} placeholder="Password"/>
            <Input containerStyle={styles.input} placeholder="Confirm Password" />
            <Button title="Sign Up" containerStyle={{width: "90%", marginLeft:0}} onPress={signUpButtonHandler}/>
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