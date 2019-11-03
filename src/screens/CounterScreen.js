//useState - function, which allows to watch state
import React, { useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () =>{
// incorrect way to declare
   // let counter =0;

   //correct way to atch state (useState func):
   //name var and setter func anyway I want:
   const [counter, setCounter]=useState(0);  // new state starts from counter= 0(initialized)
//redestructuring array:, setCounter  - func which gives the value of counter

    return (
         <View>
        <Button 
        title="Increase" 
        onPress={() => {
            //Don't do this- don't change counter directly!
            //counter++;
            //do it with setCounter func:
            setCounter(counter+1);
        }}
        />
        <Button 
        title="Decrease" 
        onPress={()=> {
            //counter--;
            setCounter(counter-1);
            // this func will make the button counter work
            //React doesn't detect direct manual modifications of state var
            //Only through a Setter func!
        }}
        />
        
        <Text> Current Count:{counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;