import React from 'react';
import { Text, View,StyleSheet, } from 'react-native';
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Header =() => {
  
  return(
        <View style={styles.View}>    
            <Text style={styles.TextStyle}> App Musica </Text>
       </View> 
  );
}
 
    const styles = StyleSheet.create({
      
      View:{
            backgroundColor: 'rgb(0,0,255)',
            padding:20,
            width:'100%'
      },
        TextStyle:{textAlign:'center',
        fontSize:30,
        color:"#1d076e"
      }

      
    });
    export default Header;