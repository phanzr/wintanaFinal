import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
// import { SplashScreen } from 'expo';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
    headerStyle: {
      backgroundColor: '#7224bf',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  render() {
    return (
      <View style={aboutStyle.container}> 
        <Text style={aboutStyle.text}>¿Que es Wintana?</Text>
        <View>
          <Text style={aboutStyle.text}>
            Wintana es una herramienta de aprendizaje de forma didáctica 
            del lenguaje de señas boliviano. 
          </Text>
          {/* <Image source={require('../assets/PNG/Narval.png')} style={{width: 100, height: 100}} /> */}
        </View>
      </View>
    );
  }
}
const aboutStyle=StyleSheet.create({
  container:{
    display:'flex', 
    flexDirection:'column',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#dbdfff',  
    height: 215,  
    borderRadius: 30, 
    shadowColor:'#80000000', 
    // position:'center',
    padding:20, 
    margin: 20,
    marginTop: 60,  
  },
  text:{
    color: '#494848',
    fontSize: 16,
    lineHeight: 26,
    // justifyContent: 'center',  
    alignContent: 'center',

  },
});