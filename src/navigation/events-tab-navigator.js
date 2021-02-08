import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {EventsStackNavigator} from './events-stack-navigator';
import {BookedEventsStackNavigator} from './events-booked-stack-navigator';
import {Ionicons} from '@expo/vector-icons';
import {THEME} from '../theme';

const Tab = createBottomTabNavigator();

export const EventsTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Events') {
          iconName = focused
            ? 'md-list-circle'
            : 'md-list-circle-outline';
        } else if (route.name === 'BookedEvents') {
          iconName = focused ? 'star' : 'star-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: THEME.MAIN_COLOR,
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Events" component={EventsStackNavigator} options={{title: 'Все'}}/>
      <Tab.Screen name="BookedEvents" component={BookedEventsStackNavigator} options={{title: 'Избранное'}}/>
    </Tab.Navigator>
  );
};
