import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DonationsCard from '../components/DonationsCard';
const DonationScreen = props => {
    return (
        <View style={styles.screen}>
            <DonationsCard />
        </View>
    );
}

DonationScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Donations'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10
    }
})
export default DonationScreen;