import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Quiz extends React.Component {
  render() {
    return (
      <View style={boxStyle.body}>
        <View style={boxStyle.rectangleLargeBox}>
          <View style={boxStyle.rectangleSmallBox}>
          <Text >QUIZ</Text>
          </View>
          <View style={boxStyle.squareBox}>
            <Text >play</Text>
          </View>
        </View>
      </View>
    );
  }
}
