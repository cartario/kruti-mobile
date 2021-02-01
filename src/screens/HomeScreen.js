import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import InfoModal from '../components/InfoModal';

const HomeScreen = ({navigation, route}) => {
  const [visibleModal, setVisibleModal] = React.useState(false);


  return (<View>
    <Text>LessonsScreen</Text>
    <Button title='Lesson'onPress={()=>navigation.navigate('Lesson')}/>
    <InfoModal visible={visibleModal} onCancel={setVisibleModal}/>
    <Button title='openModal' onPress={()=>{
      setVisibleModal(!visibleModal);
      
    }}/>
  </View>)
};

export default HomeScreen;


