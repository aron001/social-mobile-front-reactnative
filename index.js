import { AppRegistry, Platform } from "react-native";
import App from "./App";

AppRegistry.registerComponent("main", () => App);

if (Platform.OS === "web") {
    const rootTag =
        document.getElementById("main") || document.getElementById("main");
    AppRegistry.runApplication("main", { rootTag });
}