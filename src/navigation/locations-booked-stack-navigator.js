import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BookedLocationsScreen from '../screens/BookedLocationsScreen';
import LocationScreen from '../screens/LocationScreen';

const Stack = createStackNavigator();

export const BookedLocationsStackNavigator = ({navigation}) => {
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
      name="BookedLocations" component={BookedLocationsScreen} />
      <Stack.Screen 
      options={{
        headerRight: ()=>{
          return <Text>Star(booked)</Text>
        }
      }}
      name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};
