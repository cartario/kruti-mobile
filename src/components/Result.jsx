import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Result = ({goBack}) => {

  const INCREMENT_SCORES = {
    success: 12,
    fail: 10,
  }

  const handleSuccess = () => {
    // dispatch(Operations.setScore(Number(score) + INCREMENT_SCORES.success));
    console.log('ok');
    goBack(false)
  };

  const handleFail = () => {
    // dispatch(Operations.setScore(Number(score) + INCREMENT_SCORES.fail));
    console.log('not ok');
    goBack(false)
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
