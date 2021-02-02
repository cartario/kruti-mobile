import React from 'react';
import { Text, Button, View, StyleSheet, FlatList} from 'react-native';
import InfoModal from '../components/InfoModal';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators } from '../store/actions/lessons';
import Lesson from '../components/Lesson';

const HomeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const lessons = useSelector(({ lessons }) => lessons.items);

  const onOpenItem = () => {
    navigation.navigate('Lesson');
  };

  React.useEffect(() => {
    dispatch(ActionCreators.loadLessons());
  }, []);

  return (
    <View style={styles.center}>
      <Text>LessonsScreen</Text>

      <View style={styles.level}>
        <Text>Level 1</Text>
      </View>

      <View style={styles.list}>
        {lessons.map((item) => (
          <Lesson {...item} onOpen={onOpenItem}  key={item.id}/>
        ))}
      </View>

      <View style={styles.level}>
        <Text>Level 2</Text>
      </View>

      <View style={styles.list}>
        {lessons.map((item) => (
          <Lesson {...item} onOpen={onOpenItem}  key={item.id}/>
        ))}
      </View>

      <View style={styles.level}>
        <Text>Level 3</Text>
      </View>

      <View style={styles.list}>
        {lessons.map((item) => (
          <Lesson {...item} onOpen={onOpenItem} key={item.id}/>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  level: {
    alignItems: 'center',
    width: '50%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: 300,
    marginTop: 20,
  },
});
