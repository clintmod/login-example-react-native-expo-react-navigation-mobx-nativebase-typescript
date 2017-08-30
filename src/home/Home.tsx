
import moment from "moment";
import React, {Component} from "react";
import {Text, Image, StyleSheet, View} from "react-native";
import {H1} from "native-base";

import {BaseContainer, Circle, Images, WindowDimensions} from "../components";

export default class Home extends Component {
    props: {
        navigation:any
    }
    go(key: string) {
        this.props.navigation.navigate(key);
    }

    render() {
        const today = moment();
        const month = today.format("MMMM Y").toUpperCase();
        const dayOfMonth = today.format("D");
        const dayOfWeek = today.format("dddd").toUpperCase();
        const {navigation} = this.props;
        return <BaseContainer title="" {...{ navigation }}>
            <Image source={Images.home}>
                <View>
                    <H1>Good Morning!</H1>
                    <Circle>
                        <Circle>
                            <Text style={style.text}>8</Text>
                        </Circle>
                        <Text style={[style.text, { fontSize: 48 }]}>{dayOfMonth}</Text>
                        <Text style={style.text}>{dayOfWeek}</Text>
                    </Circle>
                    <Text>{month}</Text>
                </View>
            </Image>
        </BaseContainer>;
    }
}

const style = StyleSheet.create({
    img: {
        ...WindowDimensions
    },
    circle: {
        //marginVertical: variables.contentPadding * 4
    },
    badge: {
        position: "absolute",
        right: 10,
        top: 10
    },
    text: {
        //fontFamily: variables.titleFontfamily,
        color: "white"
    }
});