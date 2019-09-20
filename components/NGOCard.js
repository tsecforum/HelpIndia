import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import {Button} from 'react-native-elements'

import Card from "./Card";
const NGOCard = props => {
  // Title, Descs, NGO, category, photo, location
  const location = "Karnataka";
  const photo =
    "https://cdn1.msw.usc.edu/content/77931a572e564428b64396052585b77d/social-worker-skills-hero.jpg";
  const title = "Provide a nutritional care package to HIV";
  const org = "Isha Education";
  const category = "Children";
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: photo }} />
            </View>
            <View style={styles.details}>
              <View style={styles.categoryContainer}>
                <View style={styles.greyTextContainer}>
                <Text style={styles.greyText}>{category}</Text>
                </View>
                <View>
                <Text style={styles.greyText}>{location}</Text>
                </View>
              </View>
              <Text numberOfLines={1} style={styles.title}>{title}</Text>
              <Text style={styles.price}>{org}</Text>
            </View>
             
            <View style={styles.actions}>{props.children}</View>
           
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 400,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden"
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    alignItems: "center",
    height: "17%",
    padding: 10,

  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    marginHorizontal: 2
  },
  greyText: {
      fontSize: 16,
      color: "#888"
  },
  price: {
    fontSize: 16,
    color: "#888"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20
  },
  categoryContainer: {
      width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: 'space-between',

  },
  greyTextContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
  }
});
export default NGOCard;
