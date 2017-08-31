import autobind from "autobind-decorator";
import * as _ from "lodash";
import { action, observable } from "mobx";
import { observer } from "mobx-react/native";
import { Body, Input, Item, Label, ListItem, Right } from "native-base";
import * as React from "react";
import { Component } from "react";

interface FieldProps {
  label: string;
  defaultValue?: string;
  last?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: string;
  keyboardType?: string;
  inverse?: boolean;
  right?: () => any;
  onChange?: any;
  secureTextEntry?: boolean;
  returnKeyType?: string;
  onSubmitEditing?: any;
}

@observer
export default class Field extends Component {

  public props: FieldProps;
  @observable
  private value: string;

  public componentWillMount() {
    this.setValue(this.props.defaultValue || "");
  }

  public render() {
    const { label, last, inverse, defaultValue, right } = this.props;
    const style = inverse ? { color: "white" } : {};
    const itemStyle = inverse ? { borderColor: "white" } : {};
    const keysToFilter = ["right", "defaultValue", "inverse", "label", "last", "onChange"];
    const props = _.pickBy(this.props, (val, key) => keysToFilter.indexOf(key) === -1);
    const value: any = this.value;
    return (
      <ListItem {...{ last }} style={itemStyle}>
        <Body>
          <Item
            floatingLabel={!defaultValue}
            stackedLabel={!!defaultValue}
          >
            <Label {...{ style }}>{label}</Label>
            <Input onChangeText={this.setValue} {...{ value, style }} {...props} />
          </Item>
        </Body>{right && <Right>{right()}</Right>}
      </ListItem>
    );
  }
  @autobind @action
  private setValue(value: string) {
    const { onChange } = this.props;
    this.value = value;
    if (onChange) {
      onChange(value);
    }
  }
}
