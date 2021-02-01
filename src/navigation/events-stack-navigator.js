import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen';
import EventScreen from '../screens/EventScreen';

const Stack = createStackNavigator();

export const EventsStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen 
      options={{
        headerRight: ()=>{
          return <Text>info</Text>
        },
        headerLeft: ()=>{
          return <Button title='menu' onPress={()=>navigation.toggleDrawer()}/>
        },
      }}
      name="Events" component={EventsScreen} />
      <Stack.Screen 
      options={{
        headerRight: ()=>{
          return <Text>Star(booked)</Text>
        }
      }}
      name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
};
