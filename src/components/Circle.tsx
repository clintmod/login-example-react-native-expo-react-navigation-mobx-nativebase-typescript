
import React, {Component} from "react";
import {View, StyleSheet} from "react-native";

export default class Circle extends Component {

    props: {
        size?: number,
        color?: string,
        children?: any,
    }

    render() {
        const {size, color} = this.props;
        const circleStyle = {
            width: size,
            height: size,
            borderRadius: size || 2 / 2,
            backgroundColor: color,
            alignItems: "center",
            justifyContent: "center"
        };
        return <View>{this.props.children}</View>;
    }
}