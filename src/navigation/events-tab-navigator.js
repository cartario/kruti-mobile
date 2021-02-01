import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {EventsStackNavigator} from './events-stack-navigator';
import {BookedEventsStackNavigator} from './events-booked-stack-navigator';

const Tab = createBottomTabNavigator();

export const EventsTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsStackNavigator} />
      <Tab.Screen name="BookedEvents" component={BookedEventsStackNavigator} />
    </Tab.Navigator>
  );
};
