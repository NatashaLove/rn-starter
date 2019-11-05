import React, {useState} from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
    //creating var for watching state:
const [colors, setColors] = useState([]);


    return (
    <View>

    <Button title = "Add a Color" onPress={()=>{
        //to add a new random color-we modify thestandard Setter:
        //creating new array of rgb for that in []:
        setColors([...colors, randomRgb()])
        //...colors - means to take all elements of color array and add into new array
    }}/>
    
    
    <FlatList 
       
     //1.keyExtractor  - necessary for the key value: here (random color)), because rgb is unique
    //2.data -we want to turn to list: colors/setColors-sets random color-
    //3. renderItem - element of the list - in {}-properties of objects-destructuring: 
     
        keyExtractor={(item)=> item}
       data={colors}
        renderItem={({item})=>{
            //item of the list==='rgb(0,0,0)' - code of the color

            return <View style = {{height:100, width:100, backgroundColor: item}}/>
//item - will be a random color in the list
        }}
    />
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