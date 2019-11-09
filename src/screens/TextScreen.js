import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    return (
<View>
    <TextInput 
    style={styles.input}
    //use autoCap ===none and autoCorrect ={false}- 
    //for the android/ios not to correct passw, logins etc
    autoCapitalize="none"
    autoCorrect={false}

    />
</View>
    );
    //TextInput appears (when empty)- just invisible with no style
};

const styles = StyleSheet.create({
//style of TextInput - better too always apply a style to have it visible
input: {
    //margin ===otstup
    margin: 25,
    borderColor: 'blue',
    borderWidth: 2
    

}

});

export default TextScreen;