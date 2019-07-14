import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import LoginScreen from "../src/components/Screen/LoginScreen";
import SplashScreen from "../src/components/Screen/SplashScreen/SplashScreen";
import TodoList from "../src/components/Screen/TodoList/TodoList";

const AppStack = createStackNavigator({
    TodoList: {
        screen: TodoList,
        navigationOptions: {
            title: "TodoList",
        },
    },

    },{
        headerLayoutPreset: 'center',
    },{
        naviagtionOtions: () => ({ headerLeft: "test" })
    },{

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#EBEBEB",
            },
        }
});

const DrawerContainer = createDrawerNavigator(
    {
        Home: AppStack
    },{
        initialRouteName: 'Home',
        drawerPosition: "right",
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


