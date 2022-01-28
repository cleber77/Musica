import React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';

const Body =() => {
return(
     
    <View style={styles.view}>
       <Image style={{width:90,height:90}} source ={{ uri:'https://reactnative.dev/img/tiny_logo.png'}}  />
      <Text  style={styles.Text}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum;V</Text>
       
      </View>

  );
}
 
  const styles = StyleSheet. create({
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