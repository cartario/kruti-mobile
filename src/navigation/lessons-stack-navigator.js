import React from 'react';
import { Text, Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import InfoModal from '../components/InfoModal';

const Stack = createStackNavigator();

export const LessonsNavigator = ({ navigation }) => {
  const [modal, setModal] = React.useState(false); //исправить на route.params

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => {
            return (
              <View>
                <Button
                title="info"
                onPress={() => {
                  setModal(true)
                }}
              />
              <InfoModal visible={modal} onCancel={setModal}/>
              </View>
            );
          },
          headerLeft: () => {
            return <Button title="menu" onPress={() => navigation.toggleDrawer()} />;
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
