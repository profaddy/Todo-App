import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

import styles from "./styles";

export default class Home extends Component {
  state = {};

  static navigationOptions = () => ({
  })


  render() {
    return (
      <View style={styles.container} >
        <Text>My App</Text>
      </View>
    );
  }
}

