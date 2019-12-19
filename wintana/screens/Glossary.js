import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import SignBox from '../components/SignBox';
import HeaderTitle from '../components/HeaderTitle';

export default class GlossaryScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#7224bf',
    },
    headerTitle: () => <HeaderTitle />,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View>
        {/* <View style={glossStyle.header}>
          <Button
            title="buscar"
            onPress={() => this.props.navigation.navigate('About')}
          />  
          <Button
            title=" + "
            onPress={() => this.props.navigation.navigate('AddSign')}
          />
        </View> */}
        <View style={glossStyle.body}>
          <Text style={glossStyle.title}>Selecciona un palabra para comenzar</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
            <SignBox/>
          </TouchableOpacity>
          <SignBox/>
          <SignBox/>
          <SignBox/>
          <SignBox/> 
        </View>
      </View>
    );
  }
}

const glossStyle = StyleSheet.create({
  header: {
    // flex: 2,
    display:'flex', 
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  body:{
    display:'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 25, 
  },
  title: {
    fontSize: 16,
    padding: 15,
    marginStart: 15,
  }
})