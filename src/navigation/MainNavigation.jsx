import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import {HomeTabNavigator} from './home-tab-navigator';
import {EventsTabNavigator} from './events-tab-navigator';
import {LocationsTabNavigator} from './locations-tab-navigator';
import CreateScreen from '../screens/CreateScreen';
import AboutScreen from '../screens/AboutScreen';
import {store} from '../store';

import {THEME} from '../theme';

const Drawer = createDrawerNavigator();

const MainNavigation = ({navigation}) => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          labelStyle: {
            fontFamily: 'open-bold'
          }
        }}      
      >
        <Drawer.Screen name="Home" component={HomeTabNavigator} />
        <Drawer.Screen name="Events" component={EventsTabNavigator} />
        <Drawer.Screen name="Locations" component={LocationsTabNavigator} />
        <Drawer.Screen name="Create" component={CreateScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default MainNavigation;
