import * as _ from "lodash";
import { inject, observer } from "mobx-react/native";
import { H1 } from "native-base";
import * as React from "react";
import { Component } from "react";
import { ScrollView, View } from "react-native";
import { Avatar, BaseContainer } from "../components";

@inject("store") @observer
export default class Profile extends Component {
  public props: {
    store: any,
    navigation: any,
  };

  public render() {
    const { store } = this.props;
    return (
      <BaseContainer title="Profile" navigation={this.props.navigation} scrollable>
        {
          store.user && <View>
            <View>
              <Avatar size={100} />
              <H1>{store.user.profile.name}</H1>
            </View>
          </View>
        }
      </BaseContainer>
    );
  }
}
