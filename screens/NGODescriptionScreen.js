import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import { Overlay, Input } from "react-native-elements";

const NGODescriptionScreen = props => {
  const { navigation } = props;
  const title = navigation.getParam("title");
  const category = navigation.getParam("category");
  const org = navigation.getParam("org");
  const description = navigation.getParam("description");
  const photo = navigation.getParam("photo");
  const location = navigation.getParam("location");
  const id = navigation.getParam("id");
  const username = navigation.getParam("username");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [amount, setAmount] = useState();
  const [donateIsClicked, setDonateIsClicked] = useState(false);

  const donationBaseURL =
    "http://serene-brushlands-85477.herokuapp.com/ngo/donating?username=";
  console.log("Hello", title);
  console.log("USERNAME", username);
  console.log("EVENT ID", id);
  const finalUrl =
    "http://serene-brushlands-85477.herokuapp.com/ngo/volunteering?username=" +
    username +
    "&event_id=" +
    id;

  if (donateIsClicked) {
    const finalDonationURL =
      donationBaseURL + username + "&event_id=" + id + "&amount=" + amount;
    console.log(finalDonationURL);
    axios
      .get(finalDonationURL)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          setDonateIsClicked(false);
          setModalIsVisible(false);
        }
      })
      .catch(err => console.log(err));
  }
  joinButtonHandler = () => {
    axios
      .get(finalUrl)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  const donateButtonHandler = () => {
    setModalIsVisible(true);
  };

  const modalInputHandler = () => {
    console.log("AMOUNT", amount);
    setDonateIsClicked(true);
  };
  return (
    <ScrollView>
      <Overlay
        isVisible={modalIsVisible}
        height="auto"
        onBackdropPress={() => setModalIsVisible(false)}
      >
        <Input
          keyboardType="number-pad"
          placeholder="Amount (INR)"
          onChangeText={value => setAmount(value)}
          value={amount}
        />
        <Button
          containerStyle={{ marginVertical: 10 }}
          title="Donate"
          loading={donateIsClicked}
          onPress={modalInputHandler}
        />
      </Overlay>

      <Image style={styles.image} source={{ uri: photo }} />
      <View style={styles.actions}>
        <Button
          containerStyle={{ width: "100%", marginLeft: 0 }}
          title="DONATE NOW"
          onPress={donateButtonHandler}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.extraContainer}>
        <View style={styles.orgContainer}>
          <Text style={styles.org}>Organisation: {org}</Text>
        </View>
        <Text style={styles.category}>Cause: {category}</Text>
        <Text style={styles.location}>Location: {location}</Text>
      </View>
      <View style={styles.volunteerBtnContainer}>
        <Button
          containerStyle={{ marginLeft: 0 }}
          title="Join as Volunteer"
          type="outline"
          onPress={joinButtonHandler}
        />
      </View>
    </ScrollView>
  );
};

NGODescriptionScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("title")
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  actions: {
    marginBottom: 10,
    alignItems: "center"
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginVertical: 10,
    width: "90%",
    flexGrow: 1
  },
  title: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 10
  },
  details: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  extraContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    marginLeft: 30
  },
  org: {
    flex: 1,
    fontSize: 16,
    color: "#888",
    textAlign: "left"
  },
  category: {
    fontSize: 16,
    color: "#888"
  },
  location: {
    fontSize: 16,
    color: "#888"
  },
  orgContainer: {
    flex: 1,
    textAlign: "left"
  },
  volunteerBtnContainer: {
    alignItems: "center",
    marginVertical: 10
  }
});
export default NGODescriptionScreen;
