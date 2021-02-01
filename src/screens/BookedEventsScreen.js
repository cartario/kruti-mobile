import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const BookedEventsScreen = ({navigation}) => {
  return (<View>
    <Text>BookedEventsScreen</Text>
    <Button title='Event'onPress={()=>navigation.navigate('Event')}/>
  </View>)
};

export default BookedEventsScreen;

