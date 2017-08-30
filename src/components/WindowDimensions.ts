
import {Dimensions, StatusBar, Platform} from "react-native";

const {height, width} = Dimensions.get("window");
const currentHeight:number = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

export default {
    width,
    height: Platform.OS === "ios" ? height : height - currentHeight
}