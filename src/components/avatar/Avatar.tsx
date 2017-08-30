import React, {Component} from "react";
import {Image, StyleSheet} from "react-native";

import Images from "../images/Images";

export default class Avatar extends Component {

    props: {
        size: number,
        id?: number,
        style?: any
    }

    static defaultProps = {
        size: 20,
        id: 0
    }

    render() {
        const {size, id, style} = this.props;
        let source;
        if (id === 1) {
            source = Images.avatar1;
        } else if (id === 2) {
            source = Images.avatar2;
        } else if (id === 3) {
            source = Images.avatar3;
        } else {
            source = Images.defaultAvatar;
        }
        return <Image {...{source}} style={[style, { width: size, height: size, borderRadius: size / 2 }]} />;
    }
}