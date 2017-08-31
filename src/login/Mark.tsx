import * as React from "react";
import {Component} from "react";
import {View} from "react-native";
import {Icon} from "native-base";

const getStyle = (size: number): any  => {
    return {
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2
    }
}

export default class Mark extends Component {

    render() {
        return <View style={[getStyle(230), {borderColor: "rgba(255, 255, 255, .3)", borderWidth: 2 }]}>
            <View style={[getStyle(210), { borderColor: "rgba(255, 255, 255, .5)", borderWidth: 2 }]}>
                <View style={[getStyle(180), { borderColor: "white", borderWidth: 2 }]}>
                    <View style={[getStyle(150), { backgroundColor: "white" }]}>
                        <Icon name="md-checkmark" style={{fontSize: 100, color: "green" }} />
                    </View>
                </View>
            </View>
        </View>;
    }
}