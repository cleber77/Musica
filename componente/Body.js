import React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';
import styleExterno from '../styles.js';

const Body =() => {
return(
     
    <View style={styles.view}>
       <Image style={{width:90,height:90}} source ={{ uri:'https://reactnative.dev/img/tiny_logo.png'}}  />
       <Text  style={styleExterno.fontStyle}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the o la mundo sum;V</Text>
       
      </View>

  );
}
 
  const styles = StyleSheet. create ({
       view:{flex:1,
        flexDirection:'row' ,
        flexWrap:'wrap',
        padding:25
        
       },
       Text:{
        flex:1,
        flexDirection:'row'
         ,flexWrap:'wrap'
         ,padding:30

       }


  });


export default Body ;