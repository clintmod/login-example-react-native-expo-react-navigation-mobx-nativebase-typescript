import autobind from "autobind-decorator";
import { observer } from "mobx-react/native";
import { Body, Button, Container, Header, Icon, Left, Right, Spinner, Title } from "native-base";
import React, { Component } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { Field, Images } from "../components";
import SignUpStore from "./SignUpStore";

@observer
export default class SignUp extends Component {

  public props: {
    navigation: any;
  };

  private store = new SignUpStore();

  public render() {
    return (
      <Container>
        <ScrollView style={{ backgroundColor: "white" }} >
          <KeyboardAvoidingView behavior="position">
            <Header noShadow>
              <Left>
                <Button onPress={this.back} transparent>
                  <Icon name="close" />
                </Button>
              </Left>
              <Body>
                <Title>Sign Up</Title>
              </Body>
              <Right />
            </Header>
            <Image source={Images.signUp}>
              <Container>
                <View style={style.circle}>
                  <Icon name="ios-add-outline" />
                </View>
              </Container>
            </Image>
            <Field
              label="Name"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChange={this.onNameChanged}
            />
            <Field
              label="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChange={this.onEmailChanged}
            />
            <Field
              label="Password"
              autoCorrect={false}
              autoCapitalize="none"
              onChange={this.onPasswordChanged}
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </ScrollView >
        <Button primary full onPress={this.signIn}>
          {this.store.loading ? <Spinner color="white" /> : <Icon name="md-checkmark" />}
        </Button>
      </Container >
    );
  }
  @autobind
  private onNameChanged(name: string): void {
    this.store.name = name;
  }
  @autobind
  private onEmailChanged(email: string): void {
    this.store.email = email;
  }
  @autobind
  private onPasswordChanged(password: string): void {
    this.store.password = password;
  }
  @autobind
  private back() {
    this.props.navigation.goBack();
  }

  @autobind
  private async signIn(): Promise<void> {
    try {
      await this.store.signIn();
    } catch (e) {
      alert(e.message);
    }
  }
}

const style = StyleSheet.create({
  circle: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 62.5,
    height: 125,
    justifyContent: "center",
    width: 125,
  },
});
