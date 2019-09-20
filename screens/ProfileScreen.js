import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Button } from 'react-native-elements';

const ProfileScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Hello from Profile</Text>
            <Button title="Contact Support"/>
        </View>
    );
}

ProfileScreen.navigationOptions = navData => {
    return { headerTitle: 'Profile'}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ProfileScreen;