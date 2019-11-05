import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//({color}) - destructuring  color property from object ColorCounter
//instead of putting just (props) 
const ColorCounter = ({color})=>{
    return ( 
        //below : {color}- in {}-because it's a template string variable
        //the template string itself is in backticks ``
        //the var is added after $ in {}
     <View>
         
      <Text> {color}</Text>
        <Button title={`Increase ${color}`} />
        <Button title={`Decrease ${color}`} />

     </View>
    )
};
//({}) - destructuring for props
const styles = StyleSheet.create({});

export default ColorCounter;