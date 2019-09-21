import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import NGOCard from "../components/NGOCard";
import NGO from "../api";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";


const SearchResultScreen = props => {
  const { navigation } = props;
  const keyword = navigation.getParam("keyword");
  const baseUrl = "https://serene-brushlands-85477.herokuapp.com/ngo/search/?keywords=";

  const [isLoaded, setIsLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const [userName, setUserName] = useState(null);

  console.log("USERNAME FROM SEARCH RESULTS", userName);
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      console.log("BVALUE FROM SIGN UOP", value);
      if (value !== null) {
        // We have data!!
        console.log("BVALUE FROM SIGN UOP", value);
        setUserName(value);
        setUserLoaded(true);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  if (isLoaded && !userLoaded) {
    retrieveData();
  }
  if (!isLoaded) {
    const finalUrl =
      "https://serene-brushlands-85477.herokuapp.com/ngo/search/?keywords=" +
      keyword;
    axios
      .get(finalUrl)
      .then(response => {
        console.log(response.data);
        setIsLoaded(true);
        setDataLoaded(response.data);
      })
      .catch(error => console.log(error));
  }
  if (!isLoaded) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const NGOButtonHandler = (
    title,
    description,
    location,
    category,
    actual_url,
    org,
    id,
    phoneNumber
  ) => {
    // console.log("HELLOO", title);
    navigation.navigate({
      routeName: "NGODescriptionScreen",
      params: {
        id: id,
        title: title,
        description: description,
        location: location,
        photo: actual_url,
        org: org,
        category: category,
        username: userName,
        phoneNumber: phoneNumber
      }
    });
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={dataLoaded}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => {
          const {
            actual_url,
            category,
            ngo,
            title,
            location,
            description,
            photo_main,
            id
          } = itemData.item;
          // console.log(ngo.title);
          return (
            <NGOCard
              location={location}
              category={category}
              photo={actual_url}
              org={ngo.title}
              description={description}
              id={id}
              title={title}
              onSelect={() =>
                NGOButtonHandler(
                  title,
                  description,
                  location,
                  category,
                  actual_url,
                  ngo.title,
                  id,
                  ngo.phone_number
                )
              }
            >
              <Button
                title="Donate"
                onPress={() =>
                  NGOButtonHandler(
                    title,
                    description,
                    location,
                    category,
                    actual_url,
                    ngo.title,
                    id,
                    ngo.phone_number
                  )
                }
                containerStyle={{ width: "100%" }}
              />
            </NGOCard>
          );
        }}
      />
    </View>
  );
};

SearchResultScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Search results'
    }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(211,211,211, 0.3)"
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default SearchResultScreen;
