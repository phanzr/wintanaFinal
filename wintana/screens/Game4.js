import * as React from 'react';
import { Text, View } from 'react-native';

export default class GameScreen4 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Resuelve la leccion!</Text>
        {/* <Image style={{width: 80, height: 80, backgroundColor: '#f2f2f2'}} source={require(props.imageUri)} /> */}
      </View>
    );
  }
}