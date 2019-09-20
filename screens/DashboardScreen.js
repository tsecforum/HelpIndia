import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DashboardScreen = props => {

    const { navigation } = props; 
    const title = navigation.getParam('title');
    return (
        <View style={styles.screen}><Text>{title}</Text></View>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DashboardScreen;