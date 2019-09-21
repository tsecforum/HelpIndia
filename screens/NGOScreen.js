import React, {useState} from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from "react-native";
import axios from "axios";
const NGOCard = props => {
  const { navigation } = props;
  const eventID = navigation.getParam("event_id");
  const [dataLoaded, setDataLoaded] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if(!isDataLoaded){
      const baseURL = "http://serene-brushlands-85477.herokuapp.com/ngo/details/?event_id=";
      const finalURL = baseURL + eventID;

    axios.get(
        finalURL
    ).then(
        response => {
            // console.log(response.data);
            setDataLoaded(response.data);
            setIsDataLoaded(true);
        }
    ).catch(
        err => console.log(err)
    )
  }
  if(!isDataLoaded){
    return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
  }

  const {title, pic_url, description} = dataLoaded
  return (
    <ScrollView>
    {/* <Overlay
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
    </Overlay> */}

    <Image style={styles.image} source={{ uri: pic_url }} />
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    {/* <View style={styles.extraContainer}>
      <View style={styles.orgContainer}>
        <TouchableOpacity onPress={orgButtonHandler}>
        <Text style={styles.org}>Organisation: {org}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.category}>Cause: {category}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <Text style={styles.location}>Contact: {phoneNumber}</Text>
    </View>
    <View style={styles.volunteerBtnContainer}>
      <Button
        containerStyle={{ marginLeft: 0 }}
        title="Join as Volunteer"
        type="outline"
        onPress={joinButtonHandler}
      />
    </View> */}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },image: {
    width: "100%",
    height: 300
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
  description: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginVertical: 10,
    width: "90%",
    flexGrow: 1
  },
});
export default NGOCard;
