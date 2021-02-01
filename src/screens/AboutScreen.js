import React from 'react';
import {Text, Button, View} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (<View>
    <Text>AboutScreen</Text>
    <Button title='go-back' onPress={()=>navigation.navigate('Home')}/>
  </View>)
};

export default AboutScreen;

