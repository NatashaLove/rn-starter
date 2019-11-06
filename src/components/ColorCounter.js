import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//({color}) - destructuring  color property from object ColorCounter
//instead of putting just (props) 
const ColorCounter = ({color, onIncrease, onDecrease})=>{
    //onIncrease, onDecrease -functions from the SquareScreen(parent)
    
    return ( 
        //below : {color}- in {}-because it's a template string variable
        //the template string itself is in backticks ``
        //the var is added after $ in {}
     <View>
         
      <Text> {color}</Text>
      
        <Button onPress={()=> onIncrease()} 
        title={`Increase ${color}`} 
        //onIncrease and onDEcrease are defined in the SquareScreen for each color
        />
        <Button onPress={()=> onDecrease()} 
        title={`Decrease ${color}`} 
        />

     </View>
    )
};
//({}) - destructuring for props
const styles = StyleSheet.create({});

export default ColorCounter;