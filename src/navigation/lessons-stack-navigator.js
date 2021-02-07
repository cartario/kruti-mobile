import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import LessonScreen from '../screens/LessonScreen';
import InfoModal from '../components/InfoModal';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHederIcon';
import HeaderTitleHome from '../components/HeaderTitleHome';
import {ActionCreators} from '../store/actions/lessons';


const Stack = createStackNavigator();

export const LessonsNavigator = ({ navigation }) => {
  const dispatch = useDispatch();
 
  const [modal, setModal] = React.useState(false); //исправить на route.params

  const handleToggleBooked = (id) => {
    // console.log('click booked, id:', id)//dispatch here
    dispatch(ActionCreators.toggleBooked(id))
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({route})=>({
          headerTitle: ()=><HeaderTitleHome title={route.name}/>,          
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
        })}
        name="Lessons"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({navigation, route})=>({
          headerTitle: ()=><HeaderTitleHome title={route.name} id={route.params.lessonId}/>,  
          headerRight: () => {
            
            return (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item title="menu" iconName={route.params.lessonBooked? 'star' : 'star-outline'} onPress={()=>{
                handleToggleBooked(route.params.lessonId);
                navigation.setParams({lessonBooked: !route.params.lessonBooked});
              }} />                
            </HeaderButtons>);
          },
        })}
        name="Lesson"
        component={LessonScreen}
      />
    </Stack.Navigator>
  );
};


