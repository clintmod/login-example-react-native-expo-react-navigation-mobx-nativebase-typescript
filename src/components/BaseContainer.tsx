import { EvilIcons } from "@expo/vector-icons";
import { Body, Button, Container, Header as NBHeader, Icon, Left, Right, Title } from "native-base";
import React, { Component } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default class BaseContainer extends Component {
  public props: {
    title: string,
    navigation: any,
    scrollable?: boolean,
    children?: any,
    footer?: any,
  };

  public render() {
    const { title, navigation, scrollable, footer } = this.props;
    return (
      <Container>
        <NBHeader noShadow>
          <Left>
            <Button onPress={this.onDrawerOpenPress} transparent>
              <EvilIcons name="navicon" size={32} color={"grey"} />
            </Button>
          </Left>
          <Body>
            {typeof (title) === "string" ? <Title>{title}</Title> : title}
          </Body>
          <Right style={{ alignItems: "center" }}>
            <Button transparent onPress={this.onCreatePress}>
              <Icon name="ios-add-outline" style={{ color: "grey", fontSize: 50 }} />
            </Button>
          </Right>
        </NBHeader>
        {scrollable ?
          <ScrollView style={{ backgroundColor: "white" }}>
            <KeyboardAvoidingView behavior="position">{this.props.children}</KeyboardAvoidingView>
          </ScrollView>
          : this.props.children}
        {footer}
      </Container>
    );
  }

  private onDrawerOpenPress(): void {
    this.props.navigation.navigate("DrawerOpen");
  }
  private onCreatePress(): void {
    this.props.navigation.navigate("Create");
  }
}
