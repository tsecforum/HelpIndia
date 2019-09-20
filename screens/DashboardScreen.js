import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NGOCard from "../components/NGOCard";
const DashboardScreen = props => {
  const { navigation } = props;

  const NGOButtonHandler = () => {
    console.log("Hello from touchable");
  };
  const title = navigation.getParam("title");
  console.log(title);
  return (
    <View style={styles.screen}>
      <NGOCard>
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
