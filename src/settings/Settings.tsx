import autobind from "autobind-decorator";
import { action, observable } from "mobx";
import { observer } from "mobx-react/native";
import { Body, List, ListItem, Right, Switch } from "native-base";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Avatar, BaseContainer, Field } from "../components";
import SettingsStore from "./SettingsStore";
import SettingsSwitch from "./SettingsSwitch";

@observer
export default class Settings extends Component {

  public props: {
    navigation: any,
  };

  private store = new SettingsStore();

  public render() {
    const { profile } = this.store;
    return (
      <BaseContainer title="Settings" navigation={this.props.navigation} scrollable>
        <View>
          <Avatar size={100} />
        </View>
        {
          profile && <List>
            <ListItem itemDivider>
              <Text>GENERAL</Text>
            </ListItem>
            <Field
              label="Name"
              defaultValue={profile.name}
              onChange={this.store.setName}
            />
            <ListItem itemDivider>
              <Text>NOTIFICATIONS</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Email Notification</Text>
              </Body>
              <Right>
                <SettingsSwitch
                  defaultValue={profile.emailNotifications}
                  onToggle={this.store.toggleEmailNotifications}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Phone Notification</Text>
              </Body>
              <Right>
                <SettingsSwitch
                  defaultValue={profile.phoneNotifications}
                  onToggle={this.store.togglePhoneNotifications}
                />
              </Right>
            </ListItem>
          </List>
        }
      </BaseContainer>
    );
  }
}
