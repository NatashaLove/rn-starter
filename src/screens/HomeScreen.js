import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return <View>
  <Text style={styles.text}>Hello Natasha</Text>
  
  <Button 
  // Button doean't need <></>- Only <'code' />
  //displays 'button pressed'-in console app
    onPress={()=> console.log('Button pressed')}
    // prop - name of the button  
    title= "Go to Components Demo"
  
  />
  <TouchableOpacity onPress={()=> console.log('Natasha pressed')}>
    <Text>go to list Demo </Text>
    <Text>Natasha </Text>
  </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
