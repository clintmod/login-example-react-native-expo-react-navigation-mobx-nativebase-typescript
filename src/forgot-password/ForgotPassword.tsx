
import autobind from "autobind-decorator";
import { observer } from "mobx-react/native";
import { Button, Spinner, Text } from "native-base";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

import ForgotPasswordStore from "./ForgotPasswordStore";

import { Field, Images, Small, WindowDimensions } from "../components";

@observer
export default class ForgotPassword extends React.Component {
  public props: {
    navigation: any,
  };

  private store = new ForgotPasswordStore();

  public render() {
    return (
      <Image source={Images.login} style={style.img}>
        <View style={style.container}>
          <Field
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            onChange={this.onEmailChanged}
            inverse={true}
          />
          <Button primary full onPress={this.submit}>
            {this.store.loading ? <Spinner color="white" /> : <Text>Sign In</Text>}
          </Button>
          <Button transparent full onPress={this.login}>
            <Small>Login</Small>
          </Button>
        </View>
      </Image>
    );
  }

  @autobind
  private login() {
    this.props.navigation.navigate("Login");
  }

  @autobind
  private async submit(): Promise<void> {
    try {
      await this.store.submit();
      alert("We send you an email so you can reset your password.");
      this.props.navigation.navigate("Login");
    } catch (e) {
      alert(e.message);
    }
  }

  @autobind
  private onEmailChanged(email: string): void {
    this.store.email = email;
  }

}

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(80, 210, 194, .8)",
    flex: 1,
    justifyContent: "center",
  },
  img: {
    resizeMode: "cover",
    ...WindowDimensions,
  },

});
