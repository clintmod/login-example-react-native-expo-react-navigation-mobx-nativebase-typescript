import * as React from 'react';
import Expo from 'expo';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {View} from 'react-native';

interface Props {
}
 
interface State {
    
}
 
export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container style={{backgroundColor: 'black'}}>
        <Header>
          <Body>
            <Title>Mobx Counter</Title>
          </Body>
        </Header>
        <Card style= {{flex:0.1}}>
          <CardItem>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
            Test
            </Text>
          </CardItem>
        </Card>
        <Button primary block >
          <Text>Increment</Text>
        </Button>
        <Button primary block >
          <Text>Decrement</Text>
        </Button>
        <View style={{ flex:1 }}>
        </View>
      </Container>
    );
  }
}