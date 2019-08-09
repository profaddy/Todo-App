import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { remove } from "app/src/utils/AsyncStorageHelpers"
import styles from './styles';
class DrawerScreen extends Component {

   navigateAction = (route) => {
     return NavigationActions.navigate({
        routeName: route
    });
}

  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(this.navigateAction(route));
    this.props.navigation.navigate("DrawerClose");
  }

  handleLogout =  async () => {
    console.log("test",remove)
     await remove('userToken');
     this.props.navigation.dispatch(this.navigateAction("Login"));
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('TodoList')}>
                TodoList
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Tabs')}>
                Tabs
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.handleLogout}>
                Logout
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }}


DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
