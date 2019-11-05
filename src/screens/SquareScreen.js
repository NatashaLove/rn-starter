import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = ()=>{

    //3 different areas with ColorCounter view on 1 screen:
    return <View>
        <ColorCounter color="Red"/>
        <ColorCounter color="Blue"/>
        <ColorCounter color="Green"/>

    </View>
};
//({}) - destructuring for props
const styles = StyleSheet.create({});

export default SquareScreen;