import * as React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Circle extends Component {

  public props: {
    size?: number,
    color?: string,
    children?: any,
  };

  public render() {
    const { size, color } = this.props;
    const circleStyle = {
      alignItems: "center",
      backgroundColor: color,
      borderRadius: size || 2 / 2,
      height: size,
      justifyContent: "center",
      width: size,
    };
    return <View>{this.props.children}</View>;
  }
}
