import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const CreateScreen = ({navigation}) => {
  return (<View style={styles.center}>
     <Text>CreateScreen</Text>
    <Button title='go-back' onPress={()=>navigation.goBack()}/>
  </View>
  
 )
};

export default CreateScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
