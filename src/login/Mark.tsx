import { Icon } from "native-base";
import * as React from "react";
import { Component } from "react";
import { View } from "react-native";

const getStyle = (size: number): any => {
  return {
    alignItems: "center",
    borderRadius: size / 2,
    height: size,
    justifyContent: "center",
    width: size,
  };
};

export default class Mark extends Component {

  public render() {
    return (
      <View style={[getStyle(230), { borderColor: "rgba(255, 255, 255, .3)", borderWidth: 2 }]}>
        <View style={[getStyle(210), { borderColor: "rgba(255, 255, 255, .5)", borderWidth: 2 }]}>
          <View style={[getStyle(180), { borderColor: "white", borderWidth: 2 }]}>
            <View style={[getStyle(150), { backgroundColor: "white" }]}>
              <Icon name="md-checkmark" style={{ fontSize: 100, color: "green" }} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
