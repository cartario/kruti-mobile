import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Operations } from '../store/operations/user';
import { Operations as OperationsHome } from '../store/operations/lessons';
import Level from '../components/Level';
import AppLoader from '../components/AppLoader';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items: lessons, isLoaded } = useSelector(({ lessons }) => lessons);
  const levels = [...new Set(lessons.map((item) => item.level))];

  const handleOpen = (lesson) => {
    navigation.navigate('Lesson', {
      lessonId: lesson.id,
      lessonBooked: lesson.booked,
      lessonTitle: lesson.title,
    });
  };

  React.useEffect(() => {
    dispatch(OperationsHome.fetchLessons());
    dispatch(Operations.fetchUser());
  }, []);

  // if(!lessons.length){
  //   return <View style={styles.center}><Text>Пока ничего нет</Text></View>
  // }

  if (isLoaded) {
    return <AppLoader />;
  }


  return (
    <View style={styles.center}>
      {lessons.length ? 
      <FlatList
      style={{ marginTop: 20 }}
      data={levels}
      keyExtractor={(levels) => Math.random().toString()}
      renderItem={({ item }) => (
        <Level
          title={item}
          lessons={lessons.filter((lesson) => lesson.level === item)}
          onOpen={handleOpen}          
        />
      )}
    />
      : <View style={styles.center}><Text>Пока ничего нет</Text></View>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
