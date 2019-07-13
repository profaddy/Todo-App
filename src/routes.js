import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../src/components/Screen/LoginScreen";
import SplashScreen from "../src/components/Screen/SplashScreen/SplashScreen";
import TodoList from "../src/components/Screen/TodoList/TodoList"

const AppNavigator = createStackNavigator({
    Splash:{
        screen:SplashScreen,
    },
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            title:"Login",
        },
    },
    TodoList: {
        screen: TodoList,
        navigationOptions:{
            title:"TodoList"
        }
    },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer


