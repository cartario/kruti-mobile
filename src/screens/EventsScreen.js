import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const EventsScreen = ({navigation}) => {
  const handleOpen = (event) => {
    navigation.navigate('Event', {
      eventId: event.id,
      eventBooked: event.booked,
      eventTitle: event.title
    });
  };

  return (<View>
    <Text>EventsScreen</Text>
    <Button title='Event'onPress={handleOpen}/>
  </View>)
};

export default EventsScreen;

