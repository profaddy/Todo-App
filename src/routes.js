import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import LoginScreen from "../src/Screens/LoginScreen";
import SplashScreen from "../src/Screens/SplashScreen/SplashScreen";
import Home from "../src/Screens/Home/Home"
import TodoList from "../src/Screens/TodoList/TodoList";
import DrawerScreen from "../src/Screens/DrawerScreen/DrawerScreen";

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        TodoList: {
            screen: TodoList,
        },
    },{
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: "##49C4A8",
                },
                headerLayoutPreset: 'center',
            }
});

const DrawerContainer = createDrawerNavigator({
    Home:{
        screen: AppStack,
    },
    TodoList: {
        screen: TodoList,
    },
},{
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        drawerPosition: "left",
        drawerWidth: 200
    }
)

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Login",
        },
    },
})

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: SplashScreen,
        App: DrawerContainer,
        Auth: AuthStack
    },{
        initialRouteName: 'AuthLoading',
    }
)

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer


