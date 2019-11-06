import React, {useReducer} from 'react'; // don't {useState} anymore , but REDUCER
//use State ad useReducer both used to add fuctionality to components
//reducer is used when there are several separate state vars (red, blue , green) 
//with reducer managing state is easier

import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

//capital letters - for Constant/final vars:
const COLOR_INCREMENT = 15;

//define object/func reducer outside the component itself 
//because it's used inside the SquareScreen component(func):
const reducer = (state, action) =>{
//state is the object -rgb; action-is how the state of object should change
//state==={red:number, green: number, blue:number}
//action==={colorToChange: 'red' || 'green' || 'blue', amount: 15|| -15}
    switch(action.colorToChange) {
        case 'red':
        //never changne state values directly
         return {...state, red: state.red +action.amount};
        //making a new object- copying all props of state, 
        //but override red prop increasing it

        case 'green':
            return {...state, green: state.green +action.amount};
        case 'blue':
           return {...state, blue: state.blue +action.amount};
        default: 
        return state;// the previous color remains
    }
};

//every time it's called- the state is going to be different-because it's changed in the func above (reducer)
const SquareScreen = ()=>{

//instead of all identical vars - we are using REDUCER function:
//in arg 2 - initial value of the object with watched state:{red:...}
//dispatch (convention name)===run the reducer: runMyReducer (can be called like that)
const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
//state is initially is equal to the rgb object with all 3 in one
//console.log(state) //{red: 0, green: 0, blue: 0}

//destructuring state - to be able to use red, blue or green props later in test (in last View style) 
const {red, green, blue} = state;   
    
   //below: changed from:
   // onIncrease={()=> setRed(red + COLOR_INCREMENT)} 
   //onDecrease={()=> setRed(red - COLOR_INCREMENT)}
   //inserted the function instead setColor:
   //onIncrease={()=> setColor('red',  COLOR_INCREMENT)} 
  // onDecrease={()=> setColor('red', -1*COLOR_INCREMENT)} 
    //then for REDUCER changed:

        //3 different areas with ColorCounter view on 1 screen:

    return <View>
        <ColorCounter 
        onIncrease={()=> dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} 
        onDecrease={()=> dispatch({colorToChange: 'red', amount: -1*COLOR_INCREMENT})} 
        color="Red"
        />
        <ColorCounter 
        onIncrease={()=> dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})} 
        onDecrease={()=> dispatch({colorToChange: 'blue', amount: -1*COLOR_INCREMENT})} 
        color="Blue"/>
        
        <ColorCounter 
        onIncrease={()=> dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})} 
        onDecrease={()=> dispatch({colorToChange: 'green', amount: -1*COLOR_INCREMENT})} 
        color="Green"/>

    <View style={{
        height: 150, 
        width: 150, 
       backgroundColor:`rgb(${red}, ${green}, ${blue})`
        //- red, green and blue are not separately defined anymore, 
        //but they are inside the state object, so using destructuring state object (aboce)
        
        }}
        />
    </View>
};
// the separate <View/> withstye- the square -where we show the changed color
// {{}} - outside - for javascript expression/inside the actual object literal

//({}) - destructuring for props / definite prop inside
const styles = StyleSheet.create({});

export default SquareScreen;

//moved from inside : what's substitued by REDUCER:
//state vars(to watch the state values) are created in the SquareScreen - because it's parent for colorCounter -
//and defines the objects' props:
/*
    const[red, setRed]=useState(0);
    const[green, setGreen]=useState(0);
    const[blue, setBlue]=useState(0);
    */
//these state vars will need to be passed with the help of callback func (onChange)-here: onIncrease/onDecrease
//to the child (ColorCounter) - to be modified there (increase/decrease)

//this function -helping to decide what color(argument) to update and that it's not beyong the range 0-255
/* using REDUCER instead this func:
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
};
*/
//this code is the same as in switch
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
