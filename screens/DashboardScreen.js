import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button } from 'react-native-elements';
import NGOCard from '../components/NGOCard';
const DashboardScreen = props => {

    const { navigation } = props; 
    const title = navigation.getParam('title');
    console.log(title)
    return (
        <View style={styles.screen}><NGOCard ><Button
        title="Donate"
        onPress={() => {
          selectItemHandler(itemData.item.id, itemData.item.title);
        }}
        containerStyle={{width: "100%"}}
      /></NGOCard></View>
    );

}

DashboardScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Sign Up',
    
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',

    }
});

export default DashboardScreen;