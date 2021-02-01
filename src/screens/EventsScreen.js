import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const EventsScreen = ({navigation}) => {
  return (<View>
    <Text>EventsScreen</Text>
    <Button title='Event'onPress={()=>navigation.navigate('Event')}/>
  </View>)
};

export default EventsScreen;

