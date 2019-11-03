import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ()=>{
   //making up customized props in ImageDetails -our on names for them

    return (
        <View>
        
       <ImageDetail title="Forest" 
       imageSource={require('../../assets/forest.jpg')}
       imageScore={7}/>
       <ImageDetail title="Beach" 
       imageSource={require('../../assets/beach.jpg')}
        imageScore={9}/>
       <ImageDetail title="Mountain" 
       imageSource={require('../../assets/mountain.jpg')}
      imageScore={5}/>
      <ImageDetail title="Natasha" 
       imageSource={require('../../assets/natasha.jpg')}
       imageScore={20}/>       
        </View>
        //numbers should be assignedin curly braces {7}
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;