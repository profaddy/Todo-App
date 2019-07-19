import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import { DrawerActions } from 'react-navigation';
import MenuButton from "../../utils/DrawerHelpers"
import styles from './styles';

class DrawerScreen extends Component {

    // static navigationOptions = ({navigation}) => ({

        
    //         drawerIcon:() => {console.log("test")},
    //         headerLeft:() => MenuButton(navigation),
        
    // })

  //   static navigationOptions = ({navigation}) => ({
        
  //     drawerIcon:() => {console.log("test")},
  //     headerLeft:(navigation) => { console.log(navigation,"headerleft");return MenuButton(navigation)},
  
  // })
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //       headerTitle: <LogoTitle />,
    //       headerRight: (
    //         <Button
    //           onPress={navigation.getParam('increaseCount')}
    //           title="+1"
    //           color="#fff"
    //         />
    //       ),
    //     };
    //   };
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.navigate("DrawerClose")
  }

  render () {
      console.log(this.props.navigation,"drawer render")
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
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('TodoList')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
