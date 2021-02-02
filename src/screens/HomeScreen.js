import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import InfoModal from '../components/InfoModal';
import { useSelector, useDispatch } from 'react-redux';
import {ActionCreators} from '../store/actions/lessons';

const HomeScreen = ({ navigation, route }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const dispatch = useDispatch();
  const lessons = useSelector(({ lessons }) => lessons);

  console.log(lessons);

  React.useEffect(()=>{
    dispatch(ActionCreators.loadLessons())
  },[])

  return (
    <View>
      <Text>LessonsScreen</Text>
      <Button title="Lesson" onPress={() => navigation.navigate('Lesson')} />
      <InfoModal visible={visibleModal} onCancel={setVisibleModal} />
      <Button
        title="openModal"
        onPress={() => {
          setVisibleModal(!visibleModal);
        }}
      />
    </View>
  );
};

export default HomeScreen;
