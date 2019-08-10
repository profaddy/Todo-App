import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import LoginScreen from "app/src/Screens/Common/LoginScreen/LoginScreen";
import SplashScreen from "app/src/Screens/Common/SplashScreen/SplashScreen";
import Home from "app/src/Screens/Home/Home"
import TodoList from "app/src/Screens/TodoList/TodoList";
import MenuButton from "app/src/utils/DrawerHelpers";
import DrawerScreen from "app/src/Screens/Common/DrawerScreen/DrawerScreen";
import Tab1 from "app/src/components/Tabs/Tab1";
import Tab2 from "app/src/components/Tabs/Tab2";
import ImageRenderer from "app/src/utils/ImageRenderer";

const Tabs = createBottomTabNavigator({
    Tab1: Tab1,
    Tab2: Tab2,
}, {
    defaultNavigationOptions:({navigation}) =>({

        tabBarIcon:() => {
            const { routeName } = navigation.state;
            switch(routeName){
                case "Tab1":
                        return <ImageRenderer iconName={"TabOne"}/>
                case "Tab2":
                        return <ImageRenderer iconName={"TabTwo"}/>
                default:
                        return <ImageRenderer iconName={"TabOne"}/>
            }
        }
    })
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
    Tabs: {
        screen: Tabs
    }
}, {
        defaultNavigationOptions: {
            headerLeft: (navigation) => MenuButton(navigation),
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


