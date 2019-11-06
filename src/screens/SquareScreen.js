import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = ()=>{

//state vars(to watch the state values) are created in the SquareScreen - because it's parent for colorCounter -
//and defines the objects' props:
    const[red, setRed]=useState(0);
    const[green, setGreen]=useState(0);
    const[blue, setBlue]=useState(0);
//these state vars will need to be passedd with the help of callback func (onChange)
//to the child (ColorCounter) - to be modified there (increase/decrease)

    //3 different areas with ColorCounter view on 1 screen:
    console.log(red);
    
    return <View>
        <ColorCounter 
        onIncrease={()=> setRed(red + 1)} 
        onDecrease={()=> setRed(red - 1)} 
        color="Red"
        />
        <ColorCounter 
        onIncrease={()=> setBlue(blue + 1)} 
        onDecrease={()=> setBlue(blue - 1)}
        color="Blue"/>
        
        <ColorCounter 
        onIncrease={()=> setGreen(green + 1)} 
        onDecrease={()=> setGreen(green - 1)}
        color="Green"/>

    <View style={{height: 150, width: 150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
    </View>
};
// the separate <View/> withstye- the square -where we show the changed color
// {{}} - outside - for javascript expression/inside the actual object literal

//({}) - destructuring for props / definite prop inside
const styles = StyleSheet.create({});

export default SquareScreen;