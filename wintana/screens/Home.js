import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import ModuleQuiz from '../components/ModuleQuiz';
import HeaderTitle from '../components/HeaderTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#7224bf',
    },
    headerTitle: () => <HeaderTitle />,
    headerRight: () => (
      // <View>
      //   <Text style={HomeStyle.text}>Puntaje</Text>
      // </View>
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }
  
  render() {
    return (
      <View style={HomeStyle.container}>
        <View>
          <Text style={HomeStyle.text}>Lecciones</Text>
        </View>
        <View style={HomeStyle.modulesDiv}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
            <ModuleQuiz title='Emociones' image='1'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Game1')}>
            <ModuleQuiz title='Acciones' image='1'/>
          </TouchableOpacity>
        </View>
        <View style={HomeStyle.modulesDiv}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Game2')}>
            <ModuleQuiz title='Numeros' image='1'/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Game3')}>
            <ModuleQuiz title='Frutas' image='1'/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const HomeStyle=StyleSheet.create({
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
  text:{
    color: '#494848',
    fontSize: 20,
    lineHeight: 26,  
    alignContent: 'center',
    marginTop:5,
    padding:10,
  },
  img:{
    width:90,
    height: 90
  }
});