import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ()=>{
   //making up customized props in ImageDetails -our on names for them

    return (
        <View>
        
       <ImageDetail title="Forest" 
       imageSource={require('../../assets/forest.jpg')}/>
       <ImageDetail title="Beach" 
       imageSource={require('../../assets/beach.jpg')}/>
       <ImageDetail title="Mountain" 
       imageSource={require('../../assets/mountain.jpg')}/>
      <ImageDetail title="Natasha" 
       imageSource={require('../../assets/natasha.jpg')}/>
              
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;