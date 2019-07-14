import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "../src/components/Screen/LoginScreen";
import SplashScreen from "../src/components/Screen/SplashScreen/SplashScreen";
import TodoList from "../src/components/Screen/TodoList/TodoList"

const AppStack = createStackNavigator({
    TodoList: {
        screen: TodoList,
        navigationOptions:{
        title:"TodoList",
        },

        }

    },{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#EBEBEB",
        }
    }
});

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            title:"Login",
        },

    },
})

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading:SplashScreen,
        App:AppStack,
        Auth:AuthStack
    },
    {
        initialRouteName: 'AuthLoading',
      }
)

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer


