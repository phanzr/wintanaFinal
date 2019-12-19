import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AnswerBox extends React.Component {
  render() {
    return (
      <View style={boxStyle.body}>
        <View style={boxStyle.rectangleLargeBox}>
          <View style={boxStyle.rectangleSmallBox}>
            <Text>{this.props.title}</Text>
          </View>
          {/* <Icon.Button
          name="check"
          backgroundColor="#7224bf"
          // onPress={this.loginWithFacebook}
          >
          </Icon.Button> */}
        </View>
      </View>
    );
  }
}

const boxStyle = StyleSheet.create({
  body:{
    display:'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  rectangleSmallBox:{
    height: 68,
    width: 179,
    backgroundColor: '#ffffff',
    // borderRadius: 30, 
    borderRadius: 10,
    borderColor: '#7224bf',
    borderWidth: 1,
    shadowColor: '#80000000',
    fontSize: 18,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  rectangleLargeBox:{
    height:68,
    width:248,
    margin: 5,

    borderWidth: 1,
    borderRadius: 10, 
    borderColor: '#7224bf',
    backgroundColor: '#f0f0f0', 

    flexDirection:'row',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    
    shadowColor: '#80000000',
    fontSize: 18,
  },
  squareBox:{
    height:68,
    width:68,
    alignItems: 'center',
    justifyContent: 'center',
  },
})