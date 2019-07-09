/**
 * @format
 */

import { AppRegistry } from "react-native";
import TodoList from "./App";
import AppContainer from "./src/routes"
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => AppContainer);
