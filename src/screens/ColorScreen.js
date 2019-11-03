import React, {useState} from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
    //creating var for atching state:
const [colors, setColors] = useState([]);


    return (
    <View>

    <Button title = "Add a Color" onPress={()=>{
        //to add a new random color-we modify thestandard Setter:
        //creating new array of rgb for that in []:
        setColors([...colors, randomRgb()])
        //...colors - means to take all elements of color array and add into new array
    }}/>
    
    <View style = {{height:100, width:100, backgroundColor:randomRgb()}}/>

    </View>
    //style hardcoded here-because we on't know what style want yet

    );
};
//func which generates random colors (random rgb:red/green/blue strings)
const randomRgb = ()=>{
    //*256 - random value between 0 and 256- all rgb range
    // 3 -because color consist of 3 (rgb)
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

//return in backtick, not single quote! for template string
//return TEMPLATE STRING- to inject vars into the TEMPLATE string:
//must use ${}!
//rgb is already a func returning color -just we insert random numbers for it:

    return `rgb(${red}, ${green}, ${blue})`;
    //returns the result after the func- the returned vars

};

const styles = StyleSheet.create({});

export default ColorScreen;