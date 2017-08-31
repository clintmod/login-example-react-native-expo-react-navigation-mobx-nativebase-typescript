
import { Dimensions, Platform, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");
const currentHeight: number = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

export default {
  height: Platform.OS === "ios" ? height : height - currentHeight,
  width,
};
