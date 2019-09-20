import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import NGOCard from "../components/NGOCard";
import NGO from "../api";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
// const IMAGE_URL = ""

// renderItemHan = (itemData) => {
//     const { fields } = itemData.item;
//     return(

//       //   console.log("ITEM DATAAAA", fields.location);

// }
const DashboardScreen = props => {
  const { navigation } = props;
  const [dataLoaded, setDataLoaded] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const userName = null;
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        userName = value;
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };
  if(isLoaded){
    retrieveData();
  }
  if (!isLoaded) {
    axios
      .get("http://serene-brushlands-85477.herokuapp.com/ngo/")
      .then(response => {
        // console.log(response.data);
        //   console.log(JSON.stringify(response.data));
        // console.log(response.data)
        setDataLoaded(response.data);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }

  if(!isLoaded){
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  //   fetch("http://serene-brushlands-85477.herokuapp.com/ngo/")
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch((err) => console.log(err));

  // //   DUMMY DATA
  //     const location = "Karnataka";
  //     const photo =
  //       "https://cdn1.msw.usc.edu/content/77931a572e564428b64396052585b77d/social-worker-skills-hero.jpg";
  //     const title = "Provide a nutritional care package to HIV";
  //     const org = "Isha Education";
  //     const category = "Children";
  //     const description =
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias iste quidem nam aspernatur nesciunt optio illo libero earum cumque, cum ad assumenda esse laudantium dignissimos id natus blanditiis. Voluptate explicabo voluptatum accusamus aut perferendis alias harum in, repellendus cupiditate. Hic aperiam explicabo tempore neque in voluptatem nam minima odit. Sit ipsum excepturi harum, incidunt ipsam quasi quod sint quidem.";

  const NGOButtonHandler = (title, description, location, category, actual_url, org) => {
    // console.log("HELLOO", title);
    navigation.navigate({
      routeName: "NGODescriptionScreen",
      params: {
        title: title,
        description: description,
        location: location,
        photo: actual_url,
        org: org,
        category: category
      }
    });
  };

  const selectItemHandler = (title, description) => {
    navigation.navigate({
      routeName: "DashboardNavigation",
      params: {
        title: title,
        description: description
      }
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={dataLoaded}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => {
            const {actual_url, category, ngo, title, location, description, photo_main } = itemData.item;
            // console.log(ngo.title);
            return (
          <NGOCard location={location} category={category} photo={actual_url} org={ngo.title}  description={description}  title={title} onSelect={() => NGOButtonHandler(title, description, location, category, actual_url, ngo.title)}>
            <Button
              title="Donate"
              onPress={() => NGOButtonHandler(title, description, location, category, actual_url, ngo.title)}
              containerStyle={{ width: "100%" }}
            />
          </NGOCard>
        )}}
      />
    </View>
  );
};

DashboardScreen.navigationOptions = navData => {
  return {
    headerTitle: "Home"
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start"
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DashboardScreen;
