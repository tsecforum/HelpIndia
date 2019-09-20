import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NGOCard from "../components/NGOCard";
import NGO from "../api";
import axios from 'axios';
const DashboardScreen = props => {
  const { navigation } = props;
//   fetch("http://serene-brushlands-85477.herokuapp.com/ngo/")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch((err) => console.log(err));
//     axios.get('http://serene-brushlands-85477.herokuapp.com/ngo/').then(
//         response => console.log(response.data)
//     ).category(err => console.log(err));

// //   DUMMY DATA
//     const location = "Karnataka";
//     const photo =
//       "https://cdn1.msw.usc.edu/content/77931a572e564428b64396052585b77d/social-worker-skills-hero.jpg";
//     const title = "Provide a nutritional care package to HIV";
//     const org = "Isha Education";
//     const category = "Children";
//     const description =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias iste quidem nam aspernatur nesciunt optio illo libero earum cumque, cum ad assumenda esse laudantium dignissimos id natus blanditiis. Voluptate explicabo voluptatum accusamus aut perferendis alias harum in, repellendus cupiditate. Hic aperiam explicabo tempore neque in voluptatem nam minima odit. Sit ipsum excepturi harum, incidunt ipsam quasi quod sint quidem.";



  const NGOButtonHandler = () => {
    navigation.navigate({
      routeName: "NGODescriptionScreen",
      params: {
        title: title,
        description: description,
        location: location,
        photo: photo,
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
      <NGOCard onSelect={NGOButtonHandler}>
        <Button
          title="Donate"
          onPress={NGOButtonHandler}
          containerStyle={{ width: "100%" }}
        />
      </NGOCard>
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
  }
});

export default DashboardScreen;
