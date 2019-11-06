import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

//capital letters - for Constant/final vars:
const COLOR_INCREMENT = 15;

const SquareScreen = ()=>{

//state vars(to watch the state values) are created in the SquareScreen - because it's parent for colorCounter -
//and defines the objects' props:
    const[red, setRed]=useState(0);
    const[green, setGreen]=useState(0);
    const[blue, setBlue]=useState(0);
//these state vars will need to be passedd with the help of callback func (onChange)-here: onIncrease/onDecrease
//to the child (ColorCounter) - to be modified there (increase/decrease)

//this function -helping to decide what color(argument) to update and that it's not beyong the range 0-255
const setColor = (color, change)=>{
//color===(equal to) 'red', 'blue', 'green' - as a string
//change === how much we want to change/number: +-15

switch(color){
    case 'red':
        //tietary expression : ... (-if true)?(execute this).. : (else this)..
        red+change>255 || red+change<0 ? null : setRed(red+change);
        return;//like break in switch - after every case- to stop the switch
     case 'green':
        green+change>255 || green+change<0 ? null : setGreen(green+change);
        return;
    case 'red':
        blue+change>255 || blue+change<0 ? null : setBlue(blue+change);
        return;
    default:
        return;
        //empty return - returns nothing
        
}
//this code is the same
/*
if(color==='red') {
    if (red+change>255 || red+change<0){
        return;
        //this return leaves the outer if without changing color
    }else{
        setRed(red+change);
    }
}
*/

};
    //3 different areas with ColorCounter view on 1 screen:
   // console.log(red);
    
   //below: changed from:
   // onIncrease={()=> setRed(red + COLOR_INCREMENT)} 
   //onDecrease={()=> setRed(red - COLOR_INCREMENT)}
   //inserted the function instead setColor: 
    return <View>
        <ColorCounter 
        onIncrease={()=> setColor('red',  COLOR_INCREMENT)} 
        onDecrease={()=> setColor('red', -1*COLOR_INCREMENT)} 
        color="Red"
        />
        <ColorCounter 
        onIncrease={()=> setColor('blue', COLOR_INCREMENT)} 
        onDecrease={()=> setColor('blue', -1*COLOR_INCREMENT)}
        color="Blue"/>
        
        <ColorCounter 
        onIncrease={()=> setColor('green', COLOR_INCREMENT)} 
        onDecrease={()=> setColor('green', -1*COLOR_INCREMENT)}
        color="Green"/>

    <View style={{height: 150, width: 150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
    </View>
};
// the separate <View/> withstye- the square -where we show the changed color
// {{}} - outside - for javascript expression/inside the actual object literal

//({}) - destructuring for props / definite prop inside
const styles = StyleSheet.create({});

export default SquareScreen;