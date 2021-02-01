import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationsScreen from '../screens/LocationsScreen';
import LocationScreen from '../screens/LocationScreen';


const Stack = createStackNavigator();

export const LocationsStackNavigator = ({navigation}) => {
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
      name="Locations" component={LocationsScreen} />
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
