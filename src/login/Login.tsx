import autobind from "autobind-decorator";
import * as React from "react";
import {observer} from "mobx-react/native";
import {View, Image, StyleSheet, ScrollView, KeyboardAvoidingView} from "react-native";
import {H1, Container, Button, Text, Spinner} from "native-base";

import LoginStore from "./LoginStore";
import Mark from "./Mark";

import {Small, Images, Field, WindowDimensions} from "../components";

@observer
export default class Login extends React.Component {

    props: {
        navigation: any;
    }

    store = new LoginStore()

    @autobind
    async signIn(): Promise<void> {
        try {
            await this.store.login();
        } catch(e) {
            alert(e.message);
        }
    }
    
    @autobind
    signUp() {
        this.props.navigation.navigate("SignUp");
    }

    @autobind
    forgotPassword() {
        this.props.navigation.navigate("ForgotPassword");
    }
    @autobind
    onEmailChanged(email:string):void {
        this.store.email = email;
    }
    @autobind
    onPasswordChanged(password:string): void {
        this.store.password = password;
    }

    render() {
        return <Image source={Images.login} style={style.img}>
            <Container>
                <ScrollView contentContainerStyle={style.content}>
                    <KeyboardAvoidingView behavior="position">
                        <View style={style.logo}>
                            <View>
                                <Mark />
                                <H1 style={StyleSheet.flatten(style.title)}>Get Started!</H1>
                            </View>
                        </View>
                        <View style={style.blur}>
                            <Field
                                label="Email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                onChange={this.onEmailChanged}
                                inverse
                            />
                            <Field
                                label="Password"
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="go"
                                onChange={this.onPasswordChanged}
                                onSubmitEditing={this.signIn}
                                last
                                inverse
                            />
                            <View>
                                <View>
                                    <Button primary full onPress={this.signIn}>
                                    {this.store.loading ? <Spinner color="white" /> : <Text>Sign In</Text>}
                                    </Button>
                                </View>
                                <View>
                                    <Button transparent full onPress={this.signUp}>
                                        <Small>Don't have an account? Sign Up</Small>
                                    </Button>
                                </View>
                                <View>
                                    <Button transparent full onPress={this.forgotPassword}>
                                        <Small>Forgot password?</Small>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </Container>
        </Image>;
    }
}

const style = StyleSheet.create({
    img: {
        resizeMode: "cover",
        ...WindowDimensions
    },
    content: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        alignSelf: "center",
        // marginBottom: variables.contentPadding * 2
    },
    title: {
        // marginTop: variables.contentPadding * 2,
        color: "white",
        textAlign: "center"
    },
    blur: {
        backgroundColor: "rgba(255, 255, 255, .2)"
    }
});
