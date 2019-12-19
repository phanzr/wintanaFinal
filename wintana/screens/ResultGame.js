import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ResultGameScreen extends React.Component {
  render() {
    let value = (this.props.navigation.getParam('result'));
    return (
      <View style={GameStyle.container}>
        <Text style={GameStyle.txt}>Bien hecho!</Text>
        {/* <Image style={GameStyle.img} source={require('')} /> */}
       <Text style={GameStyle.txt}>Ganaste + {value === 10 ? 10 : 0} pts!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
          <Text style={GameStyle.btn}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const GameStyle=StyleSheet.create({
  container:{
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
    marginTop: 25,
  },
  modulesDiv:{display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  txt:{
    color: '#494848',
    fontSize: 20,
    lineHeight: 26,  
    alignContent: 'center',
    marginTop:5,
    margin:30,
    padding:10,
  },
  img:{
    width:100,
    height: 100,
    backgroundColor: '#f2f2f2',
  },
  btn:{
    backgroundColor: '#7224bf',
    color:'#fff',
    height: 40,
    width: 150,
    borderRadius:30,
    shadowColor: '#80000000',
    display:'flex', 
    alignContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
    fontSize: 20,
    margin: 10,
  }
});