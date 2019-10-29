//import libraries
import React from 'react';// all library
import {Text, StyleSheet, View} from 'react-native';//2 pieces from library

//create function returning JSX
const ComponentsScreen = () => {
    //js var - to be inserted into Text
    const greeting = 'Hi Melissa!';
    //can do arrays (printing in one line)
    const arr = ['natasha', ' love', 38];
    //jsx element inside js var:
    const jsxel=<Text style={{fontSize:30}}>This is jsx Text element coded inside js var.</Text>
    
//taking style from stylesheet component
//adding View element - to rap the text in one view
//above- taking property textStyles(30) from obj styles (with dot notation)
//below - no style applied(standard):
//{greeting} -js element/var - should be inserted into jsx in {}
return <View> 
    <Text style={styles.textStyle}>Getting started with React Native!</Text>

<Text> Hi there! </Text>

<Text style = {styles.textStyle}>{greeting}</Text>
<Text style={styles.nameStyle}>{arr}</Text>
{jsxel}
<Text style={styles.nameStyle}>This is goodbye message using variable greeting: {greeting}</Text>
</View>
};
// create styles - can create several style object-separate with comma,
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
},
    nameStyle:{
        fontSize:20
    }
});

//need to export component to be able to use it
export default ComponentsScreen;