import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from "react-native";
import DonationsCard from "../components/DonationsCard";
import axios from "axios";
import { withNavigationFocus } from 'react-navigation';
// import { FlatList } from "react-native-gesture-handler";

const DonationScreen = props => {
  const [userName, setUserName] = useState(null);
  const [isUsernameLoaded, setIsUsernameLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) {
        // We have data!!
        setUserName(value);
        setIsUsernameLoaded(true);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  if (!isUsernameLoaded) {
    retrieveData();
  }

  if (isUsernameLoaded && !isDataLoaded) {
    const donationsBaseUrl =
      "http://serene-brushlands-85477.herokuapp.com/ngo/ret_donations/?username=";
    const finalDonationsUrl = donationsBaseUrl + userName;
    axios.get(finalDonationsUrl).then(response => {
      console.log(response.data);
      setDataLoaded(response.data);
      setIsDataLoaded(true);
    });
  }
  if (!isUsernameLoaded || !dataLoaded) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log("DATA", dataLoaded);
  return (
    <View style={styles.screen}>
      <FlatList
        data={dataLoaded}
        key={item => item.id}
        renderItem={itemData => {
            console.log(itemData.event);
          const {
            id,
            event,
            ngo,
            amount
          } = itemData.item;
          return <DonationsCard id={id} event={event} ngo={ngo} amount={amount} />;
        }}
      />
    </View>
  );
};

DonationScreen.navigationOptions = navData => {
  return {
    headerTitle: "Donations"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default withNavigationFocus(DonationScreen);
