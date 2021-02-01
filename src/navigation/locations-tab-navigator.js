import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LocationsStackNavigator} from './locations-stack-navigator';
import {BookedLocationsStackNavigator} from './locations-booked-stack-navigator';

const Tab = createBottomTabNavigator();

export const LocationsTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Locations" component={LocationsStackNavigator} />
      <Tab.Screen name="BookedLocations" component={BookedLocationsStackNavigator} />
    </Tab.Navigator>
  );
};
