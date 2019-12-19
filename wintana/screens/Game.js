import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AnswerBox from '../components/AnswerBox';

// onChangeDo(text) {
//   this.setState({ text })
//   if (text === 'Hello') {
//       return this.setState({ hello: true })
//   }
//   this.setState({ hello: false })
// }
export default class GameScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style={GameStyle.title}>Resuelve la leccion!</Text>
        <View style={{ flex: 1,  alignItems: 'center'}}>
          <Text style={GameStyle.txt}>Elige la palabra correcta</Text>
          <Image style={{width: 190, height: 190, marginBottom:3, backgroundColor: '#f2f2f2'}} source={require('../assets/Gifs/Acciones/hola.gif')} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultGame', {result: 10})}>
          {/* <TouchableOpacity onPress={() => console.log('hola')}> */}
            <AnswerBox res='true' title='Hola' />    
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultGame')}>
            <AnswerBox res='false' title='Gracias'/>    
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultGame')}>
            <AnswerBox res='false' title='Por favor'/>    
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultGame')}>
              <Text style={GameStyle.btn}>Terminar</Text>
              
            </TouchableOpacity>
          </View>
        </View>
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
    margin:15,
  },
  title:{
    color: '#494848',
    fontSize: 20,
    lineHeight: 26,  
    alignContent: 'center',
    marginTop:20,
    marginLeft:20,
    padding:5,
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
    paddingHorizontal: 39,
    paddingVertical: 8,
    fontSize: 20,
    margin: 10,
  }
});