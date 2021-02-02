import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const LocationsScreen = ({navigation}) => {
  
  return (<View>
    <Text>LocationsScreen</Text>
    <Button title='Location'onPress={()=>navigation.navigate('Location')}/>
  </View>)
};

export default LocationsScreen;

