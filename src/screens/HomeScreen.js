import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return <View>
  <Text style={styles.text}>Hello Natasha</Text>
  
  <Button 
  // Button doean't need <></>- Only <'code' />
  //displays 'button pressed'-in console app (console.log('button pressed'))

  //on click -navigates toComponents property from App.js-
  //hich navigates to comonent screen
    onPress={()=> navigation.navigate('Components')}
    // prop - name of the button  
    title= "Go to Components Demo"
  
  />
  <Button
    title="Go to List Demo"
    onPress={()=> navigation.navigate('List')}
  />

  <TouchableOpacity onPress={()=> navigation.navigate('Image')}>
    <Text>go to list Demo </Text>
    <Text>Natasha </Text>
  </TouchableOpacity>

  <Button
    title="Go to List Counter"
    onPress={()=> navigation.navigate('Counter')}
  />
  <Button
    title="Go to Color Demo"
    onPress={()=> navigation.navigate('Color')}
  />

  <Button
    title="Go to Square Screen"
    onPress={()=> navigation.navigate('Square')}
  />

<Button
    title="Go to Text Screen"
    onPress={()=> navigation.navigate('Text')}
  />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
