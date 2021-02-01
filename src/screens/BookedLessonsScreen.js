import React from 'react';
import {Text, View, Button} from 'react-native';

const BookedLessonsScreen = ({navigation}) => {
  return (<View>
    <Text>BookedLessonsScreen</Text>
    <Button title='Lesson'onPress={()=>navigation.navigate('Lesson')}/>
  </View>)
};

export default BookedLessonsScreen;

