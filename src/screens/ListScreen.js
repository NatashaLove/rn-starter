import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = ()=>{
    const friends =[
        //name:'' - value (, key: 1(index))
        {name: 'Friend#1', Age: 'Age 20'},
        {name: 'Friend#2', Age: 'Age 45'},
        {name: 'Friend#3', Age: 'Age 32'},
        {name: 'Friend#4', Age: 'Age 27'},
        {name: 'Friend#5', Age: 'Age 53'},
        {name: 'Friend#6', Age: 'Age 38'},
        {name: 'Friend#7', Age: 'Age 30'},
        {name: 'Friend#8', Age: 'Age 21'},
        {name: 'Friend#9', Age: 'Age 44'},
    ]


return (
     <FlatList 
     //makes list display in 1 horizontal line rather than vertical list:
     //horizontal
     //makes the scrollbar not to show:
     //showsHorizontalScrollIndicator={false}
     //find object friend and return property name - using it as key:
     keyExtractor={friend => friend.name}
     data={friends} 
     renderItem={({item}) =>{
//element === {item:{name:'Friend#1'},index:0}
//instead of taking all the element object - can just take a property
//in {};
// {item} === {name:'Friend#1'}

        return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
     }}
     />
);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 15,
        fontSize: 15

    }
});

export default ListScreen;