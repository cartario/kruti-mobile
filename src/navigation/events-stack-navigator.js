import React from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen';
import EventScreen from '../screens/EventScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHederIcon';
import { Operations } from '../store/operations/events';

const Stack = createStackNavigator();

export const EventsStackNavigator = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleToggleBooked = (id) => {
    dispatch(Operations.updateEventToggleBooked(id));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item iconName="create-outline" onPress={() => navigation.navigate('Create')} />
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
        name="Events"
        component={EventsScreen}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          title: route.params.eventTitle,
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                  title="menu"
                  iconName={route.params.eventBooked ? 'star' : 'star-outline'}
                  onPress={() => {
                    handleToggleBooked(route.params.eventId);
                    navigation.setParams({ eventBooked: !route.params.eventBooked });
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
        name="Event"
        component={EventScreen}
      />
    </Stack.Navigator>
  );
};
