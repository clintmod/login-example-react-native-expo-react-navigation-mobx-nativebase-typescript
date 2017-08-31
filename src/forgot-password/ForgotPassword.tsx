
import autobind from "autobind-decorator";
import {observer} from "mobx-react/native";
import * as React from "react";
import {StyleSheet, Image, View} from "react-native";
import {Button, Spinner, Text} from "native-base";

import ForgotPasswordStore from "./ForgotPasswordStore";

import {Images, WindowDimensions, Field, Small} from "../components";

@observer
export default class ForgotPassword extends React.Component {

    store = new ForgotPasswordStore();

    props: {
        navigation: any
    }

    @autobind
    login() {
        this.props.navigation.navigate("Login");
    }

    @autobind
    async submit(): Promise<void> {
        try {
            await this.store.submit();
            alert("We send you an email so you can reset your password.");
            this.props.navigation.navigate("Login");
        } catch(e) {
            alert(e.message);
        }
    }
    
    @autobind
    onEmailChanged(email:string):void {
        this.store.email = email;
    }

    render() {
        return <Image source={Images.login} style={style.img}>
            <View style={style.container}>
                <Field
                    label="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChange={this.onEmailChanged}
                    inverse
                />
                <Button primary full onPress={this.submit}>
                {this.store.loading ? <Spinner color="white" /> : <Text>Sign In</Text>}
                </Button>
                <Button transparent full onPress={this.login}>
                    <Small>Login</Small>
                </Button>
            </View>
        </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        resizeMode: "cover",
        ...WindowDimensions
    },
    container: {
        backgroundColor: "rgba(80, 210, 194, .8)",
        flex: 1,
        justifyContent: "center"
    }
});

