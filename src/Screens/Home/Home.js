import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

import MenuButton from "../../utils/DrawerHelpers";

export default class Home extends Component {
  state = {};

  static navigationOptions = () => ({
    drawerIcon: () => { console.log("test") },
  })


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#49C4A8" }}>
        <Text>My App</Text>
      </View>
    );
  }
}
