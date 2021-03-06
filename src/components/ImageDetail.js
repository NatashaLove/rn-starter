import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props)=>{
 //console.log(props);
   //with props - can access different properties of the object (value given in parent)
    return <View>
    
        <Image source={props.imageSource} />
    <Text>{props.title} </Text>
    <Text>Image score - {props.imageScore} </Text>

    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;