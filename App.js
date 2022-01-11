import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Button,ScrollView } from 'react-native';
import Body from './componente/Body.js';
import  Header from './componente/Header.js';

export default class App extends React.Component{
    
  render(){
      return(
          <ScrollView style ={{marginTop:30,flex:1}}>
            <Header></Header>
            <Body></Body>
          </ScrollView>
         
      );

    }
    
}
