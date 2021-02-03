import React from 'react';
import { Text, Button, View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import InfoModal from '../components/InfoModal';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHederIcon';

const Stack = createStackNavigator();

export const LessonsNavigator = ({ navigation }) => {
  const [modal, setModal] = React.useState(false); //исправить на route.params

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Lessons',
          headerRight: () => {
            return (
              
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item iconName="information-circle" onPress={() => setModal(true)} />   
                <InfoModal visible={modal} onCancel={setModal} />             
              </HeaderButtons>
            );
          },
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />                
              </HeaderButtons>
            );
          },
        }}
        name="Lessons"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerRight: () => {
            return <Text>Star(booked)</Text>;
          },
        }}
        name="Lesson"
        component={LessonScreen}
      />
    </Stack.Navigator>
  );
};
