import React, { Component } from "react";
import {
  View,
  Text
} from "react-native";

import MenuButton from "../../utils/DrawerHelpers";

export default class Home extends Component {
  state = {};

  static navigationOptions = () => ({
    drawerIcon:() => {console.log("test")},
    headerLeft:(navigation) => { console.log(navigation,"headerleft");return MenuButton(navigation)},
})

  
  render() {
    return (
        <View style={{flex:1,backgroundColor:"#49C4A8"}}>
            {/* <AppContainer /> */}
            <Text>My App</Text>
        </View>
    );
    }
}
