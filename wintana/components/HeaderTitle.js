import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      // <Image
      //   source={require('@expo/snack-static/react-native-logo.png')}
      //   style={{ width: 30, height: 30 }}
      // />
      <View>
        <Text style={{color:'#fff'}}>Wintana</Text>
      </View>
    );
  }
} 