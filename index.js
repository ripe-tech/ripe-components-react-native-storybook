import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./app";
import { name as appName } from "./app.json";
import "./legacy";

AppRegistry.registerComponent(appName, () => App);
