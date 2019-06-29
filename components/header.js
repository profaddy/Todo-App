import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

const Header = () => {
    return (
            <View>
                Todo List
            </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
 
});

export default Header