import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Operations} from '../store/operations/user';

const Result = ({goBack}) => {
  const dispatch = useDispatch();
  const {level, totalScore} = useSelector(({user})=>user)
  

  const INCREMENT_SCORES = {
    success: 12,
    fail: 10,
  }

  const handleSuccess = () => {
    dispatch(Operations.updateUser({totalScore: INCREMENT_SCORES.success + totalScore}));    
    goBack(false);
  };

  const handleFail = () => {
    dispatch(Operations.updateUser({totalScore: INCREMENT_SCORES.fail + totalScore}))    
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
