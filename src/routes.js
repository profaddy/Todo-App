import { createDrawerNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../src/components/Screen/LoginScreen";
import TodoList from "../src/components/Screen/TodoList/TodoList"

const AppNavigator = createDrawerNavigator({
    Login: {
        screen: LoginScreen
    },
    TodoList: {
        screen: TodoList
    }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer


