import React from 'react';
import { View, Text, StyleSheet , Dimensions} from 'react-native';
import { Video } from 'expo-av';

const Tutorial = ({ lesson }) => {
  const windowWidth = Dimensions.get('window').width;
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
        style={{ width: windowWidth-2*30, height: windowWidth }}
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
