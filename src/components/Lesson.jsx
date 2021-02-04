import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Lesson = ({ id, price, title, onOpen, color, levelNumber }) => {
  const { level } = useSelector(({ user }) => user);
  const disabled = level < levelNumber;
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={
          disabled
            ? { ...styles.circle, backgroundColor: color, ...styles.disabled }
            : { ...styles.circle, backgroundColor: color }
        }
        onPress={onOpen}
      >
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
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.2,
  },
});
