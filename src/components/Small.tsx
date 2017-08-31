import * as React from "react";
import { Component } from "react";
import { Text } from "react-native";

export default class Small extends Component {
  public render() {
    return <Text>{this.props.children}</Text>;
  }
}
