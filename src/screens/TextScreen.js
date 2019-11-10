import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
//when tracking only 1 var - useState
const TextScreen = () => {
//new state:
    const [name, setName] = useState('');
//the name of the state and the way we change it


//Pretty much ALWAYS use this code for text input - and if need to watch/change value:
    return (
<View>
<Text>Enter Password:</Text>
    <TextInput 
    style={styles.input}
    //use autoCap ===none and autoCorrect ={false}- 
    //for the android/ios not to correct passw, logins etc
    autoCapitalize="none"
    autoCorrect={false}
   // value="hi there"-instead of hard coded value - put the state var:
    value={name}

    //callback func to set the value (setName)
    //is called with the value the user types in:
    onChangeText={(newValue)=> setName(newValue)}
//through this function the variable is accessible to change by the user

    //to change value - callBack func is necessary from parent to child
    //from textScreen to textInput-it will rerender the screen every time the input changes
    //do it with setter func inside onChangeText
    // communicate between parent and child -with callback func- saying something happened inside the child
    />
   
    {
        // JVX - javascript with Markedup Text in {}:
        name.length<5
        ? <Text>Password must be loger than 5 characters</Text>
        : <Text> {name}</Text>

    }
 
</View>
    );
    //Text will print whatever the user inputs letter by letter -
    //because after every input/change - the screen rerenderes because of the callback func

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