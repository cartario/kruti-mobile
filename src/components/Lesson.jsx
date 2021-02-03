import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Lesson = ({ id, price, title, onOpen, color }) => {
  return (
    <View >
      <TouchableOpacity style={{...styles.circle, backgroundColor: color}} onPress={onOpen}>       
        <Text style={styles.title}>{title}</Text>       
      </TouchableOpacity>
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginBottom: 20,  
    padding: 10,  
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  title: {
    textAlign: 'center'
  }
})
