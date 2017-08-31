import * as React from "react";
import {Component} from "react";
import {KeyboardAvoidingView, ScrollView} from "react-native";
import {Container, Button, Header as NBHeader, Left, Body, Title, Right, Icon} from "native-base";
import { EvilIcons } from "@expo/vector-icons";

export default class BaseContainer extends Component {
    props: {
        title: string,
        navigation: any,
        scrollable?: boolean,
        children?: any,
        footer?: any
    }

    render() {
        const {title, navigation, scrollable, footer} = this.props;
        return <Container>
                <NBHeader noShadow>
                    <Left>
                        <Button onPress={() => navigation.navigate("DrawerOpen")} transparent>
                            <EvilIcons name="navicon" size={32} color={"grey"} />
                        </Button>
                    </Left>
                    <Body>
                    {
                        typeof(title) === "string" ? <Title>{title}</Title> : title
                    }
                    </Body>
                    <Right style={{ alignItems: "center" }}>
                        <Button transparent onPress={() => navigation.navigate("Create")}>
                            <Icon name="ios-add-outline" style={{ color: "grey", fontSize: 50 }} />
                        </Button>
                    </Right>
                </NBHeader>
                {
                    scrollable ? <ScrollView style={{ backgroundColor: "white" }}>
                            <KeyboardAvoidingView behavior="position">{this.props.children}</KeyboardAvoidingView>
                        </ScrollView>
                    :
                        this.props.children
                }
                {
                    footer
                }
            </Container>;
    }
}