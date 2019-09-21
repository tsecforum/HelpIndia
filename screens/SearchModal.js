import React, {useState} from "react";
import { Overlay, Input } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

const SearchModal = props => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [keyword, setKeyword] = useState('');
    const hideModalHandler = () => {
        setIsModalVisible(false);
        props.navigation.pop();
    }
    const searchButtonHandler = () => {
        props.navigation.replace({routeName: 'SearchResultScreen', params: {
            keyword: keyword
        }});
    }
  return (
    <Overlay
      isVisible={isModalVisible}
      height="auto"
      onBackdropPress={hideModalHandler}
    >
      <Input
        placeholder="Keyword"
        onChangeText={value => setKeyword(value)}
        value = {keyword}
      />
      <Button
        containerStyle={{ marginVertical: 10 }}
        title="Search"
        loading={false}
        onPress={searchButtonHandler}
      />
    </Overlay>
  );
};

export default SearchModal;
