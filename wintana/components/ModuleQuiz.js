import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, } from 'react-native';

export default class ModuleQuiz extends React.Component {
  render() {
    return (
      <View >
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}> */}
          <View style={ModuleStyle.moduleBox} >
            <Text style={ModuleStyle.titleMod}>{this.props.title}</Text>
            <View style={ModuleStyle.squareBox}>
              <Text >{this.props.image}</Text>
              {/* <Image style={{width: 80, height: 80, backgroundColor: '#fff'}} source={require(props.imageUri)} /> */}
            </View>
          </View>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const ModuleStyle = StyleSheet.create({
  titleMod:{
    margin: 1,
    color: '#767676',
    fontSize: 18,
  },
  moduleBox:{
    height:150,
    width:150,
    margin: 10,

    borderWidth: 1,
    borderRadius: 10, 
    borderColor: '#7224bf',
    shadowColor: '#80000000',

    display:'flex',
    flexDirection:'column',
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  squareBox:{
    height:110,
    width:110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
  },
})