import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Hello Natasha</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
