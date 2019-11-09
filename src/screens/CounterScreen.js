//useState - function, which allows to watch state
import React, {useReducer}  from 'react';//{ useState}
import {View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT=1;
//the current state is an integer (e.g. count) and the reducer function increases the count by one. 
//we can rename the argument state to count.abs

//The action is normally defined as an object with a type property:
const reducer = (state, action) =>{
    switch (action.type){
        case 'increase':
            //with reducer always return array {...state}-with overriding props-
            //in case in fututre add more props

        return {...state, count: state.count+action.amount};

        case 'decrease':
        return {...state, count: state.count-action.amount};
   
        default:
        return state;
    }
 
};

const CounterScreen = () =>{
// incorrect way to declare
   // let counter =0;

   //correct way to watch state (useState func):
   //name var and setter func anyway I want:
  // const [counter, setCounter]=useState(0);  // new state starts from counter= 0(initialized)
//redestructuring array:, setCounter  - func which gives the value of counter
//dispatch===startReducer; in useReducer (reducer, state object,which is changing).
//here COUNT is changing:
const [state, dispatch] = useReducer(reducer, {count:0})

const {count} = state;

    return (
         <View>
        <Button 
        title="Increase" 
        onPress={() => dispatch({type: 'increase', amount: INCREMENT})
            //Don't do this- don't change counter directly!
            //{counter++;
            //do it with setCounter func:
            //setCounter(counter+1);}
        }
        />
        <Button 
        title="Decrease" 
        onPress={()=> dispatch({type: 'decrease', amount: INCREMENT})
            //{counter--;
           // setCounter(counter-1);}
            // this func will make the button counter work
            //React doesn't detect direct manual modifications of state var
            //Only through a Setter func!
        }
        />
        
        <Text> Current Count:{state.count}</Text>
    </View>
    //{state.count} - displays current value / state- property: count
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;