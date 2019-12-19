import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import GameScreen from './screens/Game';
import ResultGameScreen from './screens/ResultGame';

import GlossaryScreen from './screens/Glossary';
import AboutScreen from './screens/About';
import AddSignScreen from './screens/AddSign';
import SignScreen from './screens/Sign';


const GlossaryStack = createStackNavigator({
  Glossary: GlossaryScreen,
  AddSign: AddSignScreen,
  Sign: SignScreen,
  // SearchResults: SearchResultsScreen,
// }, {
    //configuration options...
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Game: GameScreen,
  ResultGame: ResultGameScreen,
  // SearchResults: SearchResultsScreen,
// }, {
    //configuration options...
});

const TabNavigator = createBottomTabNavigator({
  // Glossary: { screen: GlossaryScreen },
  Glossary: GlossaryStack,
  // Home: { screen: HomeScreen },
  Home: HomeStack,
  About: { screen: AboutScreen },
},
{ 
  navigationOptions: ({ navigation }) => ({
    //define the icon for each tab here...
    tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;  
    let icon;
    switch(routeName) {
      case 'Glossary':
        icon = `ios-bookmarks${focused ? '' : '-outline'}`;
      break;
      case 'Home':
        icon = `ios-md-home${focused ? '' : '-outline'}`;
      break;
      case 'About':
        icon = `ios-information-circle-outline${focused ? '' : '-outline'}`;
      break;
    }
        
    return <Ionicons 
      name={icon} 
      size={25} 
      color={tintColor} 
    />;
    },
  }),
},
{
  tabBarOptions: {
    // initialRouteName: 'Catalogue',
    // activeTintColor: '#fff',
    activeTintColor: '#8b56bf',
    // tintColor: '#8b56bf',
    inactiveTintColor: '#767676',
    style: {
      backgroundColor: '#f6f4f4',
      // backgroundColor: '#4d535e',    
    }
  },
});

export default createAppContainer(TabNavigator);