import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const BoxScreen = ()=> {

    return (

        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
              
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
      height: 200, //alignment is vertical - that's why we limit height
      //if was 'column'- would do 'width'-otherwise by default streches for all the space to the edge
     justifyContent:'space-around'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
      //margin: 20,
        //padding: 10,
        //alignContent: "stretch"
    }
});

export default BoxScreen;