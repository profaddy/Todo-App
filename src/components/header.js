import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

const Header = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.textStyle}>Todo List</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  textStyle: {
    color: 'red',
  }
});

export default Header