import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import AppAudio from './Audio';
import Timer from './Timer';
import Result from './Result';
 
const READY_TIME = 5000;
const PRACTICE_TIME = 5000;

const StartVideo = ({ lesson , goBack}) => {
  const [isReady, setReady] = React.useState(false);  
  const [showResult, setShowResult] = React.useState(false);

  React.useEffect(()=>{
    const timerReady = setTimeout(()=>{
      setReady(true)
    },READY_TIME);

    return () => clearTimeout(timerReady)
  },[])

  return (
    <View>
      {!isReady ? (
        <View>
          <Timer time={READY_TIME / 1000}/>
          <Text>Начинаем тренировку! Повторяй за тренером</Text>
          <Text>{lesson.title}</Text>
        </View>
      ) : (<>
        <Timer time={PRACTICE_TIME / 1000} handler={setShowResult}/>
        <Video
          source={{ uri: lesson.practiceUrl }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />
        <AppAudio />
        {showResult&&<Result goBack={goBack}/>}
        </>
      )}
    </View>
  );
};

export default StartVideo;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
