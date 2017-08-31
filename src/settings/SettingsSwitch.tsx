import autobind from "autobind-decorator";
import { action, observable } from "mobx";
import { observer } from "mobx-react/native";
import { Body, List, ListItem, Right, Switch } from "native-base";
import * as React from "react";
import { Component } from "react";
import { Text, View } from "react-native";
import { Avatar, BaseContainer, Field } from "../components";
import SettingsStore from "./SettingsStore";

@observer
export default class SettingsSwitch extends Component {

  public props: {
    defaultValue: boolean,
    onToggle: any,
  };

  @observable
  private value: boolean;

  public componentWillMount() {
    const { defaultValue } = this.props;
    this.value = defaultValue;
  }

  public render() {
    return (
      <Switch
        value={this.value}
        onValueChange={this.toggle}
        onTintColor="rgba(80, 210, 194, .5)"
        thumbTintColor={"#BEBEC1"}
      />
    );
  }
  @autobind @action
  private toggle() {
    const { onToggle } = this.props;
    this.value = !this.value;
    onToggle(this.value);
  }
}
