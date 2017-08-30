import * as _ from "lodash";
import autobind from "autobind-decorator";
import React, {Component} from "react";
import {ListItem, Item, Label, Input, Body, Right} from "native-base";
import {observable, action} from "mobx";
import { observer } from "mobx-react/native";

interface FieldProps {
    label: string,
    defaultValue?: string,
    last?: boolean,
    autoCorrect?: boolean,
    autoCapitalize?: string,
    keyboardType?: string,
    inverse?: boolean,
    right?: () => any,
    onChange?: Function,
    secureTextEntry?: boolean,
    returnKeyType?: string,
    onSubmitEditing?: Function
}

@observer
export default class Field extends Component {

    props: FieldProps;
    @observable value: string;

    componentWillMount() {
        this.setValue(this.props.defaultValue || "");
    }

    @autobind @action
    setValue(value: string) {
        const {onChange} = this.props;
        this.value = value;
        if (onChange) {
            onChange(value);
        }
    }

    render() {
        const {label, last, inverse, defaultValue, right} = this.props;
        const style = inverse ? { color: "white" } : {};
        const itemStyle = inverse ? { borderColor: "white" } : {};
        const keysToFilter = ["right", "defaultValue", "inverse", "label", "last", "onChange"];
        const props = _.pickBy(this.props, (value, key) => keysToFilter.indexOf(key) === -1);
        const {value} = this;
        return <ListItem {...{ last }} style={itemStyle}>
            <Body>
                <Item
                    floatingLabel={!defaultValue}
                    stackedLabel={!!defaultValue}>
                    <Label {...{ style }}>{label}</Label>
                    <Input onChangeText={this.setValue} {...{ value, style }} {...props} />
                </Item>
            </Body>
            {
                right && <Right>{right()}</Right>
            }
        </ListItem>;
    }
}