import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "../temp/storyLoader";

import "./rn-addons";

configure(() => {
    loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage: require("@react-native-community/async-storage").AsyncStorage
});
AppRegistry.registerComponent("RIPE Components React Native", () => StorybookUIRoot);

export default StorybookUIRoot;
