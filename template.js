import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NGOCard = props => {
  return <View style={styles.screen}>Hello NGO CARD</View>;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems :'center'
    }
});
export default NGOCard;
