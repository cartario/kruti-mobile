import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Operations} from '../store/operations/user';

const Result = ({goBack, lessonId}) => {
  const dispatch = useDispatch();
  const {level, totalScore, scoreLessons} = useSelector(({user})=>user)
  
  const score = scoreLessons.find((item)=>item.id===lessonId)
  console.log(score.score)

  const INCREMENT_SCORES = {
    success: 12,
    fail: 10,
  }

  const handleSuccess = () => {
    dispatch(Operations.updateUser({id: lessonId, score: score.score + INCREMENT_SCORES.success, totalScore: INCREMENT_SCORES.success + totalScore}));    
    goBack(false);
  };

  const handleFail = () => {
    dispatch(Operations.updateUser({id: lessonId, score: score.score + INCREMENT_SCORES.fail, totalScore: INCREMENT_SCORES.fail + totalScore}))    
    goBack(false);
  };

  return (
    <View>      
      <Text>Result</Text>
      <Text>Оцени себя, это поможет сохранить твой прогресс!</Text>
      <Button title={`У меня все получилось (+${INCREMENT_SCORES.success}опыта`} onPress={handleSuccess}/>
      <Button title={`Я могу еще лучше +${INCREMENT_SCORES.fail} очков опыта`} onPress={handleFail}/>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
