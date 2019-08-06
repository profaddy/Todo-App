import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator,createBottomTabNavigator } from "react-navigation";
import LoginScreen from "./Screens/Common/LoginScreen/LoginScreen";
import SplashScreen from "./Screens/Common/SplashScreen/SplashScreen";
import Home from "../src/Screens/Home/Home"
import TodoList from "../src/Screens/TodoList/TodoList";
import MenuButton from "../src/utils/DrawerHelpers";
import DrawerScreen from "./Screens/Common/DrawerScreen/DrawerScreen";
import Tab1 from "../src/components/Tabs/Tab1"
import Tab2 from "../src/components/Tabs/Tab2"

const Tabs = createBottomTabNavigator({
    Tab1: Tab1,
    Tab2: Tab2,
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const AppStack = createStackNavigator({
        Home: {
            screen: Home
        },
        TodoList: {
            screen: TodoList,
        },
        Tabs:{
            screen:Tabs
        }
    },{
        defaultNavigationOptions: {
            headerLeft: (navigation) => { console.log(navigation, "headerleft"); return MenuButton(navigation) },
            headerStyle: {
                backgroundColor: "##49C4A8",
            },
            headerLayoutPreset: 'center',
        }
    });

const DrawerContainer = createDrawerNavigator({
    Home: {
        screen: AppStack,
    },
    TodoList: {
        screen: TodoList,
    },
}, {
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
    }, {
        initialRouteName: 'AuthLoading',
    }
)

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer


