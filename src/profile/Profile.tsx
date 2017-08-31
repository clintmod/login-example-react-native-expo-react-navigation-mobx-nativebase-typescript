import * as React from "react";
import {Component} from "react";
import * as _ from "lodash";
import {View, ScrollView} from "react-native";
import {H1} from "native-base";
import {inject, observer} from "mobx-react/native";

import {BaseContainer, Avatar} from "../components";

@inject("store") @observer
export default class Profile extends Component {
    props: {
        store:any,
        navigation:any
    }
    render() {
        const {store} = this.props;
        return <BaseContainer title="Profile" navigation={this.props.navigation} scrollable>
            {
                store.user && <View>
                    <View>
                        <Avatar size={100} />
                        <H1>{store.user.profile.name}</H1>
                    </View>
                </View>
            }
        </BaseContainer>;
    }
}