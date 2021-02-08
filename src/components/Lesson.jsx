import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { THEME } from '../theme';

const Lesson = ({ id, price, title, onOpen, color, levelNumber , lessonsLength}) => {
  const { level, totalScore } = useSelector(({ user }) => user);
  const disabled = level < levelNumber;
  const progressPercent  = 50;
  console.log(lessonsLength)

  return (
    <View>
      {/* <TouchableOpacity
        disabled={disabled}
        style={
          disabled
            ? { ...styles.circle, backgroundColor: color, ...styles.disabled }
            : { ...styles.circle, backgroundColor: color }
        }
        onPress={onOpen}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        disabled={disabled}
        onPress={onOpen}
        style={
          disabled
            ? { ...styles.circle, backgroundColor: color, ...styles.disabled }
            : { ...styles.circle, backgroundColor: color }
        }
      >
        <AnimatedCircularProgress
          style={{ backgroundColor: color, borderRadius: 50 }}
          size={80}
          width={5}
          fill={progressPercent}
          rotation={0}
          tintColor={THEME.MAIN_COLOR}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="grey"
        >
          {(fill) => <Text style={styles.title}>{title}</Text>}
        </AnimatedCircularProgress>
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
    padding: 10,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.2,
  },
});
