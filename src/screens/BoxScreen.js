import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const BoxScreen = ()=> {

    return (

        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle,
            {height:100,
            width:100,
            backgroundColor:'pink'}
            }/>
            <View style={styles.textTwoStyle,
            {height:100,
            width:100,
            backgroundColor:'green', 
            marginTop: 100
            }}/>
            <View style={styles.textThreeStyle,
            {height:100,
            width:100,
            backgroundColor:'purple'}}/>
              
        </View>

    );
};

const styles = StyleSheet.create({

    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
       flexDirection: 'row',
       //column -is default
        // alignItems:'flex-start'//texts inside the view will squeeze to the left
      //  also it can be: 'flex-end'-squezzes to the right and 'center'
        //height of the view box
      height: 600, //alignment is vertical - that's why we limit height
      //if was 'column'- would do 'width'-otherwise by default streches for all the space to the edge
        justifyContent:'space-between',
        
    // alignItems: 'flex-end'//also other options
     //but if a child (style) has alignSelf- it works then
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'pink',
        alignSelf:'flex-start'
      //margin: 20,
        //padding: 10,
        //alignContent: "stretch"
        //flex property - how much space child tries to take around in the parent
       //default:0, then - how many parts of space from total:
        //flex:5,
        //top: 20, // moves 20 px down - and overlaps another children
        //right: 60
    
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',
       //in styles marginTop didn't ork, but in View- describing the element itself
        //marginTop: 100,
        //padding:100,
        alignSelf:'center'
       // flex: 1, //makes the child take as much space as possible
       // alignSelf: 'stretch', // makes this child align in the center
        // there are other options

        //...StyleSheet.absoluteFillObject // the same as all the detailed props below:
      //position: 'absolute',
       // top: 0,
        //right: 0,
        //bottom: 0,
        //left: 0
        
        //top: 15
        //goes even beyond parent borders!
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'purple',
        alignSelf: 'flex-end'
        //flex:2,
       // fontSize: 18,
      //  position:'absolute'// by default - relative - everything is usual
    //absolute - child doesn't change position considering its siblings- other(one and two) ignore this child
    //may be on top of each other
    
    }
});

export default BoxScreen;