import React from 'react';
import {Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BookedLessonsScreen from '../screens/BookedLessonsScreen';
import LessonScreen from '../screens/LessonScreen';


const Stack = createStackNavigator();

export const BookedLessonsNavigator = ({navigation}) => {
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
      name="BookedLessons" component={BookedLessonsScreen} />
      <Stack.Screen 
      options={{
        headerRight: ()=>{
          return <Text>Star(booked)</Text>
        }
      }}
      name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  );
};
