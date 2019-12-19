import * as React from 'react';
import { Text, View,TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class SignBox extends React.Component {
  render() {
    return (
      <View style={boxStyle.body}>
        <View style={boxStyle.rectangleLargeBox}>
          <View style={boxStyle.rectangleSmallBox}>
            <Text >word</Text>
          </View>
          <View style={boxStyle.squareBox}>
            <Image style={{width: 50, height: 50, backgroundColor: '#f2f2f2'}} source={require('../assets/PNG/icons/Next.png')} />
          </View>
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