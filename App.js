import { StatusBar } from 'expo-status-bar';
import  Constant  from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from'./componentes/Body.js'

export  default class App extends React.Component {
	  
      constructor(props){
				super(props);
        this.body = new Body();
				this.body.nome ="cleber"

			  	}

				render(){
				   return(
				    	<View style={{marginTop:30}}>
				      	<Body></Body>
					</View>	
					);	
				}
			
			}




				
