import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators } from '../store/actions/lessons';
import { ActionCreators as ActionCreatorsUser } from '../store/actions/user';

import Level from '../components/Level';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const lessons = useSelector(({ lessons }) => lessons.items);  
  const levels = [... new Set(lessons.map((item)=>item.level))];  

  

  const handleOpen = (lesson) => {
    navigation.navigate('Lesson', {
      lessonId: lesson.id,
      lessonBooked: lesson.booked,
      lessonTitle: lesson.title
    });
  };

  React.useEffect(() => {
    dispatch(ActionCreators.loadLessons());
    dispatch(ActionCreatorsUser.loadUser());
  }, []);

  React.useEffect(()=>{
    // console.log(lessons)
  }, [lessons])

  return (
    <View style={styles.center}>
      <Text>LessonsScreen</Text>
      
     <FlatList 
      data={levels}
      keyExtractor={(levels)=>Math.random().toString()}
      renderItem={({item})=><Level title={item} lessons={lessons.filter((lesson)=>lesson.level===item)} onOpen={handleOpen}/>}
     />
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  }
});
