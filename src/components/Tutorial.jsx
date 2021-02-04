import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const Tutorial = ({ lesson }) => {
  return (
    <View>
      
      <Video
        source={{ uri: lesson.tutorialUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
