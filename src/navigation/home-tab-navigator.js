import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LessonsNavigator} from './lessons-stack-navigator';
import {BookedLessonsNavigator} from './lessons-booked-stack-navigator';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lessons" component={LessonsNavigator} />
      <Tab.Screen name="BookedLessons" component={BookedLessonsNavigator} />
    </Tab.Navigator>
  );
};
