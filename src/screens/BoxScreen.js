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
        alignItems:'flex-start'//texts inside the view will squeeze to the left
      //  also it can be: 'flex-end'-squezzes to the right and 'center'
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